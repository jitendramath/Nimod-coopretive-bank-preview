"use client";

import { Users, Gavel, ShieldCheck, FileSignature } from "lucide-react";
import { motion } from "framer-motion";

/* 🍎 Apple luxury stagger system */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 90, scale: 0.96, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Governance() {
  const governanceItems = [
    {
      icon: Users,
      title: "प्रबंधन समिति",
      text: "समिति के समस्त निर्णय 12 सदस्यीय निर्वाचित प्रबंधन समिति द्वारा सामूहिक रूप से लिए जाते हैं, जिससे पारदर्शिता एवं जवाबदेही सुनिश्चित होती है।"
    },
    {
      icon: Gavel,
      title: "लोकतांत्रिक ढांचा",
      text: "राज्य सहकारिता अधिनियम के तहत हर 5 वर्ष में निष्पक्ष चुनाव। सभी सदस्यों को समान मताधिकार और बोलने का हक।"
    },
    {
      icon: ShieldCheck,
      title: "महिला सहभागिता",
      text: "प्रबंधन और संचालन में महिलाओं के लिए आरक्षित सीटें और सक्रिय भागीदारी। समावेशी विकास हमारा मुख्य लक्ष्य है।"
    }
  ];

  return (
    <section id="governance" className="py-24 relative overflow-hidden bg-premium-bg border-y border-premium-border transition-colors duration-500">

      {/* 🌌 Ambient Dynamic Glows */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[30%] w-[420px] h-[420px] bg-premium-accent/5 dark:bg-emerald-500/8 blur-[170px] pointer-events-none transition-colors duration-500" />
      <div className="absolute right-[-140px] bottom-10 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-400/10 blur-[150px] pointer-events-none transition-colors duration-500" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(var(--premium-border)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            प्रबंधन एवं <span className="text-premium-accent">शासन</span>
          </h2>
          <p className="text-lg text-premium-muted font-medium max-w-2xl mx-auto transition-colors duration-500">
            निमोद ग्राम सेवा सहकारी समिति का संचालन लोकतांत्रिक सिद्धांतों और पारदर्शी नियमों के अंतर्गत किया जाता है।
          </p>
        </motion.div>

        {/* 🍎 Governance Stagger Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {governanceItems.map((itemData, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative p-10 rounded-[2.5rem] bg-premium-card border border-premium-border transition-all duration-500 hover:-translate-y-3 hover:border-premium-accent/30 hover:shadow-2xl hover:shadow-premium-shadow"
            >
              {/* Dynamic Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-premium-accent scale-x-0 group-hover:scale-x-50 transition-transform duration-700 rounded-full" />

              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-premium-surface shadow-sm flex items-center justify-center text-premium-accent mb-8 group-hover:bg-premium-accent group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                <itemData.icon size={32} strokeWidth={2} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-premium-text mb-5 group-hover:text-premium-accent transition-colors duration-300">
                {itemData.title}
              </h3>

              <p className="text-premium-muted leading-relaxed mb-10 text-sm md:text-base font-medium transition-colors duration-500">
                {itemData.text}
              </p>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-premium-surface border border-premium-border text-premium-accent text-[10px] font-black uppercase tracking-widest shadow-sm">
                <FileSignature size={14} />
                Verified System
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
