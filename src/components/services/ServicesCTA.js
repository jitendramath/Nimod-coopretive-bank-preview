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
    <section className="relative py-28 md:py-36 bg-[#050507] overflow-hidden">

      {/* 🔥 background glows */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden"
        >

          {/* gradient glow border */}
          <div className="absolute inset-0 rounded-[2rem] opacity-30 bg-gradient-to-br from-yellow-400/20 via-emerald-400/10 to-sky-400/20 blur-2xl" />

          {/* heading */}
          <h2 className="relative text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            आज ही जुड़ें
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-emerald-400 to-sky-400">
              निमोद सहकारी सेवाओं से
            </span>
          </h2>

          {/* subtext */}
          <p className="relative text-white/60 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-10">
            किसानों, ग्रामीण परिवारों और स्थानीय नागरिकों के लिए आधुनिक वित्तीय
            और कृषि सेवाएं अब आपके गांव में उपलब्ध हैं।  
            आज ही समिति से जुड़ें और विकास की नई दिशा में कदम बढ़ाएं।
          </p>

          {/* buttons */}
          <div className="relative flex flex-col sm:flex-row justify-center gap-5">

            {/* primary */}
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-sky-400 text-black font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              संपर्क करें
              <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </Link>

            {/* secondary */}
            <a
              href="tel:+919602612688"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Phone size={18} />
              कॉल करें
            </a>

          </div>

          {/* bottom note */}
          <div className="relative mt-10 text-white/40 text-xs md:text-sm">
            1954 से विश्वसनीय सेवा • पारदर्शी प्रशासन • ग्रामीण विकास के लिए समर्पित
          </div>

        </motion.div>

      </div>
    </section>
  );
}