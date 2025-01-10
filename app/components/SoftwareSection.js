import React from 'react';
import Image from 'next/image';

function SoftwareSection({ isDark }) {
  const softwareFeatures = [
    {
      title: "Easy Document Management",
      description: "Create, manage and share all your logistics documents in one centralized platform. Say goodbye to outdated paper processes and miscommunication issues.",
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=3270&auto=format&fit=crop",
      features: ["Centralized Platform", "Digital Processes", "Easy Sharing"]
    },
    {
      title: "Save Time & Eliminate Errors",
      description: "Avoid customs delays and missed shipments by eliminating manual data re-entry and reducing human error with our streamlined process.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      features: ["No Manual Re-entry", "Error Reduction", "Faster Processing"]
    },
    {
      title: "Brand Consistency",
      description: "Maintain brand consistency with flexible and correct document designs across all your logistics documentation.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
      features: ["Consistent Branding", "Flexible Design", "Professional Look"]
    },
    {
      title: "Seamless Updates",
      description: "Enter data once, any updates made will sync across all documents seamlessly, ensuring accuracy and efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3270&auto=format&fit=crop",
      features: ["Real-time Sync", "Automatic Updates", "Data Accuracy"]
    }
  ];

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
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-blue-500 font-medium">Freightnaut Software</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your one-stop solution for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              export documents & logistics operations
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Cloud-based software that streamlines the entire documentation process
          </p>
        </div>

        {/* Features with Images */}
        <div className="space-y-32">
          {softwareFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 
                ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Image Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                    rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500">
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-blue-500/10">
                    <div className="relative w-full h-[300px] md:h-[400px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent 
                    bg-gradient-to-r from-blue-500 to-purple-500">
                    {feature.title}
                  </h3>
                  <p className={`text-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {feature.features.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="px-8 py-4 rounded-xl text-white font-medium
                  bg-gradient-to-r from-blue-500 to-purple-500
                  hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300
                  transform hover:-translate-y-1">
                  Learn More
                  <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftwareSection; 