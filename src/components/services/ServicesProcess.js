"use client";

import { motion } from "framer-motion";
import { FileText, PhoneCall, CheckCircle, Landmark } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "संपर्क करें",
    desc: "समिति कार्यालय में आकर या फोन के माध्यम से सेवा के लिए संपर्क करें।",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: FileText,
    title: "आवेदन प्रक्रिया",
    desc: "आवश्यक दस्तावेज और आवेदन पत्र जमा कर सरल प्रक्रिया पूरी करें।",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: CheckCircle,
    title: "सत्यापन एवं स्वीकृति",
    desc: "समिति द्वारा आवेदन का सत्यापन और त्वरित स्वीकृति दी जाती है।",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Landmark,
    title: "सेवा उपलब्ध",
    desc: "स्वीकृति के बाद सेवा या वित्तीय सहायता तुरंत प्रदान की जाती है।",
    color: "from-pink-500 to-rose-500",
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
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* glow bg */}
      <div className="absolute top-[-200px] left-[10%] w-[500px] h-[500px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            सेवा प्राप्त करने की
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-pink-500">
              सरल प्रक्रिया
            </span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg">
            समिति में सेवाएं प्राप्त करना आसान, पारदर्शी और तेज है।
            कुछ सरल चरणों में आप सभी सुविधाओं का लाभ उठा सकते हैं।
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative">

          {/* center line desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

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

                  {/* content */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-7 md:p-8">

                      {/* glow border */}
                      <div className={`absolute -inset-[1px] rounded-3xl opacity-30 blur bg-gradient-to-br ${step.color}`} />

                      <div className="relative">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${step.color}`}>
                          <Icon size={26} className="text-black" />
                        </div>

                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                          {step.title}
                        </h3>

                        <p className="text-white/60 text-sm md:text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* dot */}
                  <div className="hidden md:flex items-center justify-center w-1/2 relative">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-[0_0_20px_rgba(255,255,255,0.3)]`} />
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