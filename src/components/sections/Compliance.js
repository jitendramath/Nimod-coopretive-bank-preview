import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Compliance() {
  const { id, title, span, description, cards } = content.compliance;

  return (
    <section id={id} className="py-24 bg-brand-main">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
        />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">
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
