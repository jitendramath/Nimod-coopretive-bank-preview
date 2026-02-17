"use client";

import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">

      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">
        
        {/* 🟢 LIVE STATUS BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            Always Connected
          </span>
          <div className="w-[1px] h-3 bg-white/20 mx-1"></div>
          <Wifi size={14} className="text-white/40" />
        </motion.div>

        {/* 👑 MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight"
        >
          हमसे <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-amber-400 animate-shimmer bg-[length:200%_auto]">संपर्क करें</span>
        </motion.h1>

        {/* 📝 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          निमोद बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति अपने सदस्यों और ग्रामीण क्षेत्र की सेवा के लिए समर्पित है। 
          चाहे <span className="text-emerald-400">कृषि ऋण</span> हो, <span className="text-amber-400">बैंकिंग सेवा</span> हो या कोई सुझाव—हमारे द्वार आपके लिए हमेशा खुले हैं।
        </motion.p>

      </div>
    </section>
  );
}
