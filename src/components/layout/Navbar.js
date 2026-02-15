"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "संस्था", href: "#about" },
  { name: "सेवाएं", href: "#services" },
  { name: "परियोजनाएं", href: "#projects" },
  { name: "गवर्नेंस", href: "#governance" },
  { name: "संपर्क", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-premium-charcoal/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-[92%] max-w-[1200px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <span className="text-2xl font-bold text-white tracking-tight">
              Nimod<span className="text-premium-emerald">Coop</span>.
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-premium-emerald transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-premium-emerald transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-white hover:bg-premium-emerald hover:text-premium-charcoal hover:border-premium-emerald transition-all duration-300"
            >
              सदस्यता लें
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-white hover:text-premium-emerald transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} links={navLinks} />}
      </AnimatePresence>
    </>
  );
}
