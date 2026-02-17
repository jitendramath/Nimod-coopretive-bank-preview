"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SHGProject() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* 🌌 background glow */}
      <div className="absolute top-[10%] left-[-120px] w-[300px] h-[300px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-120px] w-[300px] h-[300px] bg-emerald-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* 🖼 IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            {/* 🔥 IMPORTANT: auto height image (mobile fix) */}
            <Image
              src="/images/shg.jpg"   // replace later
              alt="Women Self Help Group"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* floating badge */}
            <div className="absolute bottom-5 left-5 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-white/60 text-sm">समूह सहयोग</div>
              <div className="text-premium-emerald text-xl font-bold">SHG Support</div>
            </div>

          </div>
        </motion.div>

        {/* 📝 TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1"
        >
          {/* tag */}
          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase">
            Women Self Help Groups
          </div>

          {/* heading */}
          <h2 className="text-[1.8rem] md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-6">
            महिला सशक्तिकरण की  
            <span className="text-premium-emerald"> मजबूत पहल</span>
          </h2>

          {/* desc */}
          <p className="text-white/70 leading-relaxed mb-6 text-[15px] md:text-base">
            समिति महिला स्वयं सहायता समूहों के गठन और संचालन में सक्रिय सहयोग प्रदान करती है।
            यह पहल महिलाओं को आर्थिक रूप से सशक्त बनाती है और स्वरोजगार के अवसर उपलब्ध कराती है।
          </p>

          <p className="text-white/60 leading-relaxed mb-8 text-[15px] md:text-base">
            प्रशिक्षण, वित्तीय सहायता और मार्गदर्शन के माध्यम से महिलाएं आत्मनिर्भर बन रही हैं 
            और ग्रामीण अर्थव्यवस्था को मजबूत बनाने में महत्वपूर्ण योगदान दे रही हैं।
          </p>

          {/* feature list */}
          <div className="space-y-3">
            {[
              "महिला SHG समूह सहयोग",
              "प्रशिक्षण एवं मार्गदर्शन",
              "वित्तीय सहायता",
              "स्वरोजगार अवसर",
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
