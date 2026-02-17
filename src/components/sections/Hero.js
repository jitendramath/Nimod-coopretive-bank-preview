"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* 🌟 Elegant & Slow Fade Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Ultra smooth cubic-bezier
    }
  }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-premium-bg transition-colors duration-700">

      {/* 🌌 Background Ambience (Optimized for Mobile & Desktop) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1000px] h-[300px] md:h-[600px] bg-premium-accent/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[800px] h-[250px] md:h-[600px] bg-blue-500/5 dark:bg-blue-400/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[90%] md:w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto"
        >
          
          {/* 🏷️ Top Badge (Smaller on Mobile) */}
          <motion.div variants={fadeUp} className="flex justify-center mb-5 md:mb-6">
            <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-premium-border bg-premium-surface/50 backdrop-blur-md text-premium-muted text-[10px] md:text-xs font-semibold tracking-widest uppercase">
              Reg. Since 1954 • Govt. Approved
            </span>
          </motion.div>

          {/* 👑 Main Heading (Responsive Sizing) */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-premium-text leading-[1.1] md:leading-[1.15] mb-4 md:mb-6"
          >
            बहुउद्देशीय प्राथमिक ग्राम <br className="hidden md:block" />
            <span className="text-premium-accent inline-block mt-1 md:mt-2">
              सेवा सहकारी समिति निमोद
            </span>
          </motion.h1>

          {/* 📜 Subtitle (Compact on Mobile) */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-premium-muted/90 font-normal leading-relaxed max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10"
          >
            ग्रामीण अर्थव्यवस्था को नई दिशा देते हुए — किसानों के लिए वित्तीय सुरक्षा, 
            आधुनिक कृषि संसाधन और पारदर्शी बैंकिंग सेवाएं।
          </motion.p>

          {/* 🔘 Action Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-14 md:mb-20"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 bg-premium-accent text-white dark:text-black rounded-xl font-semibold text-base md:text-lg text-center hover:shadow-lg hover:shadow-premium-accent/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              संपर्क करें
            </Link>

            <Link 
              href="/services" 
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 bg-transparent border border-premium-border text-premium-text rounded-xl font-semibold text-base md:text-lg text-center hover:bg-premium-surface transition-all duration-300"
            >
              सेवाएं देखें
            </Link>
          </motion.div>

        </motion.div>

        {/* 📊 Stats Section - MOBILE FIRST PREMIUM CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // Mobile: Grid with gaps. Desktop: Single glass strip with dividers.
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 md:divide-x divide-premium-border/50 bg-transparent md:bg-premium-card/40 md:backdrop-blur-md md:border border-premium-border rounded-none md:rounded-3xl p-0 md:p-10 shadow-none md:shadow-sm"
        >
          {/* Stat Items - Cards on Mobile, Simple text on Desktop */}
          {[
            { val: "900+", label: "किसान सदस्य" },
            { val: "1200+", label: "परिवार जुड़े" },
            { val: "₹3 Cr+", label: "ऋण वितरण" },
            { val: "1954", label: "स्थापना वर्ष" }
          ].map((stat, index) => (
            <div key={index} className="text-center px-4 py-5 md:py-2 rounded-2xl md:rounded-none bg-premium-card/60 md:bg-transparent border md:border-0 border-premium-border backdrop-blur-lg md:backdrop-blur-none shadow-sm md:shadow-none">
              <div className="text-2xl md:text-4xl font-bold text-premium-text mb-1">{stat.val}</div>
              <div className="text-[10px] md:text-sm text-premium-muted font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
