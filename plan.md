# TeachBack AI Waitlist Landing Page — plan.md

## 1) Objectives
- Ship a production-ready, high-converting landing page for TeachBack AI with premium visuals aligned to the provided design system.
- Implement a secure, reliable waitlist API (`POST /api/waitlist`) backed by MongoDB with dedupe + spam mitigation.
- Ensure the email capture UX covers all states (idle/loading/success/error/duplicate) and is accessible + mobile-first.
- Validate end-to-end behavior with automated E2E testing and fix issues before finish.

## 2) Implementation Steps (Phases)

### Phase 1 — Core Workflow (POC not needed; build directly)
**Goal:** Core waitlist submission works end-to-end (React → FastAPI → MongoDB) with correct states.

User stories:
1. As a visitor, I can submit my email and get an immediate success confirmation.
2. As a visitor, if I submit an invalid email, I see a clear error message.
3. As a visitor, if I submit the same email twice, I’m told I’m already on the list.
4. As the system owner, I can block basic bot signups via a honeypot field.
5. As the system owner, stored emails are normalized and duplicates are prevented.

Implementation:
- Backend (FastAPI)
  - Create `POST /api/waitlist` accepting `{ email, hp? }`.
  - Validate/sanitize: trim + lowercase, email regex/validator.
  - Spam: if honeypot filled → return 200 with generic message (don’t reveal).
  - MongoDB: `waitlist` collection with fields: `email`, `createdAt`, `source`, `userAgent`, `ipHash`.
  - Dedupe: unique index on `email`; on duplicate key return `{status:"duplicate"}`.
  - Hash IP (e.g., sha256 with server salt) and store only hash.
  - CORS safe: allow same-origin; configurable allowlist via env.
- Frontend (React)
  - Implement waitlist form component with controlled input + accessible label.
  - Handle states: idle, loading (“Joining…”), success, duplicate, error.
  - Disable submit while loading; show inline validation.

Checkpoint: Manual sanity test (local) for success/invalid/duplicate/honeypot.

---

### Phase 2 — V1 App Development (UI/UX + conversion)
**Goal:** Build the full landing page sections + animations + premium mockup, wired to backend.

User stories:
1. As a visitor, I understand TeachBack AI in under 5 seconds from the hero.
2. As a visitor, I can quickly see why rereading fails and what TeachBack changes.
3. As a visitor, I can skim features and feel it’s a real product (not generic AI).
4. As a visitor on mobile, the layout is readable, tappable, and fast.
5. As a visitor, the app preview looks custom and reinforces trust.

Implementation:
- Build single-page layout with these sections:
  - Sticky navbar (glass on scroll): brand “TeachBack” (white) + “AI” (cyan), CTA button.
  - Hero: headline, subhead, primary CTA scroll-to-form; include custom app preview mock (cards: Overall Score 87, Feynman Verdict, Strengths, Gaps to Review, Retention bar, XP gained).
  - Problem (3 cards), Solution (3 steps), Features (6 cards), Waitlist CTA, FAQ (4), Footer.
- Visual system:
  - Background `#05070D`, glass cards, subtle borders, accent cyan (#22D3EE/#06B6D4), rounded 20–28px.
  - Fonts: Sora for headings, DM Sans/Inter for body.
  - Button cyan fill + dark text; hover glow; input focus glow.
- Animations (no childish effects):
  - Hero fade/slide in, floating preview, reveal-on-scroll for cards, retention bar animate.
- SEO + basics:
  - Title/description, OpenGraph tags, favicon placeholder, semantic headings.

Testing step:
- Run `testing_agent_v3` for E2E: submit email, verify UI states, verify backend writes + dedupe.

---

### Phase 3 — Hardening & Quality Pass
**Goal:** Production polish, edge-case handling, performance, and copy tuning.

User stories:
1. As a visitor, I never lose my form progress due to accidental refresh during submit.
2. As a visitor, errors are understandable and never leak technical details.
3. As the system owner, I can attribute signups (source) for basic analytics.
4. As a visitor using a screen reader, the form and FAQ are navigable.
5. As a visitor, the page loads quickly and animations don’t jank.

Implementation:
- Backend
  - Tighten error handling; consistent JSON responses; request size limits.
  - Add `source` capture (query param or hidden field like `source=landing`).
  - Confirm unique index migration on startup.
- Frontend
  - Add lightweight client-side email validation + `aria-live` for status.
  - Ensure FAQ uses accessible disclosure pattern.
  - Performance: reduce heavy shadows, ensure animations use transforms.
- Re-test with `testing_agent_v3` after fixes.

---

### Phase 4 — Deployment & Verification
**Goal:** Deployed app works with real environment config.

User stories:
1. As a visitor, I can join the waitlist on the live URL.
2. As the system owner, env vars can be set without code changes.
3. As the system owner, DB connectivity failures return a friendly error.
4. As the system owner, CORS policy is safe in production.
5. As a visitor, the site looks correct across common viewport sizes.

Implementation:
- Configure env:
  - `MONGODB_URI`, `DB_NAME`, `CORS_ORIGINS`, `IP_HASH_SALT`.
- Smoke test production:
  - Submit new email, duplicate email, invalid email.
- Final `testing_agent_v3` pass (if environment allows) + fix regressions.

## 3) Next Actions (Immediate)
1. Implement FastAPI `POST /api/waitlist` with MongoDB + unique index + honeypot.
2. Implement React waitlist form with full state handling and accessibility.
3. Build the landing page sections + custom mockup UI matching the design system.
4. Run `testing_agent_v3`, fix issues, then proceed to hardening + deploy.

## 4) Success Criteria
- Landing page contains all required sections with premium, non-generic visuals and responsive layout.
- Waitlist form reliably handles: loading/success/error/duplicate; button disabled while submitting.
- Backend validates + normalizes email, prevents duplicates, stores required fields, uses honeypot + ipHash.
- E2E tests pass and manual smoke tests confirm MongoDB writes and dedupe behavior.
- Meets quality bar: clear value prop (<5s), real startup feel, no fake claims, no placeholder content, no generic AI imagery.