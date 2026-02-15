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
    <section id="impact" className="py-24 relative overflow-hidden bg-[#050507] border-t border-white/5">

  {/* center luxury radial glow */}
  <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] pointer-events-none"></div>

  {/* right soft glow */}
  <div className="absolute right-[-140px] top-[50%] w-[300px] h-[300px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

  {/* bottom blend */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>
      {/* REAL FIX: भारी बैकग्राउंड पैटर्न्स और मास्क हटा दिए गए हैं ताकि स्क्रॉलिंग स्मूथ रहे */}

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            सामाजिक <span className="text-premium-emerald">प्रभाव</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            समिति की गतिविधियों का प्रत्यक्ष प्रभाव ग्रामीण परिवारों की आर्थिक स्थिति एवं जीवन स्तर पर स्पष्ट रूप से दिखाई देता है।
          </p>
        </div>

        {/* Stats Grid: Optimized for mobile GPU */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="premium-card p-8 rounded-3xl text-center group transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_0_50px_rgba(58,244,183,0.12)]"
  >
              {/* Icon Container */}
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${stat.bg} ${stat.color} shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={32} />
              </div>

              {/* Stat Values */}
              <h3 className={`text-4xl font-bold mb-2 ${stat.color} drop-shadow-[0_0_20px_rgba(58,244,183,0.25)]`}>
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
