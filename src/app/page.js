"use client";

import BackgroundGradient from "@/components/ui/BackgroundGradient";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Impact from "@/components/sections/Impact";
import Governance from "@/components/sections/Governance";
import Compliance from "@/components/sections/Compliance";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-premium-charcoal selection:bg-premium-emerald selection:text-premium-charcoal">
      {/* 1. Dynamic Animated Background (Floating Blobs) */}
      <BackgroundGradient />

      {/* 2. Navigation Layer */}
      <Navbar />

      {/* 3. Main Content Layer (z-index ensure content is above blobs) */}
      <div className="relative z-10 w-full">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Projects />
        <Impact />
        <Governance />
        <Compliance />
        <FAQ />
        <Contact />
      </div>

      {/* 4. Footer Layer */}
      <Footer />
    </main>
  );
}
