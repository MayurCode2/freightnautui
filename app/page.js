"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from './providers/RootProvider';
import Image from "next/image";
import About from './about/page';
import Navbar from './components/Navbar';
import ProblemSection from './components/ProblemSection';
import ContactSection from './components/ContactSection';
import Servicesection from './components/Servicesection';
import SoftwareSection from './components/SoftwareSection';

export default function Home() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef(null);
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        {/* Enhanced Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Advanced Background Effects */}
          <div className="absolute inset-0">
            {/* Animated Grid */}
            <div className="animated-grid opacity-20"></div>
            
            {/* Glowing Orbs */}
            <div className="glow-orb primary"></div>
            <div className="glow-orb secondary"></div>
            <div className="glow-orb tertiary"></div>
            
            {/* Particle Effect */}
            <div className="particles-container">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    '--x': `${Math.random() * 100}%`,
                    '--y': `${Math.random() * 100}%`,
                    '--duration': `${10 + Math.random() * 20}s`,
                    '--delay': `${Math.random() * -20}s`,
                  }}
                />
              ))}
            </div>

            {/* Light Paths */}
            <div className="light-paths">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={`light-path path-${i + 1}`}
                  style={{
                    '--delay': `${i * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 container mx-auto px-4">
            {/* Floating Stats */}
            <div className="absolute top-0 left-0 animate-float-slow">
              <div className="stats-card-new">
                <div className="stats-icon-new">🚀</div>
                <div>
                  <div className="stats-value-new">500+</div>
                  <div className="stats-label-new">Global Partners</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 animate-float-slow delay-700">
              <div className="stats-card-new">
                <div className="stats-icon-new">📈</div>
                <div>
                  <div className="stats-value-new">98%</div>
                  <div className="stats-label-new">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              {/* Enhanced Badge */}
              <div className="reveal-text-slow inline-block">
                <div className="hero-badge group">
                  <span className="badge-pulse"></span>
                  <span className="badge-text">
                    {typedText}
                    <span className="typing-cursor">|</span>
                  </span>
                  <div className="badge-shine"></div>
                </div>
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="hero-title">
                  <span className="block reveal-text stagger-1">
                    Revolutionizing
                  </span>
                  <span className="block reveal-text stagger-2">
                    <span className="gradient-text glow-text">
                      Global Logistics
                    </span>
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="hero-description stagger-3">
                <span className="text-animation">Transform</span> your international trade with 
                <span className="highlight-text"> cutting-edge </span> 
                digital solutions
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 stagger-4">
                <button className="cta-button primary group">
                  <span className="button-content">
                    Get Started
                    <svg className="button-icon" viewBox="0 0 24 24">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="button-glow"></div>
                </button>
                
                <button className="cta-button secondary group">
                  <span className="button-content">
                    Watch Demo
                    <svg className="button-icon" viewBox="0 0 24 24">
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div className="button-border"></div>
                </button>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="scroll-indicator">
                  <div className="scroll-arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
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
