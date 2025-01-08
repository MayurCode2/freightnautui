"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ isDark }) {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(textRef.current.querySelectorAll('.reveal-text'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from('.stat-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    }, "-=0.5");

    return () => tl.kill();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={heroRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className={`absolute inset-0 bg-grid-pattern ${isDark ? 'opacity-20' : 'opacity-10'}`}></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8" ref={textRef}>
            <div className="reveal-text">
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                isDark ? 'bg-slate-800/50' : 'bg-slate-100'
              } backdrop-blur-sm border border-slate-700/50`}>
                <span className="pulse-dot"></span>
                <span className="ml-2 text-sm font-medium bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Next Generation Logistics
                </span>
              </div>
            </div>

            <h1 className="reveal-text text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Revolutionizing</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Global Logistics
              </span>
            </h1>

            <p className={`reveal-text text-xl max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Transform your international trade with cutting-edge digital solutions
            </p>

            <div className="reveal-text flex flex-wrap gap-4">
              <button className="primary-button group">
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="secondary-button group">
                Watch Demo
                <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative" ref={imageRef}>
            <div className={`dashboard-preview ${isDark ? 'dark-preview' : 'light-preview'}`}>
              <Image
                src="/dashboard-preview.jpg"
                alt="Logistics Dashboard"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="stat-card absolute -top-6 -left-6">
                <div className="stat-icon">📈</div>
                <div>
                  <p className="text-sm text-slate-400">Success Rate</p>
                  <p className="text-lg font-bold text-gradient">99.9%</p>
                </div>
              </div>

              <div className="stat-card absolute -bottom-6 -right-6">
                <div className="stat-icon">🌍</div>
                <div>
                  <p className="text-sm text-slate-400">Global Reach</p>
                  <p className="text-lg font-bold text-gradient">150+ Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 