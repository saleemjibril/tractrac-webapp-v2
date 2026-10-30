import { NextResponse } from "next/server";
import { RESOURCES } from "@/content/resources";

export const runtime = "nodejs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES.find((item) => item.slug === slug);
  if (!resource) {
    return NextResponse.json({ message: "Resource not found." }, { status: 404 });
  }

  try {
    const upstream = await fetch(resource.fileUrl, { cache: "no-store" });
    if (!upstream.ok || !upstream.body) {
      return NextResponse.json(
        { message: "The file is unavailable right now." },
        { status: 502 },
      );
    }

    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resource.fileName}"`,
      "Cache-Control": "public, max-age=3600",
    });
    const length = upstream.headers.get("content-length");
    if (length) headers.set("Content-Length", length);

    return new NextResponse(upstream.body, { headers });
  } catch {
    return NextResponse.json(
      { message: "The file is unavailable right now." },
      { status: 502 },
    );
  }
}
