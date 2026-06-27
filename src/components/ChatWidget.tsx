import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';
import { MessageSquare, X, Send, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'concierge';
  timestamp: Date;
}

export default function ChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial welcome message when chat is opened for the first time
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          text: t('chatWelcome'),
          sender: 'concierge',
          timestamp: new Date(),
        }
      ]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate concierge reply after a delay
    setTimeout(() => {
      const conciergeReply: Message = {
        id: (Date.now() + 1).toString(),
        text: t('chatGenericReply'),
        sender: 'concierge',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, conciergeReply]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-14 h-14 bg-[#D4AF37] hover:bg-[#F5F2EB] text-[#0B0B0B] rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-[90vw] sm:w-[380px] h-[550px] max-h-[80vh] bg-[#151515] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-[#0B0B0B] p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center border border-[#D4AF37]/50">
                    <User className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B0B0B]"></div>
                </div>
                <div>
                  <h3 className="text-white font-serif tracking-wide">{t('chatConcierge')}</h3>
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">{t('chatOnline')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#D9D9D9]/50 hover:text-[#D4AF37] transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0B0B0B]/50 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#D4AF37] text-[#0B0B0B] rounded-tr-sm' 
                        : 'bg-[#1a1a1a] text-[#D9D9D9] border border-white/5 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-[#D9D9D9]/40 mt-1 px-1">
                    {formatTime(msg.timestamp)}
                  </span>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start"
                >
                  <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl rounded-tl-sm p-4 flex space-x-1.5 items-center h-[40px]">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 bg-[#0B0B0B] border-t border-white/5 flex items-end space-x-2"
            >
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder={t('chatPlaceholder')}
                className="flex-1 bg-[#151515] text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 resize-none max-h-[120px] custom-scrollbar"
                rows={1}
                style={{ minHeight: '44px' }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-11 h-11 bg-[#D4AF37] hover:bg-[#F5F2EB] disabled:bg-[#D4AF37]/30 disabled:text-black/30 text-[#0B0B0B] rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send className="w-5 h-5 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
