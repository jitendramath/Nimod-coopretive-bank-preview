"use client";

import { motion } from "framer-motion";

/*
🔥 Ultra-premium hover engine
Used inside ProjectCard
Gives Apple + Tesla + Banking luxury feel
*/

export default function ProjectsHoverFX({ children }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.035,
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="relative group"
    >
      {/* 🔥 HOVER GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
        pointer-events-none
        absolute -inset-[1px] 
        rounded-[28px]
        bg-gradient-to-r 
        from-emerald-400/30 
        via-cyan-400/20 
        to-purple-500/25
        blur-[22px]
        opacity-0 
        group-hover:opacity-100
        "
      />

      {/* 🔥 SHINE SWEEP */}
      <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
        <div
          className="
          absolute -left-[120%] top-0 h-full w-[60%]
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          skew-x-[-25deg]
          group-hover:left-[140%]
          transition-all duration-[1400ms] ease-out
          "
        />
      </div>

      {/* 🔥 BORDER PREMIUM */}
      <div
        className="
        absolute inset-0 rounded-[28px]
        border border-white/10
        group-hover:border-emerald-400/30
        transition-all duration-500
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}