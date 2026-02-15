"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";

export default function MobileMenu({ closeMenu, links }) {
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.35 },
    }),
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] bg-premium-charcoal/98 flex flex-col"
    >
      {/* Header */}
      <div className="w-[92%] mx-auto py-6 flex justify-between items-center border-b border-white/10">
        <span className="text-xl font-bold text-white">Menu</span>
        <button
          onClick={closeMenu}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
        >
          <X size={24} />
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 flex flex-col justify-center px-8 gap-6">
        {links.map((link, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={linkVariants}
            className="group"
          >
            <Link
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between text-3xl font-bold text-white/80 group-hover:text-premium-emerald transition-colors"
            >
              {link.name}
              <ChevronRight
                size={24}
                className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-premium-emerald"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-8 border-t border-white/10">
        <p className="text-white/40 text-sm font-medium tracking-wider uppercase text-center">
          Nimod Cooperative • 2026
        </p>
      </div>
    </motion.div>
  );
}
