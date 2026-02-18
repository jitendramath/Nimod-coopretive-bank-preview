"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

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
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-500"
        >
          {/* ✨ Background Glow (Atmosphere) */}
          <div className="absolute w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

          {/* ⭕ THE LUXURY CIRCLE LOADER */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            
            {/* 1. Outer Ring (Conic Gradient Spin) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 rounded-full p-[2px] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#10b981_180deg,#0ea5e9_360deg)] opacity-80"
            >
              <div className="w-full h-full bg-white dark:bg-[#050505] rounded-full" />
            </motion.div>

            {/* 2. Middle Ring (Reverse Slow Spin) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-emerald-500/30 border-t-transparent border-l-transparent"
            />

            {/* 3. Center Glass Orb & Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              {/* Logo Icon Inside */}
              <ShieldCheck className="text-emerald-600 dark:text-emerald-400 w-6 h-6 drop-shadow-lg" strokeWidth={2.5} />
            </motion.div>
            
          </div>

          {/* ✍️ Brand Name Below */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-800 dark:text-neutral-200 uppercase">
              Nimod <span className="text-emerald-500">Coop</span>
            </h2>
            <p className="text-[10px] text-neutral-400 font-medium tracking-wider mt-1">
              SECURING FUTURE
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
