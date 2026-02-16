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
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* background glow */}
      <div className="absolute right-[-200px] top-[-120px] w-[600px] h-[600px] bg-emerald-500/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            प्रबंधन एवं <span className="text-premium-emerald">शासन</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            समिति का संचालन पारदर्शिता, लोकतंत्र और जवाबदेही के सिद्धांतों पर आधारित है,
            जिससे सदस्यों और ग्रामीण समुदाय का विश्वास लगातार मजबूत बना रहे।
          </p>
        </div>

        {/* grid */}
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
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0c11] to-[#050507] p-8 md:p-10 hover:border-premium-emerald/40 transition-all duration-500"
            >

              {/* glow hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(58,244,183,0.18),transparent_60%)]"></div>

              <div className="relative z-10">

                {/* icon */}
                <div className="w-14 h-14 mb-6 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={28} />
                </div>

                {/* title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-premium-emerald transition-colors">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-white/60 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10 pt-12 text-center"
        >
          <p className="text-white/50 text-sm md:text-base tracking-wide">
            राजस्थान सहकारिता अधिनियम के अंतर्गत पंजीकृत एवं वैधानिक रूप से संचालित संस्था
          </p>
        </motion.div>

      </div>
    </section>
  );
}