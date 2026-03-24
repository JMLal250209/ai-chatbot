import MessageBubble from "./MessageBubble";
import { Message } from "@/lib/types";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}
    </div>
  );
}