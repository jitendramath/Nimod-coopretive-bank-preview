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
      {/* Header inside Overlay (Logo + Close Button) */}
      <div className="w-[92%] max-w-[1180px] mx-auto h-[72px] flex items-center justify-between shrink-0">
        <div className="text-[1.1rem] font-semibold tracking-wide text-ui-main">
          Nimod Cooperative
        </div>
        <button
          onClick={closeMenu}
          className="text-[2rem] leading-none text-ui-main hover:text-mint-700 transition-colors p-2"
          aria-label="Close Menu"
        >
          ×
        </button>
      </div>

      {/* Links Container */}
      <div className="flex-1 flex flex-col items-center justify-start pt-20 gap-6 overflow-y-auto">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-[1.6rem] font-semibold text-ui-main hover:text-mint-700 hover:translate-x-2 transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
