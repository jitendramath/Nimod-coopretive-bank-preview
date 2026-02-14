import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Services() {
  const { id, title, span, description, cards } = content.services;

  return (
    <section id={id} className="py-24 bg-brand-white">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
        />

        {/* Services Grid (Auto-fit logic handled by Tailwind Grid) */}
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
