"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* 🌟 Elegant & Slow Fade Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 }, // मूवमेंट कम कर दिया (80 -> 30)
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Ultra smooth cubic-bezier
    }
  }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-premium-bg transition-colors duration-700">

      {/* 🌌 Background Ambience (Softer & more spread out) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-premium-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 dark:bg-blue-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto"
        >
          
          {/* 🏷️ Top Badge (Subtle & Official) */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-premium-border bg-premium-surface/50 backdrop-blur-md text-premium-muted text-xs font-semibold tracking-widest uppercase">
              Reg. Since 1954 • Rajasthan Govt. Approved
            </span>
          </motion.div>

          {/* 👑 Main Heading (Clean & Majestic) */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-premium-text leading-[1.15] mb-6"
          >
            बहुउद्देशीय प्राथमिक ग्राम <br className="hidden md:block" />
            <span className="text-premium-accent inline-block mt-2">
              सेवा सहकारी समिति निमोद
            </span>
          </motion.h1>

          {/* 📜 Subtitle (Readable & Professional) */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-premium-muted/90 font-normal leading-relaxed max-w-2xl mx-auto mb-10"
          >
            ग्रामीण अर्थव्यवस्था को नई दिशा देते हुए — किसानों के लिए वित्तीय सुरक्षा, 
            आधुनिक कृषि संसाधन और पारदर्शी बैंकिंग सेवाएं, अब आपके द्वार पर।
          </motion.p>

          {/* 🔘 Action Buttons (Refined) */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-premium-accent text-white dark:text-black rounded-xl font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-premium-accent/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              संपर्क करें
            </Link>

            <Link 
              href="/services" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-premium-border text-premium-text rounded-xl font-medium text-base md:text-lg hover:bg-premium-surface transition-all duration-300"
            >
              सेवाएं देखें
            </Link>
          </motion.div>

        </motion.div>

        {/* 📊 Stats Strip (Glassmorphism & Clean) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-premium-border/50 bg-premium-card/40 backdrop-blur-md border border-premium-border rounded-3xl p-6 md:p-10 shadow-sm"
        >
          {/* Stat 1 */}
          <div className="text-center px-4 py-2">
            <div className="text-3xl md:text-4xl font-bold text-premium-text mb-1">900+</div>
            <div className="text-sm text-premium-muted font-medium uppercase tracking-wide">किसान सदस्य</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center px-4 py-2">
            <div className="text-3xl md:text-4xl font-bold text-premium-text mb-1">1200+</div>
            <div className="text-sm text-premium-muted font-medium uppercase tracking-wide">परिवार जुड़े</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center px-4 py-2">
            <div className="text-3xl md:text-4xl font-bold text-premium-text mb-1">₹3 Cr+</div>
            <div className="text-sm text-premium-muted font-medium uppercase tracking-wide">ऋण वितरण</div>
          </div>

          {/* Stat 4 */}
          <div className="text-center px-4 py-2">
            <div className="text-3xl md:text-4xl font-bold text-premium-text mb-1">1954</div>
            <div className="text-sm text-premium-muted font-medium uppercase tracking-wide">स्थापना वर्ष</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
