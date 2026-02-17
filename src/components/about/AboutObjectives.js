"use client";

import { motion } from "framer-motion";
import { Tractor, Users, HandCoins, Sprout, Building2, Sun } from "lucide-react";

export default function AboutObjectives() {
  const objectives = [
    {
      icon: HandCoins,
      title: "सुलभ वित्तीय सेवाएं",
      desc: "किसानों एवं ग्रामीण नागरिकों को समय पर ऋण एवं वित्तीय सहायता उपलब्ध कराना।",
      color: "emerald",
    },
    {
      icon: Tractor,
      title: "कृषि विकास",
      desc: "आधुनिक कृषि तकनीकों और संसाधनों को बढ़ावा देकर उत्पादन में वृद्धि करना।",
      color: "cyan",
    },
    {
      icon: Users,
      title: "सामूहिक प्रगति",
      desc: "सहकारिता के माध्यम से सामूहिक विकास और सामाजिक सहयोग को बढ़ावा देना।",
      color: "emerald",
    },
    {
      icon: Sprout,
      title: "ग्रामीण समृद्धि",
      desc: "ग्रामीण परिवारों की आर्थिक स्थिति को सुदृढ़ और आत्मनिर्भर बनाना।",
      color: "cyan",
    },
    {
      icon: Building2,
      title: "संस्थागत विकास",
      desc: "सुदृढ़ प्रबंधन और पारदर्शी प्रशासन के माध्यम से संस्था का विस्तार।",
      color: "emerald",
    },
    {
      icon: Sun,
      title: "नवाचार एवं ऊर्जा",
      desc: "सौर ऊर्जा एवं विकास परियोजनाओं द्वारा क्षेत्रीय प्रगति को गति देना।",
      color: "cyan",
    },
  ];

  return (
    <section className="py-28 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🟢 Ambient Glow (Dynamic) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-premium-accent/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-4 transition-colors duration-500"
          >
            हमारे <span className="text-premium-accent">उद्देश्य</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto transition-colors duration-500"
          >
            ग्रामीण विकास, सहकारिता और आर्थिक सशक्तिकरण के लिए हमारी प्रतिबद्ध दिशा।
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {objectives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative"
            >
              {/* ✨ Glow Hover (Adaptive) */}
              <div className={`absolute inset-0 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none ${
                item.color === "emerald"
                  ? "bg-emerald-400/10 dark:bg-emerald-400/20"
                  : "bg-cyan-400/10 dark:bg-cyan-400/20"
              }`} />

              {/* 🃏 Card */}
              <div className="relative h-full p-8 rounded-[2rem] bg-premium-card border border-premium-border backdrop-blur-xl overflow-hidden hover:border-premium-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-premium-shadow">

                {/* Icon Box */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 shadow-sm ${
                    item.color === "emerald"
                      ? "bg-emerald-100 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-cyan-100 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                  }`}
                >
                  <item.icon size={26} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-premium-text mb-3 transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
                  {item.desc}
                </p>

                {/* Hover Bottom Line */}
                <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${
                  item.color === "emerald"
                    ? "bg-emerald-500"
                    : "bg-cyan-500"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
