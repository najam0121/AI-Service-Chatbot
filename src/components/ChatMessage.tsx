import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';
import botAvatar from '../assets/bot-avatar.png';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex gap-3 animate-message-in ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="bot-avatar animate-breathing">
          <img 
            src={botAvatar} 
            alt="ServiceHive AI Assistant" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      )}
      
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
        <div className={isBot ? 'chat-message-bot' : 'chat-message-user'}>
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
        
        <span className="text-xs text-muted-foreground mt-1 px-2">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>
      
      {!isBot && (
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-floating">
          <User size={20} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;