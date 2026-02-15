import { content } from "@/data/content";
import Link from "next/link";

export default function Hero() {
  // Safe Destructuring
  const heroData = content?.hero || {};
  const { title, span, subtitle, stats } = heroData;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Background Elements (Blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-premium-mint/20 rounded-[100%] blur-[120px] -z-10 opacity-60 animate-pulse-slow"></div>
      
      <div className="w-[92%] max-w-[1180px] mx-auto text-center relative z-10">
        
        {/* Main Heading */}
        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] text-premium-charcoal mb-6 reveal">
          {title} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald to-premium-forest">
            {span}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[1.1rem] md:text-[1.25rem] text-ui-soft max-w-2xl mx-auto mb-10 leading-relaxed reveal delay-100">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal delay-200">
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-premium-charcoal text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-premium-charcoal/20"
          >
            संपर्क करें
          </Link>
          <Link 
            href="#services" 
            className="px-8 py-4 bg-white text-premium-charcoal border border-border-light rounded-full font-bold hover:bg-gray-50 transition-colors duration-300"
          >
            सेवाएं देखें
          </Link>
        </div>

        {/* Stats Strip - The Fix for .map() error */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-border-light pt-12 reveal delay-300">
          {stats?.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[2rem] md:text-[2.5rem] font-bold text-premium-forest block">
                {stat.value}
              </span>
              <span className="text-[0.9rem] text-ui-muted font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
