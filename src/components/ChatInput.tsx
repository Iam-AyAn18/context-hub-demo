import { useState } from 'react';
import { Send, Copy } from 'lucide-react';

interface ChatInputProps {
  onSubmit: (query: string) => void;
  disabled?: boolean;
}

const DEMO_TEXT = "Show Rack A3 maintenance history";

export const ChatInput = ({ onSubmit, disabled }: ChatInputProps) => {
  const [query, setQuery] = useState(DEMO_TEXT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !disabled) {
      onSubmit(query);
    }
  };

  const handleCopyDemo = () => {
    navigator.clipboard.writeText(DEMO_TEXT);
    setQuery(DEMO_TEXT);
  };

  return (
    <div className="glass rounded-xl p-6 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about asset maintenance, status, or history..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pr-12 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={3}
            disabled={disabled}
          />
          <button
            type="button"
            onClick={handleCopyDemo}
            className="absolute top-3 right-3 p-2 text-slate-400 hover:text-emerald-400 transition-colors"
            title="Copy demo text"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={disabled || !query.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
            Send Query
          </button>
        </div>
      </form>
    </div>
  );
};
