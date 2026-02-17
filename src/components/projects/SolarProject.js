"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SolarProject() {
  return (
    <section className="relative py-28 bg-[#050507] overflow-hidden">

      {/* 🔥 premium glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[620px] h-[620px] bg-emerald-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute -left-[120px] bottom-10 w-[340px] h-[340px] bg-cyan-400/10 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          {/* tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-6"
          >
            Renewable Energy Project
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            सौर ऊर्जा से  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
              आत्मनिर्भर भविष्य
            </span>
          </motion.h2>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg leading-relaxed mb-10"
          >
            समिति द्वारा स्थापित 15.34 किलोवाट क्षमता का सौर ऊर्जा संयंत्र
            ग्रामीण क्षेत्र में स्वच्छ और सतत ऊर्जा का एक सफल उदाहरण है।
            यह परियोजना समिति की ऊर्जा आवश्यकताओं को पूरा करने के साथ-साथ
            अतिरिक्त बिजली को ग्रिड में उपलब्ध कराकर आय का स्रोत भी बनती है।
            <br /><br />
            यह पहल न केवल पर्यावरण संरक्षण में योगदान देती है बल्कि
            ऊर्जा लागत में कमी और दीर्घकालिक आर्थिक स्थिरता भी सुनिश्चित करती है।
          </motion.p>

          {/* features */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              "15.34KW सौर संयंत्र",
              "स्वच्छ एवं नवीकरणीय ऊर्जा",
              "अतिरिक्त बिजली से आय",
              "ऊर्जा लागत में कमी",
            ].map((item, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

            {/* 🔥 replace image later */}
            <Image
              src="/images/projects/solar.jpg"
              alt="Solar Plant"
              width={1200}
              height={900}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

            {/* floating stat */}
            <div className="absolute bottom-6 left-6 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-white/70 text-sm">ऊर्जा क्षमता</div>
              <div className="text-premium-emerald text-2xl font-bold">15.34 KW</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}