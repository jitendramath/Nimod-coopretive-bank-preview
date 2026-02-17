"use client";

import { motion } from "framer-motion";

export default function ProjectsIntro() {
  return (
    <section className="relative py-20 lg:py-28 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Subtle Divider Glow (Dynamic) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-accent/40 to-transparent" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-premium-text transition-colors duration-500"
        >
          ग्रामीण विकास का
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-accent via-teal-500 to-premium-accent">
            {" "}आधुनिक मॉडल
          </span>
        </motion.h2>

        {/* Paragraph Block */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-6 text-premium-muted text-[15px] md:text-lg leading-relaxed text-center transition-colors duration-500 font-medium"
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

        {/* Premium Info Cards */}
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
              className="group relative p-8 rounded-[2rem] bg-premium-card border border-premium-border 
              backdrop-blur-md transition-all duration-500 hover:border-premium-accent/40 hover:shadow-xl hover:shadow-premium-shadow"
            >
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br from-premium-accent/20 via-transparent to-transparent pointer-events-none" />

              <h3 className="text-premium-text font-bold text-lg mb-3 transition-colors duration-500">
                {card.title}
              </h3>

              <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
