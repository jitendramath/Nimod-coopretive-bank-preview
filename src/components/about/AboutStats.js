"use client";

import { motion } from "framer-motion";
import { Users, IndianRupee, CalendarDays, Building2 } from "lucide-react";

export default function AboutStats() {
  const stats = [
    {
      icon: CalendarDays,
      value: "1954",
      label: "स्थापना वर्ष",
      color: "text-cyan-400",
      glow: "from-cyan-400/20",
    },
    {
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      color: "text-blue-400",
      glow: "from-blue-400/20",
    },
    {
      icon: Building2,
      value: "1200+",
      label: "परिवार जुड़े",
      color: "text-purple-400",
      glow: "from-purple-400/20",
    },
    {
      icon: IndianRupee,
      value: "₹3Cr+",
      label: "ऋण वितरण",
      color: "text-premium-emerald",
      glow: "from-premium-emerald/20",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-premium-charcoal relative overflow-hidden">

      {/* glow background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[500px] h-[500px] bg-emerald-400/10 blur-[160px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            हमारी <span className="text-premium-emerald">उपलब्धियां</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            वर्षों की सेवा, विश्वास और विकास ने समिति को क्षेत्र की अग्रणी सहकारी संस्था के रूप में स्थापित किया है।
          </p>
        </div>

        {/* stats grid */}
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
              {/* glow card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent rounded-3xl border border-white/5"></div>

              {/* hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl bg-gradient-to-b ${stat.glow} to-transparent blur-xl`} />

              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center overflow-hidden">

                {/* icon */}
                <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white/5 ${stat.color}`}>
                  <stat.icon size={28} strokeWidth={1.6} />
                </div>

                {/* number */}
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>

                {/* label */}
                <div className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </div>

                {/* subtle line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}