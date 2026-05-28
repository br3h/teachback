from fastapi import FastAPI, APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING
from pymongo.errors import DuplicateKeyError
import os
import re
import hashlib
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# IP hash salt (use env var, fallback only for dev)
IP_HASH_SALT = os.environ.get('IP_HASH_SALT', 'teachback-default-salt-change-me')

# Create the main app without a prefix
app = FastAPI(title="TeachBack AI Waitlist API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ---------------------------------------------------------------------------
# Legacy status models (kept for backwards compatibility with template)
# ---------------------------------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str

# ---------------------------------------------------------------------------
# Waitlist models
# ---------------------------------------------------------------------------
EMAIL_REGEX = re.compile(r"^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$")
MAX_EMAIL_LENGTH = 254  # RFC 5321


class WaitlistCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")

    email: str
    # Honeypot field - bots will fill it. Humans should leave it empty.
    hp: Optional[str] = Field(default=None, max_length=200)
    source: Optional[str] = Field(default="landing-page", max_length=80)

    @field_validator("email")
    @classmethod
    def validate_email(cls, v: str) -> str:
        if not isinstance(v, str):
            raise ValueError("Email must be a string")
        v = v.strip().lower()
        if not v:
            raise ValueError("Email is required")
        if len(v) > MAX_EMAIL_LENGTH:
            raise ValueError("Email is too long")
        if not EMAIL_REGEX.match(v):
            raise ValueError("Please enter a valid email address")
        return v


class WaitlistEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    source: str = "landing-page"
    userAgent: Optional[str] = None
    ipHash: Optional[str] = None


class WaitlistResponse(BaseModel):
    status: str  # "success" | "duplicate"
    message: str

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def _hash_ip(ip: Optional[str]) -> Optional[str]:
    if not ip:
        return None
    try:
        return hashlib.sha256(f"{IP_HASH_SALT}::{ip}".encode("utf-8")).hexdigest()
    except Exception:
        return None


def _client_ip(request: Request) -> Optional[str]:
    # Honor common reverse proxy headers (Kubernetes ingress, CDNs).
    xff = request.headers.get("x-forwarded-for")
    if xff:
        return xff.split(",")[0].strip()
    real_ip = request.headers.get("x-real-ip")
    if real_ip:
        return real_ip.strip()
    if request.client:
        return request.client.host
    return None

# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@api_router.get("/")
async def root():
    return {"message": "TeachBack AI API is running"}


@api_router.get("/health")
async def health():
    try:
        # Ping mongo
        await db.command("ping")
        return {"status": "ok"}
    except Exception as exc:  # noqa: BLE001
        logger.exception("Health check failed: %s", exc)
        raise HTTPException(status_code=503, detail="Database unavailable")


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/waitlist", response_model=WaitlistResponse)
async def join_waitlist(payload: WaitlistCreate, request: Request):
    """Add an email to the TeachBack AI waitlist.

    Returns:
        - status "success" when newly added
        - status "duplicate" when already on the list

    Spam protection:
        - Honeypot field ("hp"): bots usually fill it. We silently treat as success.
        - Email is validated, normalized, and deduplicated via a unique index.
    """
    # Honeypot: pretend success without writing
    if payload.hp:
        logger.info("Honeypot triggered for waitlist signup; ignoring")
        return WaitlistResponse(
            status="success",
            message="You're on the list. We'll email you when early access opens.",
        )

    user_agent = (request.headers.get("user-agent") or "")[:512] or None
    ip = _client_ip(request)
    ip_hash = _hash_ip(ip)

    entry = WaitlistEntry(
        email=payload.email,
        source=(payload.source or "landing-page")[:80],
        userAgent=user_agent,
        ipHash=ip_hash,
    )
    doc = entry.model_dump()
    # MongoDB-friendly datetime
    doc["createdAt"] = doc["createdAt"].isoformat()

    try:
        await db.waitlist.insert_one(doc)
        logger.info("Waitlist signup: %s (source=%s)", entry.email, entry.source)
        return WaitlistResponse(
            status="success",
            message="You're on the list. We'll email you when early access opens.",
        )
    except DuplicateKeyError:
        return WaitlistResponse(
            status="duplicate",
            message="You're already on the list. We'll be in touch soon.",
        )
    except Exception as exc:  # noqa: BLE001
        logger.exception("Failed to insert waitlist entry: %s", exc)
        raise HTTPException(status_code=500, detail="Something went wrong. Please try again.")


@api_router.get("/waitlist/count")
async def waitlist_count():
    """Optional internal counter - returns total waitlist signups."""
    try:
        count = await db.waitlist.count_documents({})
        return {"count": count}
    except Exception as exc:  # noqa: BLE001
        logger.exception("Failed to count waitlist: %s", exc)
        raise HTTPException(status_code=500, detail="Unable to fetch count")


# Include the router in the main app
app.include_router(api_router)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Validation error handler returns clean JSON without leaking internals
@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):  # noqa: ARG001
    logger.exception("Unhandled exception: %s", exc)
    return JSONResponse(
        status_code=500,
        content={"detail": "Something went wrong. Please try again."},
    )


@app.on_event("startup")
async def ensure_indexes():
    try:
        await db.waitlist.create_index([("email", ASCENDING)], unique=True, name="uniq_email")
        await db.waitlist.create_index([("createdAt", ASCENDING)], name="createdAt_idx")
        logger.info("Waitlist indexes ensured.")
    except Exception as exc:  # noqa: BLE001
        logger.exception("Failed to ensure indexes: %s", exc)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
