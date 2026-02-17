"use client";

import { motion } from "framer-motion";
import { FileText, PhoneCall, CheckCircle, Landmark } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "संपर्क करें",
    desc: "समिति कार्यालय में आकर या फोन के माध्यम से सेवा के लिए संपर्क करें।",
    color: "from-sky-500 to-cyan-600 dark:from-sky-400 dark:to-cyan-500",
  },
  {
    icon: FileText,
    title: "आवेदन प्रक्रिया",
    desc: "आवश्यक दस्तावेज और आवेदन पत्र जमा कर सरल प्रक्रिया पूरी करें।",
    color: "from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500",
  },
  {
    icon: CheckCircle,
    title: "सत्यापन एवं स्वीकृति",
    desc: "समिति द्वारा आवेदन का सत्यापन और त्वरित स्वीकृति दी जाती है।",
    color: "from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500",
  },
  {
    icon: Landmark,
    title: "सेवा उपलब्ध",
    desc: "स्वीकृति के बाद सेवा या वित्तीय सहायता तुरंत प्रदान की जाती है।",
    color: "from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500",
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

export default function ServicesProcess() {
  return (
    <section className="relative py-24 md:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Dynamic Glow Effects */}
      <div className="absolute top-[-200px] left-[10%] w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-premium-accent/5 dark:bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            सेवा प्राप्त करने की
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-emerald-600 to-pink-600 dark:from-sky-400 dark:via-emerald-400 dark:to-pink-500">
              सरल प्रक्रिया
            </span>
          </h2>

          <p className="text-premium-muted max-w-2xl mx-auto text-sm md:text-lg transition-colors duration-500">
            समिति में सेवाएं प्राप्त करना आसान, पारदर्शी और तेज है।
            कुछ सरल चरणों में आप सभी सुविधाओं का लाभ उठा सकते हैं।
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-premium-border to-transparent" />

          <div className="space-y-14">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >

                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-[2rem] bg-premium-card border border-premium-border backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-premium-shadow">

                      {/* Animated Glow Border */}
                      <div className={`absolute -inset-[1px] rounded-[2rem] opacity-20 dark:opacity-30 blur-sm bg-gradient-to-br ${step.color} group-hover:opacity-100 transition duration-500`} />

                      <div className="relative">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${step.color} shadow-lg shadow-premium-shadow`}>
                          <Icon size={26} className="text-white dark:text-black" />
                        </div>

                        <h3 className="text-premium-text text-xl md:text-2xl font-bold mb-3 transition-colors duration-500">
                          {step.title}
                        </h3>

                        <p className="text-premium-muted text-sm md:text-base leading-relaxed transition-colors duration-500">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex items-center justify-center w-1/2 relative">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-[0_0_20px_var(--shadow-color)] z-10`} />
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
