import { content } from "@/data/content";
import StatCard from "@/components/ui/StatCard";

export default function Hero() {
  const { title, subtitle, description, stats } = content.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-white">
      
      {/* --- Apple-Style Soft Blobs Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top-Right Blob */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-mint-100 rounded-full blur-[120px] opacity-60"></div>
        {/* Bottom-Left Blob */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-mint-100 rounded-full blur-[100px] opacity-50"></div>
        {/* Center Subtler Blob */}
        <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] bg-white rounded-full blur-[80px] opacity-80"></div>
      </div>

      <div className="w-[92%] max-w-[1180px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
          
          {/* Badge / Subtitle */}
          <span className="inline-block px-4 py-1.5 mb-6 text-[0.85rem] font-semibold tracking-wider uppercase text-mint-700 bg-mint-100 rounded-full reveal">
            {subtitle}
          </span>

          {/* Centered Main Title */}
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-ui-main mb-8 reveal delay-100">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word === "सहकारी" || word === "समिति" ? "text-mint-700" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-[clamp(1.1rem,2vw,1.3rem)] text-ui-soft leading-relaxed max-w-[700px] mb-16 reveal delay-200">
            {description}
          </p>

          {/* Stats Grid - Centered & Premium */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 w-full max-w-[800px] reveal delay-300">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                value={stat.value} 
                label={stat.label}
                className="bg-white/40 backdrop-blur-md border-white/60" 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
