"use client";

import { Users, Gavel, ShieldCheck, FileSignature } from "lucide-react";
import { motion } from "framer-motion";

/* 🍎 Apple luxury stagger */
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
    <section id="governance" className="py-24 relative overflow-hidden bg-[#06070a] border-y border-white/5">

      {/* background glows */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[30%] w-[420px] h-[420px] bg-emerald-500/8 blur-[170px] pointer-events-none"></div>
      <div className="absolute right-[-140px] bottom-10 w-[300px] h-[300px] bg-blue-400/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            प्रबंधन एवं <span className="text-premium-emerald">शासन</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            निमोद ग्राम सेवा सहकारी समिति का संचालन लोकतांत्रिक सिद्धांतों और पारदर्शी नियमों के अंतर्गत किया जाता है।
          </p>
        </motion.div>

        {/* 🍎 Apple stagger grid */}
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
              className="premium-card relative p-8 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
            >
              {/* accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-premium-emerald scale-x-0 group-hover:scale-x-50 transition-transform duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 shadow-[0_0_30px_rgba(58,244,183,0.15)] flex items-center justify-center text-premium-emerald mb-6 group-hover:bg-premium-emerald group-hover:text-premium-black transition-all duration-500">
                <itemData.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-premium-emerald transition-colors">
                {itemData.title}
              </h3>

              <p className="text-white/60 leading-relaxed mb-8 text-sm">
                {itemData.text}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-premium-emerald/5 shadow-[0_0_20px_rgba(58,244,183,0.15)] border border-premium-emerald/10 text-premium-emerald text-[0.65rem] font-bold uppercase tracking-wider">
                <FileSignature size={12} />
                Verified System
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom trust row */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9 }}
          className="mt-16 pt-10 border-t border-dashed border-white/10 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {["Democratic Control", "Member Economic Participation", "Autonomy & Independence"].map((text, i) => (
            <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-default">
              <div className="w-2 h-2 rounded-full bg-premium-emerald"></div>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
