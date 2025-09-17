import React, { useState } from 'react';
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
];

const FAQItem: React.FC<{ item: FAQItemType; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <h3>
        <button
          onClick={onClick}
          className="flex justify-between items-center w-full py-5 text-left font-semibold text-base md:text-lg"
          aria-expanded={isOpen}
        >
          <span className="brutalist-font">{item.question}</span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </h3>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="pb-5 pr-4 text-slate-600 dark:text-slate-300">
                {item.answer}
            </div>
        </div>
      </div>
    </div>
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
    <section id="faq" className={`animate-fade-in-up ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">Frequently Asked Questions</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Quick answers to common queries.</p>
      </div>
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