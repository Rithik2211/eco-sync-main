import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipWrapProps {
    children: React.ReactNode;
    label: string|undefined;
}

const TooltipWrap = ({children,label}:TooltipWrapProps) => {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default TooltipWrap