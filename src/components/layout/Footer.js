"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-24 pb-10 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">

      {/* 🌈 luxury background system */}
      <div className="absolute inset-0 pointer-events-none">

        {/* top glow */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[600px] h-[600px] bg-emerald-400/10 blur-[180px] rounded-full" />

        {/* bottom glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] rounded-full" />

        {/* mesh */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_20%,var(--accent-primary),transparent_60%)]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 relative z-10">

        {/* 💎 TOP CTA BAR */}
        <div className="
        mb-20
        rounded-[2.5rem]
        border border-[var(--border-color)]
        bg-[var(--card-bg)]
        backdrop-blur-xl
        px-6 md:px-12 py-10
        flex flex-col md:flex-row items-center justify-between gap-8
        shadow-[0_20px_80px_var(--shadow-color)]
        ">

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-main)] mb-2">
              समिति से जुड़ना चाहते हैं?
            </h3>
            <p className="text-[var(--text-muted)] text-sm md:text-base">
              सदस्यता, ऋण या किसी भी जानकारी के लिए हमारी टीम से संपर्क करें।
            </p>
          </div>

          <Link
            href="#contact"
            className="
            px-8 py-3 rounded-xl
            bg-[var(--accent-primary)]
            text-white font-semibold
            hover:scale-[1.05]
            transition
            "
          >
            संपर्क करें
          </Link>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* BRAND */}
          <div>
            <div className="text-2xl font-semibold tracking-tight text-[var(--text-main)] mb-4">
              Nimod<span className="text-[var(--accent-primary)]">Coop</span>
            </div>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-[260px]">
              सहकारिता के माध्यम से ग्रामीण समृद्धि, वित्तीय सुरक्षा और सामूहिक विकास की ओर एक मजबूत कदम।
            </p>

            <div className="flex gap-3">
              {["FB","IG","YT"].map((s,i)=>(
                <div
                  key={i}
                  className="
                  w-10 h-10 rounded-full
                  border border-[var(--border-color)]
                  flex items-center justify-center
                  text-xs font-semibold
                  text-[var(--text-muted)]
                  hover:text-[var(--accent-primary)]
                  hover:border-[var(--accent-primary)]
                  transition
                  cursor-pointer
                  ">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-[var(--text-main)] text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              मुख्य लिंक <ArrowUpRight size={16}/>
            </h4>

            <ul className="space-y-3 text-[var(--text-muted)] text-sm">
              <li><Link href="#about" className="hover:text-[var(--accent-primary)] transition">संस्था परिचय</Link></li>
              <li><Link href="#services" className="hover:text-[var(--accent-primary)] transition">सेवाएं</Link></li>
              <li><Link href="#projects" className="hover:text-[var(--accent-primary)] transition">परियोजनाएं</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--accent-primary)] transition">संपर्क</Link></li>
            </ul>
          </div>

          {/* COMPLIANCE */}
          <div>
            <h4 className="text-[var(--text-main)] text-sm tracking-widest uppercase mb-6">
              अनुपालन
            </h4>

            <ul className="space-y-3 text-[var(--text-muted)] text-sm">
              <li>राज्य सहकारिता अधिनियम</li>
              <li>सरकारी ऑडिट प्रणाली</li>
              <li>पारदर्शी प्रशासन</li>
              <li>सदस्य हित सुरक्षा</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[var(--text-main)] text-sm tracking-widest uppercase mb-6">
              संपर्क
            </h4>

            <ul className="space-y-4 text-[var(--text-muted)] text-sm">

              <li className="flex gap-3">
                <MapPin size={18} className="text-[var(--accent-primary)] mt-1"/>
                <span>निमोद, डीडवाना-कुचामन राजस्थान</span>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-[var(--accent-primary)]"/>
                info@nimodbank.in
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-[var(--accent-primary)]"/>
                +91 96026 12688
              </li>

            </ul>
          </div>

        </div>

        {/* divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-8"/>

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-[var(--text-muted)] text-xs">
            © {year} निमोद ग्राम सेवा सहकारी समिति • All rights reserved
          </p>

          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            Crafted for digital rural future
          </div>

        </div>

      </div>
    </footer>
  );
}
