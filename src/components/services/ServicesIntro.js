"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Tractor, Users } from "lucide-react";

const items = [
  {
    icon: Banknote,
    title: "वित्तीय सेवाएं",
    desc: "किसानों और ग्रामीण नागरिकों को सुरक्षित ऋण, बचत और डिजिटल बैंकिंग सेवाएं उपलब्ध कराना।",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Tractor,
    title: "कृषि सहायता",
    desc: "उर्वरक, बीज, कृषि सामग्री और भंडारण सुविधाओं के माध्यम से कृषि को मजबूत बनाना।",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: Users,
    title: "सामाजिक विकास",
    desc: "महिला समूह, ग्रामीण रोजगार और सामुदायिक विकास योजनाओं को बढ़ावा देना।",
    color: "from-sky-400 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "पारदर्शी प्रशासन",
    desc: "नियमित ऑडिट, सरकारी दिशा-निर्देशों का पालन और सुरक्षित वित्तीय प्रणाली।",
    color: "from-rose-400 to-red-600",
  },
];

export default function ServicesIntro() {
  return (
    <section className="relative py-20 md:py-28 bg-[#050507] overflow-hidden">

      {/* glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-400/10 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold mb-6">
            ग्रामीण विकास के लिए  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-rose-400 to-sky-400">
              समर्पित सेवाएं
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            समिति की सेवाएं केवल बैंकिंग तक सीमित नहीं हैं।  
            हम ग्रामीण अर्थव्यवस्था को सशक्त बनाने के लिए वित्तीय सहायता, कृषि संसाधन, 
            सामाजिक सशक्तिकरण और आधुनिक सुविधाएं प्रदान करते हैं।
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 
              hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* gradient glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${item.color}`} />

              {/* icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                <item.icon size={22} className="text-black" />
              </div>

              {/* title */}
              <h3 className="text-white text-lg font-semibold mb-3">
                {item.title}
              </h3>

              {/* desc */}
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}