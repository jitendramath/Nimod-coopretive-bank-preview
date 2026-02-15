import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050507]">

  {/* top luxury glow */}
  <div className="absolute -top-[260px] left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-emerald-500/20 blur-[170px] pointer-events-none"></div>

  {/* side soft glow */}
  <div className="absolute top-[45%] -left-[140px] w-[320px] h-[320px] bg-emerald-400/10 blur-[130px] pointer-events-none"></div>

  {/* right blue luxury glow */}
  <div className="absolute bottom-[10%] right-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

  {/* bottom fade blend */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">
        
        {/* Main Heading: प्रीमियम शिमर इफ़ेक्ट के साथ जो अब लैग नहीं करेगा */}
        <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-tight leading-[1.1] text-white mb-8">
          बहुउद्देशीय प्राथमिक ग्रामीण <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald bg-[length:200%_auto] animate-shimmer">
           सेवा सहकारी समिति निमोद 
          </span>
        </h1>

        {/* Subtitle: टेक्स्ट की स्पष्टता बढ़ाई गई है */}
        <p className="text-[1.1rem] md:text-[1.25rem] text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          एक बहुउद्देश्यीय ग्रामीण सहकारी संस्था, जो वित्तीय समावेशन, कृषि विकास, ऊर्जा आत्मनिर्भरता और सामाजिक सशक्तिकरण के सिद्धांतों पर आधारित है।
        </p>

        {/* CTA Buttons: रिस्पॉन्सिव और क्लिक करने में आसान */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
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

        {/* Stats Strip: लो-एंड फोंस पर भी तेज़ी से लोड होगा */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
          
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
