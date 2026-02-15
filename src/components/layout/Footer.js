import Link from "next/link";
import { Heart, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-premium-black border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-premium-emerald/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Branding & Philosophy */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight text-white">
              Nimod<span className="text-premium-emerald">Coop</span>.
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[240px]">
              "सहकारिता के माध्यम से ग्रामीण समृद्धि, वित्तीय स्वतंत्रता और सामूहिक उन्नति का एक विश्वसनीय प्रयास।"
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders if needed */}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-premium-emerald hover:border-premium-emerald transition-all cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-premium-emerald hover:border-premium-emerald transition-all cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              मुख्य क्षेत्र <ArrowUpRight size={14} className="text-premium-emerald" />
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="#services" className="hover:text-premium-emerald transition-colors">कृषि एवं वित्त सेवाएं</Link></li>
              <li><Link href="#projects" className="hover:text-premium-emerald transition-colors">ऊर्जा एवं भंडारण</Link></li>
              <li><Link href="#impact" className="hover:text-premium-emerald transition-colors">महिला सशक्तिकरण</Link></li>
              <li><Link href="#governance" className="hover:text-premium-emerald transition-colors">ग्रामीण विकास पहल</Link></li>
            </ul>
          </div>

          {/* Column 3: Policy & Trust */}
          <div>
            <h4 className="text-white font-bold mb-6">अनुपालन</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="hover:text-white cursor-default transition-colors">राज्य सहकारिता अधिनियम</li>
              <li className="hover:text-white cursor-default transition-colors">नियमित वैधानिक ऑडिट</li>
              <li className="hover:text-white cursor-default transition-colors">पारदर्शी प्रशासन</li>
              <li className="hover:text-white cursor-default transition-colors">सदस्य हित संरक्षण</li>
            </ul>
          </div>

          {/* Column 4: Reach Out */}
          <div>
            <h4 className="text-white font-bold mb-6">संपर्क सूत्र</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-premium-emerald shrink-0" />
                <span>निमोद, डीडवाना-कुचामन राजस्थान</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-premium-emerald shrink-0" />
                <span>info@nimodbank.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-premium-emerald shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/30 text-[0.75rem] font-medium tracking-wide text-center md:text-left">
            © {currentYear} निमोद ग्राम सेवा सहकारी समिति | सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-2 text-[0.8rem] font-semibold">
            <span className="text-white/40">Designed with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span className="text-white/40">by</span>
            <span className="text-white hover:text-premium-emerald transition-colors cursor-pointer tracking-tighter uppercase">
              JSS Originals
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
