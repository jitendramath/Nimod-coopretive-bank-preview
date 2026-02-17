"use client";

import { motion } from "framer-motion";

export default function ProjectsIntro() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#050507] overflow-hidden">

      {/* subtle divider glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center"
        >
          ग्रामीण विकास का
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
            {" "}आधुनिक मॉडल
          </span>
        </motion.h2>

        {/* paragraph block */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-6 text-white/65 text-[15px] md:text-lg leading-relaxed text-center"
        >
          <p>
            बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद ने समय के साथ ऐसी
            परियोजनाओं की स्थापना की है जो केवल वर्तमान आवश्यकताओं को ही नहीं,
            बल्कि भविष्य की आत्मनिर्भर ग्रामीण अर्थव्यवस्था को भी मजबूत बनाती हैं।
          </p>

          <p>
            ऊर्जा, भंडारण, बैंकिंग, उपभोक्ता सेवाएं और सामाजिक विकास — इन सभी क्षेत्रों में
            समिति ने उल्लेखनीय कार्य किए हैं।  
            प्रत्येक परियोजना का उद्देश्य ग्रामीण जीवन को सरल, आधुनिक और आर्थिक रूप से
            सशक्त बनाना है।
          </p>

          <p>
            आज समिति की परियोजनाएं ग्रामीण क्षेत्र के लिए एक मॉडल के रूप में देखी जाती हैं,
            जो सहकारिता के माध्यम से समग्र विकास की दिशा में निरंतर कार्य कर रही हैं।
          </p>
        </motion.div>

        {/* premium info cards */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {[
            {
              title: "आत्मनिर्भर ऊर्जा",
              desc: "सौर ऊर्जा परियोजनाओं के माध्यम से सतत विकास",
            },
            {
              title: "कृषि सशक्तिकरण",
              desc: "भंडारण और कृषि सहायता से किसानों को मजबूती",
            },
            {
              title: "डिजिटल ग्रामीण सेवा",
              desc: "गांव में आधुनिक बैंकिंग और सुविधाएं",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 
              backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent" />

              <h3 className="text-white font-semibold text-lg mb-2">
                {card.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}