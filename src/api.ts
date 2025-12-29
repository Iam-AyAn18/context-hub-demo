import type { AssessmentResult, ToolExecution } from './types';

// Simulate tool execution with parallel timing
const simulateToolExecution = async (
  toolName: string,
  duration: number,
  onProgress: (tool: ToolExecution) => void
): Promise<ToolExecution> => {
  // Initial executing state
  onProgress({
    name: toolName,
    status: 'executing',
  });

  // Wait for the specified duration
  await new Promise(resolve => setTimeout(resolve, duration));

  // Get the result based on tool name
  let result = '';
  if (toolName === 'get_telemetry') {
    result = JSON.stringify({
      lastService: '2024-12-15',
      issue: 'Fan #3 failure',
      hours: 24567,
      status: 'DEGRADED'
    }, null, 2);
  } else if (toolName === 'get_manual') {
    result = 'Manual Section 4.7: Fan replacement requires power isolation + 2hr downtime';
  }

  const completedTool: ToolExecution = {
    name: toolName,
    status: 'completed',
    result,
    duration: duration / 1000,
  };

  onProgress(completedTool);
  return completedTool;
};

export const assessAsset = async (
  _query: string,
  onToolProgress: (tools: ToolExecution[]) => void
): Promise<AssessmentResult> => {
  const tools: ToolExecution[] = [
    { name: 'get_telemetry', status: 'executing' },
    { name: 'get_manual', status: 'executing' },
  ];

  // Notify initial state
  onToolProgress([...tools]);

  // Execute tools in parallel with different durations
  const tool1Promise = simulateToolExecution(
    'get_telemetry',
    400,
    (updatedTool) => {
      tools[0] = updatedTool;
      onToolProgress([...tools]);
    }
  );

  const tool2Promise = simulateToolExecution(
    'get_manual',
    800,
    (updatedTool) => {
      tools[1] = updatedTool;
      onToolProgress([...tools]);
    }
  );

  // Wait for all tools to complete
  const [tool1, tool2] = await Promise.all([tool1Promise, tool2Promise]);

  // Final reasoning after all tools complete
  const reasoning = 'CRITICAL: Schedule fan replacement within 7 days per manual pg47. ' +
    'Based on telemetry data from 2024-12-15 showing Fan #3 failure with 24,567 operating hours ' +
    'and DEGRADED status, combined with manual procedures requiring power isolation and 2hr downtime.';

  return {
    tools: [tool1, tool2],
    reasoning,
  };
};
