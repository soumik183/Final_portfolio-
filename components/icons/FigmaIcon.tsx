import React from 'react';

interface IconProps {
  className?: string;
}

export const FigmaIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#2c2c2c"></path>
        <path d="M12 24c3.313 0 6-5.373 6-12S15.313 0 12 0" fill="#0acf83"></path>
        <path d="M6 12c0 3.313 2.687 6 6 6s6-2.687 6-6-2.687-6-6-6" fill="#a259ff"></path>
        <path d="M6 12c0-3.313 2.687-6 6-6v12c-3.313 0-6-2.687-6-6z" fill="#f24e1e"></path>
        <path d="M12 12c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6" fill="#ff7262"></path>
        <path d="M18 12c0-3.313-2.687-6-6-6s-6 2.687-6 6" fill="#1abcfe"></path>
    </svg>
);