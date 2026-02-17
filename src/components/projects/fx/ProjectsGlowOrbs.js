"use client";

import { motion } from "framer-motion";

export default function ProjectsGlowOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

      {/* 🔥 MAIN EMERALD AURA */}
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
        className="absolute -top-32 left-1/2 -translate-x-1/2 
        w-[700px] h-[700px] 
        bg-emerald-400/20 blur-[160px] rounded-full"
      />

      {/* 🔵 CYAN FLOAT ORB */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] -left-[160px] 
        w-[420px] h-[420px] 
        bg-cyan-400/10 blur-[150px] rounded-full"
      />

      {/* 🟣 PURPLE DEPTH ORB */}
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[-160px] 
        w-[420px] h-[420px] 
        bg-purple-500/10 blur-[170px] rounded-full"
      />

      {/* ✨ top luxury line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60" />

      {/* ✨ bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050507]" />

    </div>
  );
}