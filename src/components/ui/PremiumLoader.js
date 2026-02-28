"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "./loading.json";

export default function PremiumLoader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;

      // 🔥 2.2 sec hold
      const remaining = Math.max(2200 - elapsed, 0);

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
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.6 }
          }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white dark:bg-black"
        >
          {/* 🟢 Green glow */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-green-500/15 blur-[110px] rounded-full pointer-events-none" />

          {/* 🟢 Lottie smaller */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-20 md:w-28 mb-6"  // 👈 size small
            style={{ filter: "hue-rotate(90deg) saturate(2)" }} // green tint
          >
            <Lottie animationData={animationData} loop />
          </motion.div>

          {/* logo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Image
              src="/images/logo-dark.png"
              alt="logo"
              width={200}
              height={60}
              priority
              className="h-6 md:h-9 w-auto block dark:hidden"
            />

            <Image
              src="/images/logo-light.png"
              alt="logo"
              width={200}
              height={60}
              priority
              className="h-6 md:h-9 w-auto hidden dark:block"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
