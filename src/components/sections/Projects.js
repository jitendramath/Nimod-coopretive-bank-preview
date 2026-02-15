import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Projects() {
  // Safe destructuring for build safety
  const projectsData = content?.projects || {};
  const { id, title, span, description, cards } = projectsData;

  return (
    <section id={id || "projects"} className="py-24 bg-gradient-to-b from-white to-premium-mint/30 overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header - Light variant with Mint touch */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="light"
        />

        {/* Projects Grid - Updated to map 'cards' instead of 'items' */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards?.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              // Conditional styling: Alternating borders for visual interest
              className={`
                border-premium-mint/50 hover:border-premium-emerald transition-all duration-500 hover:shadow-lg
                ${index === 0 ? "md:col-span-2 bg-white/80" : "bg-white/60"}
              `}
            >
              <div className="space-y-4">
                <p className="text-ui-soft leading-relaxed text-[1rem]">
                  {/* Fixed: Using 'card.text' to match your new content structure */}
                  {card.text}
                </p>
                
                {/* Visual Accent: Progress Line */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-premium-mint to-transparent rounded-full"></div>
                  <span className="text-[0.75rem] font-bold uppercase tracking-widest text-premium-forest opacity-60">
                    Active Project
                  </span>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Bottom Tagline / Transition Strip Integration */}
        {content.transitionStrip && (
           <div className="mt-20 text-center reveal delay-300">
             <p className="text-[1.1rem] font-medium text-premium-forest/80 italic max-w-2xl mx-auto">
               "{content.transitionStrip}"
             </p>
           </div>
        )}

      </div>
    </section>
  );
}
