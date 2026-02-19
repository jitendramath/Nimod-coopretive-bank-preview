import React from "react";

export default function AboutBackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* 🌈 BASE BACKGROUND (Light & Dark combined for better performance) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fafc] via-[#f3f6fb] to-[#eef2f7] dark:from-[#020617] dark:via-[#020617] dark:to-black transition-colors duration-500" />

      {/* 💎 1. CENTER AURA (Main Luxury Light - Static & Optimized) */}
      <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-emerald-400/10 dark:bg-emerald-500/10 blur-[100px] md:blur-[140px] rounded-full opacity-60 dark:opacity-30 transform-gpu" />

      {/* 💎 2. SIDE AURA (Bottom Right) */}
      <div className="absolute right-[-20%] bottom-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 blur-[100px] md:blur-[120px] rounded-full opacity-50 dark:opacity-20 transform-gpu" />

      {/* 💎 3. LEFT AURA (Replaced the heavy animated one with a static elegant glow) */}
      <div className="absolute left-[-15%] top-[50%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-emerald-300/10 dark:bg-emerald-500/10 blur-[90px] md:blur-[120px] rounded-full opacity-40 dark:opacity-20 transform-gpu" />

      {/* 🧠 PREMIUM GRAIN TEXTURE (Optimized: No mix-blend-mode, just pure opacity) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

    </div>
  );
}
