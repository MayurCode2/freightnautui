import React from 'react'

function Servicesection({ isDark }) {
  return (
    <section className="py-16 md:py-32 relative">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Enhanced Services Header */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-block mb-4 md:mb-6 animate-float">
          <div className={`service-badge-enhanced ${isDark ? 'dark-badge' : 'light-badge'}`}>
            <span className="badge-text-enhanced">OUR SERVICES</span>
            <div className="badge-glow"></div>
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
          Comprehensive <span className="text-gradient animate-gradient">Solutions</span>
        </h2>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Tailored logistics solutions to meet your business needs
        </p>
      </div>

      {/* Enhanced Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            icon: "🚢",
            title: "Freight Forwarding",
            description: "End-to-end logistics solutions for your cargo across sea, air, and land.",
            gradient: "from-blue-500 to-indigo-600"
          },
          {
            icon: "📋",
            title: "Custom Clearance",
            description: "Expert handling of customs documentation and clearance procedures.",
            gradient: "from-purple-500 to-pink-600"
          },
          {
            icon: "🌐",
            title: "Global Solutions",
            description: "Comprehensive import and export services tailored to your needs.",
            gradient: "from-emerald-500 to-teal-600"
          },
          {
            icon: "🛡️",
            title: "Cargo Insurance",
            description: "Full-service insurance solutions for your cargo and logistics needs.",
            gradient: "from-amber-500 to-orange-600"
          },
          {
            icon: "🏭",
            title: "Warehousing",
            description: "Secure storage solutions with real-time inventory management.",
            gradient: "from-rose-500 to-red-600"
          },
          {
            icon: "⚡",
            title: "Supply Chain",
            description: "Strategic planning to enhance your supply chain efficiency.",
            gradient: "from-cyan-500 to-blue-600"
          }
        ].map((service, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl ${
              isDark ? 'bg-slate-800/50' : 'bg-white'
            } hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                 style={{
                   background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`
                 }}></div>
            
            <div className="p-6 md:p-8 relative">
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                  bg-gradient-to-br ${service.gradient} text-white
                  transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-500
                transition-colors duration-300">
                {service.title}
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <div className="flex items-center space-x-2 text-blue-500 font-medium">
                <span>Learn More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Servicesection