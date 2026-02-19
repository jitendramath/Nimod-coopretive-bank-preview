"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-[#f8f9fa] dark:bg-[#050505] transition-colors duration-500">
      
      {/* 🌫️ Texture Grain (The Premium Matte Finish) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* 🦅 Huge Watermark (Design Depth) */}
      <div className="absolute top-[10%] -left-[5%] md:left-[5%] text-[12rem] md:text-[18rem] font-bold text-black/[0.02] dark:text-white/[0.02] leading-none pointer-events-none select-none font-serif tracking-tighter z-0">
        1954
      </div>

      {/* 🔦 Ambient Spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="order-2 lg:order-1 flex flex-col items-start">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Estd. 1954 • Nimod
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6"
          >
            ग्रामीण विकास की <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                नई पहचान
              </span>
              {/* Underline Decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-10 font-medium"
          >
            हम केवल एक संस्था नहीं, बल्कि <strong>70 वर्षों</strong> से ग्रामीण विश्वास और सहकारिता की एक अटूट परंपरा हैं।
          </motion.p>

          {/* Premium Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { label: "किसान सदस्य", val: "900+" },
              { label: "सेवा वर्ष", val: "70+" },
              { label: "वार्षिक टर्नओवर", val: "₹3Cr+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-6 py-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] dark:shadow-none">
                <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stat.val}</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- RIGHT: IMAGE COMPOSITION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="order-1 lg:order-2 relative"
        >
          {/* Glass Frame Wrapper */}
          <div className="relative p-3 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-sm shadow-2xl dark:shadow-emerald-900/20">
            
            {/* The Image */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-[16/11]">
              <Image
                src="/images/cooperative-main.jpg"
                alt="Nimod PACS Building"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-110"
                priority
              />
              
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              
              {/* Floating Glass Card (Inside Image) */}
              <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white">
                    70
                  </div>
                  <div>
                    <div className="text-xs text-white/80 font-medium">Years of</div>
                    <div className="text-sm font-bold">Trust & Legacy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements around Image */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20" />
          
        </motion.div>

      </div>
    </section>
  );
}
