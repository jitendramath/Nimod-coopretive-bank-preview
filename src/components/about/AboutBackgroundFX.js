"use client";

import { motion } from "framer-motion";

export default function AboutBackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* 🌈 LIGHT MODE BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fafc] via-[#f3f6fb] to-[#eef2f7] dark:hidden" />

      {/* 🌑 DARK MODE BASE */}
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* 💎 CENTER AURA (MAIN LUXURY LIGHT) */}
      <div className="
        absolute left-1/2 top-[20%] -translate-x-1/2
        w-[700px] h-[700px]
        bg-emerald-400/10 dark:bg-emerald-500/10
        blur-[140px] rounded-full
        opacity-70 dark:opacity-40
      " />

      {/* 💎 SIDE AURA */}
      <div className="
        absolute right-[-120px] bottom-0
        w-[520px] h-[520px]
        bg-cyan-400/10 dark:bg-cyan-500/10
        blur-[140px] rounded-full
        opacity-60 dark:opacity-30
      " />

      {/* ✨ SOFT MESH GLOW */}
      <div className="
        absolute inset-0 opacity-[0.05] dark:opacity-[0.07]
        bg-[radial-gradient(circle_at_30%_20%,var(--accent-primary),transparent_60%)]
      " />

      {/* 🧠 PREMIUM GRAIN TEXTURE (AWARD LEVEL TOUCH) */}
      <div className="
        absolute inset-0 opacity-[0.03] dark:opacity-[0.05]
        mix-blend-overlay
        bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
      " />

      {/* 🌌 ULTRA SLOW FLOAT */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute left-[20%] top-[55%]
          w-[280px] h-[280px]
          bg-emerald-300/10 dark:bg-emerald-500/10
          blur-[120px] rounded-full
        "
      />

    </div>
  );
}
