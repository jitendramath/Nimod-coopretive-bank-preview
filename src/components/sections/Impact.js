"use client";

import { Users, Heart, TrendingUp, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

/* Luxury stagger */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.96, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Impact() {

  const stats = [
    {
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      desc: "सक्रिय रूप से जुड़े हुए और लाभान्वित"
    },
    {
      icon: Heart,
      value: "1200+",
      label: "परिवार जुड़े",
      desc: "प्रत्यक्ष और अप्रत्यक्ष रूप से सशक्त"
    },
    {
      icon: TrendingUp,
      value: "108+",
      label: "SHG समूह",
      desc: "महिला सशक्तिकरण की दिशा में पहल"
    },
    {
      icon: IndianRupee,
      value: "₹3 Cr+",
      label: "ऋण वितरण",
      desc: "ग्रामीण अर्थव्यवस्था को मजबूती"
    }
  ];

  return (
    <section
      id="impact"
      className="relative py-20 md:py-28 overflow-hidden transition-colors duration-500"
    >

      {/* 🌌 Ambient Luxury Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] blur-[180px] opacity-40 dark:opacity-30" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/10 dark:bg-emerald-400/10 blur-[160px]" />
      </div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-premium-text mb-6">
            सामाजिक <span className="text-shimmer">प्रभाव</span>
          </h2>
          <p className="text-premium-muted text-base md:text-lg leading-relaxed">
            समिति की गतिविधियों का प्रत्यक्ष प्रभाव ग्रामीण परिवारों की आर्थिक स्थिति एवं जीवन स्तर पर स्पष्ट रूप से दिखाई देता है।
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl border border-[var(--border-color)] 
              bg-[var(--card-bg)] 
              transition-all duration-500 
              hover:-translate-y-4 hover:shadow-[0_30px_80px_var(--shadow-color)] 
              overflow-hidden"
            >

              {/* Internal Glow Ring */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--accent-glow),transparent_60%)]" />
              </div>

              {/* Floating Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-8 rounded-2xl 
                flex items-center justify-center 
                bg-white/40 dark:bg-white/5 
                backdrop-blur-md 
                border border-white/20 
                text-[var(--accent-primary)] 
                group-hover:scale-110 
                transition-all duration-500"
              >
                <stat.icon size={32} strokeWidth={2} />
              </div>

              {/* Value */}
              <h3 className="relative z-10 text-3xl md:text-4xl font-black text-premium-text mb-3 tracking-tight">
                {stat.value}
              </h3>

              {/* Label */}
              <div className="relative z-10 text-base md:text-lg font-bold text-premium-text mb-3">
                {stat.label}
              </div>

              {/* Description */}
              <p className="relative z-10 text-sm text-premium-muted leading-relaxed">
                {stat.desc}
              </p>

              {/* Soft Glass Reflection */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 dark:bg-white/5 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
