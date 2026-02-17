"use client";

import { motion } from "framer-motion";

export default function ContactBackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* 🔵 MAIN INDIGO AURA (Trust & Communication) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 
        w-[800px] h-[800px] 
        bg-indigo-500/20 blur-[180px] rounded-full"
      />

      {/* 🟡 GOLDEN WARMTH (Left Side) */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] -left-[150px] 
        w-[500px] h-[500px] 
        bg-amber-400/10 blur-[160px] rounded-full"
      />

      {/* 🟢 EMERALD ACCENT (Right Side - Keeping brand consistency) */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] -right-[150px] 
        w-[500px] h-[500px] 
        bg-emerald-500/10 blur-[160px] rounded-full"
      />

      {/* ✨ Subtle Grid Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

    </div>
  );
}
