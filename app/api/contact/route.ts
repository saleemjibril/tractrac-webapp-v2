import { NextResponse } from "next/server";

export const runtime = "nodejs";

const API_BASE = (
  process.env.CONTACT_API_URL ??
  process.env.TRACTRAC_API_BASE_URL ??
  "https://tractracplus-backend-v6.onrender.com/api/v1"
).replace(/\/+$/, "");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

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

  if (name.length < 3) {
    return NextResponse.json(
      { status: "error", message: "Please enter your name." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { status: "error", message: "Please enter a valid email address." },
      { status: 422 },
    );
  }
  if (message.length < 15) {
    return NextResponse.json(
      { status: "error", message: "Please add a little more detail to your message." },
      { status: 422 },
    );
  }

  try {
    const response = await fetch(`${API_BASE}/collaborate`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ name, email, message, type: "support" }),
      cache: "no-store",
      signal: AbortSignal.timeout(30_000),
    });

    const text = await response.text();
    let json: { status?: string; message?: string } | null = null;
    try {
      json = JSON.parse(text) as { status?: string; message?: string };
    } catch {
      json = null;
    }

    if (!response.ok || (json?.status && json.status !== "success")) {
      return NextResponse.json(
        {
          status: "error",
          message: json?.message ?? "We could not send your message. Please try again.",
        },
        { status: response.ok ? 400 : response.status },
      );
    }

    return NextResponse.json({
      status: "success",
      message: json?.message ?? "Received, thanks for contacting us!",
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "We could not send your message right now. Please email info@tractrac.co.",
      },
      { status: 502 },
    );
  }
}
