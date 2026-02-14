import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";

export default function Governance() {
  const { id, title, span, description, items } = content.governance;

  return (
    <section id={id} className="py-24 bg-white overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header - Clean Light Variant */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
          variant="light"
        />

        {/* Governance Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <BentoCard
                title={item.title}
                className="h-full border-border-light hover:border-premium-forest/30 group"
              >
                <div className="flex flex-col h-full">
                  <p className="text-ui-soft leading-relaxed flex-1">
                    {item.description}
                  </p>
                  
                  {/* Premium Badge for Governance */}
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-premium-forest/5 text-premium-forest text-[0.8rem] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-premium-forest animate-pulse"></span>
                    Verified System
                  </div>
                </div>
              </BentoCard>
            </div>
          ))}
        </div>

        {/* Accountability Statement */}
        <div className="mt-20 p-10 bg-brand-main rounded-[2rem] border border-border-light flex flex-col md:flex-row items-center gap-8 reveal">
          <div className="w-16 h-16 rounded-2xl bg-premium-forest flex items-center justify-center text-white shrink-0 shadow-lg shadow-premium-forest/20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.357 11.357 0 00-1.173 4.583c0 4.474 2.623 8.335 6.417 10.125a12.066 12.066 0 004.748 0c3.794-1.79 6.417-5.551 6.417-10.125 0-1.587-.315-3.103-.889-4.491z" />
            </svg>
          </div>
          <div>
            <h4 className="text-[1.3rem] font-bold text-ui-main mb-2">लोकतांत्रिक और पारदर्शी प्रबंधन</h4>
            <p className="text-ui-soft leading-relaxed">
              समिति का संचालन निर्वाचित प्रबंधन समिति द्वारा किया जाता है, जहाँ प्रत्येक सदस्य की आवाज़ और भागीदारी सुनिश्चित है। हम पूर्ण पारदर्शिता और सहकारी सिद्धांतों के प्रति जवाबदेह हैं।
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
