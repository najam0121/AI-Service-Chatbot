import React from 'react';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ChatInterface className="rounded-2xl overflow-hidden" />
      </div>
    </div>
  );
};

export default Index;
