import { Brain } from 'lucide-react';

export const Header = () => {
  return (
    <header className="glass border-b border-slate-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-900 to-emerald-600">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Context Hub AI Assistant - Asset Intelligence
          </h1>
        </div>
      </div>
    </header>
  );
};
