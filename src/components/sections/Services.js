import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Services() {
  // Safe destructuring to prevent crashes if data is missing
  const servicesData = content?.services || {};
  const { id, title, span, description, cards } = servicesData;

  return (
    <section id={id || "services"} className="py-24 bg-premium-charcoal relative overflow-hidden">
      
      {/* Background Ambient Glow (Premium Feel) */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-premium-emerald/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-premium-mint/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1180px] mx-auto relative z-10">
        
        {/* Header - Dark Variant */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="dark"
        />

        {/* Services Grid - Mapped safely from 'cards' */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards?.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              // Dark Mode Glassmorphism Styles
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-premium-emerald/40 group h-full transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full justify-between">
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-[0.95rem]">
                  {/* Using 'card.text' as per your new content.js structure */}
                  {card.text}
                </p>
                
                {/* Visual Arrow Indicator */}
                <div className="pt-6 flex items-center text-premium-emerald font-medium text-[0.85rem] opacity-60 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  अधिक जानें 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

      </div>
    </section>
  );
}
