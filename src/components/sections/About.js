import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Target,
      title: "हमारा दृष्टिकोण",
      text: "ग्रामीण समाज को वित्तीय रूप से सशक्त, सामाजिक रूप से संगठित एवं आर्थिक रूप से आत्मनिर्भर बनाना।"
    },
    {
      icon: Lightbulb,
      title: "हमारा मिशन",
      text: "सहकारी सिद्धांतों पर आधारित पारदर्शी, उत्तरदायी एवं दीर्घकालीन विकास मॉडल स्थापित करना।"
    },
    {
      icon: Users,
      title: "मूल्य एवं सिद्धांत",
      text: "विश्वास, पारदर्शिता, सहभागिता और सामूहिक उन्नति के साथ ग्रामीण विकास को गति देना।"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0b0b0f] border-t border-white/5">

  {/* left emerald glow */}
  <div className="absolute -left-[120px] top-40 w-[300px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none"></div>

  {/* right soft glow */}
  <div className="absolute right-[-140px] bottom-20 w-[320px] h-[320px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

  {/* bottom blend */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            संस्था का <span className="text-premium-emerald">परिचय</span>
          </h2>
          <div className="h-1.5 w-24 bg-premium-emerald rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
  
  <div className="relative w-full">
    <Image 
      src="/images/nimod-gate.jpg"
      alt="Nimod Cooperative Gate"
      width={1200}
      height={800}
      className="w-full h-auto md:h-[500px] object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width:768px) 100vw, 50vw"
      priority={false}
    />
  </div>

  {/* gradient overlay only desktop */}
  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-premium-charcoal via-transparent to-transparent z-10 opacity-60"></div>
            
            
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              <span className="text-premium-emerald font-bold">बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद</span> एक बहुउद्देश्यीय प्राथमिक ग्राम सेवा सहकारी संस्था है जो ग्रामीण क्षेत्र में वित्तीय, कृषि, ऊर्जा एवं सामाजिक विकास की आवश्यकताओं को पूरा करती है।
            </p>

            {/* Feature List: 'premium-card' का इस्तेमाल जो Performance-friendly है */}
            <div className="grid gap-5">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="premium-card p-6 rounded-2xl flex gap-5 items-start hover:border-emerald-400/30 hover:shadow-[0_0_40px_rgba(58,244,183,0.12)] transition-all duration-500"
                >
                  <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
