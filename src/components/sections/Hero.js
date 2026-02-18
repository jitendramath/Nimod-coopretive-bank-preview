"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* 🌟 Ultra smooth premium animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">

      {/* 💎 Premium background system */}
      <div className="absolute inset-0 -z-10">

        {/* light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9fc] via-[#f3f6fb] to-[#eef2f7] dark:hidden" />

        {/* dark gradient */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

        {/* glow 1 */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-400/20 blur-[120px] rounded-full opacity-30 dark:opacity-20" />

        {/* glow 2 */}
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-sky-400/20 blur-[140px] rounded-full opacity-20 dark:opacity-10" />

      </div>

      <div className="w-[92%] max-w-[950px] mx-auto relative z-10">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center"
        >

          {/* badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-white/60 dark:bg-white/5 backdrop-blur-md text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
              Reg. Since 1954 • Govt. Approved
            </span>
          </motion.div>

          {/* heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-[var(--text-main)] leading-[1.15] mb-6"
          >
            बहुउद्देशीय प्राथमिक ग्राम <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent inline-block mt-2">
              सेवा सहकारी समिति निमोद
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-10"
          >
            ग्रामीण अर्थव्यवस्था को नई दिशा देते हुए — किसानों के लिए वित्तीय सुरक्षा,
            आधुनिक कृषि संसाधन और पारदर्शी बैंकिंग सेवाएं।
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold text-base md:text-lg text-center shadow-lg shadow-emerald-500/20 hover:scale-[1.03] transition"
            >
              संपर्क करें
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[var(--border-color)] text-[var(--text-main)] font-semibold text-base md:text-lg text-center hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              सेवाएं देखें
            </Link>
          </motion.div>

        </motion.div>

        {/* 📊 ULTRA PREMIUM STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-[var(--border-color)] bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-4 md:p-10 shadow-sm"
        >
          {[
            { val: "900+", label: "किसान सदस्य" },
            { val: "1200+", label: "परिवार जुड़े" },
            { val: "₹3 Cr+", label: "ऋण वितरण" },
            { val: "1954", label: "स्थापना वर्ष" }
          ].map((stat, index) => (
            <div key={index} className="text-center py-4 md:py-2">
              <div className="text-2xl md:text-4xl font-semibold text-[var(--text-main)] mb-1">
                {stat.val}
              </div>
              <div className="text-[10px] md:text-sm text-[var(--text-muted)] font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
