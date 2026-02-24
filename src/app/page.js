"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <main className="overflow-hidden">

          <Hero />
          
          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <About />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Services />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Impact />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Projects />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Governance />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Compliance />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <FAQ />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Contact />
          </motion.div>

    </main>
  );
}
