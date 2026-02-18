"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(900 - elapsed, 0); // cinematic minimum

      setTimeout(() => {
        setLoading(false);

        setTimeout(() => {
          onFinish();
        }, 450);
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
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
          fixed inset-0 z-[99999]
          flex items-center justify-center
          bg-[var(--bg-primary)]
          overflow-hidden
          "
        >

          {/* 🌈 luxury ambient background */}
          <div className="absolute inset-0 pointer-events-none">

            {/* light blob */}
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full opacity-40" />

            {/* second blob */}
            <div className="absolute bottom-[-150px] right-[-80px] w-[420px] h-[420px] bg-cyan-400/20 blur-[160px] rounded-full opacity-30" />

            {/* gradient mesh */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_20%,var(--accent-primary),transparent_60%)]" />
          </div>

          {/* 💎 center stack */}
          <div className="relative flex flex-col items-center">

            {/* rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "linear"
              }}
              className="
              w-24 h-24
              rounded-full
              border border-[var(--border-color)]
              border-t-[var(--accent-primary)]
              backdrop-blur-xl
              shadow-[0_0_40px_var(--accent-glow)]
              "
            />

            {/* inner glow ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "linear"
              }}
              className="
              absolute
              w-16 h-16
              rounded-full
              border border-[var(--accent-primary)]
              opacity-30
              "
            />

            {/* 🏦 logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
              absolute
              flex items-center gap-1
              text-lg font-semibold tracking-wide
              text-[var(--text-main)]
              "
            >
              Nimod
              <span className="text-[var(--accent-primary)]">
                Coop
              </span>
            </motion.div>

            {/* loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
              className="
              absolute
              mt-32
              text-[11px]
              tracking-[0.3em]
              uppercase
              text-[var(--text-muted)]
              "
            >
              Loading Experience
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
