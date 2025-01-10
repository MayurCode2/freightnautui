"use client";

import React from 'react';

function ContactSection({ isDark }) {
  const contactDetails = {
    address: "Office No. 21,22,42,43, First Floor, Loni central, loni KD Tal- Rahata, Dist: Ahmednagar, Maharashtra, 413736",
    phone: "+91 9823361823",
    email: "mayur@freightnaut.com"
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-blue-500 font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Our Expert Team
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We're here to help with your logistics needs
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className={`p-8 rounded-2xl border border-blue-500/10 
              ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                      {contactDetails.address}
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {contactDetails.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {contactDetails.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/10 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.161358699198!2d74.45793127580204!3d19.577586581733094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcf797d4c5c48d%3A0x262d519cbdb080c4!2sLoni%20Central!5e0!3m2!1sen!2sin!4v1736505890510!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`p-8 rounded-2xl border border-blue-500/10 
            ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border 
                      ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'}
                      focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                      transition-colors duration-300`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 rounded-xl border 
                      ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'}
                      focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                      transition-colors duration-300`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-3 rounded-xl border 
                      ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'}
                      focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                      transition-colors duration-300`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us about your requirements"
                    className={`w-full px-4 py-3 rounded-xl border 
                      ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'}
                      focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                      transition-colors duration-300`}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl text-white font-medium
                  bg-gradient-to-r from-blue-500 to-purple-500
                  hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300
                  transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 