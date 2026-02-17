"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Warehouse } from "lucide-react";

export default function StorageService() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE SIDE (first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-1 lg:order-1"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            {/* replace later */}
            <Image
              src="/images/services/storage.jpg"
              alt="Storage Warehouse"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* badge */}
            <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
              <span className="text-white text-sm font-semibold">
                2000 MT Warehouse
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
          className="order-2 lg:order-2"
        >
          {/* icon */}
          <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-6">
            <Warehouse size={26} />
          </div>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            आधुनिक भंडारण एवं गोदाम सुविधा
          </h2>

          {/* desc */}
          <p className="text-white/60 leading-relaxed text-[15px] md:text-lg mb-8">
            समिति द्वारा निर्मित आधुनिक भंडारण गोदाम किसानों की उपज को सुरक्षित
            रखने और उचित समय पर बेहतर बाजार मूल्य प्राप्त करने में सहायता प्रदान
            करता है। यह सुविधा कृषि उत्पादों और उर्वरकों के सुरक्षित भंडारण के लिए
            एक विश्वसनीय केंद्र है।
          </p>

          {/* features */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "2000 MT भंडारण क्षमता",
              "सुरक्षित स्टॉक प्रबंधन",
              "उर्वरक व बीज भंडारण",
              "बेहतर बाजार मूल्य अवसर",
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