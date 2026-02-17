"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="relative py-36 overflow-hidden bg-[#050507]">

      {/* 🔥 ultra luxury background aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[900px] h-[900px] bg-emerald-500/10 blur-[260px]" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[520px] h-[520px] bg-cyan-400/10 blur-[220px]" />
      </div>

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-[2.8rem] bg-gradient-to-r from-premium-emerald/40 via-cyan-400/30 to-premium-emerald/40"
        >

          {/* glass card */}
          <div className="relative rounded-[2.8rem] bg-gradient-to-b from-[#0b0c11] to-[#050507] 
          border border-white/10 px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">

            {/* glow overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-400/20 blur-[200px]" />
            </div>

            {/* heading */}
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
            >
              भविष्य की ओर  
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
                एक साथ कदम
              </span>
            </motion.h2>

            {/* subtext */}
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
            >
              समिति की परियोजनाएं केवल वर्तमान आवश्यकताओं को नहीं,
              बल्कि आने वाले समय की आत्मनिर्भर और आधुनिक ग्रामीण अर्थव्यवस्था
              की नींव तैयार कर रही हैं।
              <br /><br />
              आइए, हम मिलकर विकास और विश्वास की इस यात्रा को आगे बढ़ाएं।
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* contact */}
              <Link
                href="/#contact"
                className="relative px-10 py-4 rounded-full font-bold text-lg 
                bg-premium-emerald text-premium-black 
                hover:scale-105 transition-all duration-300
                shadow-[0_0_30px_rgba(58,244,183,0.3)]"
              >
                संपर्क करें
              </Link>

              {/* about */}
              <Link
                href="/about"
                className="relative px-10 py-4 rounded-full font-bold text-lg 
                border border-white/15 text-white bg-white/5 
                hover:border-premium-emerald/50 hover:bg-white/10 
                transition-all duration-300 backdrop-blur-md"
              >
                हमारी संस्था जानें
              </Link>
            </motion.div>

            {/* trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="mt-14 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs 
              uppercase tracking-widest text-white/30"
            >
              <span>70+ वर्ष सेवा</span>
              <span>•</span>
              <span>900+ किसान सदस्य</span>
              <span>•</span>
              <span>पारदर्शी संचालन</span>
              <span>•</span>
              <span>ग्रामीण विकास</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}