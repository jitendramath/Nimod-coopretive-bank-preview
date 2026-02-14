export default function StatCard({ value, label, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-lg p-8 text-center border border-border-light
        shadow-soft hover:shadow-hover hover:-translate-y-[6px]
        transition-all duration-[350ms] ease-apple
        reveal ${className}
      `}
    >
      <strong className="block text-[2rem] font-bold text-mint-700 mb-2 leading-none">
        {value}
      </strong>
      <span className="text-[0.9rem] text-ui-muted whitespace-pre-line leading-snug">
        {label}
      </span>
    </div>
  );
}
