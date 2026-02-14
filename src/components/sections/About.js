import Image from "next/image";
import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const { id, title, span, description, paragraphs } = content.about;

  return (
    <section id={id} className="py-24 bg-premium-slate overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header - Light variant looks great on Slate */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="light"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Column - Premium Framing */}
          <div className="relative group reveal">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white">
              <Image
                src="/images/nimod-gate.jpg"
                alt="निमोद ग्राम सेवा सहकारी समिति मुख्य द्वार"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-apple"
                priority
              />
              {/* Subtle Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-premium-emerald/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Column */}
          <div className="space-y-8 reveal delay-200">
            <div className="space-y-6">
              {paragraphs.map((para, index) => (
                <p key={index} className={`text-[1.1rem] leading-relaxed ${index === 0 ? "text-ui-main font-semibold text-[1.2rem]" : "text-ui-soft"}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Quote / Highlight */}
            <div className="relative pl-8 border-l-4 border-premium-forest py-2">
              <p className="text-[1.1rem] italic text-premium-forest font-medium">
                "ग्रामीण अर्थव्यवस्था की रीढ़, किसानों का अटूट विश्वास।"
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
