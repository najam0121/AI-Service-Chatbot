import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement voice recording functionality
  };

  return (
    <div className="border-t border-border bg-white p-4">
      <div className="flex items-end gap-2 max-w-4xl mx-auto">
        {/* Attachment Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-accent flex-shrink-0"
                disabled={disabled}
              >
                <Paperclip size={20} className="text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Attach file</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        {/* Input Field */}
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={disabled ? "AI is typing..." : "Type your message..."}
            disabled={disabled}
            className="chat-input resize-none overflow-hidden min-h-[48px] max-h-[120px]"
            rows={1}
          />
          
          {/* Voice Input Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleRecording}
                  className={`absolute right-12 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full transition-colors ${
                    isRecording 
                      ? 'bg-destructive text-destructive-foreground' 
                      : 'hover:bg-accent text-muted-foreground'
                  }`}
                  disabled={disabled}
                >
                  {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isRecording ? 'Stop recording' : 'Voice input'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Send Button */}
        <Button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          className="btn-ai-primary h-12 w-12 rounded-full p-0 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </Button>
      </div>
      
      {/* Status indicators */}
      <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
        <span>
          {isRecording && (
            <span className="flex items-center gap-1 text-destructive animate-pulse">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              Recording...
            </span>
          )}
        </span>
        
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <div className="status-online"></div>
            AI Assistant Online
          </span>
        </span>
      </div>
    </div>
  );
};

export default ChatInput;