"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesDetailSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* premium background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ग्रामीण विकास के लिए
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-sky-400">
              समर्पित सेवाएं
            </span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            समिति की प्रत्येक सेवा ग्रामीण जीवन को सरल, सुरक्षित और आर्थिक रूप से
            सशक्त बनाने के उद्देश्य से तैयार की गई है। हमारा लक्ष्य केवल सेवाएं
            प्रदान करना नहीं, बल्कि एक मजबूत और आत्मनिर्भर ग्रामीण अर्थव्यवस्था का
            निर्माण करना है।
          </p>
        </motion.div>

        {/* premium glass cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          {/* card 1 */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400/40 via-pink-500/30 to-transparent"
          >
            <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 h-full">
              <h3 className="text-white text-xl font-bold mb-4">
                आधुनिक वित्तीय सेवाएं
              </h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                डिजिटल बैंकिंग, जमा-निकासी और ऋण सेवाओं के माध्यम से ग्रामीण
                नागरिकों को आधुनिक वित्तीय प्रणाली से जोड़ा जा रहा है। इससे गांव
                स्तर पर ही बैंकिंग सुविधा उपलब्ध हो रही है।
              </p>
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-br from-sky-400/40 via-cyan-500/30 to-transparent"
          >
            <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 h-full">
              <h3 className="text-white text-xl font-bold mb-4">
                कृषि एवं ऊर्जा सहायता
              </h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                कृषि उत्पादन, भंडारण और सौर ऊर्जा जैसी परियोजनाओं के माध्यम से
                किसानों को आधुनिक संसाधन और आत्मनिर्भर ऊर्जा समाधान उपलब्ध कराए
                जा रहे हैं।
              </p>
            </div>
          </motion.div>

          {/* card 3 */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-br from-rose-400/40 via-pink-500/30 to-transparent"
          >
            <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 h-full">
              <h3 className="text-white text-xl font-bold mb-4">
                सामाजिक सशक्तिकरण
              </h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                महिला समूह, ग्रामीण रोजगार और सामाजिक परियोजनाओं के माध्यम से
                समुदाय को आर्थिक और सामाजिक रूप से मजबूत बनाया जा रहा है।
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}