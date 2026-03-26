import { NextResponse } from "next/server";
import { generateClaudeReply } from "@/lib/llm";
import { Message } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format." },
        { status: 400 }
      );
    }

    const reply = await generateClaudeReply(messages as Message[]);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Claude API error:", error);

    return NextResponse.json(
      { error: "Failed to generate Claude response." },
      { status: 500 }
    );
  }
}