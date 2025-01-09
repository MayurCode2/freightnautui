"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import '../styles/contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function About({ isDark }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    
    gsap.fromTo(content.children,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0A0F1C] text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            <span className="text-blue-500 font-medium">About Freightnaut</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transforming Global 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Logistics Solutions
            </span>
          </h1>
          <p className={`text-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We're revolutionizing the freight industry with cutting-edge technology and unparalleled expertise
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" // Add your image
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="stat-item">
                  <span className="text-3xl font-bold text-blue-400">500+</span>
                  <span className="text-sm text-slate-300">Global Partners</span>
                </div>
                <div className="stat-item">
                  <span className="text-3xl font-bold text-purple-400">98%</span>
                  <span className="text-sm text-slate-300">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="text-3xl font-bold text-teal-400">24/7</span>
                  <span className="text-sm text-slate-300">Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            {/* Mission */}
            <div className="feature-block">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                  🎯
                </span>
                Our Mission
              </h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                To revolutionize global logistics through innovative technology and sustainable solutions, 
                making international trade seamless and efficient for businesses worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="feature-block">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3">
                  ⭐
                </span>
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="value-item">
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Pushing boundaries with cutting-edge solutions
                  </p>
                </div>
                <div className="value-item">
                  <h4 className="font-semibold mb-2">Reliability</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Consistent and dependable service delivery
                  </p>
                </div>
                <div className="value-item">
                  <h4 className="font-semibold mb-2">Sustainability</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Eco-friendly logistics solutions
                  </p>
                </div>
                <div className="value-item">
                  <h4 className="font-semibold mb-2">Excellence</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Commitment to superior quality
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Join Our Team
              </button>
              <button className="px-8 py-4 rounded-xl border border-blue-500/30 font-medium hover:bg-blue-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Timeline */}
        {/* <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="space-y-8">
            <div className="timeline-item">
              <div className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-blue-500 font-bold">2022</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div>
                  <h4 className="font-semibold mb-2">Company Founded</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Launched with a vision to transform global logistics
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-purple-500 font-bold">2023</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <div>
                  <h4 className="font-semibold mb-2">Global Expansion</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Extended operations to 50+ countries
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-teal-500 font-bold">2024</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation Milestone</h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Launched AI-powered logistics platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

