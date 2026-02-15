import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Governance() {
  // Safe destructuring
  const governanceData = content?.governance || {};
  const { id, title, span, description, cards } = governanceData;

  return (
    <section id={id || "governance"} className="py-24 bg-white overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header - Clean Light Variant */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="light"
        />

        {/* Governance Grid - Mapping 'cards' safely */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards?.map((card, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <BentoCard
                title={card.title}
                // Professional Border Styles
                className="h-full border-border-light hover:border-premium-forest/30 group bg-white hover:bg-premium-forest/5 transition-colors duration-500"
              >
                <div className="flex flex-col h-full">
                  <p className="text-ui-soft leading-relaxed flex-1 text-[0.95rem]">
                    {/* Using 'card.text' from new content structure */}
                    {card.text}
                  </p>
                  
                  {/* Verified Badge */}
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-premium-forest/10 text-premium-forest text-[0.75rem] font-bold uppercase tracking-wider w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-premium-forest animate-pulse"></span>
                    Verified System
                  </div>
                </div>
              </BentoCard>
            </div>
          ))}
        </div>

        {/* Bottom Verification Strip (Visual Trust Element) */}
        <div className="mt-16 pt-8 border-t border-dashed border-gray-200 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold">Democratic Control</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold">Member Economic Participation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold">Autonomy & Independence</span>
          </div>
        </div>

      </div>
    </section>
  );
}
