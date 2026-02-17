"use client";

import { Users, Heart, TrendingUp, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

/* 🍎 Apple luxury stagger system */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.95, filter: "blur(8px)" },
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
      desc: "सक्रिय रूप से जुड़े हुए और लाभान्वित",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: Heart,
      value: "1200+",
      label: "परिवार जुड़े",
      desc: "प्रत्यक्ष और अप्रत्यक्ष रूप से सशक्त",
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-500/10"
    },
    {
      icon: TrendingUp,
      value: "108+",
      label: "SHG समूह",
      desc: "महिला सशक्तिकरण की दिशा में पहल",
      color: "text-premium-accent",
      bg: "bg-premium-accent/10"
    },
    {
      icon: IndianRupee,
      value: "₹3 Cr+",
      label: "ऋण वितरण",
      desc: "ग्रामीण अर्थव्यवस्था को मजबूती",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🌌 Dynamic Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-premium-accent/5 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            सामाजिक <span className="text-premium-accent">प्रभाव</span>
          </h2>
          <p className="text-lg text-premium-muted font-medium transition-colors duration-500">
            समिति की गतिविधियों का प्रत्यक्ष प्रभाव ग्रामीण परिवारों की आर्थिक स्थिति एवं जीवन स्तर पर स्पष्ट रूप से दिखाई देता है।
          </p>
        </motion.div>

        {/* 🍎 Stats Grid (Staggered Animation) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative p-10 rounded-[2.5rem] bg-premium-card border border-premium-border text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-premium-shadow"
            >
              {/* Floating Icon Box */}
              <div className={`w-18 h-18 mx-auto rounded-2xl flex items-center justify-center mb-8 bg-premium-surface shadow-sm ${stat.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-premium-accent group-hover:text-white dark:group-hover:text-black`}>
                <stat.icon size={36} strokeWidth={2} />
              </div>

              {/* Statistical Value */}
              <h3 className={`text-4xl font-black mb-3 transition-colors duration-500 ${stat.color}`}>
                {stat.value}
              </h3>
              
              <div className="text-lg font-bold text-premium-text mb-3 transition-colors duration-500">
                {stat.label}
              </div>
              
              <p className="text-sm text-premium-muted leading-relaxed font-medium transition-colors duration-500">
                {stat.desc}
              </p>

              {/* Subtle Decorative Element */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <stat.icon size={60} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
