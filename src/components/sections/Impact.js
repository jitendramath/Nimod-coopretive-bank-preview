import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";

export default function Impact() {
  const { id, title, span, description, stats } = content.impact;

  return (
    <section id={id} className="py-24 bg-premium-lavender/20 relative overflow-hidden">
      
      {/* Decorative Blobs for Lavender Section */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-premium-lavender/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] bg-premium-slate/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1180px] mx-auto relative z-10">
        
        {/* Header - Centered for better impact */}
        <div className="flex flex-col items-center text-center mx-auto mb-16">
          <SectionHeader 
            title={title} 
            span={span} 
            description={description} 
            variant="light"
          />
        </div>

        {/* Stats Grid - Using our Smart StatCard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              // Adding a subtle lavender border on hover
              className="bg-white/60 backdrop-blur-md border-white/80 hover:border-premium-lavender/50"
            />
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 text-center reveal delay-400">
          <p className="text-[1.2rem] font-medium text-ui-soft italic">
            "आंकड़ों से कहीं अधिक, हम परिवारों के जीवन में बदलाव ला रहे हैं।"
          </p>
        </div>
      </div>
    </section>
  );
}
