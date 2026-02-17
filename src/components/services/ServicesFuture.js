"use client";

import { motion } from "framer-motion";
import { Rocket, Lightbulb, Globe } from "lucide-react";

export default function ServicesFuture() {
  return (
    <section className="relative py-24 lg:py-32 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Premium Ambient Glows (Dynamic) */}
      <div className="absolute -top-40 left-[-120px] w-[420px] h-[420px] bg-yellow-500/10 dark:bg-yellow-400/10 blur-[150px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-[-160px] right-[-120px] w-[460px] h-[460px] bg-rose-500/10 dark:bg-rose-400/10 blur-[150px] pointer-events-none transition-colors duration-500" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-premium-text leading-tight transition-colors duration-500">
            भविष्य की सेवाएं और योजनाएं
          </h2>

          <div className="h-[3px] w-[140px] bg-gradient-to-r from-yellow-500 via-premium-accent to-cyan-500 mx-auto mt-6 mb-8 rounded-full" />

          <p className="text-premium-muted max-w-2xl mx-auto text-[15px] md:text-lg leading-relaxed transition-colors duration-500">
            समिति भविष्य में नई तकनीकों और आधुनिक सुविधाओं के माध्यम से ग्रामीण
            क्षेत्र को और अधिक सशक्त बनाने के लिए निरंतर प्रयासरत है। हमारा लक्ष्य
            है कि गांव में ही शहर जैसी सुविधाएं उपलब्ध कराई जाएं।
          </p>
        </motion.div>

        {/* Future Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: Digital Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-yellow-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Rocket className="text-yellow-600 dark:text-yellow-400" size={32} />
            </div>

            <h3 className="text-premium-text font-bold text-xl mb-3 transition-colors duration-500">
              डिजिटल विस्तार
            </h3>

            <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
              समिति भविष्य में पूरी तरह डिजिटल सेवाएं प्रदान करने की दिशा में
              कार्य कर रही है, जिससे ग्रामीण नागरिकों को तेज और सुरक्षित सेवाएं
              प्राप्त हों।
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
            bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 2: New Rural Schemes */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="group relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Lightbulb className="text-cyan-600 dark:text-cyan-400" size={32} />
            </div>

            <h3 className="text-premium-text font-bold text-xl mb-3 transition-colors duration-500">
              नई ग्रामीण योजनाएं
            </h3>

            <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
              कृषि, ऊर्जा और सामाजिक विकास से जुड़ी नई योजनाओं को लागू कर ग्रामीण
              समुदाय को और अधिक सशक्त बनाने का लक्ष्य रखा गया है।
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
            bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 3: Modern Rural Model */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-premium-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-premium-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Globe className="text-premium-accent" size={32} />
            </div>

            <h3 className="text-premium-text font-bold text-xl mb-3 transition-colors duration-500">
              आधुनिक ग्रामीण मॉडल
            </h3>

            <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500">
              हमारा उद्देश्य है कि समिति को एक आदर्श आधुनिक सहकारी मॉडल बनाया
              जाए, जो पूरे क्षेत्र के लिए प्रेरणा का केंद्र बने।
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
            bg-gradient-to-br from-premium-accent/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
