"use client";

import { motion } from "framer-motion";

/* 🏗️ Layout Components */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* 📞 Contact Page Specific Components */
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoGrid from "@/components/contact/ContactInfoGrid";
import ContactAssurance from "@/components/contact/ContactAssurance";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

/* ✨ Visual FX */
import ContactBackgroundFX from "@/components/contact/fx/ContactBackgroundFX";

/**
 * 🍎 PREMIUM REVEAL ENGINE
 * This creates a high-end cinematic entrance for each section
 */
const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactPage() {
  return (
    <main className="bg-premium-black min-h-screen relative overflow-hidden">
      
      {/* 🌌 Hardware Accelerated Ambient Background */}
      <ContactBackgroundFX />

      {/* Navigation */}
      <Navbar />

      {/* 1. HERO SECTION (Immediate Entrance) */}
      <ContactHero />

      {/* 2. INFO GRID SECTION */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContactInfoGrid />
      </motion.div>

      {/* 3. TRUST & ASSURANCE SECTION */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ContactAssurance />
      </motion.div>

      {/* 4. INTERACTIVE FORM SECTION */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>

      {/* 5. LOCATION MAP SECTION */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ContactMap />
      </motion.div>

      {/* Footer */}
      <Footer />

      {/* 📱 Mobile Optimized Bottom Blur (Optional but adds depth) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-40" />
      
    </main>
  );
}
