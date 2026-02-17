"use client";

import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-premium-bg transition-colors duration-500">

      {/* 🌌 Ambient Glow (Dynamic) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-premium-accent/5 dark:bg-emerald-400/10 blur-[180px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">
        
        {/* 🟢 LIVE STATUS BADGE (Theme Aware) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-premium-surface border border-premium-border backdrop-blur-md mb-10 shadow-sm transition-colors duration-500"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-premium-accent shadow-[0_0_8px_var(--accent-glow)]"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-premium-accent uppercase">
            Always Connected
          </span>
          <div className="w-[1px] h-3 bg-premium-border mx-1"></div>
          <Wifi size={14} className="text-premium-muted" />
        </motion.div>

        {/* 👑 MAIN HEADING (Premium Gradient) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-premium-text tracking-tight mb-8 leading-tight transition-colors duration-500"
        >
          हमसे <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-premium-accent to-amber-500 dark:from-indigo-400 dark:via-white dark:to-amber-400 animate-shimmer bg-[length:200%_auto]">संपर्क करें</span>
        </motion.h1>

        {/* 📝 SUBTEXT (Refined Colors) */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-premium-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500 font-medium"
        >
          निमोद बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति अपने सदस्यों और ग्रामीण क्षेत्र की सेवा के लिए समर्पित है। 
          चाहे <span className="text-premium-accent font-bold">कृषि ऋण</span> हो, <span className="text-amber-600 dark:text-amber-400 font-bold">बैंकिंग सेवा</span> हो या कोई सुझाव—हमारे द्वार आपके लिए हमेशा खुले हैं।
        </motion.p>

      </div>
    </section>
  );
}
