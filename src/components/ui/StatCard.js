export default function StatCard({ value, label, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center
        border border-border-light shadow-soft hover:shadow-hover 
        hover:-translate-y-1 transition-all duration-[400ms] ease-apple
        reveal ${className}
      `}
    >
      <div className="mb-1">
        <strong className="text-[1.8rem] md:text-[2.2rem] font-bold text-mint-700 leading-tight tracking-tight">
          {value}
        </strong>
      </div>
      <div className="text-[0.85rem] md:text-[0.95rem] text-ui-soft font-medium leading-snug max-w-[120px]">
        {label}
      </div>
    </div>
  );
}
