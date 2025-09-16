import React from 'react';

interface IconProps {
  className?: string;
}

export const NextJsIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} aria-hidden="true">
        <circle cx="64" cy="64" r="64" fill="#000" />
        <path fill="#fff" d="M86.2 39.5L64 76.2 41.8 39.5H24v50h13.2V51.7l19.4 34h6.8l19.4-34V89.5h13.2v-50z" />
    </svg>
);