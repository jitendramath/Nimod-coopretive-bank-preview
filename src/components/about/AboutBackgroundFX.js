"use client";

import { motion } from "framer-motion";

export default function AboutBackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* 🔥 MAIN EMERALD AURA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
        bg-emerald-400/20 blur-[160px] rounded-full"
      />

      {/* 🔵 SOFT CYAN ORB */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -left-[120px] w-[420px] h-[420px] 
        bg-cyan-400/10 blur-[140px] rounded-full"
      />

      {/* 🟣 LUXURY DEPTH LIGHT */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[-120px] w-[380px] h-[380px] 
        bg-purple-500/10 blur-[150px] rounded-full"
      />

      {/* ✨ TOP PREMIUM LINE GLOW */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60" />

      {/* ✨ BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050507]" />

    </div>
  );
}