"use client";

import { motion } from "framer-motion";

/* layout */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* sections */
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

/* detailed sections */
import SolarProject from "@/components/projects/sections/SolarProject";
import WarehouseProject from "@/components/projects/sections/WarehouseProject";
import BankingProject from "@/components/projects/sections/BankingProject";
import StoreProject from "@/components/projects/sections/StoreProject";
import SHGProject from "@/components/projects/sections/SHGProject";

/* future + cta */
import ProjectsFuture from "@/components/projects/ProjectsFuture";
import ProjectsCommitment from "@/components/projects/ProjectsCommitment";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

/* fx */
import ProjectsBackgroundFX from "@/components/projects/fx/ProjectsBackgroundFX";

/* 🍎 APPLE LEVEL SCROLL ENGINE */
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

export default function ProjectsPage() {
  return (
    <main className="bg-premium-black overflow-hidden relative">

      {/* 🔥 background fx */}
      <ProjectsBackgroundFX />

      <Navbar />

      {/* HERO */}
      <ProjectsHero />

      {/* INTRO */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <ProjectsIntro />
      </motion.div>

      {/* GRID OVERVIEW */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ProjectsGrid />
      </motion.div>

      {/* SOLAR */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SolarProject />
      </motion.div>

      {/* WAREHOUSE */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <WarehouseProject />
      </motion.div>

      {/* BANKING */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <BankingProject />
      </motion.div>

      {/* STORE */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <StoreProject />
      </motion.div>

      {/* SHG */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SHGProject />
      </motion.div>

      {/* FUTURE */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ProjectsFuture />
      </motion.div>

      {/* COMMITMENT */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ProjectsCommitment />
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ProjectsCTA />
      </motion.div>

      <Footer />

    </main>
  );
}
