import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Mic, Paperclip, Phone, HelpCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import WelcomeScreen from './WelcomeScreen';
import QuickActions from './QuickActions';
import TypingIndicator from './TypingIndicator';
import { Message, ChatFlow } from '../types/chat';

interface ChatInterfaceProps {
  className?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className = '' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<ChatFlow>('welcome');
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, sender: 'user' | 'bot', type: 'text' | 'quick-reply' = 'text') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      type,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    addMessage(content, 'user');
    setShowWelcome(false);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response based on message
    setTimeout(() => {
      setIsTyping(false);
      handleBotResponse(content);
    }, 1500);
  };

  const handleBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('demo') || lowerMessage.includes('schedule')) {
      setCurrentFlow('demo-booking');
      addMessage(
        "I'd be happy to help you schedule a demo! Let me gather some information first. What's your role in the organization?",
        'bot'
      );
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('issue')) {
      setCurrentFlow('support');
      addMessage(
        "I'm here to help with technical support. What type of issue are you experiencing?",
        'bot'
      );
    } else if (lowerMessage.includes('question') || lowerMessage.includes('faq')) {
      setCurrentFlow('faq');
      addMessage(
        "I can answer questions about our AI services, pricing, security, and implementation. What would you like to know?",
        'bot'
      );
    } else {
      addMessage(
        "I understand you're interested in ServiceHive's AI solutions. I can help you schedule a demo, answer questions, or provide technical support. What would you like to do?",
        'bot'
      );
    }
  };

  const handleWelcomeAction = (action: 'demo' | 'questions' | 'support') => {
    setShowWelcome(false);
    
    switch (action) {
      case 'demo':
        setCurrentFlow('demo-booking');
        addMessage("I want to schedule a demo", 'user');
        setTimeout(() => {
          addMessage(
            "Excellent! I'll help you schedule a personalized demo of our AI solutions. Let me gather some information to ensure we show you the most relevant features.",
            'bot'
          );
        }, 500);
        break;
      case 'questions':
        setCurrentFlow('faq');
        addMessage("I have some questions", 'user');
        setTimeout(() => {
          addMessage(
            "I'm here to help answer your questions about ServiceHive! I can provide information about our AI capabilities, pricing, security measures, and implementation process. What would you like to know?",
            'bot'
          );
        }, 500);
        break;
      case 'support':
        setCurrentFlow('support');
        addMessage("I need technical support", 'user');
        setTimeout(() => {
          addMessage(
            "I'm ready to assist with your technical support needs. To help you most effectively, could you tell me what type of issue you're experiencing?",
            'bot'
          );
        }, 500);
        break;
    }
  };

  const quickActions = [
    { icon: Calendar, label: 'Demo', action: () => handleWelcomeAction('demo') },
    { icon: HelpCircle, label: 'Support', action: () => handleWelcomeAction('support') },
    { icon: MessageCircle, label: 'FAQ', action: () => handleWelcomeAction('questions') },
  ];

  return (
    <div className={`flex flex-col h-screen max-w-4xl mx-auto bg-white shadow-2xl ${className}`}>
      <ChatHeader />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {showWelcome ? (
          <WelcomeScreen onAction={handleWelcomeAction} />
        ) : (
          <>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ai-subtle">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Actions */}
            <QuickActions actions={quickActions} />
          </>
        )}
        
        {/* Input Area */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatInterface;