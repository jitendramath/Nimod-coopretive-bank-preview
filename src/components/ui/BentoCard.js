export default function BentoCard({ title, children, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-8 border border-border-light 
        shadow-soft hover:shadow-hover hover:-translate-y-[6px] 
        transition-all duration-[400ms] ease-apple 
        reveal ${className}
      `}
    >
      <h3 className="text-[1.2rem] font-semibold mb-4 text-ui-main leading-snug">
        {title}
      </h3>
      <div className="text-[0.98rem] text-ui-soft leading-relaxed">
        {children}
      </div>
    </div>
  );
}
