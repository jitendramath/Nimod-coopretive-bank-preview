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
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* luxury background glow */}
      <div className="absolute left-[-200px] bottom-[-120px] w-[550px] h-[550px] bg-emerald-500/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            हमारी <span className="text-premium-emerald">प्रतिबद्धता</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            समिति का लक्ष्य केवल सेवाएं प्रदान करना नहीं, बल्कि ग्रामीण समाज के समग्र विकास
            और आत्मनिर्भरता को सुनिश्चित करना है। हम भविष्य में भी विश्वास और पारदर्शिता के
            साथ विकास की नई ऊंचाइयों को प्राप्त करने के लिए प्रतिबद्ध हैं।
          </p>
        </div>

        {/* grid */}
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
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0c11] to-[#050507] p-8 hover:border-premium-emerald/40 transition-all duration-500"
            >

              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(58,244,183,0.18),transparent_60%)]"></div>

              <div className="relative z-10 text-center">

                {/* icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={30} />
                </div>

                {/* title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-premium-emerald transition-colors">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom premium line */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-premium-emerald font-semibold tracking-wider text-sm md:text-base">
            "सहकारिता के माध्यम से समृद्धि, विश्वास और विकास"
          </p>
        </motion.div>

      </div>
    </section>
  );
}