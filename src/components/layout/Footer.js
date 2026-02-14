export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-light py-12">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-[1.1rem] font-bold text-ui-main tracking-tight">
              निमोद ग्राम सेवा सहकारी समिति मर्यादित
            </h3>
            <p className="text-[0.85rem] text-ui-muted mt-1">
              सहकारिता के माध्यम से ग्रामीण समृद्धि।
            </p>
          </div>

          {/* Practical Links / Info */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.85rem] font-medium text-ui-soft">
            <span className="cursor-pointer hover:text-premium-forest transition-colors">नियम व शर्तें</span>
            <span className="cursor-pointer hover:text-premium-forest transition-colors">गोपनीयता नीति</span>
            <span className="cursor-pointer hover:text-premium-forest transition-colors">साइटमैप</span>
          </div>

        </div>

        {/* Divider Line */}
        <div className="h-[1px] w-full bg-border-light my-8"></div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] text-ui-muted font-medium">
          <p>© {currentYear} निमोद ग्राम सेवा सहकारी समिति। सर्वाधिकार सुरक्षित।</p>
          
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <span className="text-ui-main font-bold">JSS Originals</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
