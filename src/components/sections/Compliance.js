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
    <section id="compliance" className="py-24 relative overflow-hidden bg-[#05060a] border-t border-white/5">

  {/* subtle emerald secure glow */}
  <div className="absolute left-1/2 -translate-x-1/2 top-[25%] w-[420px] h-[420px] bg-emerald-500/6 blur-[180px] pointer-events-none"></div>

  {/* soft blue trust glow */}
  <div className="absolute right-[-120px] top-[40%] w-[300px] h-[300px] bg-blue-400/8 blur-[160px] pointer-events-none"></div>

  {/* subtle security grid texture */}
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"></div>

  {/* bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header: साफ़ और सुथरा हेडर */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            अनुपालन एवं <span className="text-premium-emerald">पारदर्शिता</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            हमारा मूल मंत्र 'विश्वास' है। हम सुनिश्चित करते हैं कि हर प्रक्रिया नियमसंगत और पारदर्शी हो।
          </p>
        </div>

        {/* Compliance Grid: 'premium-card' का इस्तेमाल जो GPU-Optimized है */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {complianceItems.map((item, index) => (
            <div 
              key={index} 
         className="premium-card p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_25px_70px_rgba(0,0,0,0.75)]"
           >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-premium-emerald/10 shadow-[0_0_25px_rgba(58,244,183,0.15)] flex items-center justify-center text-premium-emerald group-hover:scale-110 group-hover:bg-premium-emerald group-hover:text-premium-black transition-all duration-500">
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

        {/* Security Seals / Trust Badges: मोबाइल पर साफ़ और तेज़ रेंडर होने वाले बैज */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8">
           {["RBI Guidelines Followed", "ISO 9001:2015 Standards", "Secure SSL Encryption", "Zero-Tolerance Fraud Policy"].map((badge, i) => (
             <div key={i} className="px-5 py-2.5 rounded-full border border-white/10 text-white/40 shadow-[0_0_20px_rgba(0,0,0,0.4)] text-[10px] font-bold uppercase tracking-widest hover:text-premium-emerald hover:border-premium-emerald/50 hover:bg-premium-emerald/5 transition-all duration-300 cursor-default">
               {badge}
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
