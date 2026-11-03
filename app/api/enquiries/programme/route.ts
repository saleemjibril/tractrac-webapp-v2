import { NextResponse } from "next/server";

export const runtime = "nodejs";

const API_BASE = (
  process.env.TRACTRAC_API_BASE_URL ?? "https://api.tractrac.co/api/v1"
).replace(/\/+$/, "");

const SOURCE = "tractrac-website-programme";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROGRAMME_RE = /^[a-z0-9][a-z0-9-]{0,79}$/;

type ProgrammePayload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  position?: unknown;
  phone?: unknown;
  message?: unknown;
  programme?: unknown;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ status: "error", message }, { status });
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
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
  let body: ProgrammePayload | null = null;
  try {
    body = (await request.json()) as ProgrammePayload;
  } catch {
    body = null;
  }

  const name = asString(body?.name);
  const email = asString(body?.email);
  const organization = asString(body?.organization);
  const position = asString(body?.position);
  const phone = asString(body?.phone);
  const message = asString(body?.message);
  const programme = asString(body?.programme);

  if (!name) return errorResponse("Please enter your name.", 422);
  if (name.length > 200) {
    return errorResponse("Please keep your name under 200 characters.", 422);
  }
  if (!EMAIL_RE.test(email)) {
    return errorResponse("Please enter a valid email address.", 422);
  }
  if (organization.length > 200) {
    return errorResponse("Please keep the organization under 200 characters.", 422);
  }
  if (position.length > 200) {
    return errorResponse("Please keep the position under 200 characters.", 422);
  }
  if (phone.length > 30) {
    return errorResponse("Please keep the phone number under 30 characters.", 422);
  }
  if (!message) return errorResponse("Please add a short message.", 422);
  if (message.length > 5000) {
    return errorResponse("Please keep your message under 5,000 characters.", 422);
  }
  if (programme && !PROGRAMME_RE.test(programme)) {
    return errorResponse("Invalid programme reference.", 422);
  }

  try {
    const response = await fetch(`${API_BASE}/website-enquiries/programme`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        organization: organization || null,
        position: position || null,
        phone: phone || null,
        message,
        programme: programme || null,
        source: SOURCE,
      }),
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
