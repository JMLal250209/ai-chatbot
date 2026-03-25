import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Message } from "@/lib/types";

interface ChatWindowProps {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
}

export default function ChatWindow({
  messages,
  input,
  setInput,
  onSend,
}: ChatWindowProps) {
  return (
    <section className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
      <MessageList messages={messages} />

      <div className="mt-4">
        <ChatInput
          input={input}
          setInput={setInput}
          onSend={onSend}
        />
      </div>
    </section>
  );
}