import Link from "next/link";
import { Heart, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
<footer className="relative overflow-hidden bg-[#040405] border-t border-white/5 pt-20 pb-10">

  {/* luxury emerald glow */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-[180px] w-[500px] h-[500px] bg-emerald-500/10 blur-[200px] pointer-events-none"></div>

  {/* subtle blue glow */}
  <div className="absolute right-[-120px] bottom-0 w-[300px] h-[300px] bg-cyan-400/8 blur-[180px] pointer-events-none"></div>

  {/* texture overlay */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:38px_38px] pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(58,244,183,0.25)]">
              Nimod<span className="text-premium-emerald">Coop</span>.
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[240px]">
              "सहकारिता के माध्यम से ग्रामीण समृद्धि, वित्तीय स्वतंत्रता और सामूहिक उन्नति का एक विश्वसनीय प्रयास।"
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-white/40 hover:text-premium-emerald hover:drop-shadow-[0_0_10px_rgba(58,244,183,0.5)] hover:border-premium-emerald transition-all cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-premium-emerald hover:drop-shadow-[0_0_10px_rgba(58,244,183,0.5)] hover:border-premium-emerald transition-all cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              मुख्य क्षेत्र <ArrowUpRight size={14} className="text-premium-emerald" />
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="#services" className="hover:text-premium-emerald hover:drop-shadow-[0_0_10px_rgba(58,244,183,0.5)] transition-colors">कृषि एवं वित्त सेवाएं</Link></li>
              <li><Link href="#projects" className="hover:text-premium-emerald hover:drop-shadow-[0_0_10px_rgba(58,244,183,0.5)] transition-colors">ऊर्जा एवं भंडारण</Link></li>
              <li><Link href="#impact" className="hover:text-premium-emerald hover:drop-shadow-[0_0_10px_rgba(58,244,183,0.5)] transition-colors">महिला सशक्तिकरण</Link></li>
              <li><Link href="#governance" className="hover:text-premium-emerald hover:drop-shadow-[0_0_10px_rgba(58,244,183,0.5)] transition-colors">ग्रामीण विकास पहल</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">अनुपालन</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="hover:text-white transition-colors">राज्य सहकारिता अधिनियम</li>
              <li className="hover:text-white transition-colors">नियमित वैधानिक ऑडिट</li>
              <li className="hover:text-white transition-colors">पारदर्शी प्रशासन</li>
              <li className="hover:text-white transition-colors">सदस्य हित संरक्षण</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-6">संपर्क सूत्र</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-premium-emerald shrink-0 drop-shadow-[0_0_10px_rgba(58,244,183,0.5)]" />
                <span>निमोद, डीडवाना-कुचामन राजस्थान</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-premium-emerald shrink-0 drop-shadow-[0_0_10px_rgba(58,244,183,0.5)]" />
                <span>info@nimodbank.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-premium-emerald shrink-0 drop-shadow-[0_0_10px_rgba(58,244,183,0.5)]" />
                <span>+91 123 456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[0.75rem] font-medium tracking-wide text-center md:text-left">
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
