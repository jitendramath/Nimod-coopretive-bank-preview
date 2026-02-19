"use client";

import { motion } from "framer-motion";
import { Calendar, Landmark, Sprout, Sun, CheckCircle2 } from "lucide-react";

export default function AboutTimeline() {
  const timeline = [
    {
      year: "1954",
      title: "समिति की स्थापना",
      desc: "21 सितम्बर 1954 को एक नई उम्मीद का जन्म हुआ। उद्देश्य स्पष्ट था—किसानों को साहूकारों से मुक्त करना और वित्तीय सहयोग देना।",
      icon: Calendar,
      theme: "cyan",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      year: "1985",
      title: "हरित विस्तार",
      desc: "हमने केवल ऋण नहीं, बल्कि साधन दिए। उन्नत बीज, खाद और कृषि उपकरणों के वितरण के साथ समिति ने कृषि सेवाओं में कदम रखा।",
      icon: Sprout,
      theme: "emerald",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      year: "2005",
      title: "बैंकिंग क्रांति",
      desc: "परंपरा और तकनीक का संगम। समिति ने आधुनिक बैंकिंग मॉडल अपनाया और पूर्ण पारदर्शी (CBS) प्रणाली लागू की।",
      icon: Landmark,
      theme: "violet",
      gradient: "from-violet-400 to-purple-500"
    },
    {
      year: "2024",
      title: "भविष्य की उड़ान",
      desc: "सौर ऊर्जा, डिजिटल भुगतान और हाई-टेक वेयरहाउस। हम अब केवल एक समिति नहीं, बल्कि आत्मनिर्भर ग्रामीण भारत का एक मॉडल हैं।",
      icon: Sun,
      theme: "amber",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      
      {/* 🌫️ Background Texture (Premium Matte) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* 💡 Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50/80 to-transparent dark:from-white/[0.02] dark:to-transparent pointer-events-none" />

      <div className="w-[90%] max-w-5xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500 mb-4 block"
          >
            Our Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
          >
            विरासत से <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">विकास तक</span>
          </motion.h2>
        </div>

        {/* --- The Living Thread Layout --- */}
        <div className="relative">

          {/* 🧵 Central Thread Line (Absolute) */}
          {/* Mobile: Left Aligned | Desktop: Center Aligned */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 dark:bg-white/10 md:-translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-gray-100 via-emerald-500 to-gray-100 dark:from-white/5 dark:via-emerald-500 dark:to-white/5 blur-[1px] opacity-50" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>

        </div>

        {/* End Mark */}
        <div className="flex justify-center mt-20 relative z-10">
           <div className="px-6 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-xs font-bold uppercase tracking-widest text-gray-400">
              To Be Continued...
           </div>
        </div>

      </div>
    </section>
  );
}

/* 🎨 Separate Component for The Items */
function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      
      {/* 1. The Content Side (Text) */}
      <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-16 text-left md:text-right group">
        <div className={`${isEven ? "md:text-left" : "md:text-right"}`}>
          
          {/* Artistic Year (Big & Bold) */}
          <h3 className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} opacity-20 dark:opacity-30 select-none font-serif leading-none absolute -top-8 left-16 md:static md:mb-[-20px]`}>
            {item.year}
          </h3>

          {/* Title */}
          <h4 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors duration-300">
            {item.title}
          </h4>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
            {item.desc}
          </p>

        </div>
      </div>

      {/* 2. The Glowing Knot (Center Icon) */}
      <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
        
        {/* Outer Glow Ring */}
        <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-gray-100 dark:border-white/10 flex items-center justify-center relative z-20 shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
           <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient} animate-pulse`} />
        </div>

        {/* Icon Floating Next to it (Mobile Only - small visual aid) */}
        <div className="md:hidden absolute left-14 top-0 p-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
          <item.icon size={16} className="text-gray-500 dark:text-gray-400" />
        </div>

      </div>

      {/* 3. Empty Spacer for the other side (Desktop only) */}
      <div className="hidden md:block w-1/2" />

    </motion.div>
  );
}
