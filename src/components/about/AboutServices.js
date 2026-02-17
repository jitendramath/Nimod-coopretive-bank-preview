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
    <section className="relative py-24 md:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🟢 Background Glow (Dynamic) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-premium-accent/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            हमारी प्रमुख <span className="text-premium-accent">सेवाएं</span>
          </h2>
          <p className="text-premium-muted max-w-2xl mx-auto text-lg transition-colors duration-500">
            समिति ग्रामीण विकास को केंद्र में रखते हुए बहुआयामी सेवाएं प्रदान करती है,
            जिससे किसानों और ग्रामीण परिवारों की आर्थिक स्थिति मजबूत होती है।
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group p-8 rounded-[2rem] bg-premium-card border border-premium-border 
              hover:border-premium-accent/40 transition-all duration-500 hover:-translate-y-2 
              hover:shadow-xl hover:shadow-premium-shadow backdrop-blur-md"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-premium-surface flex items-center justify-center 
              text-premium-accent mb-6 transition-all duration-500 shadow-sm
              group-hover:bg-premium-accent group-hover:text-white group-hover:scale-110">
                <service.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-premium-text mb-3 group-hover:text-premium-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Text */}
              <p className="text-premium-muted text-[15px] leading-relaxed transition-colors duration-500">
                {service.text}
              </p>

              {/* Bottom Glow Line */}
              <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-premium-accent to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
