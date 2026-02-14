import Link from "next/link";

const navLinks = [
  { href: "#about", label: "संस्था परिचय" },
  { href: "#services", label: "सेवाएं" },
  { href: "#projects", label: "परियोजनाएं" },
  { href: "#impact", label: "प्रभाव" },
  { href: "#governance", label: "प्रबंधन" },
  { href: "#compliance", label: "अनुपालन" },
  { href: "#contact", label: "संपर्क" },
];

export default function NavOverlay({ isOpen, closeMenu }) {
  return (
    <div
      className={`
        fixed inset-0 bg-white z-[1000] flex flex-col
        transition-transform duration-[450ms] ease-apple
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Overlay Content Area */}
      <div className="flex-1 flex flex-col items-center justify-start pt-32 gap-8 overflow-y-auto px-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-[1.8rem] font-semibold text-ui-main hover:text-mint-700 transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Optional: Footer info inside menu */}
      <div className="p-10 text-center border-t border-border-light">
        <p className="text-[0.9rem] text-ui-muted">
          © 2026 निमोद ग्राम सेवा सहकारी समिति
        </p>
      </div>
    </div>
  );
}
