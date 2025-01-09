"use client";

import { useState, useEffect, createContext } from 'react';
import Footer from '../components/Footer';

export const ThemeContext = createContext();

export default function RootProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Optionally save theme preference to localStorage
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      return;
    }

    // Otherwise check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`${isDark ? 'dark' : 'light'} min-h-screen`}>
        <div className={isDark ? 'bg-[#0A0F1C] text-white' : 'bg-white text-slate-900'}>
          {children}
          <Footer isDark={isDark} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
} 