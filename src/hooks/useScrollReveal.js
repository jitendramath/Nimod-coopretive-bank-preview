"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Select all elements with the 'reveal' class
    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class that triggers the CSS transition
            entry.target.classList.add("reveal-show");
            // Stop observing once revealed (performance optimization)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Cleanup on unmount
    return () => revealObserver.disconnect();
  }, []);
}
