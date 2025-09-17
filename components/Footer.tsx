
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Soumik. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;