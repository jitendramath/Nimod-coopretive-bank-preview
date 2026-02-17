"use client";

import { motion } from "framer-motion";
import { Rocket, Lightbulb, Globe } from "lucide-react";

export default function ServicesFuture() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      {/* 🔥 premium ambient glow */}
      <div className="absolute -top-40 left-[-120px] w-[420px] h-[420px] bg-yellow-400/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-160px] right-[-120px] w-[460px] h-[460px] bg-crimson-400/10 blur-[150px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            भविष्य की सेवाएं और योजनाएं
          </h2>

          <div className="h-[2px] w-[140px] bg-gradient-to-r from-yellow-400 via-premium-emerald to-cyan-400 mx-auto mt-6 mb-6" />

          <p className="text-white/60 max-w-2xl mx-auto text-[15px] md:text-lg leading-relaxed">
            समिति भविष्य में नई तकनीकों और आधुनिक सुविधाओं के माध्यम से ग्रामीण
            क्षेत्र को और अधिक सशक्त बनाने के लिए निरंतर प्रयासरत है। हमारा लक्ष्य
            है कि गांव में ही शहर जैसी सुविधाएं उपलब्ध कराई जाएं।
          </p>
        </motion.div>

        {/* future cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-7 rounded-3xl bg-gradient-to-br from-yellow-400/10 to-transparent border border-white/10 backdrop-blur-xl group overflow-hidden"
          >
            <Rocket className="text-yellow-400 mb-4" size={32} />

            <h3 className="text-white font-semibold text-xl mb-3">
              डिजिटल विस्तार
            </h3>

            <p className="text-white/65 text-sm leading-relaxed">
              समिति भविष्य में पूरी तरह डिजिटल सेवाएं प्रदान करने की दिशा में
              कार्य कर रही है, जिससे ग्रामीण नागरिकों को तेज और सुरक्षित सेवाएं
              प्राप्त हों।
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
            bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative p-7 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-transparent border border-white/10 backdrop-blur-xl group overflow-hidden"
          >
            <Lightbulb className="text-cyan-400 mb-4" size={32} />

            <h3 className="text-white font-semibold text-xl mb-3">
              नई ग्रामीण योजनाएं
            </h3>

            <p className="text-white/65 text-sm leading-relaxed">
              कृषि, ऊर्जा और सामाजिक विकास से जुड़ी नई योजनाओं को लागू कर ग्रामीण
              समुदाय को और अधिक सशक्त बनाने का लक्ष्य रखा गया है।
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
            bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-7 rounded-3xl bg-gradient-to-br from-premium-emerald/10 to-transparent border border-white/10 backdrop-blur-xl group overflow-hidden"
          >
            <Globe className="text-premium-emerald mb-4" size={32} />

            <h3 className="text-white font-semibold text-xl mb-3">
              आधुनिक ग्रामीण मॉडल
            </h3>

            <p className="text-white/65 text-sm leading-relaxed">
              हमारा उद्देश्य है कि समिति को एक आदर्श आधुनिक सहकारी मॉडल बनाया
              जाए, जो पूरे क्षेत्र के लिए प्रेरणा का केंद्र बने।
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
            bg-gradient-to-br from-premium-emerald/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}