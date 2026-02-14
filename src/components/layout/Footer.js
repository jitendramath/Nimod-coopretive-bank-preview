import { content } from "@/data/content";

export default function Footer() {
  const { institution, areas, compliance, copyright } = content.footer;

  return (
    <footer className="bg-white border-t border-border-light pt-20 pb-10">
      <div className="w-[92%] max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Institution */}
        <div>
          <h4 className="text-[1rem] font-semibold mb-4 text-ui-main">
            {institution.title}
          </h4>
          <p className="text-[0.9rem] text-ui-soft leading-relaxed">
            {institution.text.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* Column 2: Key Areas */}
        <div>
          <h4 className="text-[1rem] font-semibold mb-4 text-ui-main">
            {areas.title}
          </h4>
          <ul className="space-y-2">
            {areas.links.map((link, index) => (
              <li key={index} className="text-[0.9rem] text-ui-soft">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Compliance */}
        <div>
          <h4 className="text-[1rem] font-semibold mb-4 text-ui-main">
            {compliance.title}
          </h4>
          <ul className="space-y-2">
            {compliance.links.map((link, index) => (
              <li key={index} className="text-[0.9rem] text-ui-soft">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-14 pt-6 border-t border-border-light text-center">
        <p className="text-[0.85rem] text-ui-muted">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
