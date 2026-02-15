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

    // चेक करें कि क्या यूजर मोबाइल पर है
    const isMobile = window.innerWidth < 768;

    // मोबाइल के लिए: एनीमेशन हटाकर सीधे कंटेंट दिखाएं (No Blank Screen)
    if (isMobile) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("active");
      });
      return;
    }

    // डेस्कटॉप के लिए: परफॉरमेंस-फ्रेंडली ऑब्जर्वर
    const observerOptions = {
      threshold: 0.1, // 10% दिखने पर ही ट्रिगर (Ultra Sensitive)
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // GPU लोड कम करने के लिए requestAnimationFrame
          requestAnimationFrame(() => {
            entry.target.classList.add("active");
          });
          // एक बार दिखने के बाद ऑब्जर्वर हटा दें ताकि बैटरी बचे
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col bg-premium-charcoal overflow-x-hidden">
      <BackgroundGradient />
      <Navbar />

      <div className="relative z-10 w-full">
        {/* हर सेक्शन को 'reveal' क्लास के साथ रैप किया गया है */}
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
