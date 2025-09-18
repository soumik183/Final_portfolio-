import React from 'react';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { PaletteIcon } from './icons/PaletteIcon';
import { DevicePhoneMobileIcon } from './icons/DevicePhoneMobileIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { DocumentDuplicateIcon } from './icons/DocumentDuplicateIcon';
import { ChatBubbleLeftRightIcon } from './icons/ChatBubbleLeftRightIcon';

const ServiceFeature: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transform hover:scale-105">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mr-4">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-slate-800 dark:text-white">{title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{children}</p>
        </div>
    </div>
);


const Services: React.FC = () => {
  const features = [
    { 
      icon: <PaletteIcon className="w-6 h-6 text-primary dark:text-blue-400" />, 
      title: 'Custom UI/UX Design', 
      description: 'A bespoke design that reflects your brand’s identity and engages your target audience, crafted from scratch.' 
    },
    { 
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-primary dark:text-blue-400" />, 
      title: 'Fully Responsive Layout', 
      description: 'Your website will look and perform flawlessly on all devices, from desktops to smartphones.' 
    },
    { 
      icon: <ChartBarIcon className="w-6 h-6 text-primary dark:text-blue-400" />, 
      title: 'SEO-Friendly Foundation', 
      description: 'Built with search engine best practices to improve visibility and rank higher on Google.' 
    },
    { 
      icon: <CodeBracketIcon className="w-6 h-6 text-primary dark:text-blue-400" />, 
      title: 'Full-Stack or Frontend', 
      description: 'Whether you need a simple static site or a complex web application, I have the skills to deliver.' 
    },
    { 
      icon: <DocumentDuplicateIcon className="w-6 h-6 text-primary dark:text-blue-400" />, 
      title: 'Unlimited Pages', 
      description: 'No restrictions on the number of pages, allowing your website to grow with your business.' 
    },
    { 
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary dark:text-blue-400" />, 
      title: 'Free Consultation & Support', 
      description: 'We’ll start with a detailed discussion of your goals, and I’ll provide support after launch.' 
    },
  ];
    
  return (
    <section id="services">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">My Signature Web Creation Package</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            I don't just build websites; I build digital experiences. My all-inclusive package is designed to provide everything you need to establish a powerful, professional, and effective online presence. From the initial spark of an idea to the final launch and beyond, I handle every detail with precision and care.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="card bg-light-card dark:bg-dark-card rounded-xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
          <div className="p-8 md:p-10">
             <div className="text-center">
                 <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white brutalist-font">Everything You Need, One Simple Price</h3>
                 <div className="flex justify-center items-center gap-3 my-4">
                    <span className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 line-through">₹7000</span>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary dark:text-blue-400">₹4999</p>
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300">~28% OFF</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Limited time offer. No hidden fees. Just one complete solution.</p>
             </div>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map(feature => (
                <ServiceFeature key={feature.title} icon={feature.icon} title={feature.title}>
                  {feature.description}
                </ServiceFeature>
              ))}
            </div>

             <div className="mt-10 text-center">
                <a href="#projects" className="primary-button inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-dark duration-300 claim-button-glow">
                    See My Projects
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;