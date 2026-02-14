"use client";

import { useState, useEffect } from "react";
import NavOverlay from "./NavOverlay";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll होने पर Navbar का बैकग्राउंड बदलने के लिए
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu खुलने पर बैकग्राउंड स्क्रॉल लॉक करने के लिए
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 h-[64px] flex items-center ${
          scrolled || isOpen ? "bg-white/80 backdrop-blur-md border-b border-border-light" : "bg-transparent"
        }`}
      >
        <div className="w-[92%] max-w-[1180px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-[1.1rem] font-semibold tracking-wide text-ui-main z-[1001]">
            Nimod Cooperative
          </div>

          {/* Hamburger Button */}
          <button
            className="flex flex-col justify-center items-center gap-[6px] w-[40px] h-[40px] z-[1001] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <span
              className={`block h-[2px] w-[24px] bg-ui-main rounded-full transition-all duration-300 ease-apple ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            
            {/* Middle Line */}
            <span
              className={`block h-[2px] w-[24px] bg-ui-main rounded-full transition-all duration-300 ease-apple ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            
            {/* Bottom Line */}
            <span
              className={`block h-[2px] w-[24px] bg-ui-main rounded-full transition-all duration-300 ease-apple ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      <NavOverlay isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
