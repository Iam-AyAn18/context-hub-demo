import { CheckCircle, Loader2, Database, FileText } from 'lucide-react';
import type { ToolExecution } from '../types';

interface ToolExecutionVisualProps {
  tools: ToolExecution[];
}

const getToolIcon = (toolName: string) => {
  if (toolName === 'get_telemetry') {
    return <Database className="w-5 h-5" />;
  }
  return <FileText className="w-5 h-5" />;
};

const getToolDescription = (toolName: string) => {
  if (toolName === 'get_telemetry') {
    return 'Querying Postgres telemetry database...';
  }
  return 'RAG search on unstructured maintenance docs...';
};

export const ToolExecutionVisual = ({ tools }: ToolExecutionVisualProps) => {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        Tool Execution Pipeline
      </h3>
      
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="animate-fade-in">
            <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <div className={`mt-1 ${tool.status === 'executing' ? 'text-blue-400' : 'text-emerald-400'}`}>
                {getToolIcon(tool.name)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-sm text-slate-300">
                    Tool {index + 1}: {tool.name}
                  </span>
                  {tool.status === 'executing' && (
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                  )}
                  {tool.status === 'completed' && (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-500">
                        ({tool.duration}s)
                      </span>
                    </>
                  )}
                </div>
                
                <p className="text-sm text-slate-400 mb-2">
                  {getToolDescription(tool.name)}
                </p>
                
                {tool.status === 'completed' && tool.result && (
                  <div className="mt-3 p-3 bg-slate-950/50 rounded border border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-emerald-400">Result:</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                    <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono overflow-x-auto">
                      {tool.result}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {tools.length > 0 && tools.every(t => t.status === 'completed') && (
        <div className="flex items-center gap-2 text-sm text-emerald-400 pt-2">
          <CheckCircle className="w-4 h-4" />
          <span>All tools executed successfully in parallel</span>
        </div>
      )}
    </div>
  );
};
