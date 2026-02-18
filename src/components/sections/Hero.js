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

/* 💎 Live Counter (luxury clean version) */
const Counter = ({ value }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="inline-flex items-start"
    >
      <span className="tabular-nums tracking-tight">
        {numericValue}
      </span>
      <span className="text-[0.55em] ml-1 mt-1 opacity-70 font-medium">
        {suffix}
      </span>
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">

      {/* 💎 Premium background */}
      <div className="absolute inset-0 -z-10">

        {/* light */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9fc] via-[#f3f6fb] to-[#eef2f7] dark:hidden" />

        {/* dark */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

        {/* glow */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-400/20 blur-[120px] rounded-full opacity-30 dark:opacity-20" />
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

          {/* micro trust */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <p className="text-[11px] md:text-xs text-[var(--text-muted)] tracking-[0.18em] whitespace-nowrap overflow-hidden text-ellipsis">
              Trusted by <span className="text-emerald-500 font-semibold">1200+</span> families since <span className="text-emerald-500 font-semibold">1954</span>
            </p>
          </motion.div>

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

        {/* 💎 PREMIUM GLASS STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto mt-16 md:mt-24 px-4"
        >

          {/* glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="
            relative grid grid-cols-2 md:grid-cols-4
            bg-white/60 dark:bg-[#0a0a0a]/60 
            backdrop-blur-2xl 
            border border-white/20 dark:border-white/5
            shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            rounded-[2rem] md:rounded-full
            overflow-hidden
          ">
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />

            {[
              { val: "900+", label: "किसान सदस्य" },
              { val: "1200+", label: "परिवार जुड़े" },
              { val: "3 Cr+", label: "ऋण वितरण (₹)" },
              { val: "1954", label: "स्थापना वर्ष" }
            ].map((stat, index) => (
              <div key={index} className="relative group p-6 md:py-8 flex flex-col items-center justify-center text-center">

                {/* mobile dividers */}
                {index < 2 && (
                  <div className="md:hidden absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />
                )}
                {index % 2 === 0 && (
                  <div className="md:hidden absolute right-0 top-6 bottom-6 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />
                )}

                {/* desktop divider */}
                {index !== 3 && (
                  <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />
                )}

                {/* number */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-white mb-1 tracking-tighter">
                  <Counter value={stat.val} />
                </div>

                {/* label */}
                <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400/80">
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
