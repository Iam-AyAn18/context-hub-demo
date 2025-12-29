import { Lightbulb } from 'lucide-react';

interface AIReasoningBoxProps {
  reasoning: string;
}

export const AIReasoningBox = ({ reasoning }: AIReasoningBoxProps) => {
  return (
    <div className="glass rounded-xl p-6 border-2 border-emerald-500/30 shadow-xl animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <Lightbulb className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">
            AI Reasoning & Recommendation
          </h3>
          <p className="text-slate-200 leading-relaxed">
            {reasoning}
          </p>
        </div>
      </div>
    </div>
  );
};
