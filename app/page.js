"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import About from './about/page';
import Navbar from './components/Navbar';
import ProblemSection from './components/ProblemSection';
import ContactSection from './components/ContactSection';
import Servicesection from './components/Servicesection';
import SoftwareSection from './components/SoftwareSection';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [typedText, setTypedText] = useState('');
  const textToType = "Digital Freight Solutions";
  
  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < textToType.length) {
        setTypedText(prev => prev + textToType.charAt(index));
        index++;
      }
    };
    
    const typingInterval = setInterval(typeText, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0A0F1C] text-white' : 'bg-white text-slate-900'
    }`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
          {/* Hero content */}
        </section>

        {/* About Section */}
        <section id="about-section" className="min-h-screen relative">
          <About isDark={isDark} />
        </section>

        {/* Services Section */}
        <section id="services-section" className="min-h-screen relative">
          <Servicesection isDark={isDark} />
        </section>

        {/* Software Section */}
        <section id="software-section" className="min-h-screen relative">
          <SoftwareSection isDark={isDark} />
        </section>

        {/* Problems Section */}
        <section id="problems-section" className="min-h-screen relative">
          <ProblemSection isDark={isDark} />
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="min-h-screen relative">
          <ContactSection isDark={isDark} />
        </section>
      </main>
    </div>
  );
}
