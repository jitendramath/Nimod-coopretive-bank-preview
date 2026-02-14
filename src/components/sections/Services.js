import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Services() {
  const { id, title, span, description, cards } = content.services;

  return (
    <section id={id} className="py-24 bg-premium-charcoal relative">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        <SectionHeader title={title} span={span} description={description} variant="dark" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* यहाँ 'cards' का उपयोग किया गया है और 'text' प्रॉपर्टी का */}
          {cards?.map((card, index) => (
            <BentoCard key={index} title={card.title} className="bg-white/5 border-white/10">
              <p className="text-white/70">{card.text}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
