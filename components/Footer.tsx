
import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/soumikbairagi', icon: <GitHubIcon className="w-6 h-6" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/soumikbairagi', icon: <LinkedInIcon className="w-6 h-6" /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Link to my ${link.name} profile`} className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                    {link.icon}
                </a>
            ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Soumik. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;