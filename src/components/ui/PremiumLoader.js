"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // luxury timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] bg-[#030303] flex items-center justify-center md:hidden overflow-hidden"
        >

          {/* emerald glow bg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[160px] rounded-full"
          />

          {/* moving gradient beam */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
          />

          {/* content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative text-center"
          >

            {/* logo text */}
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Nimod<span className="text-premium-emerald">Coop</span>
            </h1>

            {/* subtitle */}
            <p className="text-[10px] tracking-[0.4em] text-white/50 mt-2">
              MULTIPURPOSE PACS
            </p>

            {/* loading line */}
            <div className="mt-8 w-44 h-[2px] bg-white/10 mx-auto overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-24 bg-premium-emerald"
              />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
                  }
