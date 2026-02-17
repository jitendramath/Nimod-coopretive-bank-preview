"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sun } from "lucide-react";

export default function SolarService() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="order-2 lg:order-1"
        >
          <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-6">
            <Sun size={26} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            सौर ऊर्जा परियोजनाएं
          </h2>

          <p className="text-white/60 leading-relaxed text-[15px] md:text-lg mb-8">
            समिति सतत विकास और ऊर्जा आत्मनिर्भरता के लिए सौर ऊर्जा परियोजनाओं को बढ़ावा दे रही है।
            इससे न केवल बिजली की लागत कम होती है बल्कि पर्यावरण संरक्षण में भी योगदान मिलता है।
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "रूफटॉप सोलर प्लांट",
              "स्वच्छ ऊर्जा उत्पादन",
              "बिजली लागत में बचत",
              "पर्यावरण अनुकूल पहल",
            ].map((item, i) => (
              <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm">
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
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
             {/* Note: Ensure this image exists or use a placeholder */}
            <Image
              src="/images/services/solar.jpg" 
              alt="Solar Energy"
              width={1200}
              height={900}
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
              <span className="text-white text-sm font-semibold">Green Energy</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
