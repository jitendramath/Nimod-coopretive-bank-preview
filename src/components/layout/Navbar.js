"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // 👈 Logo के लिए Image इम्पोर्ट किया
import { useTheme } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ShieldCheck } from "lucide-react";
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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
            ? "backdrop-blur-xl bg-[var(--bg-primary)]/70 border-b border-[var(--border-color)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-[92%] max-w-[1250px] mx-auto flex justify-between items-center">

          {/* 👑 PREMIUM LOGO SECTION */}
          <Link href="/" className="group flex items-center">
            {/* ☀️ Light Theme Logo (Black Logo) */}
            <Image
              src="/images/logo-light.png" // Light mode में दिखने वाला लोगो
              alt="MPPacs Nimod Logo"
              width={180}
              height={46}
              priority // Header इमेज है इसलिए priority दी है ताकि फ़ास्ट लोड हो
              className="w-auto h-7 md:h-9 block dark:hidden transition-transform duration-300 group-hover:scale-[1.02]"
            />
            
            {/* 🌙 Dark Theme Logo (White Logo) */}
            <Image
              src="/images/logo-dark.png" // Dark mode में दिखने वाला लोगो
              alt="MPPacs Nimod Logo"
              width={180}
              height={46}
              priority // Header इमेज है इसलिए priority दी है ताकि फ़ास्ट लोड हो
              className="w-auto h-7 md:h-9 hidden dark:block transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* 🖥️ Desktop */}
          <div className="hidden md:flex items-center gap-9">

            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[15px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition relative"
              >
                {link.name}
              </Link>
            ))}

            {/* divider */}
            <div className="h-5 w-[1px] bg-[var(--border-color)]"></div>

            {/* theme */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
            </button>

            {/* premium button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-500 text-black text-sm font-semibold shadow-lg hover:scale-[1.03] transition"
            >
              Contact
            </Link>
          </div>

          {/* 📱 Mobile */}
          <div className="flex items-center gap-3 md:hidden">

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
            >
              {theme === "dark" ? <Sun size={20}/> : <Moon size={20}/>}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--text-main)]"
            >
              {isOpen ? <X size={26}/> : <Menu size={26}/>}
            </button>

          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            closeMenu={() => setIsOpen(false)}
            links={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}
