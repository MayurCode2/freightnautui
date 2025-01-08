"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({ isDark }) {
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'support'

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "We'll respond within 24 hours",
      contact: "mayur@freightnaut.com",
      link: "mailto:mayur@freightnaut.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+91 9823361823",
      link: "tel:+919823361823",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      description: "Come say hello at our office",
      contact: "Office No. 21,22,42,43, First Floor, Loni central",
      link: "https://goo.gl/maps/...",
      color: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(contactInfoRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="contact-badge">
              <span className="badge-text">GET IN TOUCH</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have questions? We're here to help with your logistics needs
          </p>
        </div>

        {/* Contact Methods */}
        <div ref={contactInfoRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-white'}
                hover:shadow-xl transition-all duration-500 hover:-translate-y-1
                border border-transparent hover:border-blue-500/20`}
            >
              <div className={`w-16 h-16 rounded-xl mb-6
                bg-gradient-to-br ${method.color}
                flex items-center justify-center text-white
                transform group-hover:scale-110 transition-all duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {method.description}
              </p>
              <a
                href={method.link}
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600
                  transition-colors duration-300"
              >
                <span>{method.contact}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div ref={formRef} className="max-w-4xl mx-auto">
          {/* Form Tabs */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-xl p-1 ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
              <button
                onClick={() => setActiveTab('message')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeTab === 'message' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : `${isDark ? 'text-slate-400' : 'text-slate-600'} hover:text-blue-500`
                  }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeTab === 'support' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : `${isDark ? 'text-slate-400' : 'text-slate-600'} hover:text-blue-500`
                  }`}
              >
                Get Support
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50
                      ${isDark 
                        ? 'bg-slate-800/30 border-slate-700 text-white' 
                        : 'bg-white border-slate-200'
                      }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50
                      ${isDark 
                        ? 'bg-slate-800/30 border-slate-700 text-white' 
                        : 'bg-white border-slate-200'
                      }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2
                  ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {activeTab === 'message' ? 'Message' : 'How can we help?'}
                </label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                    ${isDark 
                      ? 'bg-slate-800/30 border-slate-700 text-white' 
                      : 'bg-white border-slate-200'
                    }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl text-white font-semibold
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1
                  transition-all duration-300
                  flex items-center justify-center space-x-2"
              >
                <span>{activeTab === 'message' ? 'Send Message' : 'Submit Request'}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Info */}
          <div className={`lg:col-span-1 p-8 rounded-2xl ${
            isDark ? 'bg-slate-800/50' : 'bg-white'
          } shadow-xl`}>
            <h3 className="text-2xl font-bold mb-6">
              Our Location
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl
                  bg-gradient-to-br from-blue-500 to-indigo-600
                  flex items-center justify-center text-white`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Office Address</h4>
                  <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Office No. 21,22,42,43, First Floor,<br />
                    Loni central, loni KD Tal- Rahata,<br />
                    Dist: Ahmednagar, Maharashtra, 413736
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl
                  bg-gradient-to-br from-emerald-500 to-teal-600
                  flex items-center justify-center text-white`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <a
                href="https://goo.gl/maps/..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600
                  transition-colors duration-300 mt-4"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className={`rounded-2xl overflow-hidden shadow-xl
              ${isDark ? 'bg-slate-800/50 p-1' : 'bg-white p-1'}
              transform transition-all duration-500 hover:shadow-2xl`}>
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0876714539895!2d74.38847427499489!3d19.23825008200755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc43b2c6c13f3f%3A0x3a4f1e03e2c880b1!2sLoni%20Kalbhor%2C%20Maharashtra%20413736!5e0!3m2!1sen!2sin!4v1709636046045!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
                
                {/* Map Overlay for dark mode */}
                {isDark && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10
                    pointer-events-none"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 