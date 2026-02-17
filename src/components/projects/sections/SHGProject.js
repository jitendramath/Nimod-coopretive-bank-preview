"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SHGProject() {
  return (
    <section className="relative py-28 bg-[#050507] overflow-hidden">

      {/* 🌌 premium background glow */}
      <div className="absolute top-[10%] left-[-180px] w-[520px] h-[520px] bg-purple-500/10 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-180px] w-[620px] h-[620px] bg-emerald-400/10 blur-[220px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* TEXT LEFT */}
        <div>

          {/* tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-6"
          >
            Women Self Help Groups
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            महिला सशक्तिकरण की  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
              मजबूत पहल
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
            समिति महिला स्वयं सहायता समूहों के गठन और संचालन में सक्रिय सहयोग
            प्रदान करती है। यह पहल महिलाओं को आर्थिक रूप से सशक्त बनाती है और
            उन्हें स्वरोजगार के अवसर उपलब्ध कराती है।
            <br /><br />
            प्रशिक्षण, वित्तीय सहायता और मार्गदर्शन के माध्यम से समिति महिलाओं
            को आत्मनिर्भर बनने और ग्रामीण अर्थव्यवस्था में महत्वपूर्ण योगदान देने
            के लिए प्रेरित करती है।
          </motion.p>

          {/* features grid */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              "महिला SHG समूह सहयोग",
              "प्रशिक्षण एवं मार्गदर्शन",
              "वित्तीय सहायता",
              "स्वरोजगार अवसर",
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

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.85)]">

            {/* replace later */}
            <Image
              src="/images/projects/shg.jpg"
              alt="Women Self Help Group"
              width={1200}
              height={900}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

            {/* floating badge */}
            <div className="absolute bottom-6 left-6 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-white/70 text-sm">समूह सहयोग</div>
              <div className="text-premium-emerald text-2xl font-bold">SHG Support</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}