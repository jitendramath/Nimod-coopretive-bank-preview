"use client";

import { motion } from "framer-motion";

/* 🍎 Ultra luxury cinematic background engine */

export default function ProjectsBackgroundFX() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

      {/* 🌌 MAIN EMERALD AURA (center glow) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2 }}
        className="
        absolute 
        -top-[260px] 
        left-1/2 
        -translate-x-1/2 
        w-[900px] 
        h-[900px] 
        bg-emerald-400/20 
        blur-[200px] 
        rounded-full"
      />

      {/* 🔵 LEFT FLOATING ORB */}
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute 
        top-[35%] 
        -left-[160px] 
        w-[520px] 
        h-[520px] 
        bg-cyan-400/10 
        blur-[160px] 
        rounded-full"
      />

      {/* 🟣 RIGHT DEPTH ORB */}
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute 
        bottom-[8%] 
        right-[-160px] 
        w-[520px] 
        h-[520px] 
        bg-purple-500/10 
        blur-[180px] 
        rounded-full"
      />

      {/* ✨ TOP PREMIUM LIGHT LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-70" />

      {/* ✨ CENTER VERTICAL SOFT LIGHT */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />

      {/* ✨ BOTTOM FADE FOR DEPTH */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#050507]" />

    </div>
  );
}