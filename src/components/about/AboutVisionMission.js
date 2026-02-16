"use client";

import { motion } from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AboutVisionMission() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050507] overflow-hidden">

      {/* subtle glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-400/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            हमारा <span className="text-premium-emerald">दृष्टिकोण</span> और{" "}
            <span className="text-premium-emerald">मिशन</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            सहकारिता केवल एक व्यवस्था नहीं, बल्कि सामूहिक विकास की वह शक्ति है 
            जो ग्रामीण भारत को आत्मनिर्भर और समृद्ध बनाती है।
          </p>
        </div>

        {/* cards grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Vision */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0b0c11] to-[#050507] border border-white/10 hover:border-premium-emerald/40 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(58,244,183,0.15),transparent_60%)]"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald mb-6">
                <Eye size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                हमारा दृष्टिकोण
              </h3>

              <p className="text-white/60 leading-relaxed text-[15px]">
                ग्रामीण समुदाय को वित्तीय रूप से सशक्त बनाते हुए एक पारदर्शी, 
                उत्तरदायी और आत्मनिर्भर सहकारी मॉडल स्थापित करना हमारा मुख्य 
                दृष्टिकोण है। हमारा लक्ष्य है कि प्रत्येक किसान, महिला और युवा 
                आधुनिक वित्तीय सेवाओं एवं संसाधनों से जुड़कर आर्थिक रूप से मजबूत बने।
              </p>

              <div className="mt-6 flex items-center gap-2 text-premium-emerald text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} />
                Future Ready Rural Economy
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0b0c11] to-[#050507] border border-white/10 hover:border-premium-emerald/40 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(58,244,183,0.15),transparent_60%)]"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald mb-6">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                हमारा मिशन
              </h3>

              <p className="text-white/60 leading-relaxed text-[15px]">
                सहकारिता के माध्यम से किसानों और ग्रामीण नागरिकों को सशक्त बनाना, 
                उन्हें आधुनिक तकनीकों, वित्तीय सेवाओं और सरकारी योजनाओं से जोड़ना 
                तथा क्षेत्रीय विकास में सक्रिय योगदान देना हमारा मिशन है। 
                हम सामूहिक प्रगति, पारदर्शिता और विश्वास के साथ निरंतर आगे बढ़ रहे हैं।
              </p>

              <div className="mt-6 flex items-center gap-2 text-premium-emerald text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} />
                Cooperative Powered Growth
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom philosophy strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-white/70 text-lg leading-relaxed">
            हमारा विश्वास है कि जब ग्रामीण समाज संगठित होकर सहकारिता के मार्ग पर चलता है, 
            तो विकास केवल एक लक्ष्य नहीं बल्कि एक निरंतर यात्रा बन जाता है।
          </p>
        </motion.div>

      </div>
    </section>
  );
}