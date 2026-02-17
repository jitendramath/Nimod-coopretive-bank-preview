"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SolarProject() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-[20%] right-[-120px] w-[340px] h-[340px] bg-yellow-400/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-120px] w-[320px] h-[320px] bg-emerald-400/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            <Image
              src="/images/solar.jpg" // replace later
              alt="Solar Project"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* badge */}
            <div className="absolute bottom-5 left-5 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-white/60 text-sm">क्षमता</div>
              <div className="text-yellow-400 text-2xl font-bold">15.34 KW</div>
            </div>

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* tag */}
          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase">
            Solar Energy Project
          </div>

          {/* heading */}
          <h2 className="text-[1.8rem] md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-6">
            ऊर्जा आत्मनिर्भरता की ओर  
            <span className="text-yellow-400"> बड़ा कदम</span>
          </h2>

          {/* desc */}
          <p className="text-white/70 leading-relaxed mb-6 text-[15px] md:text-base">
            समिति द्वारा स्थापित 15.34 किलोवाट क्षमता का सौर ऊर्जा संयंत्र ग्रामीण
            क्षेत्र में स्वच्छ और सतत ऊर्जा का सफल उदाहरण है।
          </p>

          <p className="text-white/60 leading-relaxed mb-8 text-[15px] md:text-base">
            यह संयंत्र ऊर्जा लागत को कम करता है, अतिरिक्त बिजली ग्रिड में भेजकर आय
            उत्पन्न करता है और ग्रामीण क्षेत्र को ऊर्जा आत्मनिर्भर बनाता है।
          </p>

          {/* features */}
          <div className="space-y-3">
            {[
              "15.34 KW सौर संयंत्र",
              "स्वच्छ और नवीकरणीय ऊर्जा",
              "ग्रिड को अतिरिक्त बिजली",
              "ऊर्जा लागत में कमी",
            ].map((item, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
