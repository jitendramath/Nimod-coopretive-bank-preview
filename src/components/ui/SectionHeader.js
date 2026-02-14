export default function SectionHeader({ title, span, description, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="max-w-[800px] reveal">
      {/* Title with dynamic color based on variant */}
      <h2 className={`
        text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6
        ${isDark ? 'text-white' : 'text-ui-main'}
      `}>
        {title} 
        <span className={`ml-3 ${isDark ? "text-premium-emerald" : "text-premium-forest"}`}>
          {span}
        </span>
      </h2>

      {/* Description with adjusted opacity for dark mode */}
      {description && (
        <p className={`
          text-[1.1rem] md:text-[1.25rem] leading-relaxed max-w-[650px]
          ${isDark ? 'text-white/80' : 'text-ui-soft'}
        `}>
          {description}
        </p>
      )}
      
      {/* Premium Accent Line */}
      <div className={`h-1.5 w-20 mt-8 rounded-full ${isDark ? 'bg-premium-emerald' : 'bg-premium-forest'}`}></div>
    </div>
  );
}
