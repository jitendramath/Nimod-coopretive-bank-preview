"use client";

import { Sprout, Tractor, Milk, Warehouse, ShoppingBasket, Users } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 }
  }
};

const item = {
  hidden: { opacity: 0, y: 70, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Services() {
  const services = [
    {
      icon: Sprout,
      title: "कृषि ऋण एवं वित्त",
      text: "अल्पकालीन एवं मध्यकालीन कृषि ऋण, फसली ऋण, बचत योजनाएं एवं वित्तीय सहायता।"
    },
    {
      icon: Tractor,
      title: "कृषि आदान एवं उपकरण",
      text: "उन्नत बीज, उर्वरक, कीटनाशक एवं आधुनिक कृषि उपकरणों की उपलब्धता।"
    },
    {
      icon: Milk,
      title: "दुग्ध संग्रह एवं विपणन",
      text: "दुग्ध उत्पादकों से संगठित दुग्ध संग्रह, गुणवत्ता नियंत्रण एवं विपणन सहायता।"
    },
    {
      icon: Warehouse,
      title: "भंडारण एवं गोदाम",
      text: "2000 मीट्रिक टन क्षमता का भंडारण प्रबंधन, खाद-बीज संग्रह एवं सुरक्षित स्टॉक।"
    },
    {
      icon: ShoppingBasket,
      title: "उपभोक्ता स्टोर",
      text: "दैनिक उपयोग की वस्तुएं, कृषि सामग्री एवं आवश्यक उपभोक्ता उत्पाद उचित मूल्य पर।"
    },
    {
      icon: Users,
      title: "महिला स्वयं सहायता",
      text: "महिला सशक्तिकरण हेतु स्वयं सहायता समूहों का गठन, प्रशिक्षण एवं वित्तीय सहयोग।"
    }
  ];

  return (
    <section id="services" className="py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🌌 Ambient Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-premium-accent/5 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            प्रमुख <span className="text-premium-accent">सेवाएं</span>
          </h2>
          <p className="text-lg text-premium-muted font-medium transition-colors duration-500">
            निमोद ग्राम सेवा सहकारी समिति ग्रामीण आवश्यकताओं को ध्यान में रखते हुए बहु-आयामी सेवाएं प्रदान करती है।
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-premium-shadow"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-premium-surface flex items-center justify-center text-premium-accent mb-8 shadow-sm group-hover:bg-premium-accent group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                <service.icon size={30} strokeWidth={2} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-premium-text mb-4 transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-premium-muted leading-relaxed text-sm md:text-base mb-8 transition-colors duration-500 font-medium">
                {service.text}
              </p>

              {/* Action Link */}
              <div className="mt-auto flex items-center text-premium-accent text-sm font-black tracking-widest group-hover:translate-x-3 transition-transform duration-300">
                अधिक जानें <span className="ml-3 text-lg">→</span>
              </div>

              {/* Subtle Bottom Glow */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-premium-accent opacity-30 group-hover:w-full transition-all duration-700 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
