import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Compliance() {
  const { id, title, span, description, items } = content.compliance;

  return (
    <section id={id} className="py-24 bg-gradient-to-tr from-premium-mint/10 via-white to-white overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header - Centered for Trust */}
        <div className="flex flex-col items-center text-center mx-auto mb-16">
          <SectionHeader 
            title={title} 
            span={span} 
            description={description} 
            variant="light"
          />
        </div>

        {/* Compliance Features - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[2rem] bg-white border border-border-light hover:border-premium-emerald/40 transition-all duration-500 ease-apple reveal"
            >
              <div className="flex items-start gap-6">
                {/* Security Icon Placeholder */}
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-premium-mint/20 flex items-center justify-center text-premium-forest group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.357 11.357 0 00-1.173 4.583c0 4.474 2.623 8.335 6.417 10.125a12.066 12.066 0 004.748 0c3.794-1.79 6.417-5.551 6.417-10.125 0-1.587-.315-3.103-.889-4.491z" />
                  </svg>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-[1.25rem] font-bold text-ui-main group-hover:text-premium-forest transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-ui-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Seals / Verification Banner */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 reveal">
           <div className="px-6 py-2 border-2 border-dashed border-ui-muted rounded-full text-ui-muted font-bold tracking-widest text-[0.8rem]">
             RBI GUIDELINES
           </div>
           <div className="px-6 py-2 border-2 border-dashed border-ui-muted rounded-full text-ui-muted font-bold tracking-widest text-[0.8rem]">
             COOPERATIVE ACT
           </div>
           <div className="px-6 py-2 border-2 border-dashed border-ui-muted rounded-full text-ui-muted font-bold tracking-widest text-[0.8rem]">
             SECURE BANKING
           </div>
        </div>

      </div>
    </section>
  );
}
