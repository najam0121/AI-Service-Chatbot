import React from 'react';
import botAvatar from '../assets/bot-avatar.png';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 animate-message-in">
      <div className="bot-avatar">
        <img 
          src={botAvatar} 
          alt="ServiceHive AI Assistant" 
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      
      <div className="chat-message-bot">
        <div className="flex items-center gap-1">
          <span className="text-sm text-chat-bot-text mr-2">AI is typing</span>
          <div className="flex gap-1">
            <div 
              className="w-2 h-2 bg-chat-bot-text rounded-full animate-typing-dots"
              style={{ animationDelay: '0ms' }}
            ></div>
            <div 
              className="w-2 h-2 bg-chat-bot-text rounded-full animate-typing-dots"
              style={{ animationDelay: '200ms' }}
            ></div>
            <div 
              className="w-2 h-2 bg-chat-bot-text rounded-full animate-typing-dots"
              style={{ animationDelay: '400ms' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;