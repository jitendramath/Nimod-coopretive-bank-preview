"use client";

import React from "react";
import { FileCheck, Shield, BookOpen, Lock, CheckCircle2 } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/* --- ✨ Config & Data --- */
const complianceItems = [
  {
    id: "01",
    icon: BookOpen,
    title: "नियम एवं अधिनियम",
    text: "समिति का संचालन राजस्थान सहकारी सोसाइटी अधिनियम, 2001 और नियम 2003 के अंतर्गत पूर्णतः वैधानिक है।",
    accent: "text-blue-600 dark:text-blue-400",
    bgAccent: "bg-blue-50 dark:bg-blue-900/20",
    borderAccent: "group-hover:border-blue-500/50"
  },
  {
    id: "02",
    icon: FileCheck,
    title: "ऑडिट एवं निरीक्षण",
    text: "सहकारिता विभाग द्वारा नियुक्त ऑडिटर्स द्वारा प्रतिवर्ष वैधानिक ऑडिट (Statutory Audit) संपन्न। 100% रिकॉर्ड।",
    accent: "text-emerald-600 dark:text-emerald-400",
    bgAccent: "bg-emerald-50 dark:bg-emerald-900/20",
    borderAccent: "group-hover:border-emerald-500/50"
  },
  {
    id: "03",
    icon: Shield,
    title: "धन की सुरक्षा",
    text: "सदस्यों की जमा राशि और निवेश को सुरक्षित रखने के लिए कड़े वित्तीय अनुशासन और रिज़र्व फंड की व्यवस्था।",
    accent: "text-amber-600 dark:text-amber-400",
    bgAccent: "bg-amber-50 dark:bg-amber-900/20",
    borderAccent: "group-hover:border-amber-500/50"
  },
  {
    id: "04",
    icon: Lock,
    title: "डेटा गोपनीयता",
    text: "बैंकिंग लेन-देन और व्यक्तिगत जानकारी की सुरक्षा के लिए आधुनिक डिजिटल सुरक्षा मानकों (Encryption) का पालन।",
    accent: "text-violet-600 dark:text-violet-400",
    bgAccent: "bg-violet-50 dark:bg-violet-900/20",
    borderAccent: "group-hover:border-violet-500/50"
  }
];

/* --- 🎴 Adaptive Card Component --- */
function AdaptiveCard({ item }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[24px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 ${item.borderAccent}`}
    >
      {/* 🔦 Dynamic Spotlight (Changes color based on theme) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              var(--spotlight-color),
              transparent 80%
            )
          `
        }}
      />
      
      {/* CSS Variable for spotlight color based on theme (handled via classes usually, but here inline for demo logic) */}
      <style jsx>{`
        .group { --spotlight-color: rgba(0,0,0,0.03); }
        :global(.dark) .group { --spotlight-color: rgba(255,255,255,0.05); }
      `}</style>

      <div className="relative p-8 h-full flex flex-col z-10">
        
        {/* Header: Icon + ID */}
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3.5 rounded-2xl ${item.bgAccent} ${item.accent} ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
            <item.icon className="w-7 h-7" strokeWidth={1.8} />
          </div>
          <span className="text-4xl font-serif font-bold text-gray-100 dark:text-gray-800 select-none">
            {item.id}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed font-medium">
          {item.text}
        </p>

        {/* Bottom Decoration */}
        <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent"></div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Verified</span>
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ComplianceDualTheme() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden transition-colors duration-500 bg-gray-50 dark:bg-[#050505]">
      
      {/* 🕸️ Background Pattern (Subtle Dot Matrix) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* 🌅 Ambient Gradients (Warm in Light, Cool in Dark) */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent pointer-events-none" />
      
      <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] bg-purple-200/30 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute -right-[20%] bottom-[20%] w-[600px] h-[600px] bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        
        {/* 🏷️ Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm mb-6"
          >
            <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              100% Secure & Compliant
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            अनुपालन एवं <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">पारदर्शिता</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
          >
            हमारा मूल मंत्र 'विश्वास' है। आधुनिक तकनीक और पारंपरिक मूल्यों के साथ, हम सुनिश्चित करते हैं कि हर प्रक्रिया सुरक्षित हो।
          </motion.p>
        </div>

        {/* 🧱 The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {complianceItems.map((item, idx) => (
            <AdaptiveCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
