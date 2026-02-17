"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Tractor, Users } from "lucide-react";

const items = [
  {
    icon: Banknote,
    title: "वित्तीय सेवाएं",
    desc: "किसानों और ग्रामीण नागरिकों को सुरक्षित ऋण, बचत और डिजिटल बैंकिंग सेवाएं उपलब्ध कराना।",
    color: "from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500",
  },
  {
    icon: Tractor,
    title: "कृषि सहायता",
    desc: "उर्वरक, बीज, कृषि सामग्री और भंडारण सुविधाओं के माध्यम से कृषि को मजबूत बनाना।",
    color: "from-emerald-500 to-green-700 dark:from-emerald-400 dark:to-green-600",
  },
  {
    icon: Users,
    title: "सामाजिक विकास",
    desc: "महिला समूह, ग्रामीण रोजगार और सामुदायिक विकास योजनाओं को बढ़ावा देना।",
    color: "from-sky-500 to-blue-700 dark:from-sky-400 dark:to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "पारदर्शी प्रशासन",
    desc: "नियमित ऑडिट, सरकारी दिशा-निर्देशों का पालन और सुरक्षित वित्तीय प्रणाली।",
    color: "from-rose-500 to-red-700 dark:from-rose-400 dark:to-red-600",
  },
];

export default function ServicesIntro() {
  return (
    <section className="relative py-20 md:py-28 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Dynamic Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-premium-accent/5 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold mb-6 text-premium-text transition-colors duration-500">
            ग्रामीण विकास के लिए  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-rose-500 to-sky-600 dark:from-yellow-400 dark:via-rose-400 dark:to-sky-400">
              समर्पित सेवाएं
            </span>
          </h2>

          <p className="text-premium-muted text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-500">
            समिति की सेवाएं केवल बैंकिंग तक सीमित नहीं हैं।  
            हम ग्रामीण अर्थव्यवस्था को सशक्त बनाने के लिए वित्तीय सहायता, कृषि संसाधन, 
            सामाजिक सशक्तिकरण और आधुनिक सुविधाएं प्रदान करते हैं।
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2rem] bg-premium-card border border-premium-border 
              hover:border-premium-accent/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-premium-shadow"
            >
              {/* Internal Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${item.color}`} />

              {/* Icon Box */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <item.icon size={26} className="text-white dark:text-black" />
              </div>

              {/* Title */}
              <h3 className="text-premium-text text-xl font-bold mb-3 transition-colors duration-500">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-premium-muted text-[15px] leading-relaxed transition-colors duration-500">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
