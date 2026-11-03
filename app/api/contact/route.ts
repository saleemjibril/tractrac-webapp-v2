import { NextResponse } from "next/server";

export const runtime = "nodejs";

const API_BASE = (
  process.env.TRACTRAC_API_BASE_URL ?? "https://api.tractrac.co/api/v1"
).replace(/\/+$/, "");

const SOURCE = "tractrac-website-contact";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ status: "error", message }, { status });
}

async function apiErrorMessage(response: Response): Promise<string> {
  try {
    const data = await response.json();
    if (typeof data?.message === "string") return data.message;
    const detail = data?.detail;
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) {
      const parts = detail
        .map((entry: { msg?: string; loc?: unknown[] }) => {
          const field = Array.isArray(entry?.loc) ? entry.loc[entry.loc.length - 1] : "";
          return entry?.msg ? `${field ? `${field}: ` : ""}${entry.msg}` : "";
        })
        .filter(Boolean);
      if (parts.length) return parts.join(" ");
    }
  } catch {
    // Fall through to the default message.
  }
  return "We could not send your message. Please try again or email info@tractrac.co.";
}

export async function POST(request: Request) {
  let body: ContactPayload | null = null;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    body = null;
  }

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (name.length < 3) return errorResponse("Please enter your name.", 422);
  if (name.length > 200) {
    return errorResponse("Please keep your name under 200 characters.", 422);
  }
  if (!EMAIL_RE.test(email)) {
    return errorResponse("Please enter a valid email address.", 422);
  }
  if (message.length < 15) {
    return errorResponse("Please add a little more detail to your message.", 422);
  }
  if (message.length > 5000) {
    return errorResponse("Please keep your message under 5,000 characters.", 422);
  }

  try {
    const response = await fetch(`${API_BASE}/website-enquiries/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message, source: SOURCE }),
      cache: "no-store",
      signal: AbortSignal.timeout(30_000),
    });

    if (response.status === 429) {
      return errorResponse(
        "Too many messages from this address. Please wait a moment and try again.",
        429,
      );
    }
    if (!response.ok) {
      return errorResponse(
        await apiErrorMessage(response),
        response.status === 422 ? 422 : 502,
      );
    }

    const data = (await response.json().catch(() => null)) as { message?: string } | null;
    return NextResponse.json({
      status: "success",
      message:
        typeof data?.message === "string" && data.message.trim()
          ? data.message.trim()
          : "Received, thanks for contacting us!",
    });
  } catch {
    return errorResponse(
      "We could not send your message right now. Please email info@tractrac.co.",
      502,
    );
  }
}
