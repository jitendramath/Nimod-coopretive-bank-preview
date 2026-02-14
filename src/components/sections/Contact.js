import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-premium-charcoal relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-premium-emerald/5 blur-[120px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1180px] mx-auto relative z-10">
        
        <SectionHeader 
          title="हमसे" 
          span="संपर्क करें" 
          description="समिति से संबंधित किसी भी जानकारी या सहायता के लिए आप हमसे सीधे संपर्क कर सकते हैं।" 
          variant="dark"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-6 reveal">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-premium-emerald/30 transition-all duration-500">
              <h4 className="text-premium-emerald font-bold mb-2 tracking-wide uppercase text-[0.8rem]">मुख्य कार्यालय</h4>
              <p className="text-white text-[1.2rem] font-medium leading-relaxed">
                निमोद ग्राम सेवा सहकारी समिति मर्यादित,<br />
                डीडवाना-कुचामन, राजस्थान
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-premium-emerald/30 transition-all duration-500">
                <h4 className="text-premium-emerald font-bold mb-2 uppercase text-[0.8rem]">ईमेल</h4>
                <p className="text-white font-medium text-[1.1rem]">info@nimodbank.in</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-premium-emerald/30 transition-all duration-500">
                <h4 className="text-premium-emerald font-bold mb-2 uppercase text-[0.8rem]">हेल्पलाइन</h4>
                <p className="text-white font-medium text-[1.1rem]">+91 0158X-XXXXXX</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form (Visual Only) */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] reveal delay-200">
             <div className="space-y-6">
               <div className="space-y-2">
                 <label className="text-white/60 text-[0.9rem] ml-2">आपका नाम</label>
                 <div className="w-full h-14 bg-white/10 rounded-2xl border border-white/10"></div>
               </div>
               <div className="space-y-2">
                 <label className="text-white/60 text-[0.9rem] ml-2">संदेश</label>
                 <div className="w-full h-32 bg-white/10 rounded-2xl border border-white/10"></div>
               </div>
               <button className="w-full py-4 bg-premium-emerald text-premium-charcoal font-bold rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                 संदेश भेजें
               </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
