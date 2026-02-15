import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050507] border-t border-white/5">

  {/* big luxury glow center */}
  <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[520px] h-[520px] bg-emerald-500/10 blur-[190px] pointer-events-none"></div>

  {/* side soft glow */}
  <div className="absolute right-[-140px] bottom-10 w-[320px] h-[320px] bg-cyan-400/10 blur-[160px] pointer-events-none"></div>

  {/* bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              हमसे <span className="text-premium-emerald">संपर्क करें</span>
            </h2>
          <p className="text-lg text-white/50 mb-12 max-w-xl">
              समिति से संबंधित किसी भी जानकारी या सहायता के लिए आप हमसे सीधे संपर्क कर सकते हैं। हमारी टीम आपकी सेवा के लिए तत्पर है।
            </p>

            <div className="space-y-6">
              {/* Address Card: 'premium-card' का इस्तेमाल */}
              <div className="premium-card flex items-start gap-5 p-6 rounded-2xl">
                <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">मुख्य कार्यालय</h4>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    निमोद ग्राम सेवा सहकारी समिति मर्यादित,<br />
                    डीडवाना-कुचामन, राजस्थान - 341303
                  </p>
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="premium-card flex items-start gap-5 p-6 rounded-2xl hover:border-emerald-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-500">
                  <div className="p-3 rounded-full bg-premium-emerald/10 shadow-[0_0_25px_rgba(58,244,183,0.15)] text-premium-emerald shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[10px] uppercase tracking-wider mb-1">ईमेल</h4>
                    <p className="text-white/80 font-medium text-sm">info@nimodbank.in</p>
                  </div>
                </div>

                <div className="premium-card flex items-center gap-4 p-6 rounded-2xl">
                  <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[10px] uppercase tracking-wider mb-1">हेल्पलाइन</h4>
                    <p className="text-white/80 font-medium text-sm">+91 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Form - No heavy blurs behind */}
          <div className="relative">
            <form className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0b0c11] to-[#050507] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] relative z-10">
              <div className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">आपका नाम</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 focus:shadow-[0_0_20px_rgba(58,244,183,0.2)] transition-all"
                      placeholder="पूरा नाम"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">मोबाइल नंबर</label>
                    <input 
                      type="tel" 
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 transition-all"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">विषय</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 appearance-none cursor-pointer">
                    <option className="bg-premium-slate">ऋण जानकारी</option>
                    <option className="bg-premium-slate">खाता खोलना</option>
                    <option className="bg-premium-slate">शिकायत / सुझाव</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">संदेश</label>
                  <textarea 
                    className="w-full h-32 p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 transition-all resize-none"
                    placeholder="अपना संदेश यहाँ लिखें..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full h-14 bg-premium-emerald text-premium-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-premium-mint transition-all duration-300 active:scale-95"
                >
                  <Send size={20} />
                  संदेश भेजें
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
