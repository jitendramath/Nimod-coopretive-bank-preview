"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BankingProject() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* 🌌 glow */}
      <div className="absolute top-[20%] right-[-120px] w-[320px] h-[320px] bg-emerald-400/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* tag */}
          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase">
            Digital Banking Facility
          </div>

          {/* heading */}
          <h2 className="text-[1.8rem] md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-6">
            गांव में ही  
            <span className="text-premium-emerald"> आधुनिक बैंकिंग सुविधा</span>
          </h2>

          {/* desc */}
          <p className="text-white/70 leading-relaxed mb-6 text-[15px] md:text-base">
            समिति द्वारा संचालित डिजिटल मिनी बैंकिंग सुविधा ग्रामीण नागरिकों को नकद
            जमा, निकासी और डिजिटल सेवाएं गांव में ही उपलब्ध कराती है।
          </p>

          <p className="text-white/60 leading-relaxed mb-8 text-[15px] md:text-base">
            इससे शहर जाने की आवश्यकता कम होती है और वित्तीय समावेशन को बढ़ावा मिलता है।
            तेज और सुरक्षित लेन-देन ग्रामीण अर्थव्यवस्था को मजबूत बनाते हैं।
          </p>

          {/* features */}
          <div className="space-y-3">
            {[
              "डिजिटल बैंकिंग सुविधा",
              "नकद जमा एवं निकासी",
              "कंप्यूटरीकृत रिकॉर्ड",
              "तेज और सुरक्षित लेन-देन",
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
              src="/images/banking.jpg" // replace later
              alt="Mini Banking Facility"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* floating badge */}
            <div className="absolute bottom-5 left-5 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-white/60 text-sm">ग्रामीण सेवा</div>
              <div className="text-premium-emerald text-xl font-bold">Mini Banking</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
