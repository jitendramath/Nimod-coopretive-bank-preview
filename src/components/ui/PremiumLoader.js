"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // total loader duration
    const timer = setTimeout(() => {
      setLoading(false);

      // hero reveal AFTER fade
      setTimeout(() => {
        onFinish();
      }, 700);

    }, 2600); // 🔥 luxury timing

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#020202] flex items-center justify-center md:hidden overflow-hidden"
        >

          {/* emerald luxury glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[160px] rounded-full"
          />

          {/* rotating outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "linear",
            }}
            className="absolute w-28 h-28 rounded-full border border-emerald-400/20"
          />

          {/* main circle loader */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="relative w-16 h-16 rounded-full border-[3px] border-white/10 border-t-premium-emerald border-r-premium-emerald"
          />

          {/* brand text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute mt-36 text-center"
          >
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Nimod<span className="text-premium-emerald">PACS</span>
            </h1>

            <p className="text-[10px] tracking-[0.35em] text-white/40 mt-2">
              MULTIPURPOSE COOPERATIVE
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
