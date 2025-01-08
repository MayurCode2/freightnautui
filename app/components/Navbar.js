"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { 
      label: 'Home', 
      href: '#hero'
    },
    { 
      label: 'About', 
      href: '#about-section'
    },
    { 
      label: 'Services', 
      href: '#services-section'
    },
    { 
      label: 'Software', 
      href: '#software-section'
    },
    { 
      label: 'Problems', 
      href: '#problems-section'
    },
    { 
      label: 'Contact', 
      href: '#contact-section'
    }
  ];

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80; // Height of your navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? `${isDark ? 'bg-slate-900/90' : 'bg-white/90'} shadow-lg backdrop-blur-lg` 
        : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600
                flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-600 to-indigo-600">
                FREIGHTNAUT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`nav-link relative py-2 text-sm font-medium
                  ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}
                  transition-colors duration-300
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-blue-500 after:transition-all after:duration-300
                  hover:after:w-full`}
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl flex items-center justify-center
                transition-all duration-300 hover:scale-110
                ${isDark 
                  ? 'bg-slate-800 text-yellow-500 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}
                transition-colors duration-300`}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block w-full h-0.5 transform transition-all duration-300
                  ${isDark ? 'bg-white' : 'bg-slate-900'}
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-full h-0.5 transition-all duration-300
                  ${isDark ? 'bg-white' : 'bg-slate-900'}
                  ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 transform transition-all duration-300
                  ${isDark ? 'bg-white' : 'bg-slate-900'}
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden
        ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}
        ${isDark ? 'bg-slate-900/90' : 'bg-white/90'}
        backdrop-blur-lg`}>
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium
                ${isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}
                transition-colors duration-300 flex items-center space-x-3`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="px-4 py-2">
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2
                transition-colors duration-300
                ${isDark 
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              <span>{isDark ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 