"use client";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-premium-charcoal">
      {/* भारी Blur वाले गोलों की जगह बस एक हल्का सा स्थिर Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-premium-emerald/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-premium-mint/5 rounded-full blur-[80px]"></div>
    </div>
  );
}
