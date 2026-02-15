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
    <section id="services" className="py-24 bg-premium-charcoal relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-premium-emerald/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-premium-mint/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            प्रमुख <span className="text-premium-emerald">सेवाएं</span>
          </h2>
          <p className="text-lg text-white/60">
            निमोद ग्राम सेवा सहकारी समिति ग्रामीण आवश्यकताओं को ध्यान में रखते हुए बहु-आयामी सेवाएं प्रदान करती है।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-premium-emerald/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-premium-emerald/10 flex items-center justify-center text-premium-emerald mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-premium-emerald transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-sm mb-6">
                {service.text}
              </p>

              {/* Arrow Link */}
              <div className="flex items-center text-premium-emerald text-sm font-bold tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                अधिक जानें <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
