"use client";

import { motion } from "framer-motion";
import { Landmark, CreditCard, Warehouse, Sun, Users2, Shield } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "कृषि ऋण सुविधा",
    desc: "किसानों को समय पर फसल ऋण एवं वित्तीय सहायता उपलब्ध कराना, जिससे कृषि उत्पादन बढ़े और आर्थिक स्थिरता मिले।",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: CreditCard,
    title: "डिजिटल बैंकिंग",
    desc: "नकद जमा, निकासी और डिजिटल ट्रांजेक्शन की आधुनिक सुविधा गांव में ही उपलब्ध।",
    color: "from-sky-400 to-blue-600",
  },
  {
    icon: Warehouse,
    title: "भंडारण सुविधा",
    desc: "आधुनिक गोदाम व्यवस्था के माध्यम से किसानों की उपज और सामग्री का सुरक्षित भंडारण।",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: Sun,
    title: "सौर ऊर्जा पहल",
    desc: "स्वच्छ ऊर्जा उत्पादन और बिजली लागत में कमी हेतु सौर परियोजनाओं का संचालन।",
    color: "from-amber-300 to-yellow-500",
  },
  {
    icon: Users2,
    title: "महिला समूह सहयोग",
    desc: "महिला स्वयं सहायता समूहों को वित्तीय सहायता और प्रशिक्षण प्रदान कर आत्मनिर्भर बनाना।",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Shield,
    title: "पारदर्शी प्रशासन",
    desc: "नियमित ऑडिट, सुरक्षित लेन-देन और पारदर्शी वित्तीय प्रबंधन।",
    color: "from-cyan-400 to-indigo-500",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-20 md:py-28 bg-[#050507] overflow-hidden">

      {/* soft glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] font-bold mb-6">
            हमारी प्रमुख  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-rose-400 to-sky-400">
              सेवाएं
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            समिति की सेवाएं ग्रामीण समुदाय की हर आवश्यकता को ध्यान में रखकर तैयार की गई हैं।  
            वित्तीय, कृषि और सामाजिक क्षेत्रों में हमारी सेवाएं निरंतर विकास की दिशा में कार्य कर रही हैं।
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative p-7 rounded-3xl bg-white/[0.03] border border-white/10 
              hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* hover gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${service.color}`} />

              {/* icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon size={26} className="text-black" />
              </div>

              {/* title */}
              <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* desc */}
              <p className="text-white/60 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 via-rose-400 to-sky-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}