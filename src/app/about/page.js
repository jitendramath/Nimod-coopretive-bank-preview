"use client";

import { motion } from "framer-motion";

import AboutBackgroundFX from "@/components/about/AboutBackgroundFX";
/* layout */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* about sections */
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStats from "@/components/about/AboutStats";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutObjectives from "@/components/about/AboutObjectives";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutServices from "@/components/about/AboutServices";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutGovernance from "@/components/about/AboutGovernance";
import AboutCommitment from "@/components/about/AboutCommitment";
import AboutCTA from "@/components/about/AboutCTA";

/* 🍎 luxury scroll engine */
const reveal = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function AboutPage() {
  return (
    <main className="bg-premium-black overflow-hidden relative">

  {/* 🔥 BACKGROUND FX */}
  <AboutBackgroundFX />

  <Navbar />

      {/* HERO */}
      <AboutHero />

      {/* INTRO */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        <AboutIntro />
      </motion.div>

      {/* STATS */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutStats />
      </motion.div>

      {/* TIMELINE */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutTimeline />
      </motion.div>

      {/* OBJECTIVES */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutObjectives />
      </motion.div>

      {/* VISION + MISSION */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutVisionMission />
      </motion.div>

      {/* SERVICES */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutServices />
      </motion.div>

      {/* ACHIEVEMENTS */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutAchievements />
      </motion.div>

      {/* GOVERNANCE */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutGovernance />
      </motion.div>

      {/* COMMITMENT */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutCommitment />
      </motion.div>

      {/* CTA */}
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutCTA />
      </motion.div>

      <Footer />

    </main>
  );
}
