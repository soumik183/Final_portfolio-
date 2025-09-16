import React from 'react';

interface IconProps {
  className?: string;
}

export const TypeScriptIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path fill="#3178C6" d="M0 0h48v48H0z" />
        <path fill="#FFF" d="M22.39 34.61h-4.7V17.39h4.41v-3.72H13.44v21h13.2v-3.78h-4.25zM34.56 13.67h-9.12v3.72h3.36v17.22h4.56V17.39h3.36v-3.72h-2.16z" />
    </svg>
);