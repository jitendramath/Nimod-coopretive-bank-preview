"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative py-20 bg-premium-bg overflow-hidden transition-colors duration-500">
      
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-premium-accent font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4">
              <MapPin size={16} />
              Location Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-premium-text italic transition-colors duration-500">
              हमें <span className="text-premium-muted/30 group-hover:text-premium-text transition-colors uppercase not-italic">यहाँ</span> खोजें
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-premium-muted text-sm max-w-xs md:text-right font-medium transition-colors duration-500"
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
          className="group relative rounded-[3rem] overflow-hidden border border-premium-border h-[400px] md:h-[550px] bg-premium-card shadow-2xl shadow-premium-shadow transition-all duration-500"
        >
          {/* Internal Glow Overlay */}
          <div className="absolute inset-0 bg-premium-accent/5 pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700" />
          
          {/* Map Iframe with Theme-Aware Filters */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.047530630732!2d74.6367332!3d27.154747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bc756c9a9307b%3A0xe5f86e2467b938f2!2sNimod%2C%20Rajasthan%20341506!5e0!3m2!1sen!2sin!4v1708100000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80 dark:opacity-60 dark:grayscale dark:invert group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
          ></iframe>

          {/* Floating Address Badge (Desktop Only) */}
          <div className="absolute bottom-10 left-10 z-20 hidden md:block">
            <div className="p-8 rounded-[2rem] bg-premium-card/90 backdrop-blur-2xl border border-premium-border shadow-2xl max-w-sm transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-premium-text font-bold text-lg mb-2 transition-colors duration-500">
                निमोद पैक्स भवन
              </p>
              <p className="text-premium-muted text-xs leading-relaxed transition-colors duration-500 font-medium">
                मुख्य बाजार, निमोद, तहसील - डीडवाना, जिला - डीडवाना-कुचामन (राजस्थान)
              </p>
              
              <div className="mt-5 h-[2px] w-12 bg-premium-accent rounded-full" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
