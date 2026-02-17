"use client";

import { motion } from "framer-motion";
import { Users, IndianRupee, CalendarDays, Building2 } from "lucide-react";

export default function AboutStats() {
  const stats = [
    {
      icon: CalendarDays,
      value: "1954",
      label: "स्थापना वर्ष",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10",
      glow: "from-cyan-500/20",
      border: "group-hover:border-cyan-500/50",
    },
    {
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10",
      glow: "from-blue-500/20",
      border: "group-hover:border-blue-500/50",
    },
    {
      icon: Building2,
      value: "1200+",
      label: "परिवार जुड़े",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
      glow: "from-purple-500/20",
      border: "group-hover:border-purple-500/50",
    },
    {
      icon: IndianRupee,
      value: "₹3Cr+",
      label: "ऋण वितरण",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
      glow: "from-emerald-500/20",
      border: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🟢 Glow Background (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[500px] h-[500px] bg-premium-accent/5 blur-[160px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-4 transition-colors duration-500"
          >
            हमारी <span className="text-premium-accent">उपलब्धियां</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto transition-colors duration-500"
          >
            वर्षों की सेवा, विश्वास और विकास ने समिति को क्षेत्र की अग्रणी सहकारी संस्था के रूप में स्थापित किया है।
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              
              {/* ✨ Card Structure */}
              <div className={`relative p-8 rounded-[2rem] bg-premium-card border border-premium-border 
                backdrop-blur-xl text-center overflow-hidden transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow ${stat.border}`}
              >

                {/* Hover Internal Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b ${stat.glow} to-transparent`} />

                {/* Icon Box */}
                <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center 
                  ${stat.bg} ${stat.color} transition-transform duration-500 group-hover:scale-110 shadow-sm`}
                >
                  <stat.icon size={28} strokeWidth={2} />
                </div>

                {/* Number */}
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} transition-colors duration-500`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-premium-muted text-sm md:text-base font-medium tracking-wide transition-colors duration-500">
                  {stat.label}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
