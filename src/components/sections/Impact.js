import { Users, Heart, TrendingUp, IndianRupee } from "lucide-react";

export default function Impact() {
  const stats = [
    {
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      desc: "सक्रिय रूप से जुड़े हुए और लाभान्वित",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: Heart,
      value: "1200+",
      label: "परिवार जुड़े",
      desc: "प्रत्यक्ष और अप्रत्यक्ष रूप से सशक्त",
      color: "text-rose-400",
      bg: "bg-rose-400/10"
    },
    {
      icon: TrendingUp,
      value: "108+",
      label: "SHG समूह",
      desc: "महिला सशक्तिकरण की दिशा में पहल",
      color: "text-premium-emerald",
      bg: "bg-premium-emerald/10"
    },
    {
      icon: IndianRupee,
      value: "₹3 Cr+",
      label: "ऋण वितरण",
      desc: "ग्रामीण अर्थव्यवस्था को मजबूती",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-premium-charcoal relative overflow-hidden">
      
      {/* REAL FIX: भारी बैकग्राउंड पैटर्न्स और मास्क हटा दिए गए हैं ताकि स्क्रॉलिंग स्मूथ रहे */}

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            सामाजिक <span className="text-premium-emerald">प्रभाव</span>
          </h2>
          <p className="text-lg text-white/60">
            समिति की गतिविधियों का प्रत्यक्ष प्रभाव ग्रामीण परिवारों की आर्थिक स्थिति एवं जीवन स्तर पर स्पष्ट रूप से दिखाई देता है।
          </p>
        </div>

        {/* Stats Grid: Optimized for mobile GPU */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="premium-card p-8 rounded-3xl text-center group transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={32} />
              </div>

              {/* Stat Values */}
              <h3 className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </h3>
              
              <div className="text-lg font-bold text-white mb-2">
                {stat.label}
              </div>
              
              <p className="text-sm text-white/50 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
