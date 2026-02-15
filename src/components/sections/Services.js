import { Sprout, Tractor, Milk, Warehouse, ShoppingBasket, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Sprout,
      title: "कृषि ऋण एवं वित्त",
      text: "अल्पकालीन एवं मध्यकालीन कृषि ऋण, फसली ऋण, बचत योजनाएं एवं वित्तीय सहायता।"
    },
    {
      icon: Tractor,
      title: "कृषि आदान एवं उपकरण",
      text: "उन्नत बीज, उर्वरक, कीटनाशक एवं आधुनिक कृषि उपकरणों की उपलब्धता।"
    },
    {
      icon: Milk,
      title: "दुग्ध संग्रह एवं विपणन",
      text: "दुग्ध उत्पादकों से संगठित दुग्ध संग्रह, गुणवत्ता नियंत्रण एवं विपणन सहायता।"
    },
    {
      icon: Warehouse,
      title: "भंडारण एवं गोदाम",
      text: "2000 मीट्रिक टन क्षमता का भंडारण प्रबंधन, खाद-बीज संग्रह एवं सुरक्षित स्टॉक।"
    },
    {
      icon: ShoppingBasket,
      title: "उपभोक्ता स्टोर",
      text: "दैनिक उपयोग की वस्तुएं, कृषि सामग्री एवं आवश्यक उपभोक्ता उत्पाद उचित मूल्य पर।"
    },
    {
      icon: Users,
      title: "महिला स्वयं सहायता",
      text: "महिला सशक्तिकरण हेतु स्वयं सहायता समूहों का गठन, प्रशिक्षण एवं वित्तीय सहयोग।"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050507] border-t border-white/5">

  {/* top emerald glow */}
  <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none"></div>

  {/* left subtle glow */}
  <div className="absolute left-[-120px] top-[40%] w-[280px] h-[280px] bg-cyan-400/10 blur-[130px] pointer-events-none"></div>

  {/* section bottom blend */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header: साफ़ और सुथरा हेडर */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            प्रमुख <span className="text-premium-emerald">सेवाएं</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            निमोद ग्राम सेवा सहकारी समिति ग्रामीण आवश्यकताओं को ध्यान में रखते हुए बहु-आयामी सेवाएं प्रदान करती है।
          </p>
        </div>

        {/* Services Grid: 'premium-card' का इस्तेमाल जो GPU पर बोझ नहीं डालता */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="premium-card p-8 rounded-3xl group flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
  >
              {/* Icon Container: एनिमेटेड और प्रीमियम */}
              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 shadow-[0_0_30px_rgba(58,244,183,0.15)] flex items-center justify-center text-premium-emerald mb-6 group-hover:bg-premium-emerald group-hover:text-premium-black transition-all duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-premium-emerald transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                {service.text}
              </p>

              {/* Action Link: मोबाइल पर आसानी से दिखने वाला */}
              <div className="mt-auto flex items-center text-premium-emerald text-sm font-bold tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                अधिक जानें <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
