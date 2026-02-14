"use client";
import { motion } from "framer-motion";

const menuLinks = [
  { name: "संस्था परिचय", id: "about" },
  { name: "सेवाएं", id: "services" },
  { name: "परियोजनाएं", id: "projects" },
  { name: "प्रभाव", id: "impact" },
  { name: "प्रबंधन", id: "governance" },
  { name: "अनुपालन", id: "compliance" },
  { name: "संपर्क", id: "contact" },
];

export default function MobileMenu({ closeMenu }) {
  // Smooth Scroll Function
  const handleScroll = (id) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400); // एनीमेशन खत्म होने का इंतज़ार
  };

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 90% 5%)" }}
      animate={{ clipPath: "circle(150% at 90% 5%)" }}
      exit={{ clipPath: "circle(0% at 90% 5%)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[105] bg-premium-charcoal flex flex-col justify-center items-center text-white"
    >
      {/* Background Floating Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-premium-emerald/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-premium-lavender/10 rounded-full blur-[100px]" />

      <nav className="flex flex-col gap-6 text-center">
        {menuLinks.map((link, index) => (
          <div key={index} className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ 
                delay: 0.2 + index * 0.1, 
                duration: 0.8, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              onClick={() => handleScroll(link.id)}
              className="text-[2.5rem] font-bold tracking-tighter cursor-pointer hover:text-premium-emerald transition-colors active:scale-95"
            >
              {link.name}
            </motion.h2>
          </div>
        ))}
      </nav>

      {/* Bottom Branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 text-white/40 text-[0.8rem] font-medium tracking-widest uppercase"
      >
        JSS Originals • Premium Experience
      </motion.div>
    </motion.div>
  );
}
