const EMAIL_REGEX = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
const MAX_EMAIL_LENGTH = 254;

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body || "{}");
  }

  return {};
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { message: "Method not allowed" });
  }

  let body;
  try {
    body = parseBody(req);
  } catch {
    return sendJson(res, 400, { message: "Invalid JSON body" });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email) {
    return sendJson(res, 400, { message: "Please enter your email." });
  }

  if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
    return sendJson(res, 422, { message: "That email does not look right. Please try again." });
  }

  const webhookUrl = process.env.MAKE_WAITLIST_WEBHOOK_URL;
  if (!webhookUrl) {
    return sendJson(res, 500, { message: "Waitlist is not configured." });
  }

  const payload = {
    registeredAt: new Date().toISOString(),
    email,
  };

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return sendJson(res, 502, { message: "Something went wrong. Please try again in a moment." });
    }
  } catch {
    return sendJson(res, 502, { message: "Something went wrong. Please try again in a moment." });
  }

  return sendJson(res, 200, {
    status: "success",
    message: "You're on the list. We'll email you when early access opens.",
  });
};
