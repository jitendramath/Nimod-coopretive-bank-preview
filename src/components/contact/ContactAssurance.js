"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, HeartHandshake } from "lucide-react";

export default function ContactAssurance() {
  const points = [
    {
      icon: ShieldCheck,
      text: "70+ वर्षों का अटूट विश्वास",
      color: "text-emerald-400"
    },
    {
      icon: MessageSquare,
      text: "त्वरित समाधान एवं सहायता",
      color: "text-indigo-400"
    },
    {
      icon: HeartHandshake,
      text: "सदस्य केंद्रित दृष्टिकोण",
      color: "text-amber-400"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#050507]">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="w-[92%] max-w-[1000px] mx-auto relative z-10">
        <div className="text-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-8"
          >
            "आपकी समस्या, <span className="text-emerald-400">हमारा समाधान</span>"
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            यदि आपको ऋण प्रक्रिया, खाद-बीज वितरण या किसी भी सेवा में कोई कठिनाई आ रही है, 
            तो बेझिझक हमसे संपर्क करें। आपकी संतुष्टि ही हमारी प्राथमिकता है।
          </motion.p>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-3"
              >
                <point.icon size={20} className={point.color} />
                <span className="text-white/80 font-medium text-sm md:text-base tracking-wide">
                  {point.text}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
