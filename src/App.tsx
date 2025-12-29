import { useState } from 'react';
import { Header } from './components/Header';
import { ChatInput } from './components/ChatInput';
import { ToolExecutionVisual } from './components/ToolExecutionVisual';
import { AIReasoningBox } from './components/AIReasoningBox';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Footer } from './components/Footer';
import { assessAsset } from './api';
import type { Message, ToolExecution } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTools, setCurrentTools] = useState<ToolExecution[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (query: string) => {
    setIsProcessing(true);
    
    const messageId = Date.now().toString();
    const newMessage: Message = {
      id: messageId,
      query,
      timestamp: Date.now(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setCurrentTools([]);

    try {
      const result = await assessAsset(query, (tools) => {
        setCurrentTools(tools);
      });

      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, result } 
            : msg
        )
      );
    } catch (error) {
      console.error('Error assessing asset:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const latestMessage = messages[messages.length - 1];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8 max-w-6xl">
        <div className="space-y-6">
          {/* Chat Input */}
          <ChatInput onSubmit={handleSubmit} disabled={isProcessing} />

          {/* Current Query Display */}
          {latestMessage && (
            <div className="glass rounded-xl p-4 border-l-4 border-blue-500">
              <p className="text-sm text-slate-400 mb-1">Current Query:</p>
              <p className="text-slate-200">{latestMessage.query}</p>
            </div>
          )}

          {/* Tool Execution Visual */}
          {currentTools.length > 0 && (
            <ToolExecutionVisual tools={currentTools} />
          )}

          {/* AI Reasoning Box */}
          {latestMessage?.result?.reasoning && (
            <AIReasoningBox reasoning={latestMessage.result.reasoning} />
          )}

          {/* Architecture Diagram */}
          {!isProcessing && messages.length === 0 && (
            <ArchitectureDiagram />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

