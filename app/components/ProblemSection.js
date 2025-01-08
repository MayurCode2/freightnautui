"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection({ isDark }) {
  const problemsRef = useRef([]);
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: "🔄",
      title: "Complex Customs Procedures",
      description: "Our expert team handles all customs documentation and clearance, ensuring smooth and compliant shipments.",
      color: "from-purple-500 to-indigo-600",
      stats: "98%",
      statsText: "Faster Clearance",
      solution: "Automated Customs Processing"
    },
    {
      icon: "⚡",
      title: "Shipping Delays",
      description: "Real-time tracking and proactive problem-solving to minimize delays and keep your shipments on schedule.",
      color: "from-blue-500 to-cyan-600",
      stats: "45%",
      statsText: "Reduced Delays",
      solution: "Smart Route Optimization"
    },
    {
      icon: "📄",
      title: "Documentation Challenges",
      description: "Streamlined documentation process with digital solutions to reduce paperwork and errors.",
      color: "from-emerald-500 to-teal-600",
      stats: "99%",
      statsText: "Accuracy Rate",
      solution: "Digital Document Management"
    },
    {
      icon: "💰",
      title: "Cost Management",
      description: "Optimized routing and consolidated shipments to reduce your logistics costs.",
      color: "from-amber-500 to-orange-600",
      stats: "30%",
      statsText: "Cost Savings",
      solution: "AI-Powered Cost Optimization"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      problemsRef.current.forEach((problem, index) => {
        gsap.from(problem, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: problem,
            start: "top center+=150",
            toggleActions: "play none none reverse"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="problems-badge">
              <span className="badge-text">CHALLENGES WE SOLVE</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Common <span className="text-gradient">Logistics Problems</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We tackle the most challenging aspects of global logistics
          </p>
        </div>

        {/* Innovative Problems Display */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                ref={el => problemsRef.current[index] = el}
                className={`group relative ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                } max-w-3xl`}
              >
                {/* Problem Container */}
                <div className={`relative flex flex-col md:flex-row items-center 
                  ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8 md:gap-12`}>
                  
                  {/* Icon & Stats Column */}
                  <div className="w-full md:w-1/3 relative">
                    <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-3xl
                      bg-gradient-to-br ${problem.color}
                      flex items-center justify-center text-4xl md:text-5xl
                      transform group-hover:scale-110 transition-all duration-300
                      shadow-xl`}>
                      {problem.icon}
                    </div>
                    <div className={`absolute top-0 -right-4 md:right-0 bg-gradient-to-br 
                      ${problem.color} rounded-xl p-3 transform translate-y-1/2
                      group-hover:scale-105 transition-all duration-300`}>
                      <div className="text-white font-bold text-2xl">{problem.stats}</div>
                      <div className="text-white/80 text-sm">{problem.statsText}</div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full md:w-2/3">
                    <div className={`h-1 w-20 bg-gradient-to-r ${problem.color} mb-6`}></div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {problem.title}
                    </h3>
                    <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {problem.description}
                    </p>
                    
                    {/* Solution Tag */}
                    <div className="flex items-center space-x-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium
                        bg-gradient-to-r ${problem.color} text-white
                        transform group-hover:scale-105 transition-all duration-300`}>
                        {problem.solution}
                      </span>
                      <button className="flex items-center space-x-2 text-blue-500 font-medium
                        group-hover:translate-x-2 transition-all duration-300">
                        <span>Learn More</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index !== problems.length - 1 && (
                    <div className={`hidden md:block absolute -bottom-12 ${
                      index % 2 === 0 ? 'right-0' : 'left-0'
                    } w-px h-8 bg-gradient-to-b ${problem.color}`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <button className="px-8 py-4 rounded-xl text-white font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-500
              hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1
              transition-all duration-300">
              Discuss Your Challenges
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 