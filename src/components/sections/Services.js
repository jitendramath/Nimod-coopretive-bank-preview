import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Services() {
  const { id, title, span, description, items } = content.services;

  return (
    <section id={id} className="py-24 bg-premium-charcoal relative overflow-hidden">
      
      {/* Subtle Glow Effect in Background */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-premium-emerald/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1180px] mx-auto relative z-10">
        
        {/* Header - Using the Dark Variant */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="dark"
        />

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((service, index) => (
            <BentoCard
              key={index}
              title={service.title}
              // Dark Mode Custom Styling for BentoCard
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-premium-emerald/50 group"
            >
              <div className="space-y-4">
                <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Visual Indicator */}
                <div className="pt-4 flex items-center text-premium-emerald font-medium text-[0.9rem] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  अधिक जानकारी 
                  <span className="ml-2">→</span>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

      </div>
    </section>
  );
}
