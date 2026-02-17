"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BankingProject() {
  return (
    <section className="relative py-28 bg-[#040406] overflow-hidden">

      {/* 💎 luxury background orbs */}
      <div className="absolute -left-[180px] top-[25%] w-[520px] h-[520px] bg-emerald-400/10 blur-[180px] pointer-events-none" />
      <div className="absolute right-[-200px] bottom-[10%] w-[620px] h-[620px] bg-cyan-400/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* TEXT LEFT */}
        <div>

          {/* small tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-6"
          >
            Digital Banking Facility
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
              आधुनिक बैंकिंग सुविधा
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
            समिति द्वारा संचालित डिजिटल मिनी बैंकिंग सुविधा ग्रामीण नागरिकों को
            नकद जमा, निकासी और डिजिटल बैंकिंग सेवाएं गांव में ही उपलब्ध कराती है।
            <br /><br />
            इससे ग्रामीणों को शहर जाने की आवश्यकता कम होती है और वित्तीय सेवाएं
            उनके निकट ही सुलभ हो जाती हैं। यह सुविधा वित्तीय समावेशन को बढ़ावा
            देने और ग्रामीण अर्थव्यवस्था को सशक्त बनाने में महत्वपूर्ण भूमिका निभा रही है।
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
              "डिजिटल बैंकिंग सुविधा",
              "नकद जमा एवं निकासी",
              "कंप्यूटरीकृत रिकॉर्ड",
              "तेज और सुरक्षित लेन-देन",
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
              src="/images/projects/banking.jpg"
              alt="Mini Banking"
              width={1200}
              height={900}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

            {/* floating stat */}
            <div className="absolute bottom-6 left-6 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-white/70 text-sm">सुविधा</div>
              <div className="text-premium-emerald text-2xl font-bold">Mini Bank</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}