export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  type: 'text' | 'quick-reply' | 'error' | 'system';
  timestamp: Date;
  metadata?: {
    flowStep?: string;
    confidence?: number;
    escalated?: boolean;
    ticketId?: string;
  };
}

export type ChatFlow = 
  | 'welcome' 
  | 'demo-booking' 
  | 'support' 
  | 'faq' 
  | 'error-handling'
  | 'human-handoff';

export interface ConversationContext {
  currentFlow: ChatFlow;
  userInfo?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
  };
  flowData?: Record<string, any>;
  failedAttempts: number;
  escalationRequested: boolean;
}

export interface QuickReplyOption {
  id: string;
  text: string;
  value: string;
  icon?: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  context: ConversationContext;
  quickReplies: QuickReplyOption[];
}

export interface BotResponse {
  message: string;
  quickReplies?: QuickReplyOption[];
  flow?: ChatFlow;
  escalate?: boolean;
  metadata?: Record<string, any>;
}