import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Projects() {
  const { id, title, span, description, items } = content.projects;

  return (
    <section id={id} className="py-24 bg-gradient-to-b from-white to-premium-mint/30 overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header - Light variant with Mint touch */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="light"
        />

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((project, index) => (
            <BentoCard
              key={index}
              title={project.title}
              // Alternating styles for visual interest
              className={`
                border-premium-mint/50 hover:border-premium-emerald
                ${index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-1"}
              `}
            >
              <div className="space-y-4">
                <p className="text-ui-soft leading-relaxed">
                  {project.description}
                </p>
                
                {/* Visual Accent for Projects */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-[1px] flex-1 bg-premium-mint"></div>
                  <span className="text-[0.75rem] font-bold uppercase tracking-widest text-premium-forest opacity-60">
                    आधुनिक विकास
                  </span>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Featured Impact Box */}
        <div className="mt-16 p-8 md:p-12 bg-premium-forest rounded-[2.5rem] text-white reveal shadow-hover">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-[1.5rem] md:text-[1.8rem] font-bold mb-4">
                सौर ऊर्जा आत्मनिर्भरता की मिसाल
              </h4>
              <p className="text-white/80 text-[1.1rem]">
                समिति द्वारा स्थापित 2.40 MW क्षमता के सौर ऊर्जा संयंत्र से न केवल कार्यालय का विद्युत व्यय शून्य हो गया है, बल्कि प्रति माह ₹10 लाख+ की बिजली बिक्री से अतिरिक्त आय भी प्राप्त हो रही है।
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-32 h-32 rounded-full border-4 border-premium-emerald flex items-center justify-center bg-white/10 backdrop-blur-sm animate-pulse">
                <span className="text-[1.2rem] font-bold text-premium-emerald">Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
