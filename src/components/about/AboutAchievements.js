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
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* premium gradient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            हमारी <span className="text-premium-emerald">उपलब्धियां</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            वर्षों की निरंतर सेवा, पारदर्शिता और विश्वास ने निमोद सहकारी समिति 
            को क्षेत्र की एक मजबूत और विश्वसनीय संस्था के रूप में स्थापित किया है।
          </p>
        </div>

        {/* stats grid */}
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
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0c11] to-[#050507] p-7 md:p-8 text-center hover:border-premium-emerald/40 transition-all duration-500"
            >

              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(58,244,183,0.18),transparent_60%)]"></div>

              <div className="relative z-10">

                {/* icon */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={28} />
                </div>

                {/* value */}
                <div className="text-3xl md:text-4xl font-bold text-premium-emerald mb-2 tracking-tight">
                  {item.value}
                </div>

                {/* label */}
                <div className="text-white font-semibold text-sm md:text-base mb-1">
                  {item.label}
                </div>

                {/* sub */}
                <div className="text-white/40 text-[11px] uppercase tracking-widest font-bold">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-white/70 text-lg leading-relaxed">
            हमारा उद्देश्य केवल आंकड़े बढ़ाना नहीं, बल्कि हर किसान और परिवार 
            के जीवन में वास्तविक सकारात्मक परिवर्तन लाना है। 
            विश्वास ही हमारी सबसे बड़ी पूंजी है।
          </p>
        </motion.div>

      </div>
    </section>
  );
}