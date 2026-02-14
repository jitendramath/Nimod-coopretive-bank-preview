"use client";

import { useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Section Components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Impact from "@/components/sections/Impact";
import Governance from "@/components/sections/Governance";
import Compliance from "@/components/sections/Compliance";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // Scroll Reveal Hook को एक्टिवेट करना
  useScrollReveal();

  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Light & Airy with Blobs */}
      <Hero />

      {/* About Section - Premium Soft Slate (#CCDAF0) */}
      <About />

      {/* Services Section - Elite Dark Charcoal (#1d1d1f) */}
      <Services />

      {/* Projects Section - Mint Gradient (#A2F5DE) */}
      <Projects />

      {/* Impact Section - Elegant Lavender (#DFA5FF) */}
      <Impact />

      {/* Governance Section - Professional Pure White */}
      <Governance />

      {/* Compliance Section - Clean Mint Tint */}
      <Compliance />

      {/* Contact Section - Final Dark Statement */}
      <Contact />

      {/* Footer - Minimalist Branding */}
      <Footer />
    </main>
  );
}
