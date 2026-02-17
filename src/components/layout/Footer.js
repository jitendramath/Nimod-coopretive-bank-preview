"use client";

import Link from "next/link";
import { Heart, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-[#040405] border-t border-premium-border pt-20 pb-10 transition-colors duration-500">

      {/* 🟢 Luxury Emerald Glow (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[180px] w-[500px] h-[500px] bg-premium-accent/10 blur-[200px] pointer-events-none"></div>

      {/* 🔵 Subtle Blue Glow (Dynamic) */}
      <div className="absolute right-[-120px] bottom-0 w-[300px] h-[300px] bg-blue-400/5 dark:bg-cyan-400/8 blur-[180px] pointer-events-none"></div>

      {/* 🕸 Texture Overlay (Smart Switch) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] 
        bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] 
        dark:bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] 
        bg-[size:38px_38px]" 
      />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight text-premium-text dark:text-white dark:drop-shadow-[0_0_20px_rgba(58,244,183,0.25)] transition-colors">
              Nimod<span className="text-premium-accent">Coop</span>.
            </div>
            <p className="text-premium-muted text-sm leading-relaxed max-w-[240px]">
              "सहकारिता के माध्यम से ग्रामीण समृद्धि, वित्तीय स्वतंत्रता और सामूहिक उन्नति का एक विश्वसनीय प्रयास।"
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {["FB", "X"].map((social, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-premium-surface border border-premium-border shadow-sm flex items-center justify-center text-premium-muted hover:text-premium-accent hover:border-premium-accent hover:shadow-[0_0_15px_var(--accent-glow)] transition-all cursor-pointer">
                  <span className="text-xs font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Main Links */}
          <div>
            <h4 className="text-premium-text font-bold mb-6 flex items-center gap-2">
              मुख्य क्षेत्र <ArrowUpRight size={14} className="text-premium-accent" />
            </h4>
            <ul className="space-y-4 text-sm text-premium-muted">
              <li><Link href="/services" className="hover:text-premium-accent transition-colors">कृषि एवं वित्त सेवाएं</Link></li>
              <li><Link href="/projects" className="hover:text-premium-accent transition-colors">ऊर्जा एवं भंडारण</Link></li>
              <li><Link href="/services#shg" className="hover:text-premium-accent transition-colors">महिला सशक्तिकरण</Link></li>
              <li><Link href="/about" className="hover:text-premium-accent transition-colors">ग्रामीण विकास पहल</Link></li>
            </ul>
          </div>

          {/* Column 3: Compliance */}
          <div>
            <h4 className="text-premium-text font-bold mb-6">अनुपालन</h4>
            <ul className="space-y-4 text-sm text-premium-muted">
              <li className="hover:text-premium-text transition-colors cursor-default">राज्य सहकारिता अधिनियम</li>
              <li className="hover:text-premium-text transition-colors cursor-default">नियमित वैधानिक ऑडिट</li>
              <li className="hover:text-premium-text transition-colors cursor-default">पारदर्शी प्रशासन</li>
              <li className="hover:text-premium-text transition-colors cursor-default">सदस्य हित संरक्षण</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-premium-text font-bold mb-6">संपर्क सूत्र</h4>
            <ul className="space-y-4 text-sm text-premium-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-premium-accent shrink-0" />
                <span>निमोद, डीडवाना-कुचामन राजस्थान</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-premium-accent shrink-0" />
                <span>info@nimodbank.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-premium-accent shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-premium-border to-transparent mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-premium-muted text-[0.75rem] font-medium tracking-wide text-center md:text-left">
            © {currentYear} निमोद ग्राम सेवा सहकारी समिति | सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-2 text-[0.8rem] font-semibold">
            <span className="text-premium-muted">Designed with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span className="text-premium-muted">by</span>
            <span className="text-premium-text hover:text-premium-accent transition-colors cursor-pointer tracking-tighter uppercase">
              JSS Originals
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
