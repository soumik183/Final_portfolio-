
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem as FAQItemType } from '../types';

const faqData: FAQItemType[] = [
  {
    question: "What is the cost of a new website?",
    answer: "My primary website creation package costs ₹4999. This includes a free consultation, a fully responsive design, and initial SEO setup to get you started.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard portfolio or small business website typically takes 1-2 weeks from the initial consultation to launch, depending on the complexity and content availability.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! Responsive, mobile-first design is a core part of my service. Your website will look and function perfectly on all devices, including desktops, tablets, and smartphones.",
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes, basic on-page SEO setup is included in the website creation package. This includes meta tags, alt tags, and a sitemap to help search engines find and rank your site. I also offer more advanced SEO packages.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "To get started, I'll need a clear idea of your project goals, any content (text, images) you have ready, and any design inspiration or branding guidelines you'd like me to follow. We'll discuss all this in our initial consultation.",
  },
  {
    question: "Do you handle domain name and web hosting?",
    answer: "I can guide you through the process of purchasing a domain and selecting the best hosting plan for your needs, but the ownership and costs of the domain and hosting will be in your name. This ensures you have full control over your assets.",
  },
  {
    question: "How many revisions are included in the project?",
    answer: "The package includes up to two major rounds of revisions during the design phase. My goal is to get it right, so I focus on clear communication from the start to ensure the initial design aligns perfectly with your vision.",
  },
  {
    question: "What technologies do you use?",
    answer: "I specialize in modern, high-performance technologies like React, Next.js, and Tailwind CSS for the frontend, and Node.js for the backend. This ensures your website is fast, secure, and scalable.",
  },
  {
    question: "Can I make changes to the website after it's live?",
    answer: "For minor text or image changes, I can guide you on how to do it yourself if the site is built on a CMS. For more significant changes, I offer ongoing support and maintenance packages at an affordable rate.",
  },
  {
    question: "Do you offer support after the website is launched?",
    answer: "Yes, I provide 30 days of free support after launch to fix any potential bugs or issues. After that, I offer flexible and affordable monthly maintenance plans to keep your site updated and running smoothly.",
  },
];

const FAQItem: React.FC<{ item: FAQItemType; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <motion.div 
        className="border-b border-slate-200 dark:border-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
    >
      <h3>
        <button
          onClick={onClick}
          className="flex justify-between items-center w-full py-5 text-left font-semibold text-base md:text-lg focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="brutalist-font">{item.question}</span>
          <motion.svg
            className="w-4 h-4"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </motion.svg>
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-4 text-slate-600 dark:text-slate-300">
                {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQProps {
    className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={className}>
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">Frequently Asked Questions</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Quick answers to common queries.</p>
      </motion.div>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
    