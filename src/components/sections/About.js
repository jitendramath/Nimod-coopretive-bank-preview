import Image from "next/image";
import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  // Safe destructuring to prevent crashes
  const aboutData = content?.about || {};
  const { id, title, span, description, cards } = aboutData;

  return (
    <section id={id || "about"} className="py-24 bg-premium-slate overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header */}
        <SectionHeader 
          title={title || "संस्था का"} 
          span={span || "परिचय"} 
          variant="light" 
        />

        {/* Main Content: Image & Description */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Image Container */}
          <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl reveal group">
            <div className="absolute inset-0 bg-premium-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            {/* Note: Ensure you have an image at /images/nimod-gate.jpg or change this path */}
            <Image 
              src="/images/nimod-gate.jpg" 
              alt="Nimod Cooperative Bank" 
              fill 
              className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
              priority 
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 reveal delay-200">
            {/* Mapping over the description array safely */}
            {description?.map((para, index) => (
              <p key={index} className="text-[1.1rem] text-ui-soft leading-relaxed">
                {para}
              </p>
            ))}
            
            {/* Trust Badge / Strip Integration (Optional Visual Cue) */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-premium-forest animate-pulse"></span>
                <span className="text-sm font-semibold text-premium-forest">2009 से सेवारत</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards (New Section based on your content.js) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-300">
          {cards?.map((card, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2rem] bg-white border border-white/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-[1.25rem] font-bold text-ui-main mb-3">
                {card.title}
              </h4>
              <p className="text-ui-soft text-[0.95rem] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
