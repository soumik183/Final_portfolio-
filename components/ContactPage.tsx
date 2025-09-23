import React, { useState } from 'react';

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

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        websiteType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCheckIcon, setShowCheckIcon] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const websiteTypes = [
        "Personal Websites", "Business Websites", "E-Commerce Websites", "Educational Websites", "Landing Pages", "Portfolio Websites",
        "News & Blog Websites", "Booking Websites", "Community & Forum Websites", "Non-Profit & NGO Websites", "Event Websites",
        "Social Media Platforms", "Real Estate Websites", "Restaurant & Food Delivery Websites", "Healthcare Websites", "Custom Web Apps",
        "Entertainment Websites", "Job Portals", "Travel Websites", "SEO-Optimized Websites", "Other"
    ];

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
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
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
                setShowCheckIcon(true);
                setFormData({ name: '', email: '', websiteType: '', message: '' });
                setTimeout(() => {
                    setShowCheckIcon(false);
                }, 1500);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">Get In Touch</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you soon!
                </p>
            </div>

            <div className="max-w-2xl mx-auto relative">
                {showCheckIcon && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                        <svg className="w-24 h-24 text-green-500 animate-success" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 28L22 36L38 18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="animate-draw" strokeDasharray="100" strokeDashoffset="100" />
                        </svg>
                    </div>
                )}

                <div className="card bg-light-card dark:bg-dark-card p-8 md:p-12 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8 brutalist-font creative-font">Website Project Inquiry</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><UserIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-light-card dark:bg-dark-card ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`} placeholder="John Doe" />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MailIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-light-card dark:bg-dark-card ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`} placeholder="john@example.com" />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="websiteType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Website Type</label>
                            <div className="relative">
                                <select id="websiteType" name="websiteType" value={formData.websiteType} onChange={handleChange} className={`block w-full py-3 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 appearance-none bg-light-card dark:bg-dark-card ${errors.websiteType ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`}>
                                    <option value="">Select a website type</option>
                                    {websiteTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                            {errors.websiteType && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.websiteType}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Details</label>
                            <div className="relative">
                                <div className="absolute top-3.5 left-3 pointer-events-none"><MessageSquareIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-light-card dark:bg-dark-card ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary'}`} placeholder="Tell me about your project, timeline, budget, etc..."></textarea>
                            </div>
                            {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>}
                        </div>

                        <div>
                            <button type="submit" disabled={isSubmitting} className="primary-button w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <SendIcon className="w-5 h-5 mr-2" />
                                        Send Inquiry
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;