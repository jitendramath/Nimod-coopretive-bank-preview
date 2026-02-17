"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function ServicesCommitment() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      {/* 🔥 premium background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-400/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-140px] w-[420px] h-[420px] bg-cyan-400/10 blur-[150px] pointer-events-none" />

      <div className="w-[92%] max-w-[1000px] mx-auto text-center relative z-10">

        {/* icon */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-premium-emerald/20 to-cyan-400/20 
          flex items-center justify-center border border-white/10"
        >
          <ShieldCheck className="text-premium-emerald" size={28} />
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          हमारी सेवा प्रतिबद्धता
        </motion.h2>

        {/* gradient underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-premium-emerald via-cyan-400 to-premium-emerald mx-auto mt-6 mb-10"
        />

        {/* paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-white/70 text-[15px] md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          हमारी समिति का लक्ष्य केवल सेवाएं प्रदान करना नहीं बल्कि ग्रामीण समुदाय
          के जीवन स्तर को बेहतर बनाना है। हम पारदर्शिता, विश्वास और आधुनिक
          तकनीक के माध्यम से प्रत्येक सदस्य को सुरक्षित, तेज और विश्वसनीय सेवाएं
          उपलब्ध कराने के लिए प्रतिबद्ध हैं।
          <br /><br />
          आने वाले समय में भी समिति नई सुविधाओं, डिजिटल सेवाओं और ग्रामीण
          विकास योजनाओं के माध्यम से क्षेत्र को आत्मनिर्भर और समृद्ध बनाने की दिशा
          में कार्य करती रहेगी।
        </motion.p>

        {/* premium cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {[
            "पारदर्शी और विश्वसनीय सेवाएं",
            "डिजिटल एवं आधुनिक सुविधाएं",
            "ग्रामीण विकास हेतु समर्पित",
          ].map((text, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 
              backdrop-blur-xl hover:border-premium-emerald/40 transition-all duration-500"
            >
              <Sparkles className="text-premium-emerald mb-3" size={20} />
              <p className="text-white/80 font-medium text-sm md:text-base">
                {text}
              </p>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
              bg-gradient-to-br from-premium-emerald/10 via-transparent to-cyan-400/10 
              transition duration-500 pointer-events-none" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}