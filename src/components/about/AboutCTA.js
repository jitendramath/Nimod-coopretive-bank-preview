"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-[#050507] overflow-hidden">

      {/* premium luxury glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[700px] h-[700px] bg-emerald-500/10 blur-[220px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10 text-center">

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-premium-emerald text-xs font-bold tracking-widest mb-8"
        >
          <Sparkles size={14} />
          SINCE 1954 TRUSTED COOPERATIVE
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 tracking-tight"
        >
          सहकारिता से <span className="text-premium-emerald">समृद्धि</span> की ओर
          <br className="hidden md:block" />
          आपका स्वागत है
        </motion.h2>

        {/* desc */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed mb-12"
        >
          बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद ग्रामीण विकास,
          वित्तीय सशक्तिकरण और सामाजिक प्रगति की दिशा में निरंतर कार्यरत है।
          आइए, हम सभी मिलकर आत्मनिर्भर ग्रामीण भारत के निर्माण में सहभागी बनें।
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* primary */}
          <Link
            href="/#contact"
            className="group px-8 py-4 rounded-full bg-premium-emerald text-premium-black font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(58,244,183,0.25)]"
          >
            संपर्क करें
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {/* secondary */}
          <Link
            href="/"
            className="px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-lg hover:border-premium-emerald hover:text-premium-emerald transition-all duration-300"
          >
            होम पेज देखें
          </Link>
        </motion.div>

        {/* bottom trust text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-white/40 text-sm tracking-wide"
        >
          पंजीकृत संस्था | पारदर्शी प्रशासन | नियमित वैधानिक ऑडिट
        </motion.div>

      </div>
    </section>
  );
}