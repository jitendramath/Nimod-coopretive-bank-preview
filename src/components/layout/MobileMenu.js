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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for snappy feel
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] bg-premium-bg/95 backdrop-blur-3xl flex flex-col supports-[backdrop-filter]:bg-premium-bg/90 transition-colors duration-500"
    >
      {/* Header */}
      <div className="w-[90%] mx-auto py-6 flex justify-between items-center border-b border-premium-border">
        <span className="text-2xl font-black text-premium-text tracking-tight transition-colors duration-500">
          Menu
        </span>
        <button
          onClick={closeMenu}
          className="p-2.5 rounded-full bg-premium-surface text-premium-muted hover:text-premium-accent hover:scale-110 transition-all duration-300 border border-premium-border"
        >
          <X size={26} strokeWidth={2.5} />
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 flex flex-col justify-center px-8 gap-8">
        {links.map((link, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <Link
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between text-4xl font-bold text-premium-text/90 group-hover:text-premium-accent transition-colors tracking-tight"
            >
              {link.name}
              <ChevronRight
                size={32}
                className="opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-premium-accent"
              />
            </Link>
          </motion.div>
        ))}

        {/* Membership CTA in Menu */}
        <motion.div
           variants={linkVariants}
           custom={links.length}
           initial="hidden"
           animate="visible"
           className="mt-6"
        >
             <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full block text-center py-4 bg-premium-accent text-white dark:text-black font-black text-lg rounded-2xl uppercase tracking-widest shadow-lg shadow-premium-shadow active:scale-95 transition-all"
            >
              सदस्यता लें
            </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-8 border-t border-premium-border">
        <p className="text-premium-muted/50 text-xs font-bold tracking-[0.2em] uppercase text-center transition-colors duration-500">
          Nimod Cooperative • {new Date().getFullYear()}
        </p>
      </div>
    </motion.div>
  );
}
