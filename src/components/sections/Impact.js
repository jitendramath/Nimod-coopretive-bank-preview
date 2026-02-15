import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Impact() {
  // Safe destructuring
  const impactData = content?.impact || {};
  const { id, title, span, description, stats } = impactData;

  return (
    <section id={id || "impact"} className="py-24 bg-premium-lavender/10 relative overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-premium-lavender/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] bg-premium-slate/30 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1180px] mx-auto relative z-10">
        
        {/* Header - Centered */}
        <div className="flex flex-col items-center text-center mx-auto mb-16">
          <SectionHeader 
            title={title} 
            span={span} 
            description={description} 
            variant="light"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/50 hover:border-premium-lavender transition-all duration-500 hover:shadow-lg text-center group"
            >
              {/* Value */}
              <h3 className="text-[2rem] md:text-[2.5rem] font-bold text-premium-charcoal mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              
              {/* Label with Newline Fix */}
              <p className="text-[0.9rem] md:text-[1rem] font-medium text-ui-soft leading-tight whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Closing quote from your content */}
        <div className="mt-20 text-center reveal delay-300 opacity-80">
          <p className="text-[1.1rem] font-medium text-ui-muted italic">
            "ग्रामीण अर्थव्यवस्था को सुदृढ़ करना तथा सदस्यों को आत्मनिर्भर बनाना।"
          </p>
        </div>

      </div>
    </section>
  );
}
