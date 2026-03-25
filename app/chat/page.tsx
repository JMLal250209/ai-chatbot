"use client";

import { useState } from "react";
import ChatWindow from "@/components/ChatWindow";
import { Message } from "@/lib/types";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi, I’m BCB. How can I help?" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    // Add user message to chat
    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInput("");

    // simulate AI response
    setTimeout(() => {
      const reply: Message = {
        role: "assistant",
        content: "This is a mock response.",
      };

      setMessages((prev) => [...prev, reply]);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">BCB Chat</h1>

        <ChatWindow
          messages={messages}
          input={input}
          setInput={setInput}
          onSend={handleSend}
        />
      </div>
    </main>
  );
}