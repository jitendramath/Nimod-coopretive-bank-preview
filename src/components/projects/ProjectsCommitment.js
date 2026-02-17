"use client";

import { motion } from "framer-motion";

export default function ProjectsCommitment() {
  return (
    <section className="relative py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Premium Ambient Glows (Dynamic) */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-premium-accent/10 blur-[220px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-[-220px] left-[-120px] w-[520px] h-[520px] bg-cyan-500/5 dark:bg-cyan-400/10 blur-[200px] pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1100px] mx-auto text-center relative z-10">

        {/* Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-premium-surface border border-premium-border text-xs tracking-widest text-premium-muted uppercase mb-8 shadow-sm transition-colors duration-500"
        >
          Our Commitment
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-premium-text leading-tight mb-10 transition-colors duration-500"
        >
          हमारी  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-accent via-teal-500 to-premium-accent">
            प्रतिबद्धता
          </span>
        </motion.h2>

        {/* Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-premium-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16 transition-colors duration-500 font-medium"
        >
          समिति केवल वर्तमान परियोजनाओं तक सीमित नहीं है। हमारा लक्ष्य निरंतर
          नवाचार, पारदर्शिता और सामूहिक विकास के माध्यम से ग्रामीण क्षेत्र को
          नई ऊंचाइयों तक पहुंचाना है।
          <br /><br />
          हम किसानों, युवाओं और ग्रामीण परिवारों के जीवन स्तर को बेहतर बनाने के
          लिए दीर्घकालिक विकास योजनाओं और आधुनिक सुविधाओं के विस्तार हेतु
          प्रतिबद्ध हैं।
        </motion.p>

        {/* Commitment Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "पारदर्शिता",
              desc: "हर प्रक्रिया में विश्वास और स्पष्टता",
            },
            {
              title: "नवाचार",
              desc: "आधुनिक तकनीक और विकास",
            },
            {
              title: "सामूहिक उन्नति",
              desc: "हर सदस्य की प्रगति",
            },
            {
              title: "सतत विकास",
              desc: "दीर्घकालिक योजनाएं",
            },
            {
              title: "ग्रामीण सशक्तिकरण",
              desc: "आर्थिक आत्मनिर्भरता",
            },
            {
              title: "विश्वास",
              desc: "70+ वर्षों की विश्वसनीयता",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border 
              hover:border-premium-accent/40 transition-all duration-500 backdrop-blur-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-premium-shadow"
            >
              {/* Dynamic Glow Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-700 
              bg-gradient-to-br from-premium-accent via-transparent to-cyan-500/10 pointer-events-none" />

              <div className="relative z-10 text-center">
                <h3 className="text-premium-text font-bold text-lg mb-3 group-hover:text-premium-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Premium Quote */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-20 text-premium-muted/60 text-sm md:text-base max-w-2xl mx-auto transition-colors duration-500 font-medium italic"
        >
          "हमारा उद्देश्य केवल सेवाएं प्रदान करना नहीं, बल्कि ग्रामीण समाज के
          समग्र विकास में एक स्थायी और प्रेरणादायक भूमिका निभाना है।"
        </motion.div>

      </div>
    </section>
  );
}
