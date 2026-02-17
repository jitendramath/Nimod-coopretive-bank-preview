"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* 🍎 Apple cinematic timeline animation settings */
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-premium-bg transition-colors duration-500">

      {/* 🌌 Premium Ambient Glows (Dynamic) */}
      <div className="absolute -top-[260px] left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-premium-accent/20 blur-[170px] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-[45%] -left-[140px] w-[320px] h-[320px] bg-premium-accent/10 blur-[130px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-[10%] right-[-120px] w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-400/10 blur-[140px] pointer-events-none transition-colors duration-500" />
      
      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-premium-bg pointer-events-none transition-colors duration-500" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10"
      >

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-premium-text mb-8 transition-colors duration-500"
        >
          बहुउद्देशीय प्राथमिक ग्राम <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-accent via-teal-500 to-premium-accent bg-[length:200%_auto] animate-shimmer">
            सेवा सहकारी समिति निमोद
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-[1.1rem] md:text-[1.3rem] text-premium-muted max-w-2xl mx-auto mb-14 leading-relaxed transition-colors duration-500 font-medium"
        >
          एक बहुउद्देश्यीय ग्रामीण सहकारी संस्था, जो वित्तीय समावेशन, कृषि विकास, ऊर्जा आत्मनिर्भरता और सामाजिक सशक्तिकरण के सिद्धांतों पर आधारित है।
        </motion.p>

        {/* CTA Section */}
        <motion.div
          variants={item}
          className="flex flex-row items-center justify-center gap-5 mb-24 flex-nowrap"
        >
          <Link 
            href="#contact" 
            className="px-10 py-4.5 bg-premium-accent text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 shadow-xl shadow-premium-shadow transition-all duration-300"
          >
            संपर्क करें
          </Link>

          <Link 
            href="#services" 
            className="px-10 py-4.5 bg-premium-surface text-premium-text border border-premium-border rounded-full font-bold text-lg hover:bg-premium-surface/80 hover:border-premium-accent/50 transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            सेवाएं देखें
          </Link>
        </motion.div>

        {/* Stats Wave */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-premium-border pt-14 transition-colors duration-500"
        >

          <motion.div variants={item} className="flex flex-col items-center group">
            <span className="text-[2.6rem] md:text-[3.5rem] font-black text-premium-accent block tracking-tighter transition-transform duration-500 group-hover:scale-110">
              900+
            </span>
            <span className="text-xs md:text-sm text-premium-muted font-bold uppercase tracking-[0.2em] mt-2">
              किसान सदस्य
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center group">
            <span className="text-[2.6rem] md:text-[3.5rem] font-black text-premium-accent block tracking-tighter transition-transform duration-500 group-hover:scale-110">
              1200+
            </span>
            <span className="text-xs md:text-sm text-premium-muted font-bold uppercase tracking-[0.2em] mt-2">
              परिवार जुड़े
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center col-span-2 md:col-span-1 group">
            <span className="text-[2.6rem] md:text-[3.5rem] font-black text-premium-accent block tracking-tighter transition-transform duration-500 group-hover:scale-110">
              1954
            </span>
            <span className="text-xs md:text-sm text-premium-muted font-bold uppercase tracking-[0.2em] mt-2">
              स्थापना वर्ष
            </span>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}
