export const ArchitectureDiagram = () => {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-slate-200 mb-4">
        System Architecture
      </h3>
      
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* React Frontend */}
        <g>
          <rect x="20" y="150" width="140" height="100" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
          <text x="90" y="190" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="bold">React</text>
          <text x="90" y="210" textAnchor="middle" fill="#93c5fd" fontSize="12">TypeScript</text>
          <text x="90" y="230" textAnchor="middle" fill="#93c5fd" fontSize="12">TailwindCSS</text>
        </g>

        {/* Arrow 1 */}
        <path d="M 160 200 L 200 200" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* MCP Canonical Layer */}
        <g>
          <rect x="200" y="150" width="180" height="100" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2"/>
          <text x="290" y="185" textAnchor="middle" fill="#6ee7b7" fontSize="14" fontWeight="bold">MCP Canonical</text>
          <text x="290" y="205" textAnchor="middle" fill="#6ee7b7" fontSize="12">Message Protocol</text>
          <text x="290" y="225" textAnchor="middle" fill="#6ee7b7" fontSize="11">REST + Schema</text>
        </g>

        {/* Arrow 2a */}
        <path d="M 380 175 L 430 100" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* Arrow 2b */}
        <path d="M 380 225 L 430 300" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

        {/* Postgres Tool */}
        <g>
          <rect x="430" y="50" width="150" height="100" rx="8" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="505" y="85" textAnchor="middle" fill="#c4b5fd" fontSize="14" fontWeight="bold">Tool 1:</text>
          <text x="505" y="105" textAnchor="middle" fill="#c4b5fd" fontSize="12">Postgres</text>
          <text x="505" y="125" textAnchor="middle" fill="#c4b5fd" fontSize="11">Telemetry DB</text>
        </g>

        {/* RAG Tool */}
        <g>
          <rect x="430" y="250" width="150" height="100" rx="8" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="505" y="285" textAnchor="middle" fill="#c4b5fd" fontSize="14" fontWeight="bold">Tool 2:</text>
          <text x="505" y="305" textAnchor="middle" fill="#c4b5fd" fontSize="12">RAG Search</text>
          <text x="505" y="325" textAnchor="middle" fill="#c4b5fd" fontSize="11">Unstructured Docs</text>
        </g>

        {/* Arrow 3a */}
        <path d="M 580 100 L 620 175" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        
        {/* Arrow 3b */}
        <path d="M 580 300 L 620 225" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

        {/* OpenAI Reasoning */}
        <g>
          <rect x="620" y="150" width="160" height="100" rx="8" fill="rgba(234, 179, 8, 0.2)" stroke="#eab308" strokeWidth="2"/>
          <text x="700" y="185" textAnchor="middle" fill="#fde047" fontSize="14" fontWeight="bold">OpenAI</text>
          <text x="700" y="205" textAnchor="middle" fill="#fde047" fontSize="12">GPT-4o</text>
          <text x="700" y="225" textAnchor="middle" fill="#fde047" fontSize="11">Unified Reasoning</text>
        </g>

        {/* Arrow definitions */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
        </defs>

        {/* Parallel execution indicator */}
        <text x="450" y="195" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontStyle="italic">Parallel</text>
        <text x="450" y="207" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontStyle="italic">Execution</text>
      </svg>
    </div>
  );
};
