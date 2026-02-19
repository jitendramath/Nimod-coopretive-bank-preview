"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Sprout, Building2 } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-500">
      
      {/* 🌫️ Micro-Texture (Matte Finish) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply dark:mix-blend-overlay"></div>

      {/* 💡 Ambient Lighting (Soft & Classy) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- LEFT: VISUAL MASTERPIECE --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group mx-auto lg:mx-0 w-full max-w-md lg:max-w-full"
          >
            {/* 1. The Backdrop Frame (Offset Border) */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 border-2 border-emerald-500/20 dark:border-emerald-400/20 rounded-[2rem] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* 2. The Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 dark:shadow-black/50 z-10 aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/cooperative-main.jpg"
                alt="Nimod Cooperative Society"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              
              {/* Cinematic Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60" />

              {/* 3. The 'Premium Stamp' Badge (Replaces Text Badge) */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3 p-4 rounded-2xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-white/20 shadow-lg">
                 <div className="p-2.5 bg-emerald-500 rounded-full text-white">
                    <BadgeCheck size={20} />
                 </div>
                 <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">Since</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white leading-none">1954</div>
                 </div>
              </div>
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -top-6 -right-6 md:-right-10 w-24 h-24 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:12px_12px] opacity-40"></div>
          </motion.div>


          {/* --- RIGHT: EDITORIAL CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Elegant Side Line */}
            <div className="absolute -left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 hidden md:block" />

            {/* Small Header Tag */}
            <span className="inline-block text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">
              Our Legacy
            </span>

            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              ग्रामीण विकास का <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                अटूट विश्वास
              </span>
            </h2>

            {/* Rich Text Paragraphs */}
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
              <p>
                <span className="text-3xl float-left mr-2 mt-[-6px] text-emerald-500 font-serif">"</span>
                बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद, 
                <strong className="text-gray-900 dark:text-white"> 1954 </strong> 
                से केवल एक संस्था नहीं, बल्कि ग्रामीण परिवारों के जीवन का एक अभिन्न अंग है।
              </p>
              
              <p className="opacity-90">
                हमारा उद्देश्य केवल बैंकिंग नहीं, बल्कि <span className="underline decoration-emerald-500/30 decoration-2 underline-offset-4">सामूहिक समृद्धि</span> है। 
                किसानों को आर्थिक सुरक्षा और युवाओं को नई दिशा देने के लिए हम संकल्पित हैं।
              </p>
            </div>

            {/* Feature Pills (Modern List) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Building2 size={20} />
                  </div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    मजबूत बुनियादी ढांचा
                  </div>
               </div>

               <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <Sprout size={20} />
                  </div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    कृषि एवं सामाजिक विकास
                  </div>
               </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
