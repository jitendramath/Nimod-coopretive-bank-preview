"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Dynamic Background Glows */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 dark:bg-yellow-400/10 blur-[160px] rounded-full pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-premium-accent/5 dark:bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] border border-premium-border bg-premium-card backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-premium-shadow"
        >

          {/* ✨ Gradient Glow Border Overlay */}
          <div className="absolute inset-0 rounded-[2.5rem] opacity-20 dark:opacity-30 bg-gradient-to-br from-yellow-500/20 via-emerald-500/10 to-sky-400/20 blur-2xl pointer-events-none" />

          {/* Heading */}
          <h2 className="relative text-3xl md:text-5xl font-bold text-premium-text leading-tight mb-6 transition-colors duration-500">
            आज ही जुड़ें
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-rose-500 to-sky-600 dark:from-yellow-400 dark:via-emerald-400 dark:to-sky-400">
              निमोद सहकारी सेवाओं से
            </span>
          </h2>

          {/* Subtext */}
          <p className="relative text-premium-muted max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-10 transition-colors duration-500">
            किसानों, ग्रामीण परिवारों और स्थानीय नागरिकों के लिए आधुनिक वित्तीय
            और कृषि सेवाएं अब आपके गांव में उपलब्ध हैं।  
            आज ही समिति से जुड़ें और विकास की नई दिशा में कदम बढ़ाएं।
          </p>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row justify-center gap-6">

            {/* Primary Action */}
            <Link
              href="/contact"
              className="group px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-emerald-500 to-sky-500 text-white dark:text-black font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_var(--accent-glow)]"
            >
              संपर्क करें
              <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </Link>

            {/* Secondary Action */}
            <a
              href="tel:+919602612688"
              className="px-10 py-4 rounded-full bg-premium-surface border border-premium-border text-premium-text font-bold text-lg flex items-center justify-center gap-3 hover:border-premium-accent hover:text-premium-accent transition-all duration-300 shadow-sm"
            >
              <Phone size={18} />
              कॉल करें
            </a>

          </div>

          {/* Bottom Note */}
          <div className="relative mt-12 text-premium-muted/80 text-xs md:text-sm font-medium tracking-wide transition-colors duration-500">
            1954 से विश्वसनीय सेवा • पारदर्शी प्रशासन • ग्रामीण विकास के लिए समर्पित
          </div>

        </motion.div>

      </div>
    </section>
  );
}
