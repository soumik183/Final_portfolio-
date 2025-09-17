import React, { useState, useRef, useEffect } from 'react';
import { ColorMode, UIStyle } from '../types';
import { PaletteIcon } from './icons/PaletteIcon';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface HeaderProps {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  uiStyle: UIStyle;
  setUiStyle: (style: UIStyle) => void;
}

const Header: React.FC<HeaderProps> = ({ colorMode, setColorMode, uiStyle, setUiStyle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const settingsRef = useRef<HTMLDivElement>(null);

  // Smooth scrolling and active section highlighting
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, { 
        rootMargin: '0px 0px -60% 0px', // Trigger when section is in the upper 40% of viewport
        threshold: 0
    });

    sections.forEach(section => {
        if(section) observer.observe(section);
    });

    return () => sections.forEach(section => {
        if(section) observer.unobserve(section);
    });
  }, []);

  const navLinks: { name: string; href: string }[] = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close mobile menu on click
  };

  const uiStyleOptions = [
    { id: UIStyle.Sleek, name: 'Sleek' },
    { id: UIStyle.Brutalist, name: 'Brutalist' },
    { id: UIStyle.Creative, name: 'Creative' },
    { id: UIStyle.Minimal, name: 'Minimal' },
  ];

  const baseLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer";
  const defaultThemeLink = `text-slate-600 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:bg-slate-700/50`;
  const activeLinkClasses = `bg-primary text-white shadow-md`;

  // Close settings panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-md backdrop-blur-lg bg-light-bg/80 dark:bg-dark-bg/80 dark:border-b dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold cursor-pointer text-slate-800 dark:text-white">Soumik</a>
          
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`${baseLinkClasses} ${defaultThemeLink} ${activeSection === link.href.substring(1) ? activeLinkClasses : ''}`}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative" ref={settingsRef}>
              <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Customize theme and style">
                <PaletteIcon className="w-6 h-6" />
              </button>
              {isSettingsOpen && (
                <div className="settings-panel absolute right-0 mt-2 w-64 bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-4 z-50">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Color Mode</label>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setColorMode(ColorMode.Light)} className={`flex-1 p-2 rounded-md flex items-center justify-center gap-2 text-sm ${colorMode === ColorMode.Light ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700'}`}>
                           <SunIcon className="w-4 h-4" /> Light
                        </button>
                        <button onClick={() => setColorMode(ColorMode.Dark)} className={`flex-1 p-2 rounded-md flex items-center justify-center gap-2 text-sm ${colorMode === ColorMode.Dark ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700'}`}>
                           <MoonIcon className="w-4 h-4" /> Dark
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">UI Style</label>
                       <div className="grid grid-cols-2 gap-2">
                         {uiStyleOptions.map(opt => (
                           <button key={opt.id} onClick={() => setUiStyle(opt.id)} className={`p-2 rounded-md text-sm ${uiStyle === opt.id ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700'}`}>
                             {opt.name}
                           </button>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="md:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="relative z-50 w-8 h-8 flex flex-col justify-center items-center" 
                    aria-label="Toggle menu" 
                    aria-expanded={isMenuOpen}
                >
                    <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current my-1 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-sm shadow-lg rounded-b-lg overflow-hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
            <nav className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`${baseLinkClasses} ${defaultThemeLink} ${activeSection === link.href.substring(1) ? activeLinkClasses : ''} text-center`}>
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;