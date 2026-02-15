"use client";

import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Top Left Blob - Emerald Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-premium-emerald/10 rounded-full blur-[120px]"
      />

      {/* Center Right Blob - Mint Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[5%] w-[600px] h-[600px] bg-premium-mint/5 rounded-full blur-[100px]"
      />

      {/* Bottom Center Blob - Subtle Slate Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] left-[20%] w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[150px]"
      />
      
      {/* Noise Texture Overlay (Optional for extra premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
    </div>
  );
}
