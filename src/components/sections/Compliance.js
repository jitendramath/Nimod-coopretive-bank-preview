"use client";

import { FileCheck, Shield, BookOpen, Lock } from "lucide-react";
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
  hidden: { opacity: 0, y: 80, scale: 0.96, filter: "blur(8px)" },
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

export default function Compliance() {
  const complianceItems = [
    {
      icon: BookOpen,
      title: "नियम एवं अधिनियम",
      text: "समिति का संचालन राजस्थान सहकारी सोसाइटी अधिनियम, 2001 और नियम 2003 के अंतर्गत पूर्णतः वैधानिक रूप से किया जाता है।"
    },
    {
      icon: FileCheck,
      title: "ऑडिट एवं निरीक्षण",
      text: "सहकारिता विभाग द्वारा नियुक्त ऑडिटर्स द्वारा प्रतिवर्ष वैधानिक ऑडिट (Statutory Audit) संपन्न। 100% अनुपालन रिकॉर्ड।"
    },
    {
      icon: Shield,
      title: "धन की सुरक्षा",
      text: "सदस्यों की जमा राशि और निवेश को सुरक्षित रखने के लिए कड़े वित्तीय अनुशासन और रिज़र्व फंड की व्यवस्था।"
    },
    {
      icon: Lock,
      title: "डेटा गोपनीयता",
      text: "बैंकिंग लेन-देन और व्यक्तिगत जानकारी की सुरक्षा के लिए आधुनिक डिजिटल सुरक्षा मानकों का पालन।"
    }
  ];

  return (
    <section id="compliance" className="py-24 relative overflow-hidden bg-premium-bg border-t border-premium-border transition-colors duration-500">

      {/* 🌌 Premium Ambient Glows (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[25%] w-[420px] h-[420px] bg-premium-accent/5 dark:bg-emerald-500/6 blur-[180px] pointer-events-none transition-colors duration-500" />
      <div className="absolute right-[-120px] top-[40%] w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-400/8 blur-[160px] pointer-events-none transition-colors duration-500" />
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.025] bg-[linear-gradient(var(--premium-border)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-20 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            अनुपालन एवं <span className="text-premium-accent">पारदर्शिता</span>
          </h2>
          <p className="text-lg text-premium-muted font-medium max-w-2xl mx-auto transition-colors duration-500">
            हमारा मूल मंत्र 'विश्वास' है। हम सुनिश्चित करते हैं कि हर प्रक्रिया नियमसंगत और पारदर्शी हो।
          </p>
        </motion.div>

        {/* 🍎 Compliance Stagger Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {complianceItems.map((itemData, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-premium-card border border-premium-border transition-all duration-500 hover:-translate-y-2 hover:border-premium-accent/30 hover:shadow-2xl hover:shadow-premium-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
                
                {/* Icon Box */}
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-premium-surface shadow-sm flex items-center justify-center text-premium-accent group-hover:bg-premium-accent group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                  <itemData.icon size={30} strokeWidth={2} />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-bold text-premium-text group-hover:text-premium-accent transition-colors duration-300">
                    {itemData.title}
                  </h4>
                  <p className="text-premium-muted leading-relaxed text-[15px] md:text-base font-medium transition-colors duration-500">
                    {itemData.text}
                  </p>
                </div>
              </div>
              
              {/* Internal Accent Glow (Hover) */}
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,var(--accent-glow),transparent_70%)] pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-4 md:gap-8"
        >
          {["RBI Guidelines Followed", "ISO 9001:2015 Standards", "Secure SSL Encryption", "Zero-Tolerance Fraud Policy"].map((badge, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-premium-border bg-premium-surface/50 text-premium-muted/60 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] hover:text-premium-accent hover:border-premium-accent/50 transition-all duration-300 cursor-default shadow-sm backdrop-blur-sm">
              {badge}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
