import React from 'react';

interface HeroProps {}

const DecorativeElement: React.FC = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 dark:opacity-10 filter blur-2xl animate-subtle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-200 rounded-full opacity-20 dark:opacity-10 filter blur-2xl animate-subtle-float" style={{ animationDelay: '3s' }}></div>
    </div>
);


const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 text-center">
      <DecorativeElement />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 brutalist-font creative-font animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  Crafting Digital Excellence
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  I build beautiful, fast, and user-centric web experiences that drive results.
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <a href="#projects" className="primary-button inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300">
                      View My Work
                  </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;