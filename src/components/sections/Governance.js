import { Users, Gavel, ShieldCheck, FileSignature } from "lucide-react";

export default function Governance() {
  const governanceItems = [
    {
      icon: Users,
      title: "प्रबंधन समिति",
      text: "समिति के समस्त निर्णय 12 सदस्यीय निर्वाचित प्रबंधन समिति द्वारा सामूहिक रूप से लिए जाते हैं, जिससे पारदर्शिता एवं जवाबदेही सुनिश्चित होती है।"
    },
    {
      icon: Gavel,
      title: "लोकतांत्रिक ढांचा",
      text: "राज्य सहकारिता अधिनियम के तहत हर 5 वर्ष में निष्पक्ष चुनाव। सभी सदस्यों को समान मताधिकार और बोलने का हक।"
    },
    {
      icon: ShieldCheck,
      title: "महिला सहभागिता",
      text: "प्रबंधन और संचालन में महिलाओं के लिए आरक्षित सीटें और सक्रिय भागीदारी। समावेशी विकास हमारा मुख्य लक्ष्य है।"
    }
  ];

  return (
    <section id="governance" className="py-24 bg-premium-slate border-y border-white/5 relative">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        {/* Header: मोबाइल पर साफ़ दिखने वाला टेक्स्ट */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            प्रबंधन एवं <span className="text-premium-emerald">शासन</span>
          </h2>
          <p className="text-lg text-white/60">
            निमोद ग्राम सेवा सहकारी समिति का संचालन लोकतांत्रिक सिद्धांतों और पारदर्शी नियमों के अंतर्गत किया जाता है।
          </p>
        </div>

        {/* Governance Cards: Premium & GPU-Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {governanceItems.map((item, index) => (
            <div 
              key={index} 
              className="premium-card relative p-8 rounded-3xl group transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top Accent Line: CSS-only, zero lag */}
              <div className="absolute top-0 left-0 w-full h-1 bg-premium-emerald scale-x-0 group-hover:scale-x-50 transition-transform duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald mb-6 group-hover:bg-premium-emerald group-hover:text-premium-black transition-all duration-500">
                <item.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-premium-emerald transition-colors">
                {item.title}
              </h3>

              <p className="text-white/60 leading-relaxed mb-8 text-sm">
                {item.text}
              </p>

              {/* Verified Badge: प्रोफेशनल फील के लिए */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-premium-emerald/5 border border-premium-emerald/10 text-premium-emerald text-[0.65rem] font-bold uppercase tracking-wider">
                <FileSignature size={12} />
                Verified System
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators: मोबाइल पर साफ़ विजिबिलिटी */}
        <div className="mt-16 pt-10 border-t border-dashed border-white/10 flex flex-wrap justify-center gap-6 md:gap-12">
          {["Democratic Control", "Member Economic Participation", "Autonomy & Independence"].map((text, i) => (
            <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-default">
              <div className="w-2 h-2 rounded-full bg-premium-emerald"></div>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
