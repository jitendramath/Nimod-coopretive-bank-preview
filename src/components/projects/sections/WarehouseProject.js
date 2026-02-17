"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WarehouseProject() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* glow bg */}
      <div className="absolute top-[30%] left-[-120px] w-[320px] h-[320px] bg-emerald-400/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative md:order-2"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">

            <Image
              src="/images/warehouse.jpg" // replace later
              alt="Warehouse"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* floating badge */}
            <div className="absolute bottom-5 left-5 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-white/60 text-sm">भंडारण क्षमता</div>
              <div className="text-premium-emerald text-2xl font-bold">2000 MT</div>
            </div>

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:order-1"
        >
          {/* tag */}
          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase">
            Storage Infrastructure
          </div>

          {/* heading */}
          <h2 className="text-[1.8rem] md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-6">
            आधुनिक भंडारण से  
            <span className="text-premium-emerald"> किसानों की सुरक्षा</span>
          </h2>

          {/* desc */}
          <p className="text-white/70 leading-relaxed mb-6 text-[15px] md:text-base">
            समिति द्वारा निर्मित 2000 मीट्रिक टन क्षमता का आधुनिक भंडारण गोदाम किसानों
            की उपज और कृषि सामग्री के सुरक्षित भंडारण हेतु तैयार किया गया है।
          </p>

          <p className="text-white/60 leading-relaxed mb-8 text-[15px] md:text-base">
            यह सुविधा किसानों को बेहतर मूल्य प्राप्त करने और स्टॉक सुरक्षित रखने में
            सहायता प्रदान करती है तथा ग्रामीण कृषि अर्थव्यवस्था को मजबूती देती है।
          </p>

          {/* features */}
          <div className="space-y-3">
            {[
              "2000 MT भंडारण क्षमता",
              "सुरक्षित स्टॉक प्रबंधन",
              "बीज एवं खाद भंडारण",
              "बेहतर बाजार मूल्य अवसर",
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

      </div>
    </section>
  );
}
