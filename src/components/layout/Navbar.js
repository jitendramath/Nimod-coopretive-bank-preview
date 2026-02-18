"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ShieldCheck, UserCircle } from "lucide-react";
import MobileMenu from "./MobileMenu";
import SignInModal from "@/components/auth/SignInModal"; // ✅ Modal Import

const navLinks = [
  { name: "संस्था", href: "/about" },
  { name: "सेवाएं", href: "/services" },
  { name: "परियोजनाएं", href: "/projects" },
  { name: "संपर्क", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false); // ✅ Login State
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 🔥 Hydration & Scroll Logic
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-premium-bg/85 backdrop-blur-md border-b border-premium-border/50 py-3 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-[92%] max-w-[1200px] mx-auto flex justify-between items-center">
          
          {/* 💎 Premium Logo */}
          <Link href="/" className="group relative z-50 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-premium-accent to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-premium-accent/20">
               <ShieldCheck size={18} strokeWidth={2.5} />
            </div>
            
            <span className="text-xl md:text-2xl font-bold text-premium-text tracking-tight transition-colors duration-500">
              Nimod
              <span className="font-normal text-premium-muted">Coop</span>
              <span className="text-premium-accent">.</span>
            </span>
          </Link>

          {/* 🖥️ Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[15px] font-medium text-premium-muted/80 hover:text-premium-text transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-1/2 w-1 h-1 bg-premium-accent rounded-full opacity-0 -translate-x-1/2 transition-all duration-300 group-hover:opacity-100"></span>
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-premium-border"></div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-premium-muted hover:bg-premium-surface hover:text-premium-accent transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* ✅ Login Button (Trigger Modal) */}
            <button
              onClick={() => setIsSignInOpen(true)}
              className="px-5 py-2 bg-premium-text text-premium-bg rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-premium-text/10 flex items-center gap-2"
            >
              <UserCircle size={18} />
              सदस्य लॉगिन
            </button>
          </div>

          {/* 📱 Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-premium-muted hover:text-premium-text transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 text-premium-text hover:text-premium-accent transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu (Pass Login Handler) */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu 
            closeMenu={() => setIsOpen(false)} 
            links={navLinks} 
            onSignIn={() => { setIsOpen(false); setIsSignInOpen(true); }} // Mobile click handling
          />
        )}
      </AnimatePresence>

      {/* ✅ SIGN IN MODAL */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
}
