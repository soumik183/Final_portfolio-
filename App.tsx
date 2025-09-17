import React, { useState, useEffect } from 'react';
import { ColorMode, UIStyle } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import Process from './components/Process';
import TechStack from './components/TechStack';
import ContactPage from './components/ContactPage';

const StyleInjector: React.FC<{ uiStyle: UIStyle }> = ({ uiStyle }) => {
    const sleek = `
      :root { --card-border-radius: 0.75rem; --button-border-radius: 9999px; --card-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
      .dark { --card-shadow: 0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -2px rgba(0,0,0,0.1); }
      .project-card .group-hover\:scale-105 { transform: scale(1.05); }
    `;
    const brutalist = `
      :root { --card-border-radius: 0rem; --button-border-radius: 0.25rem; --card-shadow: 8px 8px 0px black; }
      .dark { --card-shadow: 8px 8px 0px #1e293b; } /* slate-800 */
      .card { border: 2px solid; } .dark .card { border-color: #e2e8f0; } .card { border-color: #0f172a; }
      .brutalist-font { font-family: 'Courier Prime', monospace; }
      .primary-button:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0px black; }
      .dark .primary-button:hover { box-shadow: 4px 4px 0px #1e293b; }
      .project-card:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0px black; }
      .dark .project-card:hover { box-shadow: 12px 12px 0px #1e293b; }
    `;
    const creative = `
      :root { --card-border-radius: 1.5rem; --button-border-radius: 0.5rem; --card-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); }
      .creative-font { font-family: 'Playfair Display', serif; }
      .project-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      .project-card:hover { transform: perspective(1000px) rotateY(10deg) scale(1.05); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
      .primary-button { position: relative; overflow: hidden; z-index: 1; }
      .primary-button::after { content: ''; position: absolute; top:0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transition: left 0.6s; z-index: -1; }
      .primary-button:hover::after { left: 100%; }
    `;
    const minimal = `
      :root { --card-border-radius: 0.25rem; --button-border-radius: 0.25rem; --card-shadow: none; }
      body { background-color: white !important; color: black !important; }
      .dark body { background-color: black !important; color: white !important; }
      * { border-color: black !important; } .dark * { border-color: white !important; }
      .bg-light-bg, .dark .bg-dark-bg { background-color: transparent !important; }
      .bg-light-card, .dark .bg-dark-card { background-color: transparent !important; }
      .card, header { border: 1px solid; }
      .text-slate-600, .dark .text-slate-300, .dark .text-slate-400 { color: inherit !important; opacity: 0.7; }
      .text-primary, .dark .text-blue-400 { color: inherit !important; text-decoration: underline; }
      .bg-primary, .bg-accent { background-color: black !important; color: white !important; border: 1px solid black; }
      .dark .bg-primary, .dark .bg-accent { background-color: white !important; color: black !important; border: 1px solid white; }
    `;

    const getStyle = () => {
        switch(uiStyle) {
            case UIStyle.Brutalist: return brutalist;
            case UIStyle.Creative: return creative;
            case UIStyle.Minimal: return minimal;
            case UIStyle.Sleek:
            default: return sleek;
        }
    };

    return <style>{`
        .card { border-radius: var(--card-border-radius); box-shadow: var(--card-shadow); }
        .primary-button { border-radius: var(--button-border-radius); }
        ${getStyle()}
    `}</style>;
};


// --- Main App Component ---

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<ColorMode>(ColorMode.Dark);
  const [uiStyle, setUiStyle] = useState<UIStyle>(UIStyle.Sleek);

  useEffect(() => {
    const savedColorMode = localStorage.getItem('portfolio-color-mode') as ColorMode;
    const savedUiStyle = localStorage.getItem('portfolio-ui-style') as UIStyle;

    if (savedColorMode && Object.values(ColorMode).includes(savedColorMode)) {
      setColorMode(savedColorMode);
    }
    if (savedUiStyle && Object.values(UIStyle).includes(savedUiStyle)) {
        setUiStyle(savedUiStyle);
    } else {
        setUiStyle(UIStyle.Sleek);
    }
  }, []);

  useEffect(() => {
    if (colorMode === ColorMode.Dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio-color-mode', colorMode);
  }, [colorMode]);

  useEffect(() => {
    localStorage.setItem('portfolio-ui-style', uiStyle);
  }, [uiStyle]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className={`bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 font-sans`}>
      <StyleInjector uiStyle={uiStyle} />
      <Header 
        colorMode={colorMode} 
        setColorMode={setColorMode} 
        uiStyle={uiStyle} 
        setUiStyle={setUiStyle} 
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24 md:space-y-32">
            <Hero />
            <Services />
            <Process />
            <ProjectsPage />
            <TechStack />
            <Testimonials />
            <FAQ />
            <ContactPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
