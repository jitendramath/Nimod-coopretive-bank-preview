"use client";

import {
  Sprout,
  Tractor,
  Milk,
  Warehouse,
  ShoppingBasket,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Services() {

  const services = [
    {
      icon: Sprout,
      title: "कृषि ऋण एवं वित्त",
      text: "अल्पकालीन एवं मध्यकालीन कृषि ऋण, फसली ऋण एवं बचत योजनाएं।",
      glow: "rgba(16,185,129,0.35)",
      gradient: "from-emerald-400/25 via-emerald-300/5 to-transparent",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Tractor,
      title: "कृषि आदान एवं उपकरण",
      text: "उन्नत बीज, उर्वरक एवं आधुनिक कृषि उपकरण उपलब्ध।",
      glow: "rgba(59,130,246,0.35)",
      gradient: "from-blue-400/25 via-blue-300/5 to-transparent",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Milk,
      title: "दुग्ध संग्रह एवं विपणन",
      text: "संगठित दुग्ध संग्रह, गुणवत्ता नियंत्रण एवं विपणन सहायता।",
      glow: "rgba(244,114,182,0.35)",
      gradient: "from-rose-400/25 via-rose-300/5 to-transparent",
      iconColor: "text-rose-600 dark:text-rose-400"
    },
    {
      icon: Warehouse,
      title: "भंडारण एवं गोदाम",
      text: "2000 MT क्षमता के सुरक्षित भंडारण एवं स्टॉक प्रबंधन।",
      glow: "rgba(251,191,36,0.35)",
      gradient: "from-amber-400/25 via-amber-300/5 to-transparent",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: ShoppingBasket,
      title: "उपभोक्ता स्टोर",
      text: "आवश्यक उपभोक्ता वस्तुएं एवं कृषि सामग्री उचित मूल्य पर।",
      glow: "rgba(139,92,246,0.35)",
      gradient: "from-violet-400/25 via-violet-300/5 to-transparent",
      iconColor: "text-violet-600 dark:text-violet-400"
    },
    {
      icon: Users,
      title: "महिला स्वयं सहायता",
      text: "स्वयं सहायता समूह गठन, प्रशिक्षण एवं वित्तीय सहयोग।",
      glow: "rgba(236,72,153,0.35)",
      gradient: "from-pink-400/25 via-pink-300/5 to-transparent",
      iconColor: "text-pink-600 dark:text-pink-400"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* MASTER BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-[-10%] w-[500px] h-[500px] bg-emerald-400/20 dark:bg-emerald-500/20 blur-[160px] rounded-full"/>
        <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] bg-violet-400/20 dark:bg-violet-500/20 blur-[160px] rounded-full"/>
      </div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="text-center mb-16 md:mb-24 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-main)] mb-6">
            प्रमुख <span className="text-[var(--accent-primary)]">सेवाएं</span>
          </h2>

          <p className="text-[15px] md:text-lg text-[var(--text-muted)] leading-relaxed">
            ग्रामीण आवश्यकताओं को ध्यान में रखते हुए बहु-आयामी सेवाएं।
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-[30px] p-[1px] transition-all duration-500"
              style={{
                background: `linear-gradient(130deg, ${service.glow}, transparent 45%)`
              }}
            >
              <div className="relative h-full rounded-[30px] p-7 md:p-8 backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_25px_70px_var(--shadow-color)]">

                {/* internal hover gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${service.gradient}`} />

                {/* ICON */}
                <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-white/40 dark:bg-white/5 border border-white/20 backdrop-blur-md ${service.iconColor}`}>
                  <service.icon size={26}/>
                </div>

                {/* TITLE */}
                <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight text-[var(--text-main)] mb-3">
                  {service.title}
                </h3>

                {/* TEXT */}
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-8">
                  {service.text}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-[var(--text-main)] group-hover:translate-x-2 transition-transform duration-300">
                  <span className="opacity-80 group-hover:opacity-100">
                    अधिक जानें
                  </span>
                  <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* floating glow orb */}
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 blur-3xl opacity-30 group-hover:opacity-70 transition"
                  style={{ background: service.glow }}
                />

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
