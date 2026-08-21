import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Sparkles, X, Send, MessageCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { findAIResponse } from '@/data/mock';
import type { ChatMessage } from '@/types';

export function ChatWidget() {
  const { chatOpen, setChatOpen, chatMessages, addChatMessage } = useApp();
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: Date.now(),
    };
    addChatMessage(userMsg);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const { text: aiText, sources } = findAIResponse(text);
      const aiMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        sources,
        timestamp: Date.now(),
      };
      addChatMessage(aiMsg);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary-600 text-white px-4 py-3 shadow-pop hover:bg-primary-700 transition-all duration-200 active:scale-95 ${chatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open AI assistant"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">Ask AI</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full border-2 border-white animate-pulse-soft" />
      </button>

      {/* Chat panel */}
      {chatOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-50 w-full sm:w-[400px] h-full sm:h-[560px] sm:max-h-[80vh] bg-white sm:rounded-2xl shadow-pop border border-slate-200 flex flex-col animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-primary-700 to-primary-600 text-white px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">NextStep AI Assistant</p>
                <p className="text-xs text-primary-100 leading-tight">Grounded in verified data</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors" aria-label="Close chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-3 bg-slate-50">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.sender === 'user' ? 'order-2' : ''}`}>
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary-600 text-white rounded-br-sm'
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      <span className="text-xs text-slate-400 font-medium">Sources:</span>
                      {msg.sources.map((s, i) => (
                        <a
                          key={i}
                          href={s.url}
                          className="inline-flex items-center gap-1 rounded-md bg-primary-50 text-primary-700 px-2 py-0.5 text-xs font-medium hover:bg-primary-100 transition-colors"
                        >
                          <Sparkles className="w-2.5 h-2.5" />
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about eligibility, fees, deadlines…"
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-40 transition-all active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function PageHeader({ children }: { children: ReactNode }) {
  return <div className="mb-6">{children}</div>;
}
