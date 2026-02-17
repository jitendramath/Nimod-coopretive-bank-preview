"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-premium-bg transition-colors duration-500">

      {/* 🌌 Premium Emerald Glow (Dynamic) */}
      <div className="absolute -top-[260px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-premium-accent/20 blur-[180px] pointer-events-none transition-colors duration-500" />

      {/* 🌌 Side Aura (Dynamic) */}
      <div className="absolute top-[40%] -left-[120px] w-[320px] h-[320px] bg-cyan-500/10 dark:bg-cyan-400/10 blur-[150px] pointer-events-none transition-colors duration-500" />

      {/* 🌌 Bottom Fade (Matches Theme) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-premium-bg pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10 text-center">

        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-premium-surface border border-premium-border text-[11px] md:text-xs 
          tracking-widest text-premium-muted uppercase mb-8 shadow-sm transition-colors duration-500"
        >
          Rural Infrastructure • Development Projects
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[2.2rem] leading-[1.2] 
          sm:text-[2.8rem] 
          md:text-[3.5rem] 
          lg:text-[4.3rem] 
          font-bold tracking-tight mb-8 text-premium-text transition-colors duration-500"
        >
          हमारी विकास
          <br />
          <span className="text-transparent bg-clip-text 
          bg-gradient-to-r from-premium-accent via-teal-500 to-premium-accent 
          bg-[length:200%_auto] animate-shimmer">
            परियोजनाएं
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-premium-muted text-[15px] md:text-lg 
          leading-relaxed max-w-3xl mx-auto transition-colors duration-500"
        >
          बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद केवल एक वित्तीय संस्था नहीं,
          बल्कि ग्रामीण विकास का एक सशक्त केंद्र है।  
          हमारी प्रत्येक परियोजना ऊर्जा, कृषि, बैंकिंग और सामाजिक सशक्तिकरण के माध्यम से
          ग्रामीण जीवन को आधुनिक और आत्मनिर्भर बनाने की दिशा में कार्य कर रही है।
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            "15.34KW Solar Plant",
            "2000MT Warehouse",
            "900+ Members",
            "70+ Years Service",
          ].map((item, i) => (
            <div
              key={i}
              className="px-5 py-2 rounded-full bg-premium-surface border border-premium-border 
              text-[12px] md:text-sm text-premium-muted backdrop-blur-sm shadow-sm transition-colors duration-500"
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
