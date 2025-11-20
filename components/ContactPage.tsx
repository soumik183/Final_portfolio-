
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Locally defined icons to match the new form's requirements
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const MessageSquareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"></path></svg>
);
const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);


const ContactPage: React.FC = () => {
    type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        websiteType: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const websiteTypes = [
        "Personal Websites", "Business Websites", "E-Commerce Websites", "Educational Websites", "Landing Pages", "Portfolio Websites",
        "News & Blog Websites", "Booking Websites", "Community & Forum Websites", "Non-Profit & NGO Websites", "Event Websites",
        "Social Media Platforms", "Real Estate Websites", "Restaurant & Food Delivery Websites", "Healthcare Websites", "Custom Web Apps",
        "Entertainment Websites", "Job Portals", "Travel Websites", "SEO-Optimized Websites", "Other"
    ];

    // Load saved data from local storage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('contact_form_data');
        if (savedData) {
            try {
                setFormData(prev => ({ ...prev, ...JSON.parse(savedData) }));
            } catch (e) {
                console.error("Failed to parse saved form data", e);
            }
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.websiteType) newErrors.websiteType = 'Please select a website type';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const newData = { ...formData, [name]: value };
        setFormData(newData);
        localStorage.setItem('contact_form_data', JSON.stringify(newData));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleTypeSelect = (type: string) => {
        const newData = { ...formData, websiteType: type };
        setFormData(newData);
        localStorage.setItem('contact_form_data', JSON.stringify(newData));
        
        if (errors.websiteType) {
            setErrors(prev => ({ ...prev, websiteType: '' }));
        }
        setIsDropdownOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        setSubmissionStatus('submitting');
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: 'c885bc82-fd77-47e8-a0f6-99218f2f4d92',
                    ...formData
                })
            });
            const result = await response.json();
            if (result.success) {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', websiteType: '', message: '' });
                localStorage.removeItem('contact_form_data'); // Clear saved data on success
                setTimeout(() => setSubmissionStatus('idle'), 1500);
            } else {
                setSubmissionStatus('error');
                setTimeout(() => setSubmissionStatus('idle'), 1500);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('error');
            setTimeout(() => setSubmissionStatus('idle'), 1500);
        }
    };
    
    const renderButtonContent = () => {
        switch (submissionStatus) {
            case 'submitting':
                return (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                );
            case 'success':
                return (
                    <span className="flex items-center animate-fade-in">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Message Sent!
                    </span>
                );
            case 'error':
                 return (
                    <span className="flex items-center animate-fade-in">
                        <XIcon className="w-5 h-5 mr-2" />
                        Submission Failed
                    </span>
                );
            default: // idle
                return (
                    <>
                        <SendIcon className="w-5 h-5 mr-2" />
                        Send Inquiry
                    </>
                );
        }
    };

    const getButtonClass = (status: SubmissionStatus) => {
        switch(status) {
            case 'submitting': return 'bg-primary/80 cursor-not-allowed';
            case 'success': return 'bg-accent hover:bg-accent-dark focus:ring-accent';
            case 'error': return 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
            default: return 'bg-primary hover:bg-primary-dark focus:ring-primary';
        }
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.98 }
    };

    // Using style object for dynamic borderRadius ensures it works with the CSS variables from StyleInjector
    const inputStyle = { borderRadius: 'var(--card-border-radius)' };

    return (
        <section id="contact">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">Get In Touch</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you soon!
                </p>
            </motion.div>

            <div className="max-w-2xl mx-auto relative">
                <motion.div 
                    className="card bg-light-card dark:bg-dark-card p-8 md:p-12 rounded-lg shadow-xl"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8 brutalist-font creative-font">Website Project Inquiry</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><UserIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    style={inputStyle}
                                    className={`block w-full pl-10 pr-3 py-3 border shadow-sm focus:outline-none focus:ring-2 bg-slate-50 dark:bg-slate-900/50 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`} 
                                    placeholder="John Doe" 
                                />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MailIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    style={inputStyle}
                                    className={`block w-full pl-10 pr-3 py-3 border shadow-sm focus:outline-none focus:ring-2 bg-slate-50 dark:bg-slate-900/50 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`} 
                                    placeholder="john@example.com" 
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
                        </div>

                        <div className="relative" ref={dropdownRef}>
                            <label htmlFor="websiteType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Website Type</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                    <GlobeIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    style={inputStyle}
                                    className={`relative w-full pl-10 pr-4 py-3 border shadow-sm text-left focus:outline-none focus:ring-2 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 transition-all duration-200 ${
                                        errors.websiteType 
                                            ? 'border-red-500 focus:ring-red-500' 
                                            : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'
                                    }`}
                                >
                                    <span className={`block truncate ${formData.websiteType ? 'text-slate-900 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                        {formData.websiteType || "Select a website type"}
                                    </span>
                                    <span className="pointer-events-none flex items-center">
                                        <ChevronDownIcon className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </span>
                                </button>
                            </div>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={dropdownVariants}
                                        transition={{ duration: 0.2 }}
                                        style={inputStyle}
                                        className="absolute z-50 mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl max-h-60 overflow-hidden focus:outline-none sm:text-sm"
                                    >
                                        <div className="overflow-auto max-h-60 py-1 custom-scrollbar">
                                            {websiteTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    className={`cursor-pointer select-none relative py-3 pl-4 pr-9 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors ${
                                                        formData.websiteType === type 
                                                            ? 'bg-blue-50 dark:bg-slate-800 text-primary dark:text-blue-400 font-medium' 
                                                            : 'text-slate-700 dark:text-slate-300'
                                                    }`}
                                                    onClick={() => handleTypeSelect(type)}
                                                >
                                                    <span className="block truncate">
                                                        {type}
                                                    </span>
                                                    {formData.websiteType === type && (
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary dark:text-blue-400">
                                                            <CheckIcon className="h-4 w-4" />
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {errors.websiteType && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.websiteType}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Details</label>
                            <div className="relative">
                                <div className="absolute top-3.5 left-3 pointer-events-none"><MessageSquareIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    style={inputStyle}
                                    className={`block w-full pl-10 pr-3 py-3 border shadow-sm focus:outline-none focus:ring-2 bg-slate-50 dark:bg-slate-900/50 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`} 
                                    placeholder="Tell me about your project, timeline, budget, etc..."
                                ></textarea>
                            </div>
                            {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>}
                        </div>

                        <div>
                            <motion.button 
                                type="submit" 
                                disabled={submissionStatus === 'submitting'} 
                                className={`primary-button w-full flex justify-center items-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ${getButtonClass(submissionStatus)}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {renderButtonContent()}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactPage;
