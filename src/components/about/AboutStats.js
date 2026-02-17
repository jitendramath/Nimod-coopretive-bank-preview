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
      glow: "from-cyan-500/10 dark:from-cyan-400/20",
    },
    {
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      color: "text-blue-600 dark:text-blue-400",
      glow: "from-blue-500/10 dark:from-blue-400/20",
    },
    {
      icon: Building2,
      value: "1200+",
      label: "परिवार जुड़े",
      color: "text-purple-600 dark:text-purple-400",
      glow: "from-purple-500/10 dark:from-purple-400/20",
    },
    {
      icon: IndianRupee,
      value: "₹3Cr+",
      label: "ऋण वितरण",
      color: "text-premium-accent",
      glow: "from-premium-accent/10 dark:from-premium-accent/20",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🌌 Premium Ambient Glow (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[500px] h-[500px] bg-premium-accent/5 dark:bg-emerald-400/10 blur-[160px] pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-4 transition-colors duration-500"
          >
            हमारी <span className="text-premium-accent">उपलब्धियां</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto transition-colors duration-500 font-medium"
          >
            वर्षों की सेवा, विश्वास और विकास ने समिति को क्षेत्र की अग्रणी सहकारी संस्था के रूप में स्थापित किया है।
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="relative group"
            >
              {/* Internal Glow on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[2.5rem] bg-gradient-to-b ${stat.glow} to-transparent blur-xl pointer-events-none`} />

              <div className="relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border backdrop-blur-xl text-center overflow-hidden shadow-sm hover:shadow-xl hover:shadow-premium-shadow transition-all duration-500">

                {/* Icon Box */}
                <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-premium-surface shadow-sm ${stat.color} transition-transform duration-500 group-hover:scale-110`}>
                  <stat.icon size={28} strokeWidth={2} />
                </div>

                {/* Stat Value */}
                <div className={`text-3xl md:text-4xl font-black mb-2 transition-colors duration-500 ${stat.color}`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-premium-muted text-sm md:text-base font-bold tracking-wide uppercase transition-colors duration-500">
                  {stat.label}
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-premium-border to-transparent opacity-50" />

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
