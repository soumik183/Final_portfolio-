import React from 'react';

// Icon components defined locally to avoid creating new files
const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);


const ContactPage: React.FC = () => {
    return (
        <section id="contact">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">Contact Me</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
                    Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="card bg-light-card dark:bg-dark-card p-8 md:p-12 rounded-lg shadow-xl max-w-lg mx-auto">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-4 brutalist-font">Contact Information</h3>
                        <p className="text-slate-600 dark:text-slate-400">Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <UserIcon className="w-6 h-6 text-primary dark:text-blue-400 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-white">Name</p>
                                <p className="text-slate-600 dark:text-slate-300">Soumik</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <EnvelopeIcon className="w-6 h-6 text-primary dark:text-blue-400 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-white">Email</p>
                                <a href="mailto:soumikbairagi213@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors break-all">soumikbairagi213@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;