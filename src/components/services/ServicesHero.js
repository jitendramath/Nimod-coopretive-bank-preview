"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050507]">

      {/* 🔥 top glow */}
      <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[180px] pointer-events-none"></div>

      {/* 🔴 side crimson glow */}
      <div className="absolute top-[40%] -left-[120px] w-[300px] h-[300px] bg-rose-500/10 blur-[160px] pointer-events-none"></div>

      {/* 🔵 blue orb */}
      <div className="absolute bottom-[10%] right-[-120px] w-[340px] h-[340px] bg-sky-400/10 blur-[160px] pointer-events-none"></div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">

        {/* tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-8"
        >
          PACS Services • Rural Banking • Cooperative Strength
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[2.1rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] 
          font-bold leading-[1.15] tracking-tight mb-8"
        >
          हमारी सेवाएं  
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r 
          from-yellow-400 via-rose-400 to-sky-400 bg-[length:200%_auto] animate-shimmer">
            गांव से विकास तक
          </span>
        </motion.h1>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed 
          max-w-3xl mx-auto"
        >
          निमोद बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति किसानों, ग्रामीण परिवारों 
          और स्थानीय समुदाय के लिए वित्तीय, कृषि, उपभोक्ता एवं सामाजिक सेवाएं प्रदान करती है।  
          हमारा लक्ष्य केवल सेवाएं देना नहीं बल्कि ग्रामीण जीवन को आधुनिक, सुरक्षित और आत्मनिर्भर बनाना है।
        </motion.p>

        {/* stats pills */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10"
        >
          {[
            "कृषि ऋण सेवाएं",
            "डिजिटल बैंकिंग",
            "उर्वरक व बीज",
            "ग्रामीण विकास",
            "सरकारी योजनाएं",
            "SHG समर्थन"
          ].map((item, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 
              text-xs sm:text-sm text-white/70 backdrop-blur-sm hover:bg-white/10 
              transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}