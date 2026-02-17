"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // 🌗 State to track theme
  const [isDark, setIsDark] = useState(true);

  // 🔄 On Mount: Check system preference or saved value
  useEffect(() => {
    // Check if user previously selected a theme
    const savedTheme = localStorage.getItem("theme");
    
    // Check system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ⚡ Function to toggle theme
  const toggleTheme = () => {
    if (isDark) {
      // Switch to Light
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      // Switch to Dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div 
      onClick={toggleTheme}
      className={`
        relative w-16 h-9 rounded-full p-1 cursor-pointer transition-colors duration-500
        border border-white/10 shadow-inner
        ${isDark ? "bg-[#0f1014]" : "bg-gradient-to-r from-blue-100 to-sky-100 border-black/5"}
      `}
    >
      {/* 🌌 Background Elements inside the switch */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {/* Starry Night Effect (Visible only in Dark) */}
        <div className={`absolute top-1 left-2 w-1 h-1 bg-white rounded-full transition-opacity duration-500 ${isDark ? "opacity-40" : "opacity-0"}`} />
        <div className={`absolute bottom-2 left-4 w-0.5 h-0.5 bg-white rounded-full transition-opacity duration-500 ${isDark ? "opacity-30" : "opacity-0"}`} />
        
        {/* Cloud/Sky Effect (Visible only in Light) */}
        <div className={`absolute top-[-4px] right-[-4px] w-6 h-6 bg-white blur-md rounded-full transition-opacity duration-500 ${!isDark ? "opacity-60" : "opacity-0"}`} />
      </div>

      {/* 🥎 The Moving Handle (Sun / Moon) */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className={`
          relative w-7 h-7 rounded-full shadow-md flex items-center justify-center
          transition-colors duration-500 z-10
          ${isDark 
            ? "bg-[#1a1b26] border border-white/10 translate-x-7" 
            : "bg-white border border-yellow-400/20 translate-x-0"
          }
        `}
      >
        {/* ☀️ Sun Icon */}
        <Sun 
          size={14} 
          className={`absolute text-amber-500 transition-all duration-500 ${isDark ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`} 
          strokeWidth={2.5}
        />
        
        {/* 🌙 Moon Icon */}
        <Moon 
          size={14} 
          className={`absolute text-indigo-400 transition-all duration-500 ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`} 
          strokeWidth={2.5}
        />
      </motion.div>

      {/* ✨ External Glow (Aura) */}
      <div 
        className={`absolute inset-0 rounded-full blur-lg transition-opacity duration-500 pointer-events-none
        ${isDark ? "bg-indigo-500/20 opacity-0 hover:opacity-100" : "bg-amber-400/20 opacity-0 hover:opacity-100"}
        `} 
      />

    </div>
  );
}
