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
    <section className="relative py-24 md:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">
      
      {/* 🌌 Subtle Premium Glow (Dynamic) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-premium-accent/10 blur-[160px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE BOX */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-premium-border shadow-2xl shadow-premium-shadow group transition-all duration-500">
              
              <Image
                src="/images/cooperative-main.jpg"
                alt="Nimod PACS Building"
                width={900}
                height={700}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-[1600ms]"
              />

              {/* Theme-Aware Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Floating Foundation Badge */}
              <div className="absolute bottom-6 left-6 px-6 py-2.5 rounded-full bg-premium-surface/80 backdrop-blur-md border border-premium-border text-premium-text text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
                Since 1954
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-premium-text leading-tight transition-colors duration-500">
              ग्रामीण विकास की एक <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-accent to-teal-500 dark:to-premium-mint">
                विश्वसनीय सहकारी संस्था
              </span>
            </h2>

            <div className="h-1.5 w-24 bg-premium-accent rounded-full shadow-[0_0_10px_var(--accent-glow)]" />

            <div className="space-y-6">
              <p className="text-premium-text text-lg leading-relaxed transition-colors duration-500 font-semibold opacity-90">
                बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद वर्ष 1954 से
                ग्रामीण किसानों, महिलाओं और परिवारों के आर्थिक एवं सामाजिक विकास
                हेतु निरंतर कार्यरत एक विश्वसनीय सहकारी संस्था है।
              </p>

              <p className="text-premium-muted leading-relaxed transition-colors duration-500 font-medium">
                सहकारिता के सिद्धांतों पर आधारित यह संस्था वित्तीय समावेशन,
                कृषि उन्नति, ऊर्जा आत्मनिर्भरता एवं सामाजिक सशक्तिकरण के क्षेत्र
                में निरंतर योगदान दे रही है और क्षेत्रीय विकास का एक मजबूत
                स्तंभ बन चुकी है।
              </p>
            </div>

            {/* Premium Info Summary Cards */}
            <div className="grid grid-cols-2 gap-5 pt-6">
              <div className="p-6 rounded-[2rem] bg-premium-card border border-premium-border transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-premium-shadow">
                <div className="text-premium-accent text-3xl font-black tracking-tighter">
                  1954
                </div>
                <div className="text-premium-muted text-xs font-bold uppercase tracking-widest mt-2">
                  स्थापना वर्ष
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-premium-card border border-premium-border transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-premium-shadow">
                <div className="text-premium-accent text-3xl font-black tracking-tighter">
                  70+ वर्ष
                </div>
                <div className="text-premium-muted text-xs font-bold uppercase tracking-widest mt-2">
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
