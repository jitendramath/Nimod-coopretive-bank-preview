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
      color: "text-cyan-400"
    },
    {
      year: "1985",
      title: "कृषि सेवाओं का विस्तार",
      desc: "बीज, उर्वरक और कृषि सामग्री उपलब्ध कराने की सेवाओं का विस्तार किया गया।",
      icon: Sprout,
      color: "text-premium-emerald"
    },
    {
      year: "2005",
      title: "आधुनिक सहकारी मॉडल",
      desc: "समिति ने आधुनिक वित्तीय सेवाएं और पारदर्शी प्रशासन मॉडल अपनाया।",
      icon: Landmark,
      color: "text-blue-400"
    },
    {
      year: "2020+",
      title: "डिजिटल और सौर परियोजनाएं",
      desc: "सौर ऊर्जा, गोदाम, ग्रामीण विकास और डिजिटल सेवाओं की शुरुआत की गई।",
      icon: Sun,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-24 bg-[#050507] relative overflow-hidden">

      {/* glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-emerald-400/10 blur-[200px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            विकास की <span className="text-premium-emerald">समयरेखा</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            1954 से आज तक समिति ने निरंतर विकास, नवाचार और सेवा का सफर तय किया है।
          </p>
        </div>

        {/* timeline line */}
        <div className="relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block"></div>

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

                {/* content */}
                <div className="w-full md:w-1/2 px-4 md:px-10">
                  <div className="premium-card p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">

                    <div className={`text-sm mb-2 font-bold ${item.color}`}>
                      {item.year}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* center icon */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-[#0b0c11] border border-white/10 items-center justify-center relative z-10">
                  <item.icon className={item.color} size={26} strokeWidth={1.6}/>
                </div>

                {/* spacer */}
                <div className="w-full md:w-1/2"></div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}