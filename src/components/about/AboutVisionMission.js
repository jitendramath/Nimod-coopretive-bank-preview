"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, ArrowRight, Quote } from "lucide-react";

export default function AboutVisionMission() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const visionMissionData = [
    {
      icon: Eye,
      title: "हमारा दृष्टिकोण",
      desc: "ग्रामीण समुदाय को वित्तीय रूप से सशक्त बनाते हुए एक पारदर्शी, उत्तरदायी और आत्मनिर्भर सहकारी मॉडल स्थापित करना हमारा मुख्य दृष्टिकोण है। हमारा लक्ष्य है कि प्रत्येक किसान, महिला और युवा आधुनिक वित्तीय सेवाओं एवं संसाधनों से जुड़कर आर्थिक रूप से मजबूत बने।",
      tag: "Future Ready Rural Economy"
    },
    {
      icon: Target,
      title: "हमारा मिशन",
      desc: "सहकारिता के माध्यम से किसानों और ग्रामीण नागरिकों को सशक्त बनाना, उन्हें आधुनिक तकनीकों, वित्तीय सेवाओं और सरकारी योजनाओं से जोड़ना तथा क्षेत्रीय विकास में सक्रिय योगदान देना हमारा मिशन है। हम प्रगति और विश्वास के साथ निरंतर आगे बढ़ रहे हैं।",
      tag: "Cooperative Powered Growth"
    }
  ];

  // smooth dots tracking (throttled)
  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth * 0.85;
        const index = Math.round(scrollLeft / cardWidth);
        const safeIndex = Math.min(Math.max(index, 0), visionMissionData.length - 1);
        setActiveIndex(safeIndex);
      }
    });
  };

  return (
    <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden">

      {/* light noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* ambient glow (single blur only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full md:w-[90%] max-w-7xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center px-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            हमारा <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">दृष्टिकोण</span> और{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">मिशन</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            सहकारिता केवल एक व्यवस्था नहीं, बल्कि सामूहिक विकास की वह शक्ति है 
            जो ग्रामीण भारत को आत्मनिर्भर और समृद्ध बनाती है।
          </motion.p>
        </div>

        {/* swipe container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-6 lg:gap-12 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory 
          px-6 md:px-0 pb-8 md:pb-0 
          scrollbar-hide 
          scroll-smooth 
          will-change-transform 
          [transform:translateZ(0)]"
        >
          {visionMissionData.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[88vw] sm:w-[400px] md:w-auto snap-center snap-always will-change-transform"
            >
              <div className="relative h-full p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-md shadow-gray-200/30 dark:shadow-none">

                <div className="relative z-10">
                  {/* icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-emerald-600 dark:text-emerald-400 mb-8">
                    <item.icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[15px] md:text-base font-medium">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
                    <Sparkles size={16} />
                    {item.tag}
                  </div>
                </div>

                {/* swipe arrow hint */}
                {i === 0 && (
                  <div className="md:hidden absolute top-8 right-8 text-gray-300 dark:text-gray-600 animate-pulse">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="w-2 md:hidden flex-shrink-0" />
        </div>

        {/* dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-2 mb-10">
          {visionMissionData.map((_, i) => (
            <div 
              key={i}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i 
                  ? "w-8 h-1.5 bg-emerald-500" 
                  : "w-2 h-2 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* quote section (unchanged smooth) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-16 md:mt-32 max-w-4xl mx-auto px-4 md:px-0"
        >
          <div className="relative p-8 md:p-14 rounded-[2.5rem] bg-white/60 dark:bg-[#111]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl shadow-emerald-900/10 dark:shadow-none overflow-hidden text-center">

            <div className="absolute -top-6 -left-2 md:top-4 md:left-8 text-emerald-500/10 dark:text-emerald-500/5 -rotate-12 pointer-events-none">
              <Quote size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10">
               <p className="text-gray-800 dark:text-gray-200 text-xl md:text-3xl leading-relaxed italic font-medium">
                 "हमारा विश्वास है कि जब ग्रामीण समाज संगठित होकर <span className="text-emerald-600 dark:text-emerald-400 font-bold">सहकारिता</span> के मार्ग पर चलता है, 
                 तो विकास केवल एक लक्ष्य नहीं बल्कि एक <span className="underline decoration-emerald-500/30 decoration-4 underline-offset-4">निरंतर यात्रा</span> बन जाता है।"
               </p>

               <div className="mt-10 flex justify-center items-center gap-4">
                 <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
