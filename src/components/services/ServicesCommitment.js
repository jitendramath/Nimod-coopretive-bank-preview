"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function ServicesCommitment() {
  return (
    <section className="relative py-24 lg:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Premium Background Glows (Dynamic) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-premium-accent/10 blur-[160px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-[-200px] right-[-140px] w-[420px] h-[420px] bg-cyan-500/5 dark:bg-cyan-400/10 blur-[150px] pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1000px] mx-auto text-center relative z-10">

        {/* Dynamic Icon Box */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-premium-surface flex items-center justify-center border border-premium-border shadow-sm group-hover:scale-110 transition-transform duration-500"
        >
          <ShieldCheck className="text-premium-accent" size={32} />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-premium-text leading-tight transition-colors duration-500"
        >
          हमारी सेवा प्रतिबद्धता
        </motion.h2>

        {/* Dynamic Gradient Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[3px] bg-gradient-to-r from-premium-accent via-cyan-500 to-premium-accent mx-auto mt-6 mb-12 rounded-full shadow-[0_0_10px_var(--accent-glow)]"
        />

        {/* Commitment Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-premium-muted text-[15px] md:text-lg leading-relaxed max-w-3xl mx-auto transition-colors duration-500 font-medium"
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

        {/* Premium Commitment Grid Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {[
            "पारदर्शी और विश्वसनीय सेवाएं",
            "डिजिटल एवं आधुनिक सुविधाएं",
            "ग्रामीण विकास हेतु समर्पित",
          ].map((text, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-[2rem] bg-premium-card border border-premium-border 
              backdrop-blur-xl hover:border-premium-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-premium-shadow"
            >
              <Sparkles className="text-premium-accent mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" size={24} />
              <p className="text-premium-text font-bold text-sm md:text-base leading-snug transition-colors duration-500">
                {text}
              </p>

              {/* Dynamic Glow Overlay on Hover */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 
              bg-gradient-to-br from-premium-accent/5 via-transparent to-cyan-500/5 
              transition duration-500 pointer-events-none" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
