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

        {/* MOBILE = scrolling ticker | DESKTOP = normal */}
        <div className="relative py-6">

          <div className="flex gap-10 whitespace-nowrap animate-trustScroll md:animate-none md:flex-wrap md:justify-between md:gap-x-8 px-6">

            {/* duplicate items for smooth loop */}
            {[...trustItems, ...trustItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default select-none"
              >
                <item.icon
                  size={18}
                  className="text-premium-emerald shrink-0 group-hover:scale-110 transition-transform duration-300"
                />

                <span className="text-[11px] md:text-sm font-bold text-white uppercase tracking-wider group-hover:text-premium-mint transition-colors">
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
