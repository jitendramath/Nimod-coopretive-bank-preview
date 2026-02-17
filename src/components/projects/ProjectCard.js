"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      whileHover={{ y: -10 }}
      className="group relative block rounded-[2.5rem] overflow-hidden border border-premium-border 
      bg-premium-card shadow-lg shadow-premium-shadow transition-all duration-500 hover:shadow-2xl hover:border-premium-accent/30"
    >

      {/* 🌌 Premium Hover Glow (Adaptive) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-premium-accent/15 blur-[120px]" />
      </div>

      {/* 📸 IMAGE Section */}
      <div className="relative overflow-hidden">
        <div className="relative w-full h-[220px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          />
        </div>

        {/* Overlay (Kept dark for text readability on image) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

        {/* Floating Tag */}
        <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-black/40 backdrop-blur-xl border border-white/10 text-white/90 shadow-sm">
          {project.tag}
        </div>
      </div>

      {/* 🧾 CONTENT Section */}
      <div className="p-8 relative z-10">

        <h3 className="text-premium-text text-xl font-bold mb-3 group-hover:text-premium-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-premium-muted text-[15px] leading-relaxed mb-8 transition-colors duration-500">
          {project.desc}
        </p>

        {/* Call to Action Link */}
        <div className="flex items-center gap-3 text-premium-accent text-sm font-bold tracking-wide group/btn">
          विवरण देखें
          <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
        </div>

      </div>

      {/* Premium Shine Line (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-accent/40 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" />

    </motion.a>
  );
}
