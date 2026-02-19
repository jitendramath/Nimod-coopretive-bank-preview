"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Leaf, TrendingUp, ArrowRight } from "lucide-react";

export default function AboutCommitment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const commitments = [
    {
      icon: HeartHandshake,
      title: "सदस्य सर्वोपरि",
      desc: "हर निर्णय और सेवा समिति के सदस्यों और ग्रामीण परिवारों के हितों को ध्यान में रखकर।",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20"
    },
    {
      icon: TrendingUp,
      title: "सतत विकास",
      desc: "किसानों और नागरिकों की आय तथा आर्थिक स्थिति को निरंतर मजबूत बनाना।",
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20"
    },
    {
      icon: Leaf,
      title: "आत्मनिर्भर ग्रामीण",
      desc: "कृषि, ऊर्जा और स्थानीय रोजगार को बढ़ावा देकर आत्मनिर्भर मॉडल स्थापित करना।",
      color: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-500/10 border-teal-100 dark:border-teal-500/20"
    },
    {
      icon: Sparkles,
      title: "भविष्य की तैयारी",
      desc: "आधुनिक तकनीक और सहकारिता के समन्वय से विकास को नई ऊंचाइयों तक ले जाना।",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-500/10 border-purple-100 dark:border-purple-500/20"
    },
  ];

  // 🖱️ Track active card for Indicator Dots
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; // Mobile card width approx
      const index = Math.round(scrollLeft / cardWidth);
      const safeIndex = Math.min(Math.max(index, 0), commitments.length - 1);
      setActiveIndex(safeIndex);
    }
  };

  return (
    <section className="relative py-16 md:py-20 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">

      {/* 🕸️ Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* 💡 Ambient Background Glow (Small & Subtle) */}
      <div className="absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="w-full md:w-[90%] max-w-7xl mx-auto relative z-10">

        {/* --- Header --- */}
        <div className="text-center px-4 mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
          >
            हमारी <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">प्रतिबद्धता</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-medium"
          >
            विकास, विश्वास और पारदर्शिता के साथ ग्रामीण समाज की निरंतर सेवा।
          </motion.p>
        </div>

        {/* --- 📱 MOBILE: Swipeable Container | 💻 DESKTOP: 4-Column Grid --- */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          /* Added classes to hide scrollbar natively across browsers */
          className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-6 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* snap-always keeps the lazy swipe effect */
              className="flex-shrink-0 w-[82vw] sm:w-[300px] lg:w-auto snap-center snap-always group"
            >
              {/* Card (Compact, Center Aligned) */}
              <div className="relative h-full p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 text-center flex flex-col items-center">

                {/* Internal Hover Glow */}
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none -z-10" />

                {/* Icon Box */}
                <div className={`w-14 h-14 mb-5 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 shadow-sm ${item.bg} ${item.color}`}>
                  <item.icon size={26} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Mobile 'Swipe' Hint Arrow (1st card only) */}
                {i === 0 && (
                  <div className="lg:hidden absolute top-4 right-4 text-gray-200 dark:text-gray-700 animate-pulse">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Spacer for mobile right padding */}
          <div className="w-2 lg:hidden flex-shrink-0" />
        </div>

        {/* --- 🟣 Mobile Indicator Dots --- */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-2">
          {commitments.map((_, i) => (
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

        {/* --- Bottom Premium Line (Ultra Compact) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-300 italic shadow-sm">
            <span className="text-emerald-500">"</span>
            सहकारिता के माध्यम से समृद्धि, विश्वास और विकास
            <span className="text-emerald-500">"</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
