"use client";

import { ShieldCheck, Scale, Building2, FileCheck } from "lucide-react";

export default function TrustStrip() {

  const trustItems = [
    { icon: Building2, text: "पंजीकृत संस्था (Reg. 2009)" },
    { icon: ShieldCheck, text: "RBI दिशा-निर्देशों का पालन" },
    { icon: FileCheck, text: "नियमित वैधानिक ऑडिट" },
    { icon: Scale, text: "100% पारदर्शी प्रशासन" },
  ];

  return (
    <section className="w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto">

        <div className="relative py-6">

          {/* 🔵 MOBILE SCROLL TICKER */}
          <div className="md:hidden overflow-hidden">
            <div className="flex gap-10 whitespace-nowrap animate-trustScroll px-6">
              {[...trustItems, ...trustItems].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-all duration-300 select-none"
                >
                  <item.icon
                    size={18}
                    className="text-premium-emerald shrink-0"
                  />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 🖥️ DESKTOP NORMAL STRIP */}
          <div className="hidden md:flex justify-between items-center gap-8 px-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300"
              >
                <item.icon size={20} className="text-premium-emerald" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">
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
