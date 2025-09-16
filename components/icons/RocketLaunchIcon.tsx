import React from 'react';

interface IconProps {
  className?: string;
}

export const RocketLaunchIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
        aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 00-5.84-2.56m0 0a14.95 14.95 0 00-2.33 4.94m2.33-4.94a14.95 14.95 0 005.11 6.53m-5.11-6.53a14.95 14.95 0 00-6.53 5.11m6.53-5.11a6 6 0 014.01 1.63m-4.01-1.63L9.5 2.25M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 00-5.84-2.56m0 0a14.95 14.95 0 00-2.33 4.94m2.33-4.94a14.95 14.95 0 005.11 6.53m-5.11-6.53a14.95 14.95 0 00-6.53 5.11m6.53-5.11a6 6 0 014.01 1.63m-4.01-1.63L9.5 2.25" />
    </svg>
);