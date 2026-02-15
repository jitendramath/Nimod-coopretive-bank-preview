"use client";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* भारी Blur की जगह हम Simple Gradient का इस्तेमाल करेंगे */}
      <div className="absolute top-0 left-0 w-full h-full bg-premium-charcoal"></div>
      
      {/* Static Glows - No Animation for better performance */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-premium-emerald/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[250px] h-[250px] bg-premium-mint/5 rounded-full blur-[60px]"></div>

      {/* Noise Texture हटा दिया गया है क्योंकि यह Scroll Lag पैदा करता है */}
    </div>
  );
}
