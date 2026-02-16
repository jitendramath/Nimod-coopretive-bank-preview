"use client";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Governance from "./components/Governance";
import Compliance from "./components/Compliance";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* 🍎 APPLE LEVEL MASTER SCROLL ENGINE */

const sectionVariants = {
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

export default function Home() {
  return (
    <main className="overflow-hidden">

    <Navbar />
      {/* HERO */}
      <Hero />

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* ABOUT */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <About />
      </motion.div>

      {/* SERVICES */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Services />
      </motion.div>

      {/* IMPACT */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Impact />
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Projects />
      </motion.div>

      {/* GOVERNANCE */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Governance />
      </motion.div>

      {/* COMPLIANCE */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Compliance />
      </motion.div>

      {/* FAQ */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <FAQ />
      </motion.div>

      {/* CONTACT */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </main>
  );
}
