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
    <section className="py-28 bg-[#050507] relative overflow-hidden">

      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-400/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            हमारे <span className="text-premium-emerald">उद्देश्य</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            ग्रामीण विकास, सहकारिता और आर्थिक सशक्तिकरण के लिए हमारी प्रतिबद्ध दिशा।
          </p>
        </div>

        {/* grid */}
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
              {/* glow hover */}
              <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 ${
                item.color === "emerald"
                  ? "bg-emerald-400/20"
                  : "bg-cyan-400/20"
              }`} />

              {/* card */}
              <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden">

                {/* icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${
                    item.color === "emerald"
                      ? "bg-emerald-400/10 border-emerald-400/20 text-premium-emerald"
                      : "bg-cyan-400/10 border-cyan-400/20 text-cyan-400"
                  }`}
                >
                  <item.icon size={26} strokeWidth={1.6} />
                </div>

                {/* title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* hover bottom line */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                  item.color === "emerald"
                    ? "bg-premium-emerald"
                    : "bg-cyan-400"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}