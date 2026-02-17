"use client";

import { motion } from "framer-motion";

/* layout */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* hero + intro */
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";

/* grid */
import ServicesGrid from "@/components/services/ServicesGrid";

/* sections */
import AgricultureService from "@/components/services/sections/AgricultureService";
import BankingService from "@/components/services/sections/BankingService";
import StorageService from "@/components/services/sections/StorageService";
import SolarService from "@/components/services/sections/SolarService";
import SHGService from "@/components/services/sections/SHGService";

/* future + commitment + CTA */
import ServicesFuture from "@/components/services/ServicesFuture";
import ServicesCommitment from "@/components/services/ServicesCommitment";
import ServicesCTA from "@/components/services/ServicesCTA";

/* background FX */
import ServicesBackgroundFX from "@/components/services/fx/ServicesBackgroundFX";

/* 🍎 premium reveal engine */
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

export default function ServicesPage() {
  return (
    <main className="bg-premium-black overflow-hidden relative">

      {/* 🔥 animated luxury background */}
      <ServicesBackgroundFX />

      <Navbar />

      {/* HERO */}
      <ServicesHero />

      {/* INTRO */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <ServicesIntro />
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ServicesGrid />
      </motion.div>

      {/* AGRICULTURE */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AgricultureService />
      </motion.div>

      {/* BANKING */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <BankingService />
      </motion.div>

      {/* STORAGE */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <StorageService />
      </motion.div>

      {/* SOLAR */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SolarService />
      </motion.div>

      {/* SHG */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SHGService />
      </motion.div>

      {/* FUTURE */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <ServicesFuture />
      </motion.div>

      {/* COMMITMENT */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <ServicesCommitment />
      </motion.div>

      {/* CTA */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <ServicesCTA />
      </motion.div>

      <Footer />
    </main>
  );
}
