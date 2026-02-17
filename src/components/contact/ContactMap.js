"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative py-20 bg-[#050507] overflow-hidden">
      
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-widest uppercase text-xs mb-3">
              <MapPin size={14} />
              Location Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white italic">
              हमें <span className="text-white/30 group-hover:text-white transition-colors uppercase not-italic">यहाँ</span> खोजें
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/40 text-sm max-w-xs md:text-right font-medium"
          >
            निमोद के विकास का केंद्र बिंदु। हमारी संस्था का मुख्य कार्यालय बाज़ार के बीचों-बीच स्थित है।
          </motion.p>
        </div>

        {/* 🗺️ PREMIUM MAP CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 h-[400px] md:h-[550px] bg-white/5 shadow-2xl"
        >
          {/* Overlay for premium feel before interaction */}
          <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700" />
          
          {/* Map Iframe with Filters */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.047530630732!2d74.6367332!3d27.154747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bc756c9a9307b%3A0xe5f86e2467b938f2!2sNimod%2C%20Rajasthan%20341506!5e0!3m2!1sen!2sin!4v1708100000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) contrast(1.2) invert(0.9)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
          ></iframe>

          {/* Floating Address Badge (Desktop Only) */}
          <div className="absolute bottom-8 left-8 z-20 hidden md:block">
            <div className="p-6 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl max-w-xs transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white font-bold mb-2">निमोद पैक्स भवन</p>
              <p className="text-white/50 text-xs leading-relaxed">
                मुख्य बाजार, निमोद, तहसील - डीडवाना, जिला - डीडवाना-कुचामन (राजस्थान)
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
