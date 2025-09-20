import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface QuickAction {
  icon: LucideIcon;
  label: string;
  action: () => void;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-center gap-3">
        <TooltipProvider>
          {actions.map((action, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  onClick={action.action}
                  className="quick-action-btn animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <action.icon size={16} className="mr-2" />
                  {action.label}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default QuickActions;