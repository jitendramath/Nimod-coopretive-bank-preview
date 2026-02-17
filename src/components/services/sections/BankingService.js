"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Landmark } from "lucide-react";

export default function BankingService() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-transparent via-[#07070a] to-transparent">

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* icon */}
          <div className="w-14 h-14 rounded-2xl bg-sky-400/10 flex items-center justify-center text-sky-400 mb-6">
            <Landmark size={26} />
          </div>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ग्रामीण बैंकिंग एवं वित्तीय सेवाएं
          </h2>

          {/* desc */}
          <p className="text-white/60 leading-relaxed text-[15px] md:text-lg mb-8">
            समिति द्वारा संचालित बैंकिंग सेवाएं ग्रामीण नागरिकों को उनके गांव में ही
            सुरक्षित और तेज वित्तीय सुविधा प्रदान करती हैं। नकद जमा, निकासी, ऋण
            वितरण और डिजिटल रिकॉर्ड प्रणाली के माध्यम से वित्तीय समावेशन को बढ़ावा
            दिया जाता है।
          </p>

          {/* features */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "नकद जमा व निकासी",
              "किसान क्रेडिट सुविधा",
              "डिजिटल रिकॉर्ड सिस्टम",
              "तेज और सुरक्षित लेन-देन",
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            {/* replace later */}
            <Image
              src="/images/services/banking.jpg"
              alt="Banking Service"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* badge */}
            <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
              <span className="text-white text-sm font-semibold">
                Mini Banking सुविधा
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}