import React from 'react';

interface IconProps {
  className?: string;
}

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
        aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.537a5.56 5.56 0 01-1.04 1.04l-1.952 1.953a.75.75 0 01-1.061 0l-1.952-1.953a5.56 5.56 0 01-1.04-1.04l-3.722-.537A2.25 2.25 0 013 15.25v-4.286c0-.97.616-1.813 1.5-2.097M15 6.75a3 3 0 013 3v2.25a3 3 0 01-3 3h-6a3 3 0 01-3-3V9.75a3 3 0 013-3h6z" />
    </svg>
);