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
    <section id="about" className="py-24 bg-premium-slate relative overflow-hidden">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            संस्था का <span className="text-premium-emerald">परिचय</span>
          </h2>
          <div className="h-1.5 w-24 bg-premium-emerald rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image Section - विजुअल वेट कम किया गया है */}
          <div className="relative h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-premium-charcoal via-transparent to-transparent z-10 opacity-60"></div>
            
            <Image 
              src="/images/nimod-gate.jpg" 
              alt="Nimod Cooperative Gate" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={false}
            />
            
            <div className="absolute bottom-8 left-8 z-20 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-premium-emerald"></span>
              </span>
              <span className="text-white font-medium text-sm tracking-wide">2009 से सेवारत</span>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <p className="text-lg text-white/80 leading-relaxed">
              <span className="text-premium-emerald font-bold">निमोद ग्राम सेवा सहकारी समिति</span> एक बहुउद्देश्यीय प्राथमिक ग्राम सेवा सहकारी संस्था है जो ग्रामीण क्षेत्र में वित्तीय, कृषि, ऊर्जा एवं सामाजिक विकास की आवश्यकताओं को पूरा करती है।
            </p>

            {/* Feature List: 'premium-card' का इस्तेमाल जो Performance-friendly है */}
            <div className="grid gap-5">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="premium-card p-6 rounded-2xl flex gap-5 items-start"
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
