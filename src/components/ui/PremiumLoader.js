"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(800 - elapsed, 0); // कम से कम 800ms का सिनेमैटिक होल्ड

      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 800); // Exit animation duration
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
            filter: "blur(15px)", // जाते समय धुंधला हो जाएगा
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#ffffff] dark:bg-[#050505] transition-colors duration-500"
        >
          {/* ✨ Ambient Background Glow (Matching Navbar Gradient) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

          {/* 🖊️ TYPOGRAPHY LOGO (Matches Navbar) */}
          <div className="relative overflow-hidden p-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-neutral-900 dark:text-white"
            >
              Nimod
              <span className="text-emerald-500 inline-block ml-1">Cooperative</span>
            </motion.h1>

            {/* ✨ Shimmer Effect Over Text */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
            />
          </div>

          {/* ➖ Minimal Loading Bar */}
          <div className="mt-6 w-32 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-500"
            />
          </div>

          {/* Tagline Fade In */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-10 text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600"
          >
            Loading Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
