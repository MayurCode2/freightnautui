"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProblemSection from '../components/ProblemSection';
import ContactSection from '../components/ContactSection';
import '../styles/contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function About({ isDark }) {
  const cardsRef = useRef([]);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const softwareHeaderRef = useRef(null);
  const featuresRef = useRef([]);
  const dashboardRef = useRef(null);
  const [showCards, setShowCards] = useState(true);

  const cards = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To provide innovative and efficient logistics solutions that empower businesses to thrive in the global market."
    },
    {
      icon: "👥",
      title: "Our Team",
      description: "A dedicated team of logistics experts with decades of combined experience in the industry."
    },
    {
      icon: "⭐",
      title: "Our Values",
      description: "Integrity, reliability, and excellence in every aspect of our service delivery."
    }
  ];

  
  useEffect(() => {
    // Header Animation
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Image Animation
    gsap.from(imageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Cards Animation
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top center+=150",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Add software section animations
    gsap.from(softwareHeaderRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: softwareHeaderRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Features animation
    featuresRef.current.forEach((feature, index) => {
      gsap.from(feature, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: feature,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Dashboard animation
    gsap.from(dashboardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: dashboardRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0A0F1C] text-white' : 'bg-white text-slate-900'
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="rust-badge">
              <span className="rust-text">ABOUT US</span>
              <div className="rust-line"></div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Revolutionizing Global <span className="text-gradient">Logistics</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Your trusted partner in global logistics since 2022
          </p>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="mb-32">
          <div className="advanced-glass-container">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Logistics and shipping"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="advanced-glass-text">
                  <h3 className="text-2xl font-bold text-white mb-2">Global Logistics Excellence</h3>
                  <p className="text-slate-200">Connecting businesses worldwide with innovative solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`day-night-card group ${
                isDark ? 'dark-card' : 'light-card'
              }`}
            >
              <div className="card-inner">
                <div className={`card-icon-wrapper ${
                  isDark ? 'dark-icon' : 'light-icon'
                }`}>
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <h3 className="card-title-new">{card.title}</h3>
                <p className={`card-text ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {card.description}
                </p>
              </div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Software Features Section */}
      

        {/* Enhanced Services Section */}
       
      </div>
    </section>
  );
}

// Create a new FeatureCard component for better code organization
const FeatureCard = ({ feature, index, isDark, featuresRef, className }) => (
  <div
    ref={el => featuresRef.current[index] = el}
    className={`group ${className}`}
  >
    <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-white/80'}
      border border-blue-500/10 hover:border-blue-500/30
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl
          flex items-center justify-center text-xl md:text-2xl
          ${isDark ? 'bg-slate-700' : 'bg-blue-50'}
          group-hover:scale-110 transition-transform duration-300`}>
          {feature.icon}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-blue-500
            transition-colors duration-300">
            {feature.title}
          </h3>
          <p className={`text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  </div>
); 