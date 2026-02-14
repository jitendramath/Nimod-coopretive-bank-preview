export default function BentoCard({ title, children, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-lg p-8 border border-border-light 
        shadow-soft hover:shadow-hover hover:-translate-y-[6px] 
        transition-all duration-[350ms] ease-apple 
        reveal ${className}
      `}
    >
      <h3 className="text-[1.15rem] font-semibold mb-3 text-ui-main">
        {title}
      </h3>
      <div className="text-[0.95rem] text-ui-soft leading-relaxed">
        {children}
      </div>
    </div>
  );
}
