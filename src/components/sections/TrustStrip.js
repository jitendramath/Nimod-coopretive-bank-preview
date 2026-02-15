import { ShieldCheck, Scale, Building2, FileCheck } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    { 
      icon: Building2, 
      text: "पंजीकृत संस्था (Reg. 2009)" 
    },
    { 
      icon: ShieldCheck, 
      text: "RBI दिशा-निर्देशों का पालन" 
    },
    { 
      icon: FileCheck, 
      text: "नियमित वैधानिक ऑडिट" 
    },
    { 
      icon: Scale, 
      text: "100% पारदर्शी प्रशासन" 
    },
  ];

  return (
    <section className="w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-4 gap-x-8 py-6 px-6">
          
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default select-none"
            >
              <item.icon 
                size={20} 
                className="text-premium-emerald group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest group-hover:text-premium-mint transition-colors">
                {item.text}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
