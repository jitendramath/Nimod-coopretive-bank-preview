"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Leaf, TrendingUp } from "lucide-react";

const commitments = [
  {
    icon: HeartHandshake,
    title: "सदस्य सर्वोपरि",
    desc: "हमारा प्रत्येक निर्णय और सेवा समिति के सदस्यों और ग्रामीण परिवारों के हितों को ध्यान में रखकर लिया जाता है।",
  },
  {
    icon: TrendingUp,
    title: "सतत आर्थिक विकास",
    desc: "किसानों और ग्रामीण नागरिकों की आय और आर्थिक स्थिति को मजबूत बनाना हमारा प्रमुख उद्देश्य है।",
  },
  {
    icon: Leaf,
    title: "आत्मनिर्भर ग्रामीण अर्थव्यवस्था",
    desc: "कृषि, ऊर्जा और स्थानीय रोजगार को बढ़ावा देकर आत्मनिर्भर ग्रामीण मॉडल स्थापित करना।",
  },
  {
    icon: Sparkles,
    title: "भविष्य की प्रतिबद्धता",
    desc: "आधुनिक तकनीक और सहकारिता के समन्वय से ग्रामीण विकास को नई ऊंचाइयों तक ले जाना।",
  },
];

export default function AboutCommitment() {
  return (
    <section className="relative py-24 md:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🟢 Luxury Background Glow (Dynamic) */}
      <div className="absolute left-[-200px] bottom-[-120px] w-[550px] h-[550px] bg-premium-accent/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-6 tracking-tight transition-colors duration-500"
          >
            हमारी <span className="text-premium-accent">प्रतिबद्धता</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-500"
          >
            समिति का लक्ष्य केवल सेवाएं प्रदान करना नहीं, बल्कि ग्रामीण समाज के समग्र विकास
            और आत्मनिर्भरता को सुनिश्चित करना है। हम भविष्य में भी विश्वास और पारदर्शिता के
            साथ विकास की नई ऊंचाइयों को प्राप्त करने के लिए प्रतिबद्ध हैं।
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] border border-premium-border bg-premium-card 
              p-8 hover:border-premium-accent/40 transition-all duration-500 
              backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow"
            >

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-premium-accent/10 to-transparent pointer-events-none"></div>

              <div className="relative z-10 text-center">

                {/* Icon Box */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-premium-surface border border-premium-border flex items-center justify-center text-premium-accent shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-premium-text mb-3 group-hover:text-premium-accent transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Premium Line */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-premium-accent font-semibold tracking-wider text-sm md:text-base italic">
            "सहकारिता के माध्यम से समृद्धि, विश्वास और विकास"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
