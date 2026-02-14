"use client";

import { useState, useEffect } from "react";
import NavOverlay from "./NavOverlay";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Lock Body Scroll when menu is open (Your app.js logic)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close on Resize or Escape Key (Safety)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeMenu();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">Nimod Cooperative</div>

          <button
            className="nav-toggle"
            id="menuToggle"
            aria-label="Open Menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            {/* Spans for Hamburger Lines */}
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            <span
              className={`transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* The Fullscreen Menu Overlay */}
      <NavOverlay isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
