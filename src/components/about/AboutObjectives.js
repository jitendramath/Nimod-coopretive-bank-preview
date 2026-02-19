"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Tractor, Users, HandCoins, Sprout, Building2, Sun, ArrowRight } from "lucide-react";

export default function AboutObjectives() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const objectives = [
    {
      icon: HandCoins,
      title: "सुलभ वित्तीय सेवाएं",
      desc: "किसानों को समय पर ऋण एवं आर्थिक सहयोग।",
      color: "emerald",
    },
    {
      icon: Tractor,
      title: "कृषि विकास",
      desc: "आधुनिक तकनीकों से उत्पादन में वृद्धि करना।",
      color: "blue",
    },
    {
      icon: Users,
      title: "सामूहिक प्रगति",
      desc: "सहकारिता से सामाजिक सहयोग को बढ़ावा।",
      color: "emerald",
    },
    {
      icon: Sprout,
      title: "ग्रामीण समृद्धि",
      desc: "ग्रामीण परिवारों को आत्मनिर्भर बनाना।",
      color: "blue",
    },
    {
      icon: Building2,
      title: "संस्थागत विकास",
      desc: "पारदर्शी प्रशासन द्वारा संस्था का विस्तार।",
      color: "emerald",
    },
    {
      icon: Sun,
      title: "नवाचार एवं ऊर्जा",
      desc: "सौर ऊर्जा द्वारा क्षेत्रीय प्रगति को गति देना।",
      color: "blue",
    },
  ];

  // 🖱️ Logic to track active card on scroll (For Dots)
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.75; // Approx card width logic
      const index = Math.round(scrollLeft / cardWidth);
      // Clamp index to bounds
      const safeIndex = Math.min(Math.max(index, 0), objectives.length - 1);
      setActiveIndex(safeIndex);
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">

      {/* 🕸️ Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* 💡 Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full md:w-[90%] max-w-7xl mx-auto relative z-10">

        {/* --- Header --- */}
        <div className="text-center px-4 mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            हमारे <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400">उद्देश्य</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            ग्रामीण विकास और आर्थिक सशक्तिकरण की दिशा में हमारे कदम।
          </p>
        </div>

        {/* --- 📱 MOBILE: Swipeable Container | 💻 DESKTOP: Grid --- */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-8 md:pb-0 scrollbar-hide"
        >
          {objectives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center snap-always group"
                >
              <div className="relative h-full p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">
                
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-colors duration-300 ${
                  item.color === 'emerald' 
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                  : 'bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400'
                }`}>
                  <item.icon size={24} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Mobile 'Swipe' Hint Arrow (Only visible on mobile for first card) */}
                {i === 0 && (
                  <div className="md:hidden absolute top-6 right-6 text-gray-300 animate-pulse">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Spacer for mobile right padding */}
          <div className="w-2 md:hidden flex-shrink-0" />
        </div>

        {/* --- 🟣 Mobile Indicator Dots (Instagram Style) --- */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {objectives.map((_, i) => (
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

      </div>
    </section>
  );
}
