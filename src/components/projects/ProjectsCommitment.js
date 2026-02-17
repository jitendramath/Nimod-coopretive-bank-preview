"use client";

import { motion } from "framer-motion";

export default function ProjectsCommitment() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden">

      {/* 🌌 luxury depth glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-emerald-500/10 blur-[220px] pointer-events-none" />
      <div className="absolute bottom-[-220px] left-[-120px] w-[520px] h-[520px] bg-cyan-400/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1100px] mx-auto text-center relative z-10">

        {/* tag */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-8"
        >
          Our Commitment
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10"
        >
          हमारी  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
            प्रतिबद्धता
          </span>
        </motion.h2>

        {/* main paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16"
        >
          समिति केवल वर्तमान परियोजनाओं तक सीमित नहीं है। हमारा लक्ष्य निरंतर
          नवाचार, पारदर्शिता और सामूहिक विकास के माध्यम से ग्रामीण क्षेत्र को
          नई ऊंचाइयों तक पहुंचाना है।
          <br /><br />
          हम किसानों, युवाओं और ग्रामीण परिवारों के जीवन स्तर को बेहतर बनाने के
          लिए दीर्घकालिक विकास योजनाओं और आधुनिक सुविधाओं के विस्तार हेतु
          प्रतिबद्ध हैं।
        </motion.p>

        {/* commitment cards */}
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
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent 
              border border-white/10 hover:border-premium-emerald/40 
              transition-all duration-500 backdrop-blur-sm overflow-hidden"
            >
              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
              bg-gradient-to-br from-premium-emerald/10 via-transparent to-cyan-400/10" />

              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-premium-emerald transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* bottom premium quote */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-20 text-white/40 text-sm md:text-base max-w-2xl mx-auto"
        >
          हमारा उद्देश्य केवल सेवाएं प्रदान करना नहीं, बल्कि ग्रामीण समाज के
          समग्र विकास में एक स्थायी और प्रेरणादायक भूमिका निभाना है।
        </motion.div>

      </div>
    </section>
  );
}