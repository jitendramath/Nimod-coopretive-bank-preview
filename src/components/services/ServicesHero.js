"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-premium-bg transition-colors duration-500">

      {/* 🔥 Top Glow (Dynamic) */}
      <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/20 dark:bg-yellow-400/10 blur-[180px] pointer-events-none transition-colors duration-500"></div>

      {/* 🔴 Side Crimson Glow (Dynamic) */}
      <div className="absolute top-[40%] -left-[120px] w-[300px] h-[300px] bg-rose-500/20 dark:bg-rose-500/10 blur-[160px] pointer-events-none transition-colors duration-500"></div>

      {/* 🔵 Blue Orb (Dynamic) */}
      <div className="absolute bottom-[10%] right-[-120px] w-[340px] h-[340px] bg-sky-500/20 dark:bg-sky-400/10 blur-[160px] pointer-events-none transition-colors duration-500"></div>

      {/* Bottom Fade (Matches Theme) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-premium-bg pointer-events-none transition-colors duration-500"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-premium-surface border border-premium-border text-xs tracking-widest text-premium-muted uppercase mb-8 shadow-sm transition-colors duration-500"
        >
          PACS Services • Rural Banking • Cooperative Strength
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[2.1rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] 
          font-bold leading-[1.15] tracking-tight mb-8 text-premium-text transition-colors duration-500"
        >
          हमारी सेवाएं  
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r 
          from-yellow-600 via-rose-500 to-sky-500 
          dark:from-yellow-400 dark:via-rose-400 dark:to-sky-400 
          bg-[length:200%_auto] animate-shimmer">
            गांव से विकास तक
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-premium-muted text-base sm:text-lg md:text-xl leading-relaxed 
          max-w-3xl mx-auto transition-colors duration-500"
        >
          निमोद बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति किसानों, ग्रामीण परिवारों 
          और स्थानीय समुदाय के लिए वित्तीय, कृषि, उपभोक्ता एवं सामाजिक सेवाएं प्रदान करती है।  
          हमारा लक्ष्य केवल सेवाएं देना नहीं बल्कि ग्रामीण जीवन को आधुनिक, सुरक्षित और आत्मनिर्भर बनाना है।
        </motion.p>

        {/* Stats Pills */}
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
              className="px-4 py-2 rounded-full bg-premium-surface border border-premium-border 
              text-xs sm:text-sm text-premium-muted font-medium backdrop-blur-sm 
              hover:border-premium-accent hover:text-premium-accent hover:bg-premium-accent/5
              transition-all duration-300 cursor-default shadow-sm"
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
