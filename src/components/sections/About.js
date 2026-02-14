import Image from "next/image";
import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const { id, title, span, description } = content.about;

  return (
    <section id={id} className="py-24 bg-premium-slate overflow-hidden">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        <SectionHeader title={title} span={span} variant="light" />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl reveal">
            <Image src="/images/nimod-gate.jpg" alt="About" fill className="object-cover" priority />
          </div>
          <div className="space-y-6 reveal delay-200">
            {/* यहाँ 'description' का उपयोग किया गया है */}
            {description?.map((para, index) => (
              <p key={index} className="text-[1.1rem] text-ui-soft leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
