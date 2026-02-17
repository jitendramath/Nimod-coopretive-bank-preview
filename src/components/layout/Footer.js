import Link from "next/link";
import { Heart, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-premium-bg border-t border-premium-border pt-20 pb-10 transition-colors duration-500">

      {/* 🌌 Premium Ambient Glows (Dynamic) */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[180px] w-[500px] h-[500px] bg-premium-accent/10 blur-[200px] pointer-events-none transition-colors duration-500" />
      <div className="absolute right-[-120px] bottom-0 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-400/8 blur-[180px] pointer-events-none transition-colors duration-500" />

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(var(--premium-border)_1px,transparent_1px)] bg-[size:38px_38px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-8">
            <div className="text-2xl font-black tracking-tight text-premium-text transition-colors duration-500">
              Nimod<span className="text-premium-accent">Coop</span>.
            </div>
            <p className="text-premium-muted text-sm leading-relaxed max-w-[240px] font-medium transition-colors duration-500">
              "सहकारिता के माध्यम से ग्रामीण समृद्धि, वित्तीय स्वतंत्रता और सामूहिक उन्नति का एक विश्वसनीय प्रयास।"
            </p>
            <div className="flex gap-4">
              {["FB", "X"].map((social) => (
                <div key={social} className="w-11 h-11 rounded-full bg-premium-surface border border-premium-border flex items-center justify-center text-premium-muted hover:text-premium-accent hover:border-premium-accent transition-all cursor-pointer shadow-sm">
                  <span className="text-xs font-black">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-premium-text font-black mb-8 flex items-center gap-2 uppercase text-xs tracking-[0.2em] transition-colors duration-500">
              मुख्य क्षेत्र <ArrowUpRight size={16} className="text-premium-accent" />
            </h4>
            <ul className="space-y-4 text-sm text-premium-muted font-medium transition-colors duration-500">
              <li><Link href="#services" className="hover:text-premium-accent transition-colors">कृषि एवं वित्त सेवाएं</Link></li>
              <li><Link href="#projects" className="hover:text-premium-accent transition-colors">ऊर्जा एवं भंडारण</Link></li>
              <li><Link href="#impact" className="hover:text-premium-accent transition-colors">महिला सशक्तिकरण</Link></li>
              <li><Link href="#governance" className="hover:text-premium-accent transition-colors">ग्रामीण विकास पहल</Link></li>
            </ul>
          </div>

          {/* Column 3: Compliance */}
          <div>
            <h4 className="text-premium-text font-black mb-8 uppercase text-xs tracking-[0.2em] transition-colors duration-500">अनुपालन</h4>
            <ul className="space-y-4 text-sm text-premium-muted font-medium transition-colors duration-500">
              <li className="hover:text-premium-text transition-colors">राज्य सहकारिता अधिनियम</li>
              <li className="hover:text-premium-text transition-colors">नियमित वैधानिक ऑडिट</li>
              <li className="hover:text-premium-text transition-colors">पारदर्शी प्रशासन</li>
              <li className="hover:text-premium-text transition-colors">सदस्य हित संरक्षण</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-premium-text font-black mb-8 uppercase text-xs tracking-[0.2em] transition-colors duration-500">संपर्क सूत्र</h4>
            <ul className="space-y-5 text-sm text-premium-muted font-medium transition-colors duration-500">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-premium-accent shrink-0" />
                <span className="leading-snug">निमोद, डीडवाना-कुचामन राजस्थान - 341506</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-premium-accent shrink-0" />
                <span>info@nimodbank.in</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-premium-accent shrink-0" />
                <span>+91 96026 12688</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider with Subtle Gradient */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-premium-border to-transparent mb-10 opacity-50 transition-colors duration-500"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-premium-muted/50 text-[0.7rem] md:text-[0.75rem] font-bold tracking-widest uppercase text-center md:text-left transition-colors duration-500">
            © {currentYear} निमोद ग्राम सेवा सहकारी समिति | सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-2.5 text-[0.75rem] font-bold tracking-tight">
            <span className="text-premium-muted/40 uppercase">Designed with</span>
            <Heart size={16} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span className="text-premium-muted/40 uppercase">by</span>
            <span className="text-premium-text hover:text-premium-accent transition-colors cursor-pointer tracking-widest uppercase">
              JSS Originals
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
