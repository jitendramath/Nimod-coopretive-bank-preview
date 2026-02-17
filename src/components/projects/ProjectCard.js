"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      whileHover={{ y: -8 }}
      className="group relative block rounded-[28px] overflow-hidden border border-white/10 
      bg-gradient-to-b from-white/[0.04] to-white/[0.02] 
      shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-all duration-500"
    >

      {/* 🌌 premium glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-emerald-400/20 blur-[120px]" />
      </div>

      {/* 📸 IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-[210px] object-cover transition duration-700 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70" />

        {/* tag */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase bg-black/60 border border-white/10 text-white/70 backdrop-blur-md">
          {project.tag}
        </div>
      </div>

      {/* 🧾 CONTENT */}
      <div className="p-6 relative z-10">

        <h3 className="text-white text-lg font-bold mb-2 group-hover:text-premium-emerald transition">
          {project.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {project.desc}
        </p>

        {/* arrow */}
        <div className="flex items-center gap-2 text-premium-emerald text-sm font-semibold">
          विवरण देखें
          <span className="transition group-hover:translate-x-1">→</span>
        </div>

      </div>

      {/* bottom shine line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-40" />

    </motion.a>
  );
}