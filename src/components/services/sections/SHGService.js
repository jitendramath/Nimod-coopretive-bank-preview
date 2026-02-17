"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";

export default function SHGService() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">

      {/* glow */}
      <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-pink-500/10 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            {/* replace later */}
            <Image
              src="/images/services/shg.jpg"
              alt="Women Self Help Group"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* badge */}
            <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
              <span className="text-white text-sm font-semibold">
                Women Empowerment
              </span>
            </div>

          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* icon */}
          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
            <Users size={26} />
          </div>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            महिला स्वयं सहायता समूह सहयोग
          </h2>

          {/* desc */}
          <p className="text-white/60 leading-relaxed text-[15px] md:text-lg mb-8">
            समिति महिला स्वयं सहायता समूहों को प्रशिक्षण, वित्तीय सहयोग और
            मार्गदर्शन प्रदान कर उन्हें आर्थिक रूप से सशक्त बनाती है। यह पहल
            ग्रामीण महिलाओं को स्वरोजगार और आत्मनिर्भरता की दिशा में आगे बढ़ने
            का अवसर देती है।
          </p>

          {/* features */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "महिला SHG समूह सहयोग",
              "स्वरोजगार अवसर",
              "प्रशिक्षण कार्यक्रम",
              "आर्थिक सशक्तिकरण",
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

      </div>
    </section>
  );
}