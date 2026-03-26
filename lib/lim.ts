import Anthropic from "@anthropic-ai/sdk";
import { Message } from "./types";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateClaudeReply(messages: Message[]) {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: messages.map((message) => ({
      role: message.role,
      content: message.content,
    })),
  });

  const firstBlock = response.content[0];

  if (!firstBlock || firstBlock.type !== "text") {
    throw new Error("Claude did not return a text response.");
  }

  return firstBlock.text;
}