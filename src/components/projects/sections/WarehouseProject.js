"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WarehouseProject() {
  return (
    <section className="relative py-28 bg-[#050507] overflow-hidden">

      {/* 🔥 premium background glow */}
      <div className="absolute right-[-140px] top-[20%] w-[520px] h-[520px] bg-cyan-400/10 blur-[170px] pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-260px] w-[700px] h-[700px] bg-emerald-500/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.85)]">

            {/* replace later */}
            <Image
              src="/images/projects/warehouse.jpg"
              alt="Warehouse"
              width={1200}
              height={900}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

            {/* floating stat */}
            <div className="absolute bottom-6 right-6 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-white/70 text-sm">भंडारण क्षमता</div>
              <div className="text-premium-emerald text-2xl font-bold">2000 MT</div>
            </div>

          </div>
        </motion.div>

        {/* CONTENT RIGHT */}
        <div className="order-1 lg:order-2">

          {/* tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-6"
          >
            Storage Infrastructure
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            आधुनिक भंडारण से  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
              किसानों की सुरक्षा
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
            समिति द्वारा निर्मित 2000 मीट्रिक टन क्षमता का आधुनिक भंडारण गोदाम
            किसानों की उपज और कृषि सामग्री के सुरक्षित भंडारण हेतु तैयार किया गया है।
            <br /><br />
            यह सुविधा किसानों को अपनी उपज सुरक्षित रखने और उचित समय पर बेहतर
            मूल्य प्राप्त करने में सहायता प्रदान करती है। आधुनिक सुरक्षा,
            संरचना और प्रबंधन प्रणाली के साथ यह गोदाम ग्रामीण कृषि अर्थव्यवस्था
            को मजबूती प्रदान करता है।
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
              "2000 MT क्षमता",
              "सुरक्षित स्टॉक प्रबंधन",
              "बीज एवं खाद भंडारण",
              "बेहतर बाजार मूल्य अवसर",
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