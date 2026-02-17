"use client";

import { motion } from "framer-motion";
import { Calendar, Landmark, Sprout, Sun } from "lucide-react";

export default function AboutTimeline() {

  const timeline = [
    {
      year: "1954",
      title: "समिति की स्थापना",
      desc: "21 सितम्बर 1954 को समिति की स्थापना हुई, जिसका उद्देश्य किसानों और ग्रामीण परिवारों को वित्तीय सहयोग प्रदान करना था।",
      icon: Calendar,
      color: "text-cyan-500 dark:text-cyan-400"
    },
    {
      year: "1985",
      title: "कृषि सेवाओं का विस्तार",
      desc: "बीज, उर्वरक और कृषि सामग्री उपलब्ध कराने की सेवाओं का विस्तार किया गया।",
      icon: Sprout,
      color: "text-premium-accent"
    },
    {
      year: "2005",
      title: "आधुनिक सहकारी मॉडल",
      desc: "समिति ने आधुनिक वित्तीय सेवाएं और पारदर्शी प्रशासन मॉडल अपनाया।",
      icon: Landmark,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      year: "2020+",
      title: "डिजिटल और सौर परियोजनाएं",
      desc: "सौर ऊर्जा, गोदाम, ग्रामीण विकास और डिजिटल सेवाओं की शुरुआत की गई।",
      icon: Sun,
      color: "text-purple-500 dark:text-purple-400"
    }
  ];

  return (
    <section className="py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🌌 Premium Ambient Glow (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-premium-accent/10 blur-[200px] pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* Heading Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-4 transition-colors duration-500"
          >
            विकास की <span className="text-premium-accent">समयरेखा</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto transition-colors duration-500 font-medium"
          >
            1954 से आज तक समिति ने निरंतर विकास, नवाचार और सेवा का सफर तय किया है।
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">

          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-premium-border hidden md:block transition-colors duration-500" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Content Card */}
                <div className="w-full md:w-1/2 px-4 md:px-10">
                  <div className="group relative p-8 rounded-[2rem] bg-premium-card border border-premium-border backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-premium-shadow transition-all duration-500">
                    
                    {/* Year Badge */}
                    <div className={`text-sm mb-3 font-black tracking-widest uppercase ${item.color}`}>
                      {item.year}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-premium-text mb-4 transition-colors duration-500">
                      {item.title}
                    </h3>

                    <p className="text-premium-muted leading-relaxed text-sm md:text-base transition-colors duration-500 font-medium">
                      {item.desc}
                    </p>
                    
                    {/* Hover Glow Detail */}
                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-40 group-hover:w-full transition-all duration-700 ${item.color}`} />
                  </div>
                </div>

                {/* Center Hub Icon (Desktop Only) */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-premium-bg border-2 border-premium-border items-center justify-center relative z-10 shadow-lg transition-colors duration-500">
                  <item.icon className={item.color} size={26} strokeWidth={2}/>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-1/2"></div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
