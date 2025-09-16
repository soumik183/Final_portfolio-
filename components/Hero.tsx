import React from 'react';
import { Page } from '../types';

interface HeroProps {
    setPage: (page: Page) => void;
}

const DecorativeElement: React.FC = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 dark:opacity-10 filter blur-2xl animate-subtle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-200 rounded-full opacity-20 dark:opacity-10 filter blur-2xl animate-subtle-float" style={{ animationDelay: '3s' }}></div>
    </div>
);


const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section id="home" className="relative py-20 md:py-32 text-center">
      <DecorativeElement />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 animate-fade-in-up brutalist-font creative-font" style={{ animationDelay: '0.1s' }}>
                Crafting Digital Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                I'm Soumik Bairagi, a web developer building beautiful, fast, and user-centric web experiences that drive results.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <button onClick={() => setPage('contact')} className="primary-button inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300">
                    Get in Touch
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;