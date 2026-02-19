"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Scale, FileCheck, ArrowRight, Award } from "lucide-react";

export default function AboutGovernance() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const governance = [
    {
      icon: Users,
      title: "प्रबंधन समिति",
      desc: "12 सदस्यीय निर्वाचित समिति, जो सामूहिक निर्णय और सदस्य हितों को सर्वोपरि रखती है।",
      theme: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20"
    },
    {
      icon: Scale,
      title: "लोकतांत्रिक प्रणाली",
      desc: "सहकारिता अधिनियम के अनुसार नियमित चुनाव और सभी को समान मताधिकार।",
      theme: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20"
    },
    {
      icon: ShieldCheck,
      title: "पारदर्शी प्रशासन",
      desc: "हर वित्तीय और प्रशासनिक निर्णय पूरी पारदर्शिता और जवाबदेही के साथ।",
      theme: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/20"
    },
    {
      icon: FileCheck,
      title: "नियमित ऑडिट",
      desc: "सरकारी मानकों के अनुसार प्रतिवर्ष वैधानिक ऑडिट और सख्त निरीक्षण।",
      theme: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20"
    },
  ];

  // 🖱️ Logic for Indicator Dots
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; // Mobile card width approx
      const index = Math.round(scrollLeft / cardWidth);
      const safeIndex = Math.min(Math.max(index, 0), governance.length - 1);
      setActiveIndex(safeIndex);
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-[#080808] overflow-hidden transition-colors duration-500">

      {/* 🕸️ Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="w-full md:w-[90%] max-w-7xl mx-auto relative z-10">

        {/* --- Header Section (Compact) --- */}
        <div className="text-center px-4 mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            प्रबंधन एवं <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400">शासन</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-[15px] md:text-base leading-relaxed font-medium"
          >
            पारदर्शिता, लोकतंत्र और जवाबदेही के सिद्धांतों पर आधारित संचालन।
          </motion.p>
        </div>

        {/* --- 📱 MOBILE: Swipeable Container | 💻 DESKTOP: 4-Column Grid --- */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-6 lg:pb-0 scrollbar-hide"
        >
          {governance.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* 'snap-always' forces a stop at each card */
              className="flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-auto snap-center snap-always group"
            >
              {/* Compact Card */}
              <div className="relative h-full p-6 md:p-7 rounded-[1.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">

                {/* Top Row: Icon */}
                <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.theme}`}>
                  <item.icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title & Desc */}
                <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>

                {/* Swipe Hint (Only on the first card, mobile only) */}
                {i === 0 && (
                  <div className="lg:hidden absolute top-6 right-6 text-gray-300 dark:text-gray-600 animate-pulse">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Mobile Right Padding Spacer */}
          <div className="w-2 lg:hidden flex-shrink-0" />
        </div>

        {/* --- 🟣 Mobile Indicator Dots --- */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-2">
          {governance.map((_, i) => (
            <div 
              key={i}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i 
                  ? "w-6 h-1.5 bg-emerald-500" 
                  : "w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* --- Compact Trust Bar --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 pt-8 border-t border-gray-100 dark:border-white/5 text-center flex flex-col items-center justify-center gap-2"
        >
          <Award size={20} className="text-emerald-500 mb-1" />
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm tracking-wide font-semibold uppercase">
            राजस्थान सहकारिता अधिनियम के अंतर्गत पंजीकृत एवं वैधानिक रूप से संचालित
          </p>
        </motion.div>

      </div>
    </section>
  );
}
