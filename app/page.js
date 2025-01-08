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
        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="animated-grid"></div>
          <div className="glow-orb-1"></div>
          <div className="glow-orb-2"></div>
          <div className="glow-orb-3"></div>
          <div className="floating-elements">
            {[1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className={`floating-element element-${index}`}
                style={{
                  '--delay': `${index * 0.5}s`,
                  '--duration': `${10 + index * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          {/* Floating Stats Cards */}
          <div className="absolute top-0 left-0 animate-float-slow">
            <div className="stats-card">
              <div className="stats-icon">🚀</div>
              <div>
                <div className="stats-value">500+</div>
                <div className="stats-label">Global Partners</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 animate-float-slow delay-700">
            <div className="stats-card">
              <div className="stats-icon">📈</div>
              <div>
                <div className="stats-value">98%</div>
                <div className="stats-label">Success Rate</div>
              </div>
            </div>
          </div>

    <div className="text-center space-y-8">
      {/* Enhanced Animated Subtitle */}
      <div className="reveal-text-slow">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
          <span className="pulse-dot mr-2"></span>
          <h2 className={`text-xl font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            {typedText}
            <span className="typing-cursor">|</span>
          </h2>
        </div>
      </div>
      
      {/* Enhanced Main Title */}
      <div className="space-y-4">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight perspective-text">
          <span className="block reveal-text stagger-1">
            Revolutionizing
          </span>
          <div className="h-2"></div>
          <span className="block text-gradient sliding-gradient stagger-2 glow-text">
            Global Logistics
          </span>
        </h1>
      </div>
      
      {/* Enhanced Description */}
      <p className="fade-in-up max-w-2xl mx-auto text-xl sm:text-2xl leading-relaxed stagger-3">
        <span className="word-animation">Transform</span> your international trade with 
        <span className="highlight-text-enhanced"> cutting-edge </span> 
        digital solutions
      </p>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 button-container stagger-4">
        <button className="primary-cta-enhanced group">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get Started
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="btn-glow"></div>
        </button>
        <button className="secondary-cta-enhanced group">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Watch Demo
            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div className="btn-border"></div>
        </button>
      </div>
    </div>
  </div>
</section>
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
