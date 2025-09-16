import React, { useState, useRef, useEffect } from 'react';
import { ColorMode, UIStyle, Page } from '../types';
import { PaletteIcon } from './icons/PaletteIcon';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface HeaderProps {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  uiStyle: UIStyle;
  setUiStyle: (style: UIStyle) => void;
  page: Page;
  setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ colorMode, setColorMode, uiStyle, setUiStyle, page, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const navLinks: { name: string; page: Page, icon?: React.ReactNode }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Projects', page: 'projects' },
    { name: 'Contact', page: 'contact' },
  ];

  const uiStyleOptions = [
    { id: UIStyle.Sleek, name: 'Sleek' },
    { id: UIStyle.Brutalist, name: 'Brutalist' },
    { id: UIStyle.Creative, name: 'Creative' },
    { id: UIStyle.Minimal, name: 'Minimal' },
  ];

  const baseLinkClasses = "font-medium transition-colors duration-300 cursor-pointer";
  const defaultThemeLink = `text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white`;
  const activeLinkClasses = `text-primary dark:text-blue-400 font-semibold`;

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a onClick={() => setPage('home')} className="text-2xl font-bold cursor-pointer text-slate-800 dark:text-white">Soumik B.</a>
          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} onClick={() => setPage(link.page)} className={`${baseLinkClasses} ${defaultThemeLink} ${page === link.page ? activeLinkClasses : ''}`}>
                {link.icon}{link.name}
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
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} onClick={() => { setPage(link.page); setIsMenuOpen(false); }} className={`${baseLinkClasses} ${defaultThemeLink} ${page === link.page ? activeLinkClasses : ''} text-center p-2 rounded-md`}>
                  {link.icon}{link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;