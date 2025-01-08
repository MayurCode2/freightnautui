import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function SoftwareSection({ isDark }) {
    const softwareHeaderRef = useRef(null);
    const featuresRef = useRef([]);
    const softwareFeatures = [
        {
          icon: "📄",
          title: "Document Management",
          description: "Create, manage and share all your logistics documents in one centralized platform.",
          color: "from-blue-500/20 to-indigo-500/20"
        },
        {
          icon: "⚡",
          title: "Time & Error Reduction",
          description: "Eliminate manual data re-entry and reduce human error with our streamlined process.",
          color: "from-purple-500/20 to-pink-500/20"
        },
        {
          icon: "🎯",
          title: "Brand Consistency",
          description: "Maintain brand consistency across all your logistics documentation.",
          color: "from-amber-500/20 to-orange-500/20"
        },
        {
          icon: "🔄",
          title: "Real-time Updates",
          description: "Updates sync across all documents instantly, ensuring accuracy and efficiency.",
          color: "from-emerald-500/20 to-teal-500/20"
        }
      ];

      useEffect(() => {
        // Move GSAP registration and animations inside useEffect
        gsap.registerPlugin(ScrollTrigger);
        
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
    }, []);
    
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 md:mb-32">
              <div className="inline-block mb-4 md:mb-6">
                <div className="software-badge">
                  <span className="software-badge-text">FREIGHTNAUT SOFTWARE</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Streamline your logistics operations with our comprehensive solution
              </p>
            </div>

            {/* Features Display */}
            <div className="relative max-w-7xl mx-auto">
              {/* Center Feature - Shown first on mobile */}
              <div className="mb-12 md:mb-0 md:hidden">
                <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl ${isDark ? 'bg-slate-800/80' : 'bg-white'}
                  border-2 border-blue-500/20 shadow-xl`}
                >
                  <div className="text-center mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-xl md:rounded-2xl
                      bg-gradient-to-br from-blue-500 to-indigo-500
                      flex items-center justify-center text-3xl md:text-4xl text-white">
                      💡
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">
                    Complete Solution
                  </h3>
                  <p className={`text-center text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    All-in-one platform for your logistics documentation needs with real-time updates
                    and seamless integration.
                  </p>
                  <div className="mt-6 md:mt-8 text-center">
                    <button className="w-full md:w-auto px-6 py-3 rounded-xl text-white font-semibold
                      bg-gradient-to-r from-blue-500 to-indigo-500
                      hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start md:items-center">
                {/* Left Column */}
                <div className="space-y-6 md:space-y-16">
                  {softwareFeatures.slice(0, 2).map((feature, index) => (
                    <FeatureCard 
                      key={index} 
                      feature={feature} 
                      index={index} 
                      isDark={isDark}
                      featuresRef={featuresRef}
                      className="feature-item-left"
                    />
                  ))}
                </div>

                {/* Center Column - Hidden on mobile */}
                <div className="hidden md:block relative">
                  <div className={`p-8 rounded-3xl ${isDark ? 'bg-slate-800/80' : 'bg-white'}
                    border-2 border-blue-500/20 shadow-2xl transform hover:scale-105
                    transition-all duration-500`}
                  >
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto rounded-2xl
                        bg-gradient-to-br from-blue-500 to-indigo-500
                        flex items-center justify-center text-4xl text-white">
                        💡
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">
                      Complete Solution
                    </h3>
                    <p className={`text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      All-in-one platform for your logistics documentation needs with real-time updates
                      and seamless integration.
                    </p>
                    <div className="mt-8 text-center">
                      <button className="px-6 py-3 rounded-xl text-white font-semibold
                        bg-gradient-to-r from-blue-500 to-indigo-500
                        hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 md:space-y-16">
                  {softwareFeatures.slice(2, 4).map((feature, index) => (
                    <FeatureCard 
                      key={index + 2} 
                      feature={feature} 
                      index={index + 2} 
                      isDark={isDark}
                      featuresRef={featuresRef}
                      className="feature-item-right"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SoftwareSection

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