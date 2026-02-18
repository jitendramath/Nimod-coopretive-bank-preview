"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 Minimum Cinematic Wait Time (800ms)
    // ताकि यूजर को एनिमेशन देखने का मौका मिले
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(800 - elapsed, 0);

      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          if (onFinish) onFinish(); 
        }, 600); // Exit animation duration sync
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
            scale: 1.1, 
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-500"
        >
          {/* ✨ Background Ambient Glow (Theme Aware) */}
          <div className="absolute w-[300px] h-[300px] bg-emerald-500/20 dark:bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />

          {/* 🔄 The "Gol" Loader Container */}
          <div className="relative flex items-center justify-center w-32 h-32">
            
            {/* Spinning Ring (Outer) */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-emerald-500 border-r-emerald-500/30 dark:border-t-premium-accent dark:border-r-premium-accent/30"
            />
            
            {/* Spinning Ring (Inner - Reverse) */}
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-2 rounded-full border-[1px] border-transparent border-b-black/20 dark:border-b-white/20"
            />

            {/* 🏦 Central Logo (Same as Navbar but Bigger) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 dark:from-premium-accent dark:to-emerald-700 flex items-center justify-center shadow-xl shadow-emerald-500/20"
            >
              <ShieldCheck size={36} className="text-white" strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* ✍️ Text Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <h1 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
              Nimod<span className="text-emerald-600 dark:text-premium-accent">Coop</span>
              <span className="text-emerald-500">.</span>
            </h1>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600 mt-2">
              Secure Banking
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
