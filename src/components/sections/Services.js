"use client";

import { Sprout, Tractor, Milk, Warehouse, ShoppingBasket, Users } from "lucide-react";
import { motion } from "framer-motion";

/* 🍎 Apple level stagger system */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 70, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
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
    <section id="services" className="py-24 bg-premium-charcoal relative overflow-hidden">

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            प्रमुख <span className="text-premium-emerald">सेवाएं</span>
          </h2>
          <p className="text-lg text-white/60">
            निमोद ग्राम सेवा सहकारी समिति ग्रामीण आवश्यकताओं को ध्यान में रखते हुए बहु-आयामी सेवाएं प्रदान करती है।
          </p>
        </motion.div>

        {/* 🍎 Apple wave grid */}
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
              className="premium-card p-8 rounded-3xl group flex flex-col items-start transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald mb-6 group-hover:bg-premium-emerald group-hover:text-premium-black transition-all duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-premium-emerald transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-sm mb-6">
                {service.text}
              </p>

              <div className="mt-auto flex items-center text-premium-emerald text-sm font-bold tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                अधिक जानें <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
