import { FileCheck, Shield, BookOpen, Lock } from "lucide-react";

export default function Compliance() {
  const complianceItems = [
    {
      icon: BookOpen,
      title: "नियम एवं अधिनियम",
      text: "समिति का संचालन राजस्थान सहकारी सोसाइटी अधिनियम, 2001 और नियम 2003 के अंतर्गत पूर्णतः वैधानिक रूप से किया जाता है।"
    },
    {
      icon: FileCheck,
      title: "ऑडिट एवं निरीक्षण",
      text: "सहकारिता विभाग द्वारा नियुक्त ऑडिटर्स द्वारा प्रतिवर्ष वैधानिक ऑडिट (Statutory Audit) संपन्न। 100% अनुपालन रिकॉर्ड।"
    },
    {
      icon: Shield,
      title: "धन की सुरक्षा",
      text: "सदस्यों की जमा राशि और निवेश को सुरक्षित रखने के लिए कड़े वित्तीय अनुशासन और रिज़र्व फंड की व्यवस्था।"
    },
    {
      icon: Lock,
      title: "डेटा गोपनीयता",
      text: "बैंकिंग लेन-देन और व्यक्तिगत जानकारी की सुरक्षा के लिए आधुनिक डिजिटल सुरक्षा मानकों का पालन।"
    }
  ];

  return (
    <section id="compliance" className="py-24 bg-premium-charcoal relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-premium-slate/50 to-premium-charcoal pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            अनुपालन एवं <span className="text-premium-emerald">पारदर्शिता</span>
          </h2>
          <p className="text-lg text-white/60">
            हमारा मूल मंत्र 'विश्वास' है। हम सुनिश्चित करते हैं कि हर प्रक्रिया नियमसंगत और पारदर्शी हो।
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {complianceItems.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-premium-emerald/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={24} />
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-premium-emerald transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Seals / Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8 reveal delay-200">
           {["RBI Guidelines Followed", "ISO 9001:2015 Standards", "Secure SSL Encryption", "Zero-Tolerance Fraud Policy"].map((badge, i) => (
             <div key={i} className="px-6 py-3 rounded-full border border-dashed border-white/10 text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white hover:border-premium-emerald hover:bg-premium-emerald/5 transition-all duration-300 cursor-default">
               {badge}
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
