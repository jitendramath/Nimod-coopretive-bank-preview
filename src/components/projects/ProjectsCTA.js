"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="relative py-36 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Ultra Luxury Background Aura (Dynamic) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[900px] h-[900px] bg-premium-accent/10 blur-[260px] transition-colors duration-500" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[520px] h-[520px] bg-cyan-500/5 dark:bg-cyan-400/10 blur-[220px] transition-colors duration-500" />
      </div>

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-[1.5px] rounded-[3rem] bg-gradient-to-r from-premium-accent/40 via-cyan-400/30 to-premium-accent/40"
        >

          {/* Premium Glass Card */}
          <div className="relative rounded-[3rem] bg-premium-card border border-premium-border px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden shadow-2xl shadow-premium-shadow">

            {/* Internal Glow Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-premium-accent/20 blur-[200px]" />
            </div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative text-3xl md:text-5xl lg:text-6xl font-bold text-premium-text leading-tight mb-8 transition-colors duration-500"
            >
              भविष्य की ओर  
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-accent via-teal-500 to-premium-accent">
                एक साथ कदम
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative text-premium-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 transition-colors duration-500"
            >
              समिति की परियोजनाएं केवल वर्तमान आवश्यकताओं को नहीं,
              बल्कि आने वाले समय की आत्मनिर्भर और आधुनिक ग्रामीण अर्थव्यवस्था
              की नींव तैयार कर रही हैं।
              <br /><br />
              आइए, हम मिलकर विकास और विश्वास की इस यात्रा को आगे बढ़ाएं।
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* Primary Contact Link */}
              <Link
                href="/#contact"
                className="relative px-10 py-4 rounded-full font-bold text-lg 
                bg-premium-accent text-white dark:text-black 
                hover:scale-105 transition-all duration-300
                shadow-[0_20px_50px_var(--accent-glow)]"
              >
                संपर्क करें
              </Link>

              {/* Secondary About Link */}
              <Link
                href="/about"
                className="relative px-10 py-4 rounded-full font-bold text-lg 
                border border-premium-border text-premium-text bg-premium-surface 
                hover:border-premium-accent/50 hover:bg-premium-surface/80 
                transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                हमारी संस्था जानें
              </Link>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="relative mt-16 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs 
              uppercase tracking-[0.2em] font-bold text-premium-muted/50"
            >
              <span>70+ वर्ष सेवा</span>
              <span className="text-premium-accent">•</span>
              <span>900+ किसान सदस्य</span>
              <span className="text-premium-accent">•</span>
              <span>पारदर्शी संचालन</span>
              <span className="text-premium-accent">•</span>
              <span>ग्रामीण विकास</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
