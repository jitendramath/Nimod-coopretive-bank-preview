"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#050507]">

      {/* 🔥 cinematic glow top */}
      <div className="absolute -top-[260px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-emerald-500/20 blur-[180px] pointer-events-none"></div>

      {/* 🔥 side glow */}
      <div className="absolute top-[40%] -left-[120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[150px] pointer-events-none"></div>

      {/* 🔥 bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center relative z-10">

        {/* LEFT TEXT */}
        <div className="order-1">

          {/* tiny tag */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs tracking-widest text-white/60 uppercase"
          >
            Since 1954 • Trusted PACS
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[1.9rem] sm:text-[2.3rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-[1.18] tracking-tight mb-6"
          >
            1954 से ग्रामीण विश्वास  
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald bg-[length:200%_auto] animate-shimmer">
              और विकास की पहचान
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white/60 text-[15px] sm:text-[16px] md:text-lg leading-relaxed max-w-xl"
          >
            बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद वर्ष 1954 से किसानों,
            ग्रामीण परिवारों और स्थानीय समुदाय के आर्थिक एवं सामाजिक विकास हेतु
            निरंतर कार्यरत एक विश्वसनीय सहकारी संस्था है।
            <br /><br />
            सहकारिता के सिद्धांतों पर आधारित यह संस्था वित्तीय सेवाएं, कृषि सहायता,
            ऊर्जा आत्मनिर्भरता और सामाजिक सशक्तिकरण के माध्यम से ग्रामीण अर्थव्यवस्था
            को सशक्त बना रही है।
          </motion.p>

          {/* highlight chips */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex flex-wrap justify-start gap-3 mt-8"
          >
            {["900+ किसान सदस्य", "1200+ परिवार", "₹3Cr+ ऋण", "70+ वर्ष सेवा"].map((t, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs md:text-sm text-white/70 backdrop-blur-sm"
              >
                {t}
              </div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-2"
        >
          <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

            {/* IMAGE */}
            <Image
              src="/images/cooperative-main.jpg"
              alt="Nimod Cooperative Building"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[340px] md:h-[500px] object-cover"
              priority
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

            {/* floating badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 sm:px-5 sm:py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-white font-bold text-xs sm:text-sm">स्थापना</div>
              <div className="text-premium-emerald font-bold text-lg sm:text-2xl">1954</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
