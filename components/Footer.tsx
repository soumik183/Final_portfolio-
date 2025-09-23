
import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

// Local icon for "Back to Top"
const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);


const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/soumikbairagi', icon: <GitHubIcon className="w-5 h-5" /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/soumikbairagi', icon: <LinkedInIcon className="w-5 h-5" /> },
    ];

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="bg-slate-100 dark:bg-dark-card border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
                    {/* Column 1: Branding */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Soumik</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs">
                            A passionate developer crafting beautiful and functional web experiences.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href} 
                                        onClick={(e) => handleScrollTo(e, link.href)} 
                                        className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div>
                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Connect With Me</h4>
                        <div className="flex flex-col space-y-3">
                            {socialLinks.map(link => (
                                <a 
                                    key={link.name} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={`Link to my ${link.name} profile`} 
                                    className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 group w-fit"
                                >
                                    <span className="transform group-hover:scale-110 transition-transform">{link.icon}</span>
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sub-footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left mb-4 sm:mb-0">
                        &copy; {new Date().getFullYear()} Soumik. All Rights Reserved.
                    </p>
                    <a 
                        href="#home" 
                        onClick={(e) => handleScrollTo(e, '#home')}
                        className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label="Back to top"
                    >
                        Back to Top <ArrowUpIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
