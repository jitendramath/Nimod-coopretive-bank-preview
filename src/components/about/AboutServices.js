"use client";

import { motion } from "framer-motion";
import {
  Tractor,
  Banknote,
  Warehouse,
  Zap,
  Users,
  ShoppingBasket
} from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "कृषि ऋण एवं वित्तीय सहायता",
    text: "किसानों को समय पर फसली ऋण, अल्पकालीन एवं मध्यकालीन ऋण तथा बचत योजनाओं के माध्यम से आर्थिक सहयोग।"
  },
  {
    icon: Tractor,
    title: "कृषि आदान एवं उपकरण",
    text: "उन्नत बीज, उर्वरक, कीटनाशक और आधुनिक कृषि उपकरणों की उपलब्धता उचित मूल्य पर।"
  },
  {
    icon: Warehouse,
    title: "भंडारण एवं गोदाम",
    text: "आधुनिक गोदाम सुविधा के माध्यम से किसानों की उपज का सुरक्षित भंडारण और प्रबंधन।"
  },
  {
    icon: Zap,
    title: "सौर ऊर्जा परियोजना",
    text: "ऊर्जा आत्मनिर्भरता हेतु सौर ऊर्जा संयंत्र संचालन एवं अतिरिक्त ऊर्जा का उपयोग।"
  },
  {
    icon: ShoppingBasket,
    title: "उपभोक्ता सेवा केंद्र",
    text: "ग्रामीण परिवारों के लिए दैनिक उपयोग की वस्तुएं एवं कृषि सामग्री उचित दरों पर उपलब्ध।"
  },
  {
    icon: Users,
    title: "महिला स्वयं सहायता समूह",
    text: "महिला सशक्तिकरण हेतु स्वयं सहायता समूहों का गठन, प्रशिक्षण एवं वित्तीय सहयोग।"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutServices() {
  return (
    <section className="relative py-24 md:py-32 bg-premium-charcoal overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            हमारी प्रमुख <span className="text-premium-emerald">सेवाएं</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            समिति ग्रामीण विकास को केंद्र में रखते हुए बहुआयामी सेवाएं प्रदान करती है,
            जिससे किसानों और ग्रामीण परिवारों की आर्थिक स्थिति मजबूत होती है।
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-premium-emerald/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* icon */}
              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald mb-6 group-hover:bg-premium-emerald group-hover:text-black transition-all duration-500">
                <service.icon size={26} />
              </div>

              {/* title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-premium-emerald transition-colors">
                {service.title}
              </h3>

              {/* text */}
              <p className="text-white/60 text-sm leading-relaxed">
                {service.text}
              </p>

              {/* bottom glow line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-premium-emerald to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}