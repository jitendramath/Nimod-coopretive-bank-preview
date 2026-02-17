"use client";

import { ShieldCheck, Scale, Building2, FileCheck } from "lucide-react";

export default function TrustStrip() {

  const trustItems = [
    { icon: Building2, text: "पंजीकृत संस्था (Since 1954)" },
    { icon: ShieldCheck, text: "RBI दिशा-निर्देशों का पालन" },
    { icon: FileCheck, text: "नियमित वैधानिक ऑडिट" },
    { icon: Scale, text: "100% पारदर्शी प्रशासन" },
  ];

  return (
    <section className="w-full border-y border-premium-border bg-premium-surface/30 backdrop-blur-md relative z-20 overflow-hidden transition-colors duration-500">

      <div className="max-w-[1200px] mx-auto">

        <div className="relative py-6">

          {/* 🔵 MOBILE SCROLL TICKER (Adaptive Theme) */}
          <div className="md:hidden overflow-hidden">
            <div className="flex gap-10 whitespace-nowrap animate-trustScroll px-6">
              {[...trustItems, ...trustItems].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300 select-none"
                >
                  <item.icon
                    size={18}
                    className="text-premium-accent shrink-0"
                  />
                  <span className="text-[10px] font-black text-premium-muted uppercase tracking-[0.15em] transition-colors duration-500">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 🖥️ DESKTOP STRIP (Premium Layout) */}
          <div className="hidden md:flex justify-between items-center gap-8 px-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-500"
              >
                <item.icon size={20} className="text-premium-accent group-hover:scale-110 transition-transform" />
                <span className="text-[12px] font-black text-premium-muted uppercase tracking-[0.2em] transition-colors duration-500">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
