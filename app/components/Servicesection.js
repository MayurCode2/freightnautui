import React from 'react';

function Servicesection({ isDark }) {
  const services = [
    {
      icon: "🚢",
      title: "Freight Forwarding",
      description: "End-to-end logistics solutions for your cargo across sea, air, and land.",
      features: ["Global Coverage", "Real-time Tracking", "Custom Solutions"]
    },
    {
      icon: "📋",
      title: "Custom Clearance",
      description: "Expert handling of customs documentation and clearance procedures.",
      features: ["24/7 Support", "Fast Processing", "Compliance Assured"]
    },
    {
      icon: "🌐",
      title: "Global Solutions",
      description: "Comprehensive import and export services tailored to your needs.",
      features: ["200+ Partners", "Worldwide Network", "Local Expertise"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2"></span>
            <span className="text-blue-500 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Global 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Logistics Solutions
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Streamline your supply chain with our comprehensive suite of services
          </p>
        </div>

        {/* Services Layout */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 
              ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              {/* Service Visual */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Background Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                    rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                  
                  {/* Service Card */}
                  <div className={`relative p-8 rounded-2xl border border-blue-500/10 backdrop-blur-sm
                    ${isDark ? 'bg-slate-800/50' : 'bg-white/50'}`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 
                        flex items-center justify-center text-3xl shadow-lg transform hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} 
                  border border-blue-500/10 backdrop-blur-sm`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold">Fast Implementation</h4>
                  </div>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Quick setup and integration with your existing systems
                  </p>
                </div>

                <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white/50'}
                  border border-blue-500/10 backdrop-blur-sm`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold">Secure & Reliable</h4>
                  </div>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Enterprise-grade security and 99.9% uptime guarantee
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicesection;