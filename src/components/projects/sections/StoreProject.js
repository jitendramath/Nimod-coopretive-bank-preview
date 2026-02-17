"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoreProject() {
  return (
    <section className="relative py-28 bg-[#050507] overflow-hidden">

      {/* 🔥 luxury glow */}
      <div className="absolute -top-[200px] right-[10%] w-[520px] h-[520px] bg-emerald-400/10 blur-[180px] pointer-events-none" />
      <div className="absolute left-[-200px] bottom-[10%] w-[620px] h-[620px] bg-cyan-400/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative lg:order-1 order-2"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.85)]">

            {/* replace later */}
            <Image
              src="/images/projects/store.jpg"
              alt="Consumer Store"
              width={1200}
              height={900}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

            {/* floating badge */}
            <div className="absolute bottom-6 left-6 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-white/70 text-sm">ग्रामीण सुविधा</div>
              <div className="text-premium-emerald text-2xl font-bold">Super Store</div>
            </div>

          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <div className="lg:order-2 order-1">

          {/* tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-6"
          >
            Consumer Super Store
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            गांव में ही  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
              आवश्यक वस्तुओं की उपलब्धता
            </span>
          </motion.h2>

          {/* desc */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg leading-relaxed mb-10"
          >
            समिति द्वारा संचालित उपभोक्ता सुपर स्टोर ग्रामीण नागरिकों को दैनिक
            उपयोग की वस्तुएं, कृषि सामग्री और आवश्यक उत्पाद उचित मूल्य पर
            उपलब्ध कराता है।
            <br /><br />
            यह स्टोर ग्रामीण क्षेत्र में विश्वसनीय खरीदारी का केंद्र बन चुका है,
            जिससे ग्रामीणों की शहर पर निर्भरता कम होती है और स्थानीय स्तर पर ही
            सभी आवश्यक वस्तुएं उपलब्ध हो जाती हैं।
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
              "उचित मूल्य पर वस्तुएं",
              "कृषि सामग्री उपलब्धता",
              "स्थानीय रोजगार सृजन",
              "ग्रामीण सुविधा केंद्र",
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

      </div>
    </section>
  );
}