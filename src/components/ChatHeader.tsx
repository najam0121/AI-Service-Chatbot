import React from 'react';
import { Settings, Minimize2, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-ai-gradient px-6 py-4 text-white shadow-elevated">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {/* Left side - Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
            </div>
            
            <div>
              <h1 className="text-xl font-bold tracking-tight">ServiceHive</h1>
              <p className="text-sm text-white/80">AI Assistant</p>
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Online
          </Badge>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 h-9 w-9"
          >
            <Phone size={18} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 h-9 w-9"
          >
            <Settings size={18} />
          </Button>
          
          <div className="flex items-center gap-1 ml-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <Minimize2 size={16} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="flex items-center gap-6 mt-3 text-sm text-white/70">
        <span className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
          Available 24/7
        </span>
        <span className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          Instant Responses
        </span>
        <span className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
          Enterprise Grade
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;