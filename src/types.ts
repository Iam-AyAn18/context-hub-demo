export interface ToolExecution {
  name: string;
  status: 'executing' | 'completed' | 'error';
  result?: string;
  duration?: number;
}

export interface AssessmentResult {
  tools: ToolExecution[];
  reasoning: string;
}

export interface Message {
  id: string;
  query: string;
  result?: AssessmentResult;
  timestamp: number;
}
