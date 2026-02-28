"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "./loading.json"; // 👈 same folder me loading.json

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(900 - elapsed, 0);

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
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(10px)",
            transition: { duration: 0.6 }
          }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white dark:bg-black"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* 🔥 LOTTIE */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-28 md:w-40 mb-8"
          >
            <Lottie animationData={animationData} loop />
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center justify-center"
          >
            {/* light */}
            <Image
              src="/images/logo-dark.png"
              alt="logo"
              width={220}
              height={60}
              priority
              className="h-7 md:h-10 w-auto block dark:hidden"
            />

            {/* dark */}
            <Image
              src="/images/logo-light.png"
              alt="logo"
              width={220}
              height={60}
              priority
              className="h-7 md:h-10 w-auto hidden dark:block"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
