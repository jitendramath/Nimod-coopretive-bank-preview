"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "विश्वसनीय और पारदर्शी सेवा",
    desc: "समिति पारदर्शी प्रक्रिया और सुरक्षित लेन-देन के साथ विश्वसनीय सेवाएं प्रदान करती है।",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Zap,
    title: "तेज और सरल प्रक्रिया",
    desc: "ऋण, जमा और अन्य सेवाएं सरल प्रक्रिया के माध्यम से कम समय में उपलब्ध कराई जाती हैं।",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Users,
    title: "ग्रामीण समुदाय केंद्रित",
    desc: "हर सेवा ग्रामीण परिवारों, किसानों और महिलाओं के विकास को ध्यान में रखकर बनाई गई है।",
    gradient: "from-sky-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "आर्थिक सशक्तिकरण",
    desc: "समिति की सेवाएं ग्रामीण अर्थव्यवस्था को मजबूत बनाकर आय और अवसर बढ़ाती हैं।",
    gradient: "from-pink-500 to-rose-500",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesBenefits() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* glow background */}
      <div className="absolute top-[20%] left-[-200px] w-[600px] h-[600px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            हमारी सेवाओं के
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-pink-500">
              प्रमुख लाभ
            </span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg">
            समिति की सेवाएं केवल सुविधा नहीं, बल्कि ग्रामीण जीवन को बेहतर
            बनाने का एक मजबूत माध्यम हैं।
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative group"
              >
                {/* glow border */}
                <div className={`absolute -inset-[1px] rounded-3xl opacity-40 blur bg-gradient-to-br ${item.gradient}`} />

                <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-7 md:p-8 h-full">

                  {/* icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.gradient}`}>
                    <Icon size={26} className="text-black" />
                  </div>

                  <h3 className="text-white text-lg md:text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}