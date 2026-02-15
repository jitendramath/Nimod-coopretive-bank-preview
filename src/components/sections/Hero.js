import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* --- Background Ambient Glow (The "Premium" Feel) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-premium-emerald/10 rounded-full blur-[120px] -z-10 animate-pulse-slow pointer-events-none"></div>
      
      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">
        
        {/* Main Heading */}
        <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-tight leading-[1.1] text-white mb-8 reveal">
          निमोद ग्राम सेवा <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald bg-[length:200%_auto] animate-shimmer">
            सहकारी समिति
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[1.1rem] md:text-[1.25rem] text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed reveal delay-100">
          एक बहुउद्देश्यीय ग्रामीण सहकारी संस्था, जो वित्तीय समावेशन, कृषि विकास, ऊर्जा आत्मनिर्भरता और सामाजिक सशक्तिकरण के सिद्धांतों पर आधारित है।
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 reveal delay-200">
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-premium-emerald text-premium-black rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(58,244,183,0.3)] transition-all duration-300"
          >
            संपर्क करें
          </Link>
          <Link 
            href="#services" 
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 hover:border-premium-emerald/50 transition-all duration-300 backdrop-blur-sm"
          >
            सेवाएं देखें
          </Link>
        </div>

        {/* Stats Strip (Hardcoded for Safety) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12 reveal delay-300">
          
          <div className="flex flex-col items-center">
            <span className="text-[2.5rem] md:text-[3rem] font-bold text-premium-emerald block">
              900+
            </span>
            <span className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider mt-1">
              किसान सदस्य
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[2.5rem] md:text-[3rem] font-bold text-premium-emerald block">
              1200+
            </span>
            <span className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider mt-1">
              परिवार जुड़े
            </span>
          </div>

          {/* Mobile पर यह center में दिखेगा */}
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="text-[2.5rem] md:text-[3rem] font-bold text-premium-emerald block">
              2009
            </span>
            <span className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider mt-1">
              स्थापना वर्ष
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
