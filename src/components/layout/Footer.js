"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-8 bg-gray-50 dark:bg-[#030303] border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">

      {/* 🕸️ Premium Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* 🌌 Luxury Background Glow System */}
      <div className="absolute pointer-events-none inset-0 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full transform-gpu transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-cyan-500/10 blur-[150px] rounded-full transform-gpu transition-colors duration-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 💎 TOP FLOATING CTA BAR */}
        <div className="relative mb-20 p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-200/50 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group transition-colors duration-500">
          
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              समिति के इकोसिस्टम से जुड़ें
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
              सदस्यता, ऋण (Loan), बैंकिंग या कृषि सुविधाओं की जानकारी के लिए आज ही संपर्क करें।
            </p>
          </div>

          <Link
            href="/contact"
            className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 text-white font-bold text-base hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.3)] whitespace-nowrap"
          >
            संपर्क करें
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* 🔥 MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">

          {/* 1. BRAND & LOGO SECTION */}
          <div className="flex flex-col items-start">
            
            <Link href="/" className="group block mb-6">
              {/* ☀️ Light Theme Logo (Black Text) */}
              <Image
                src="/images/logo-dark.png" 
                alt="MPPacs Nimod Logo"
                width={200}
                height={50}
                className="w-auto h-9 md:h-11 block dark:hidden transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {/* 🌙 Dark Theme Logo (White Text) */}
              <Image
                src="/images/logo-light.png" 
                alt="MPPacs Nimod Logo"
                width={200}
                height={50}
                className="w-auto h-9 md:h-11 hidden dark:block transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              ग्रामीण अर्थव्यवस्था को नई दिशा देते हुए — किसानों के लिए वित्तीय सुरक्षा, आधुनिक कृषि संसाधन और पारदर्शी बैंकिंग सेवाएं।
            </p>

            {/* Social Icons (Premium Glass Look) */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all duration-300 shadow-sm"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-base font-bold mb-6">
              महत्वपूर्ण लिंक्स
            </h4>
            <ul className="space-y-4">
              {[
                { name: "संस्था परिचय", href: "/about" },
                { name: "बैंकिंग सेवाएं", href: "/services" },
                { name: "हमारी परियोजनाएं", href: "/projects" },
                { name: "संपर्क करें", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-emerald-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. FACILITIES & ECOSYSTEM */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-base font-bold mb-6">
              हमारा इकोसिस्टम
            </h4>
            <ul className="space-y-4">
              {[
                "डिजिटल मिनी बैंकिंग",
                "मोबाइल वैन सुपरमार्केट",
                "2000MT वेयरहाउस",
                "कृषि मशीनरी (किराये पर)",
                "गर्ल्स लाइब्रेरी"
              ].map((item, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT DETAILS */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-base font-bold mb-6">
              संपर्क सूत्र
            </h4>
            <ul className="space-y-5">
              
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white font-bold text-sm mb-1">प्रधान कार्यालय</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                    बस स्टैंड, निमोद, <br />
                    कुचामन-डीडवाना, राजस्थान 341506
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  +91 96026 12688
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  info@nimodbank.in
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* ➖ DIVIDER LINE */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-8" />

        {/* 🏁 BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-500 text-xs md:text-sm font-medium">
            © {year} बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-500 dark:text-gray-400 shadow-sm">
            Crafted for Digital Rural Future
          </div>
        </div>

      </div>
    </footer>
  );
}
