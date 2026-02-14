import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Projects() {
  const { id, title, span, description, cards } = content.projects;

  return (
    <section id={id} className="py-24 bg-brand-main">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
        />

        {/* Projects Grid 
            CSS: repeat(auto-fit, minmax(260px, 1fr)) 
            Tailwind Equivalent below:
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {cards.map((card, index) => (
            <BentoCard key={index} title={card.title}>
              {card.text}
            </BentoCard>
          ))}
        </div>

      </div>
    </section>
  );
}
