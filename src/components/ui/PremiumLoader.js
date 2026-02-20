"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"; // 👈 Logo के लिए Image इम्पोर्ट किया

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(800 - elapsed, 0); // 800ms Cinematic Hold

      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 600);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#030303] transition-colors duration-500"
        >
          {/* ✨ Subtle Background Glow (Atmosphere) */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />

          {/* ⭕ THE RESPONSIVE CIRCULAR LOADER */}
          <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-8 md:mb-10">
            
            {/* 1. Fast Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[2px] md:border-[3px] border-gray-200/50 dark:border-white/5 border-t-emerald-500"
            />

            {/* 2. Slow Inner Ring (Reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute inset-2.5 md:inset-3.5 rounded-full border-[2px] border-transparent border-l-cyan-500/80"
            />

            {/* 3. Center Pulse Dot */}
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            />
            
          </div>

          {/* 🌟 BRAND LOGO (Swaps based on Dark/Light Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* ☀️ LIGHT THEME LOGO (Dark Text) */}
            <Image
              src="/images/logo-dark.png" 
              alt="MPPacs Nimod Logo"
              width={200}
              height={50}
              priority
              className="h-6 md:h-9 w-auto block dark:hidden"
            />
            
            {/* 🌙 DARK THEME LOGO (White Text) */}
            <Image
              src="/images/logo-light.png" 
              alt="MPPacs Nimod Logo"
              width={200}
              height={50}
              priority
              className="h-6 md:h-9 w-auto hidden dark:block"
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
