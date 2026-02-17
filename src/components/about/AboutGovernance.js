"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Scale, FileCheck } from "lucide-react";

const governance = [
  {
    icon: Users,
    title: "निर्वाचित प्रबंधन समिति",
    desc: "समिति का संचालन 12 सदस्यीय निर्वाचित प्रबंधन समिति द्वारा किया जाता है, जो सामूहिक निर्णय और सदस्य हितों को सर्वोपरि रखती है।",
  },
  {
    icon: Scale,
    title: "लोकतांत्रिक प्रणाली",
    desc: "राज्य सहकारिता अधिनियम के अनुसार नियमित चुनाव और सभी सदस्यों को समान मताधिकार प्रदान किया जाता है।",
  },
  {
    icon: ShieldCheck,
    title: "पारदर्शी प्रशासन",
    desc: "हर वित्तीय और प्रशासनिक निर्णय पारदर्शिता और जवाबदेही के सिद्धांतों के साथ लिया जाता है।",
  },
  {
    icon: FileCheck,
    title: "नियमित ऑडिट",
    desc: "सरकारी मानकों के अनुसार प्रतिवर्ष वैधानिक ऑडिट और निरीक्षण सुनिश्चित किया जाता है।",
  },
];

export default function AboutGovernance() {
  return (
    <section className="relative py-24 md:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🟢 Background Glow (Dynamic) */}
      <div className="absolute right-[-200px] top-[-120px] w-[600px] h-[600px] bg-premium-accent/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-6 tracking-tight transition-colors duration-500"
          >
            प्रबंधन एवं <span className="text-premium-accent">शासन</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-500"
          >
            समिति का संचालन पारदर्शिता, लोकतंत्र और जवाबदेही के सिद्धांतों पर आधारित है,
            जिससे सदस्यों और ग्रामीण समुदाय का विश्वास लगातार मजबूत बना रहे।
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {governance.map((item, i) => (
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
              p-8 md:p-10 hover:border-premium-accent/40 transition-all duration-500 
              backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow"
            >

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-premium-accent/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10">

                {/* Icon Box */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-premium-surface border border-premium-border flex items-center justify-center text-premium-accent shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-premium-text mb-4 group-hover:text-premium-accent transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-premium-muted leading-relaxed text-[15px] transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-premium-border pt-12 text-center"
        >
          <p className="text-premium-text/60 text-sm md:text-base tracking-wide transition-colors duration-500">
            राजस्थान सहकारिता अधिनियम के अंतर्गत पंजीकृत एवं वैधानिक रूप से संचालित संस्था
          </p>
        </motion.div>

      </div>
    </section>
  );
}
