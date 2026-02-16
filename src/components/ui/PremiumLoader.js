"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(600 - elapsed, 0); // 🔥 minimum 600ms cinematic

      setTimeout(() => {
        setLoading(false);

        setTimeout(() => {
          onFinish(); // reveal site
        }, 400); // fade out timing

      }, remaining);
    };

    // if already loaded
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }

  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] bg-[#030303] flex items-center justify-center md:hidden"
        >

          {/* glow bg */}
          <div className="absolute w-[400px] h-[400px] bg-emerald-400/20 blur-[140px] rounded-full" />

          {/* circle loader */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.1,
              ease: "linear",
            }}
            className="w-20 h-20 rounded-full border-[3px] border-white/10 border-t-premium-emerald"
          />

          {/* logo */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute mt-32 text-white text-xl font-bold tracking-wide"
          >
            Nimod<span className="text-premium-emerald">Coop</span>
          </motion.h1>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
