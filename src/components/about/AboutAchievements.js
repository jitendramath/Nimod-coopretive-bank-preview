"use client";

import { motion } from "framer-motion";
import { Users, Building2, CalendarCheck2, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "900+",
    label: "किसान सदस्य",
    sub: "सक्रिय एवं पंजीकृत",
  },
  {
    icon: Building2,
    value: "1200+",
    label: "ग्रामीण परिवार",
    sub: "विश्वास से जुड़े",
  },
  {
    icon: CalendarCheck2,
    value: "1954",
    label: "स्थापना वर्ष",
    sub: "70+ वर्षों की सेवा",
  },
  {
    icon: BadgeCheck,
    value: "100%",
    label: "पारदर्शिता",
    sub: "नियमित ऑडिट",
  },
];

export default function AboutAchievements() {
  return (
    <section className="relative py-24 md:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🟢 Premium Gradient Glow (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-[700px] h-[700px] bg-premium-accent/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-6 tracking-tight transition-colors duration-500"
          >
            हमारी <span className="text-premium-accent">उपलब्धियां</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-500"
          >
            वर्षों की निरंतर सेवा, पारदर्शिता और विश्वास ने निमोद सहकारी समिति 
            को क्षेत्र की एक मजबूत और विश्वसनीय संस्था के रूप में स्थापित किया है।
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] border border-premium-border bg-premium-card 
              p-7 md:p-8 text-center hover:border-premium-accent/40 transition-all duration-500 
              backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow"
            >

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-premium-accent/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10">

                {/* Icon Box */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-premium-surface border border-premium-border flex items-center justify-center text-premium-accent shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={32} />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-premium-accent mb-2 tracking-tight transition-colors duration-500">
                  {item.value}
                </div>

                {/* Label */}
                <div className="text-premium-text font-bold text-sm md:text-base mb-1 transition-colors duration-500">
                  {item.label}
                </div>

                {/* Sub */}
                <div className="text-premium-muted text-[11px] uppercase tracking-widest font-bold transition-colors duration-500">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <p className="text-premium-text/80 text-lg md:text-xl font-medium leading-relaxed italic transition-colors duration-500">
            "हमारा उद्देश्य केवल आंकड़े बढ़ाना नहीं, बल्कि हर किसान और परिवार 
            के जीवन में वास्तविक सकारात्मक परिवर्तन लाना है। 
            विश्वास ही हमारी सबसे बड़ी पूंजी है।"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
