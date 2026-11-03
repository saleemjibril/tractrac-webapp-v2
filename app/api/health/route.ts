import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** Liveness probe for the container platform (Coolify / Docker HEALTHCHECK). */
export function GET() {
  return NextResponse.json(
    { status: "ok", uptime: Math.round(process.uptime()) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
