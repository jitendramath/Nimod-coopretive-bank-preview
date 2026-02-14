"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // स्क्रॉल होने पर नेवबार का बैकग्राउंड बदलना
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}>
        <div className="w-[92%] max-w-[1180px] mx-auto flex justify-between items-center">
          <div className="text-[1.2rem] font-bold tracking-tight text-ui-main">
            Nimod <span className="text-premium-forest">Cooperative</span>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 font-medium text-ui-soft">
             {/* यहाँ आपकी पुरानी डेस्कटॉप लिंक्स रहेंगी */}
          </div>

          {/* Dangerous Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className={`w-8 h-0.5 rounded-full transition-colors ${isOpen ? 'bg-white' : 'bg-ui-main'}`}
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className={`w-8 h-0.5 rounded-full ${isOpen ? 'bg-white' : 'bg-ui-main'}`}
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className={`w-8 h-0.5 rounded-full transition-colors ${isOpen ? 'bg-white' : 'bg-ui-main'}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <AnimatePresence>
        {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
