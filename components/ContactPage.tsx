import React, { useState, useEffect } from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

// --- Web3Forms Configuration ---
// The access key is configured via the WEB3FORMS_ACCESS_KEY environment variable.
// You can get a free key at https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;


// --- Icon Components ---
const UserIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const EnvelopeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const PencilIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    const isContactFormConfigured = !!WEB3FORMS_ACCESS_KEY;

    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);


    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/soumikbairagi', icon: <GitHubIcon className="w-6 h-6" /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/soumikbairagi', icon: <LinkedInIcon className="w-6 h-6" /> },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!isContactFormConfigured) {
            setError('The contact form is currently unavailable. Please try again later.');
            setStatus('error');
            return;
        }

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError('Please fill out all fields.');
            setStatus('error');
            return;
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            setStatus('error');
            return;
        }

        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY!);
        formData.append("from_name", "Soumik's Portfolio");
        formData.append("subject", `New message from ${name}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error("Web3Forms Error:", data);
                setStatus('error');
                setError(data.message || 'There was an error sending your message.');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
            setError('There was an error sending your message. Please try again later.');
        }
    };

    const getButtonContent = () => {
        switch (status) {
            case 'sending':
                return <><LoadingSpinner /> Sending...</>;
            case 'success':
                return <><CheckIcon className="w-6 h-6 -ml-1 mr-2" /> Message Sent!</>;
            case 'error':
                 return 'Send Message';
            default:
                return 'Send Message';
        }
    };

    return (
        <section id="contact" className="animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold brutalist-font creative-font">Let's Build Something Great</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-4 mb-12 text-base md:text-lg">
                    I'm currently available for freelance work and collaborations. Have a project in mind? Send me a message below.
                </p>

                <div className="card bg-light-card dark:bg-dark-card rounded-xl shadow-2xl w-full overflow-hidden">
                   <div className="grid md:grid-cols-5">
                        <div className="md:col-span-2 bg-slate-100 dark:bg-slate-800/50 p-8 text-left flex flex-col">
                            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white brutalist-font">Contact Information</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                                Fill out the form, and I'll get back to you within 24 hours. You can also find me on these platforms.
                            </p>
                            <div className="flex justify-start space-x-4">
                                {socialLinks.map(link => (
                                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Link to my ${link.name} profile`} className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-3 p-6 sm:p-8">
                            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <UserIcon className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 disabled:opacity-50 pl-10"
                                            required aria-label="Your Name" disabled={!isContactFormConfigured}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <EnvelopeIcon className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 disabled:opacity-50 pl-10"
                                            required aria-label="Your Email" disabled={!isContactFormConfigured}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                                            <PencilIcon className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <textarea
                                            id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 disabled:opacity-50 pl-10"
                                            required aria-label="Your Message" disabled={!isContactFormConfigured}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="text-right pt-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending' || !isContactFormConfigured || status === 'success'}
                                        className={`primary-button w-full sm:w-auto inline-flex items-center justify-center font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out disabled:cursor-not-allowed
                                          ${status === 'success' ? 'bg-emerald-500 text-white' : 'bg-primary text-white hover:bg-primary-dark disabled:opacity-50'}`}
                                    >
                                        {getButtonContent()}
                                    </button>
                                </div>
                                 {!isContactFormConfigured && (
                                     <div role="alert" className="mt-4 p-3 rounded-md bg-yellow-50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-sm text-center">
                                        The contact form is temporarily unavailable.
                                    </div>
                                )}
                                {status === 'success' && (
                                    <div role="alert" className="mt-4 p-3 rounded-md bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm text-center">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                     <div role="alert" className="mt-4 p-3 rounded-md bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-sm text-center">
                                        {error}
                                    </div>
                                )}
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;