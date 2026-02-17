"use client";

import { motion } from "framer-motion";

export default function ProjectsFuture() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden">

      {/* 🌌 cinematic glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-emerald-500/10 blur-[220px] pointer-events-none" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] bg-cyan-400/10 blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto text-center relative z-10">

        {/* tiny badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 uppercase mb-8"
        >
          Future Expansion Vision
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10"
        >
          भविष्य की  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-emerald via-premium-mint to-premium-emerald">
            विकास यात्रा
          </span>
        </motion.h2>

        {/* paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16"
        >
          समिति केवल वर्तमान परियोजनाओं तक सीमित नहीं है। भविष्य में ऊर्जा,
          शिक्षा, स्वास्थ्य और डिजिटल सेवाओं के क्षेत्र में नई परियोजनाओं पर
          निरंतर कार्य किया जा रहा है।
          <br /><br />
          हमारा लक्ष्य ग्रामीण क्षेत्र को आधुनिक सुविधाओं से जोड़कर एक
          आत्मनिर्भर, तकनीकी रूप से सशक्त और समृद्ध समुदाय का निर्माण करना है।
        </motion.p>

        {/* futuristic cards */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: "सौर विस्तार",
              desc: "ग्रामीण ऊर्जा आत्मनिर्भरता",
            },
            {
              title: "डिजिटल बैंकिंग",
              desc: "स्मार्ट ग्रामीण वित्त",
            },
            {
              title: "शिक्षा सहयोग",
              desc: "युवा सशक्तिकरण पहल",
            },
            {
              title: "स्वास्थ्य सेवाएं",
              desc: "ग्रामीण स्वास्थ्य केंद्र",
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

        {/* bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-20 text-white/40 text-sm md:text-base max-w-2xl mx-auto"
        >
          निरंतर नवाचार और सामूहिक विकास के माध्यम से समिति भविष्य में भी
          ग्रामीण क्षेत्र को नई ऊंचाइयों तक ले जाने के लिए प्रतिबद्ध है।
        </motion.div>

      </div>
    </section>
  );
}