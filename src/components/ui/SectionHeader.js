export default function SectionHeader({ title, span, description, className = "" }) {
  // Description array ho ya string, usko handle karna
  const descArray = Array.isArray(description) ? description : [description];

  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-[clamp(2rem,3vw,2.6rem)] font-bold mb-5 leading-[1.2] text-ui-main reveal">
        {title} <span className="text-mint-700">{span}</span>
      </h2>
      
      {description && (
        <div className="text-[1.05rem] text-ui-soft max-w-[900px] space-y-4 leading-relaxed reveal delay-100">
          {descArray.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
    </div>
  );
}
