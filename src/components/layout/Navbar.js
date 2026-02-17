"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "संस्था", href: "/about" },
  { name: "सेवाएं", href: "/services" },
  { name: "परियोजनाएं", href: "/projects" },
  { name: "गवर्नेंस", href: "/committee" }, // Updated to correct route
  { name: "संपर्क", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 ultra smooth scroll detection
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
            ? "bg-premium-surface/85 backdrop-blur-xl border-b border-premium-border py-3 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-[92%] max-w-[1200px] mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="group relative z-50 flex items-center gap-2">
            <span className="text-2xl font-bold text-premium-text tracking-tight transition-colors duration-500">
              Nimod<span className="text-premium-accent">Coop</span>.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-premium-muted hover:text-premium-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-premium-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Action Group */}
            <div className="flex items-center gap-4 pl-2 border-l border-premium-border">
                {/* 1. Theme Toggle Switch */}
                <ThemeToggle />

                {/* 2. Membership Button */}
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full text-sm font-bold 
                  bg-premium-surface border border-premium-border text-premium-text
                  hover:bg-premium-accent hover:text-black hover:border-premium-accent 
                  transition-all duration-300 shadow-sm"
                >
                  सदस्यता लें
                </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
             {/* Toggle visible on mobile too */}
             <ThemeToggle />

             {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-premium-text hover:text-premium-accent transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} links={navLinks} />}
      </AnimatePresence>
    </>
  );
}
