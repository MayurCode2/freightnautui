"use client";

import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function RootProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {children}
      <Footer isDark={isDark} />
    </div>
  );
} 