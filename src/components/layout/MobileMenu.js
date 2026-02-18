"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function MobileMenu({ closeMenu, links }) {

  const menu = {
    hidden: { opacity: 0, y: -60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 }
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: { duration: 0.25 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 }
    })
  };

  return (
    <motion.div
      variants={menu}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[999] bg-[var(--bg-primary)] flex flex-col"
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-6 pt-6">
        <span className="text-lg font-semibold tracking-tight text-[var(--text-main)]">
          Menu
        </span>

        <button
          onClick={closeMenu}
          className="p-2 rounded-full border border-[var(--border-color)] hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <X size={24} />
        </button>
      </div>

      {/* links */}
      <div className="flex-1 flex flex-col justify-center px-7 gap-7">

        {links.map((link, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <Link
              href={link.href}
              onClick={closeMenu}
              className="block text-3xl font-semibold tracking-tight text-[var(--text-main)] hover:text-emerald-500 transition"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}

        {/* premium button */}
        <motion.div
          custom={links.length + 1}
          variants={item}
          initial="hidden"
          animate="show"
          className="pt-6"
        >
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-center py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-500 text-black font-semibold text-lg shadow-lg"
          >
            Contact
          </Link>
        </motion.div>

      </div>

      {/* bottom */}
      <div className="pb-8 text-center text-[var(--text-muted)] text-xs">
        Nimod • {new Date().getFullYear()}
      </div>
    </motion.div>
  );
}
