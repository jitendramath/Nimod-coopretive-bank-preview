import { content } from "@/data/content";

export default function Footer() {
  // Safe destructuring of the new footer structure
  const footerData = content?.footer || {};
  const { institution, areas, compliance, copyright } = footerData;

  return (
    <footer className="bg-white border-t border-border-light pt-16 pb-8">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Institution Details */}
          <div className="lg:col-span-1">
            <h3 className="text-[1.1rem] font-bold text-ui-main tracking-tight mb-4">
              {institution?.title || "संस्था"}
            </h3>
            <div className="space-y-2">
              {institution?.text?.map((line, index) => (
                <p key={index} className="text-[0.9rem] text-ui-soft font-medium">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* 2. Main Areas (Dynamic Links) */}
          <div>
            <h4 className="font-bold text-ui-main mb-4">{areas?.title || "मुख्य क्षेत्र"}</h4>
            <ul className="space-y-2">
              {areas?.links?.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[0.9rem] text-ui-soft hover:text-premium-forest transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Compliance (Dynamic Links) */}
          <div>
            <h4 className="font-bold text-ui-main mb-4">{compliance?.title || "अनुपालन"}</h4>
            <ul className="space-y-2">
              {compliance?.links?.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[0.9rem] text-ui-soft hover:text-premium-forest transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Branding / Social (Optional Visuals) */}
          <div className="lg:col-span-1 flex flex-col justify-between">
             <div className="p-6 bg-premium-forest/5 rounded-[1.5rem] border border-premium-forest/10">
               <p className="text-[0.85rem] text-premium-forest font-medium leading-relaxed">
                 "सहकारिता के माध्यम से ग्रामीण समृद्धि का एक विश्वसनीय प्रयास।"
               </p>
             </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="h-[1px] w-full bg-border-light mb-8"></div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] text-ui-muted font-medium text-center md:text-left">
          
          {/* Dynamic Copyright from content.js */}
          <p>{copyright || "© 2026 निमोद ग्राम सेवा सहकारी समिति"}</p>
          
          {/* Developer Credit */}
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <span className="text-ui-main font-bold hover:text-premium-forest cursor-pointer transition-colors">
              JSS Originals
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
