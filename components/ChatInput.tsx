interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  input,
  setInput,
  onSend,
}: ChatInputProps) {
  return (
    <div className="flex items-end gap-3">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="min-h-[56px] flex-1 resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-400"
      />

      <button
        onClick={onSend}
        className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
      >
        Send
      </button>
    </div>
  );
}