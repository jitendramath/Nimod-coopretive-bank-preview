"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import PremiumLoader from "@/components/ui/PremiumLoader"; // 👈 loader import

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Impact from "@/components/sections/Impact";
import Governance from "@/components/sections/Governance";
import Compliance from "@/components/sections/Compliance";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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

  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {/* 🔥 LOADER */}
      {!loadingDone && (
        <PremiumLoader onFinish={() => setLoadingDone(true)} />
      )}

      {/* 🌍 MAIN WEBSITE */}
      {loadingDone && (
        <main className="overflow-hidden">

          <Hero />

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <About />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <Services />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <Impact />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <Projects />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <Governance />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <Compliance />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <FAQ />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="show">
            <Contact />
          </motion.div>

        </main>
      )}
    </>
  );
}
