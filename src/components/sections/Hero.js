"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* 🍎 Apple cinematic timeline */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22 }
  }
};

const item = {
  hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050507]">

      {/* luxury glows */}
      <div className="absolute -top-[260px] left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-emerald-500/20 blur-[170px] pointer-events-none"></div>
      <div className="absolute top-[45%] -left-[140px] w-[320px] h-[320px] bg-emerald-400/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10"
      >

        {/* heading */}
        <motion.h1
          variants={item}
          className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-tight leading-[1.1] text-white mb-8"
        >
          बहुउद्देशीय प्राथमिक ग्राम <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald bg-[length:200%_auto] animate-shimmer">
            सेवा सहकारी समिति निमोद
          </span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={item}
          className="text-[1.1rem] md:text-[1.25rem] text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          एक बहुउद्देश्यीय ग्रामीण सहकारी संस्था, जो वित्तीय समावेशन, कृषि विकास, ऊर्जा आत्मनिर्भरता और सामाजिक सशक्तिकरण के सिद्धांतों पर आधारित है।
        </motion.p>

        {/* 🍎 CTA wave */}
        <motion.div
          variants={item}
          className="flex flex-row items-center justify-center gap-4 mb-20 flex-nowrap"
        >
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-premium-emerald text-premium-black rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(58,244,183,0.45)] transition-all duration-300"
          >
            संपर्क करें
          </Link>

          <Link 
            href="#services" 
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 hover:border-premium-emerald/50 transition-all duration-300 backdrop-blur-sm"
          >
            सेवाएं देखें
          </Link>
        </motion.div>

        {/* 🍎 stats wave */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12"
        >

          <motion.div variants={item} className="flex flex-col items-center">
            <span className="text-[2.5rem] md:text-[3rem] font-bold text-premium-emerald block">
              900+
            </span>
            <span className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider mt-1">
              किसान सदस्य
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <span className="text-[2.5rem] md:text-[3rem] font-bold text-premium-emerald block">
              1200+
            </span>
            <span className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider mt-1">
              परिवार जुड़े
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="text-[2.5rem] md:text-[3rem] font-bold text-premium-emerald block">
              2009
            </span>
            <span className="text-sm md:text-base text-white/50 font-medium uppercase tracking-wider mt-1">
              स्थापना वर्ष
            </span>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}
