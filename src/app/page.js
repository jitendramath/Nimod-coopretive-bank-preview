"use client";

import { useEffect } from "react";
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
  
  useEffect(() => {
    // Intersection Observer Logic to trigger animations
    const observerOptions = {
      root: null,
      threshold: 0.15, // जब सेक्शन 15% दिखेगा तब एनिमेट होगा
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    // उन सभी एलिमेंट्स को ढूँढना जिनमें 'reveal' क्लास है
    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col bg-premium-charcoal">
      {/* Background stays fixed and optimized */}
      <BackgroundGradient />

      {/* Navigation on top */}
      <Navbar />

      {/* Main Content Sections wrapped in a z-index layer */}
      <div className="relative z-10 w-full">
        {/* 'reveal' class handles the smooth entrance */}
        <div className="reveal">
          <Hero />
        </div>
        
        <TrustStrip />

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Services />
        </div>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Impact />
        </div>

        <div className="reveal">
          <Governance />
        </div>

        <div className="reveal">
          <Compliance />
        </div>

        <div className="reveal">
          <FAQ />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}
