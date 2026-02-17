"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-premium-bg transition-colors duration-500">

      {/* 🌌 Cinematic Glows (Dynamic) */}
      <div className="absolute -top-[260px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-premium-accent/20 blur-[180px] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-[40%] -left-[120px] w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-400/10 blur-[150px] pointer-events-none transition-colors duration-500" />

      {/* 🌌 Bottom Fade (Matches Theme) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-premium-bg pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center relative z-10">

        {/* LEFT TEXT CONTENT */}
        <div className="order-1">

          {/* Tiny Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-premium-surface border border-premium-border text-[10px] sm:text-xs tracking-[0.2em] text-premium-muted uppercase font-bold shadow-sm transition-colors duration-500"
          >
            Since 1954 • Trusted PACS
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[1.9rem] sm:text-[2.3rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-[1.18] tracking-tight mb-8 text-premium-text transition-colors duration-500"
          >
            1954 से ग्रामीण विश्वास  
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-accent via-teal-500 to-premium-accent bg-[length:200%_auto] animate-shimmer">
              और विकास की पहचान
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-premium-muted text-[15px] sm:text-[16px] md:text-lg leading-relaxed max-w-xl transition-colors duration-500 font-medium"
          >
            बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद वर्ष 1954 से किसानों,
            ग्रामीण परिवारों और स्थानीय समुदाय के आर्थिक एवं सामाजिक विकास हेतु
            निरंतर कार्यरत एक विश्वसनीय सहकारी संस्था है।
            <br /><br />
            सहकारिता के सिद्धांतों पर आधारित यह संस्था वित्तीय सेवाएं, कृषि सहायता,
            ऊर्जा आत्मनिर्भरता और सामाजिक सशक्तिकरण के माध्यम से ग्रामीण अर्थव्यवस्था
            को सशक्त बना रही है।
          </motion.p>

          {/* Highlight Chips Grid */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex flex-wrap justify-start gap-4 mt-10"
          >
            {["900+ किसान सदस्य", "1200+ परिवार", "₹3Cr+ ऋण", "70+ वर्ष सेवा"].map((t, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full bg-premium-surface border border-premium-border text-[11px] sm:text-xs md:text-sm text-premium-muted backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-premium-accent/40"
              >
                {t}
              </div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-2"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-premium-border shadow-2xl shadow-premium-shadow transition-all duration-500">

            {/* IMAGE */}
            <Image
              src="/images/cooperative-main.jpg"
              alt="Nimod Cooperative Building"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[340px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              priority
            />

            {/* Overlay Gradient (Ensures readability in both modes) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

            {/* Floating Foundation Badge */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-5 py-3 sm:px-7 sm:py-4 rounded-2xl bg-premium-card/80 backdrop-blur-xl border border-premium-border shadow-2xl transition-colors duration-500">
              <div className="text-premium-muted font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-1">स्थापना</div>
              <div className="text-premium-accent font-black text-2xl sm:text-3xl tracking-tighter">1954</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
