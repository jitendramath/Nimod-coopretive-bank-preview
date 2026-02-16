"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">
      
      {/* subtle emerald glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-400/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.7)] group">
              
              <Image
                src="/images/cooperative-main.jpg"
                alt="Nimod PACS Building"
                width={900}
                height={700}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-[1600ms]"
              />

              {/* dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* floating badge */}
              <div className="absolute bottom-6 left-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest uppercase">
                Since 1954
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              ग्रामीण विकास की एक <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald to-premium-mint">
                विश्वसनीय सहकारी संस्था
              </span>
            </h2>

            <div className="h-1 w-24 bg-premium-emerald rounded-full" />

            <p className="text-white/70 text-lg leading-relaxed">
              बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद वर्ष 1954 से
              ग्रामीण किसानों, महिलाओं और परिवारों के आर्थिक एवं सामाजिक विकास
              हेतु निरंतर कार्यरत एक विश्वसनीय सहकारी संस्था है।
            </p>

            <p className="text-white/60 leading-relaxed">
              सहकारिता के सिद्धांतों पर आधारित यह संस्था वित्तीय समावेशन,
              कृषि उन्नति, ऊर्जा आत्मनिर्भरता एवं सामाजिक सशक्तिकरण के क्षेत्र
              में निरंतर योगदान दे रही है और क्षेत्रीय विकास का एक मजबूत
              स्तंभ बन चुकी है।
            </p>

            {/* premium info cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-premium-emerald text-2xl font-bold">
                  1954
                </div>
                <div className="text-white/50 text-sm mt-1">
                  स्थापना वर्ष
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-premium-emerald text-2xl font-bold">
                  70+ वर्ष
                </div>
                <div className="text-white/50 text-sm mt-1">
                  सेवा अनुभव
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}