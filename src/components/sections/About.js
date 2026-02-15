import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  // Hardcoded Data for Zero Errors
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
        <div className="mb-16 max-w-3xl reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            संस्था का <span className="text-premium-emerald">परिचय</span>
          </h2>
          <div className="h-1.5 w-24 bg-premium-emerald rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image with Premium Border */}
          <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl reveal group">
             {/* Gradient Overlay for Text Readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-premium-charcoal via-transparent to-transparent z-10 opacity-60"></div>
            
            {/* Placeholder Image - Ensure you have this file in public/images folder */}
            <Image 
              src="/images/nimod-gate.jpg" 
              alt="Nimod Cooperative Gate" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Floating Live Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-premium-emerald"></span>
              </span>
              <span className="text-white font-medium text-sm tracking-wide">2009 से सेवारत</span>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8 reveal delay-200">
            <p className="text-lg text-white/80 leading-relaxed">
              <span className="text-premium-emerald font-bold">निमोद ग्राम सेवा सहकारी समिति</span> एक बहुउद्देश्यीय प्राथमिक ग्राम सेवा सहकारी संस्था है जो ग्रामीण क्षेत्र में वित्तीय, कृषि, ऊर्जा एवं सामाजिक विकास की आवश्यकताओं को एकीकृत दृष्टिकोण से पूरा करती है।
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              समिति का कार्यक्षेत्र केवल वित्तीय लेन-देन तक सीमित नहीं है, बल्कि कृषि उत्पादन, ऊर्जा आत्मनिर्भरता, भंडारण व्यवस्था, महिला सशक्तिकरण एवं उपभोक्ता सुविधाओं तक विस्तारित है।
            </p>

            {/* Feature List (Vision/Mission Cards) */}
            <div className="grid gap-5 mt-8">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-premium-emerald/30 transition-all duration-300 group flex gap-5 items-start"
                >
                  <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald group-hover:scale-110 transition-transform shrink-0">
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
