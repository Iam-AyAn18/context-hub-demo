import { Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass border-t border-slate-700/50 mt-12">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span className="text-slate-300 font-medium">
            OpenAI GPT-4o Tool Calling + MCP Canonical Architecture
          </span>
        </div>
        <div className="mt-3 text-center text-sm text-slate-500">
          Canonical Message Protocol: REST → Postgres → RAG → Unified Schema
        </div>
      </div>
    </footer>
  );
};
