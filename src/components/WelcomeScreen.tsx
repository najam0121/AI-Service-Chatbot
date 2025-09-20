import React from 'react';
import { Calendar, MessageCircle, Headphones, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import botAvatar from '../assets/bot-avatar.png';

interface WelcomeScreenProps {
  onAction: (action: 'demo' | 'questions' | 'support') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onAction }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-ai-subtle">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* ServiceHive Logo and Branding */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-ai-gradient p-4 rounded-2xl shadow-elevated">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src={botAvatar} 
                  alt="ServiceHive AI Assistant" 
                  className="w-12 h-12 rounded-lg animate-breathing"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold bg-ai-gradient bg-clip-text text-transparent">
            ServiceHive AI Assistant
          </h1>
        </div>
        
        {/* Welcome Message */}
        <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg text-foreground leading-relaxed">
              Hi! I'm your ServiceHive AI Assistant. I can help you explore our{' '}
              <span className="font-semibold text-primary">ML, NLP, and automation solutions</span>.
            </p>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/40">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-ai-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Schedule Demo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  See our AI solutions in action with a personalized demo
                </p>
                <Button 
                  onClick={() => onAction('demo')}
                  className="btn-ai-primary w-full"
                >
                  Book Demo
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/40">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-ai-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ask Questions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about features, pricing, and implementation
                </p>
                <Button 
                  onClick={() => onAction('questions')}
                  className="btn-ai-secondary w-full"
                >
                  Get Answers
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/40">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-ai-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Technical Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help with integration and technical issues
                </p>
                <Button 
                  onClick={() => onAction('support')}
                  className="btn-ai-tertiary w-full"
                >
                  Get Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 text-primary">
              <Clock className="w-full h-full" />
            </div>
            <p className="text-sm font-medium text-foreground">24/7 Available</p>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 text-primary">
              <Zap className="w-full h-full" />
            </div>
            <p className="text-sm font-medium text-foreground">Instant Responses</p>
            <p className="text-xs text-muted-foreground">Get answers immediately</p>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 text-primary">
              <Shield className="w-full h-full" />
            </div>
            <p className="text-sm font-medium text-foreground">Enterprise Grade</p>
            <p className="text-xs text-muted-foreground">Secure & reliable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;