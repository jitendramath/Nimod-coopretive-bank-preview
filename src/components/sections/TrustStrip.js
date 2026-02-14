import { content } from "@/data/content";

export default function TrustStrip() {
  const { trustStrip } = content;

  return (
    <section className="border-t border-b border-border-light">
      <div 
        className="w-full py-7 text-center bg-gradient-to-r from-mint-100 via-white to-mint-100"
      >
        <div className="w-[92%] max-w-[1180px] mx-auto">
          <p className="text-[0.95rem] text-ui-soft font-medium">
            {trustStrip}
          </p>
        </div>
      </div>
    </section>
  );
}
