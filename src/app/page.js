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
    if (typeof window === "undefined") return;

    const revealAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("active");
      });
    };

    try {
      const isMobile = window.innerWidth < 768;

      // mobile = no animation, direct show
      if (isMobile) {
        revealAll();
        return;
      }

      if (!("IntersectionObserver" in window)) {
        revealAll();
        return;
      }

      const elements = document.querySelectorAll(".reveal");

      elements.forEach((el) => {
        el.classList.add("animate"); // animation enable
      });

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              requestAnimationFrame(() => {
                entry.target.classList.add("active");
              });
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();

    } catch (err) {
      console.error("Reveal system error:", err);
      revealAll();
    }
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col bg-premium-charcoal overflow-x-hidden">
      <BackgroundGradient />
      <Navbar />

      <div className="relative z-10 w-full">
        
        <section className="reveal">
          <Hero />
        </section>

        <TrustStrip />

        <section className="reveal">
          <About />
        </section>

        <section className="reveal">
          <Services />
        </section>

        <section className="reveal">
          <Projects />
        </section>

        <section className="reveal">
          <Impact />
        </section>

        <section className="reveal">
          <Governance />
        </section>

        <section className="reveal">
          <Compliance />
        </section>

        <section className="reveal">
          <FAQ />
        </section>

        <section className="reveal">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
