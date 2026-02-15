"use client";

/**
 * High-Performance Premium Background
 * Replacing heavy CSS Blur filters with hardware-accelerated radial gradients.
 */
export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-premium-charcoal">
      
      {/* Top Left: Premium Emerald Glow */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] opacity-[0.15]"
        style={{
          background: "radial-gradient(circle at center, #3AF4B7 0%, transparent 70%)",
        }}
      />

      {/* Center Right: Soft Mint Accent */}
      <div 
        className="absolute top-[20%] right-[-15%] w-[70vw] h-[70vw] opacity-[0.08]"
        style={{
          background: "radial-gradient(circle at center, #A2F5DE 0%, transparent 65%)",
        }}
      />

      {/* Bottom Center: Subtle Depth */}
      <div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] opacity-[0.05]"
        style={{
          background: "radial-gradient(circle at center, #ffffff 0%, transparent 60%)",
        }}
      />
      
      {/* Hardware Acceleration Overlay */}
      <div className="absolute inset-0 bg-transparent transform-gpu" />
    </div>
  );
}
