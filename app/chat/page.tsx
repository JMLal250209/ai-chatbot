import ChatWindow from "@/components/ChatWindow";
import { Message } from "@/lib/types";

const mockMessages: Message[] = [
  { role: "assistant", content: "Hi, I’m BCB. How can I help?" },
  { role: "user", content: "I want to build a basic AI chatbot." },
];

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">BCB Chat</h1>
        <ChatWindow messages={mockMessages} />
      </div>
    </main>
  );
}