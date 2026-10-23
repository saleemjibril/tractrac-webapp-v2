import { NextResponse } from "next/server";
import { getFaqKnowledgeBase } from "@/lib/faq-knowledge";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the TracTrac website assistant.

Answer the user's question using ONLY the knowledge base below. Do not use outside knowledge, do not browse the internet, and do not invent facts, prices, policies, names, dates or links.

Keep the answer short and helpful: usually 2 to 4 sentences. Use plain text, not Markdown. If the knowledge base does not contain the answer, reply with exactly: NO_ANSWER

# Knowledge base
`;

export async function POST(request: Request) {
  let question = "";

  try {
    const body = await request.json();
    question = typeof body?.question === "string" ? body.question.trim() : "";
  } catch {
    question = "";
  }

  if (question.length < 5) {
    return NextResponse.json({ available: false }, { status: 400 });
  }

  question = question.slice(0, 500);

  const apiKey = process.env.DEEPSEEK_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json({ available: false }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.DEEPSEEK_MODEL?.trim() || "deepseek-flash",
        messages: [
          {
            role: "system",
            content: `${SYSTEM_PROMPT}${getFaqKnowledgeBase()}`,
          },
          { role: "user", content: question },
        ],
        temperature: 0.2,
        max_tokens: 400,
        stream: false,
        // FAQ answers come straight from the knowledge base; skip reasoning
        // so responses stay fast and cheap instead of defaulting to high.
        thinking: { type: "disabled" },
      }),
      signal: AbortSignal.timeout(30_000),
    });

    if (!response.ok) {
      console.error("[faq] DeepSeek request failed", response.status);
      return NextResponse.json({ available: false }, { status: 502 });
    }

    const data = await response.json();
    const answer = String(data?.choices?.[0]?.message?.content ?? "").trim();

    if (!answer || /^NO_ANSWER\b/i.test(answer)) {
      return NextResponse.json({ available: false });
    }

    return NextResponse.json({ available: true, answer });
  } catch (error) {
    console.error("[faq] DeepSeek request error", error);
    return NextResponse.json({ available: false }, { status: 502 });
  }
}
