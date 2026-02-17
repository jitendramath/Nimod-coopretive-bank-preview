"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sprout } from "lucide-react";

export default function AgricultureService() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            {/* 👉 image replace later */}
            <Image
              src="/images/services/agriculture.jpg"
              alt="Agriculture Service"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* floating badge */}
            <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
              <span className="text-white text-sm font-semibold">
                कृषि सहायता सेवा
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
          className="order-1 lg:order-2"
        >

          {/* icon */}
          <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-6">
            <Sprout size={26} />
          </div>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            कृषि ऋण एवं कृषि सहायता सेवाएं
          </h2>

          {/* desc */}
          <p className="text-white/60 leading-relaxed text-[15px] md:text-lg mb-8">
            समिति किसानों को समय पर कृषि ऋण, उर्वरक, बीज और आवश्यक संसाधन उपलब्ध
            कराती है। आधुनिक कृषि तकनीकों और वित्तीय सहायता के माध्यम से उत्पादन
            बढ़ाने और किसानों की आय मजबूत करने का निरंतर प्रयास किया जाता है।
          </p>

          {/* features */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "कृषि ऋण सुविधा",
              "बीज एवं उर्वरक उपलब्धता",
              "सरकारी योजनाओं का लाभ",
              "आधुनिक कृषि मार्गदर्शन",
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