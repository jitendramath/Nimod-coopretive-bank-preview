"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoreProject() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* 🌌 background glow */}
      <div className="absolute top-[20%] right-[-120px] w-[320px] h-[320px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-120px] w-[320px] h-[320px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* 📝 TEXT FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* tag */}
          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase">
            Consumer Super Store
          </div>

          {/* heading */}
          <h2 className="text-[1.8rem] md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-6">
            गांव में ही  
            <span className="text-premium-emerald"> आवश्यक वस्तुओं की उपलब्धता</span>
          </h2>

          {/* desc */}
          <p className="text-white/70 leading-relaxed mb-6 text-[15px] md:text-base">
            समिति द्वारा संचालित उपभोक्ता सुपर स्टोर ग्रामीण नागरिकों को दैनिक उपयोग की
            वस्तुएं, कृषि सामग्री और आवश्यक उत्पाद उचित मूल्य पर उपलब्ध कराता है।
          </p>

          <p className="text-white/60 leading-relaxed mb-8 text-[15px] md:text-base">
            यह स्टोर ग्रामीण क्षेत्र में विश्वसनीय खरीदारी का केंद्र बन चुका है जिससे
            शहर पर निर्भरता कम होती है और स्थानीय स्तर पर ही सभी आवश्यक वस्तुएं उपलब्ध हो जाती हैं।
          </p>

          {/* feature list */}
          <div className="space-y-3">
            {[
              "उचित मूल्य पर वस्तुएं",
              "कृषि सामग्री उपलब्धता",
              "स्थानीय रोजगार सृजन",
              "ग्रामीण सुविधा केंद्र",
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

        {/* 🖼 IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            {/* 🔥 auto height mobile fix */}
            <Image
              src="/images/store.jpg" // replace later
              alt="Consumer Store"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* floating badge */}
            <div className="absolute bottom-5 left-5 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-white/60 text-sm">ग्रामीण सुविधा</div>
              <div className="text-premium-emerald text-xl font-bold">Super Store</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
