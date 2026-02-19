"use client";

import { motion } from "framer-motion";
import { Users, Building2, CalendarCheck2, BadgeCheck, Quote } from "lucide-react";

export default function AboutAchievements() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">

      {/* 🕸️ Premium Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* 💡 Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10">

        {/* --- Minimal Header --- */}
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">Milestones</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            हमारी <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">उपलब्धियां</span>
          </motion.h2>
        </div>

        {/* --- 🍱 THE APPLE BENTO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {/* 1. The Giant Feature Card (Spans 2 columns, 2 rows on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-2 md:row-span-2 relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 overflow-hidden group shadow-lg shadow-gray-200/50 dark:shadow-none hover:border-blue-500/30 transition-colors duration-500"
          >
            {/* Huge Watermark Background */}
            <div className="absolute -bottom-10 -right-10 text-[12rem] md:text-[16rem] font-bold text-gray-50 dark:text-white/[0.02] leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-[2s]">
              70
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-16 shadow-sm">
                <CalendarCheck2 size={32} />
              </div>
              
              <div>
                <div className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-2">
                  स्थापना वर्ष
                </div>
                <div className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tighter">
                  1954
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg font-medium max-w-sm">
                  70+ वर्षों की निरंतर सेवा, जो एक पीढ़ी से दूसरी पीढ़ी तक भरोसे की नींव बनी है।
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Square Stat Card 1 (Farmers) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 p-6 md:p-8 rounded-[2rem] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 group shadow-md shadow-gray-200/50 dark:shadow-none hover:border-emerald-500/30 transition-colors flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users size={24} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
              900+
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
              किसान सदस्य
            </div>
            <div className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
              सक्रिय एवं पंजीकृत
            </div>
          </motion.div>

          {/* 3. Square Stat Card 2 (Families) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 p-6 md:p-8 rounded-[2rem] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 group shadow-md shadow-gray-200/50 dark:shadow-none hover:border-purple-500/30 transition-colors flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 size={24} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
              1200+
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
              ग्रामीण परिवार
            </div>
            <div className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
              विश्वास से जुड़े
            </div>
          </motion.div>

          {/* 4. The Wide Footer Card (Transparency) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-2 md:col-span-3 p-6 md:p-8 rounded-[2rem] bg-gradient-to-r from-emerald-500 to-teal-600 text-white relative overflow-hidden group shadow-xl shadow-emerald-900/20"
          >
            {/* Animated Background Shine */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-out" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                  <BadgeCheck size={32} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black tracking-tight mb-1">100%</div>
                  <div className="text-sm md:text-base font-medium text-emerald-50">पारदर्शिता एवं नियमित ऑडिट</div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full backdrop-blur-md text-sm font-semibold">
                Verified Standards
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- ✒️ The "Signature" Quote (Replaces standard paragraph) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 max-w-4xl mx-auto text-center"
        >
          <Quote className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-700 mb-6" />
          <p className="text-xl md:text-3xl font-serif text-gray-800 dark:text-gray-200 leading-relaxed italic mb-8">
            "हमारा उद्देश्य केवल आंकड़े बढ़ाना नहीं, बल्कि हर किसान और परिवार 
            के जीवन में वास्तविक <span className="text-emerald-600 dark:text-emerald-400 font-bold">सकारात्मक परिवर्तन</span> लाना है। 
            विश्वास ही हमारी सबसे बड़ी पूंजी है।"
          </p>
          
          {/* Signature Line */}
          <div className="flex flex-col items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent mb-3" />
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">
              निमोद सहकारी समिति
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
