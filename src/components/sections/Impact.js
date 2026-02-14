import { content } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";

export default function Impact() {
  const { id, title, span, description, stats } = content.impact;

  return (
    <section id={id} className="py-24 bg-brand-white">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Header */}
        <SectionHeader 
          title={title} 
          span={span} 
          description={description} 
        />

        {/* Stats Grid - using StatCard for big numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              value={stat.value} 
              label={stat.label} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
