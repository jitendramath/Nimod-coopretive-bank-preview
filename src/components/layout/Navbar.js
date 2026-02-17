"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "संस्था", href: "/about" },
  { name: "सेवाएं", href: "/services" },
  { name: "परियोजनाएं", href: "/projects" },
  { name: "संपर्क", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Ultra smooth scroll detection (Performance optimized)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-premium-bg/80 backdrop-blur-xl border-b border-premium-border py-4 shadow-lg shadow-premium-shadow"
            : "bg-transparent py-7"
        }`}
      >
        <div className="w-[92%] max-w-[1200px] mx-auto flex justify-between items-center">
          
          {/* 💎 Premium Logo */}
          <Link href="/" className="group relative z-50">
            <span className="text-2xl font-black text-premium-text tracking-tighter transition-colors duration-500">
              Nimod<span className="text-premium-accent">Coop</span>.
            </span>
          </Link>

          {/* 🖥️ Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-bold text-premium-muted hover:text-premium-accent transition-all duration-300 relative group uppercase tracking-widest"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-premium-accent transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
            ))}

            {/* Premium Action Button */}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-premium-accent text-white dark:text-black rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md shadow-premium-shadow"
            >
              सदस्यता लें
            </Link>
          </div>

          {/* 📱 Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-premium-text hover:text-premium-accent transition-colors focus:outline-none p-2"
          >
            {isOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu Slide-over */}
      <AnimatePresence>
        {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} links={navLinks} />}
      </AnimatePresence>
    </>
  );
}
