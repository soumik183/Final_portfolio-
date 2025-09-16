import React, { useState } from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const CopyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const ContactPage: React.FC = () => {
  const email = 'soumikbairagi213@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/soumikbairagi', icon: <GitHubIcon className="w-8 h-8" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/soumikbairagi', icon: <LinkedInIcon className="w-8 h-8" /> },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold brutalist-font creative-font">Let's Build Something Great</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4 mb-8 text-lg">
          I'm currently available for freelance work and collaborations. Have a project in mind or just want to connect? My inbox is always open.
        </p>
        
        <div className="card bg-light-card dark:bg-dark-card rounded-lg shadow-lg p-8 inline-flex flex-col sm:flex-row items-center gap-4">
          <a href={`mailto:${email}`} className="text-lg font-mono text-primary dark:text-blue-400 break-all hover:underline">
            {email}
          </a>
          <button
            onClick={handleCopy}
            className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white transition-colors duration-300 ${copied ? 'bg-accent hover:bg-accent-dark' : 'bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`}
            aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </div>

        <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 brutalist-font">Find me on</h3>
            <div className="flex justify-center space-x-6">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Link to my ${link.name} profile`} className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
