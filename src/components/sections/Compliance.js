"use client";

import React, { useRef, useState } from "react";
import { FileCheck, Shield, BookOpen, Lock } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/* 🌟 Luxury Stagger Config */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  }
};

/* --- 🔦 Spotlight Card Component (The Magic) --- */
function SpotlightCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative border border-white/10 bg-gray-900/5 overflow-hidden rounded-[2rem] ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* 🔦 Spotlight Gradient that follows mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

export default function CompliancePremium() {
  const complianceItems = [
    {
      id: "01",
      icon: BookOpen,
      title: "नियम एवं अधिनियम",
      text: "समिति का संचालन राजस्थान सहकारी सोसाइटी अधिनियम, 2001 और नियम 2003 के अंतर्गत पूर्णतः वैधानिक है।",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "02",
      icon: FileCheck,
      title: "ऑडिट एवं निरीक्षण",
      text: "सहकारिता विभाग द्वारा नियुक्त ऑडिटर्स द्वारा प्रतिवर्ष वैधानिक ऑडिट (Statutory Audit) संपन्न। 100% रिकॉर्ड।",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "03",
      icon: Shield,
      title: "धन की सुरक्षा",
      text: "सदस्यों की जमा राशि और निवेश को सुरक्षित रखने के लिए कड़े वित्तीय अनुशासन और रिज़र्व फंड की व्यवस्था।",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: "04",
      icon: Lock,
      title: "डेटा गोपनीयता",
      text: "बैंकिंग लेन-देन और व्यक्तिगत जानकारी की सुरक्षा के लिए आधुनिक डिजिटल सुरक्षा मानकों (Encryption) का पालन।",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* 🌫️ Background Noise Texture (For that Matte Finish) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* 🌌 Atmospheric Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-md">
              Trust & Security
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent mb-6">
              अनुपालन एवं <span className="text-emerald-400">पारदर्शिता</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              हमारा मूल मंत्र 'विश्वास' है। हम सुनिश्चित करते हैं कि हर प्रक्रिया नियमसंगत, सुरक्षित और पारदर्शी हो।
            </p>
          </motion.div>
        </div>

        {/* 🍱 Bento Grid Style Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {complianceItems.map((item, idx) => (
            <SpotlightCard key={idx} className="bg-neutral-900/40 backdrop-blur-xl">
              <div className="p-8 md:p-10 h-full flex flex-col justify-between relative z-10">
                
                {/* Background Huge Number (Watermark style) */}
                <div className="absolute right-6 top-6 text-9xl font-bold text-white/[0.03] select-none pointer-events-none font-serif">
                  {item.id}
                </div>

                {/* Top: Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.gradient} border border-white/5 mb-8 shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]`}>
                  <item.icon className="text-white w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Bottom: Text */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Border Accent (Animated) */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full opacity-50" />
              </div>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* Mobile Friendly Indication */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-white/20 text-sm font-mono uppercase tracking-widest">
            <Shield size={12} />
            Secure & Verified
          </div>
        </motion.div>

      </div>
    </section>
  );
}
