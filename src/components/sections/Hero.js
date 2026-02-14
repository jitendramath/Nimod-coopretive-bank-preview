import { content } from "@/data/content";
import StatCard from "@/components/ui/StatCard";

export default function Hero() {
  const { title, span, subtitle, stats } = content.hero;

  return (
    <header
      className="relative pt-[120px] pb-[140px] overflow-hidden"
      style={{
        background: `
          radial-gradient(1200px 400px at 20% -10%, var(--mint-100), transparent),
          radial-gradient(1000px 300px at 80% 10%, var(--mint-300), transparent)
        `,
      }}
    >
      <div className="w-[92%] max-w-[1180px] mx-auto">
        <div className="max-w-[820px]">
          <h1 className="text-[clamp(2.6rem,5vw,3.6rem)] font-bold leading-[1.15] mb-6 text-ui-main">
            {title} <br />
            <span className="text-mint-700">{span}</span>
          </h1>

          <p className="text-[1.15rem] text-ui-soft max-w-[820px] mb-14 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              className="min-w-[160px] flex-1 md:flex-none"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
