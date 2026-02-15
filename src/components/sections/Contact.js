import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-premium-slate relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-premium-emerald/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              हमसे <span className="text-premium-emerald">संपर्क करें</span>
            </h2>
            <p className="text-lg text-white/60 mb-12">
              समिति से संबंधित किसी भी जानकारी या सहायता के लिए आप हमसे सीधे संपर्क कर सकते हैं। हमारी टीम आपकी सेवा के लिए तत्पर है।
            </p>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-premium-emerald/30 transition-all duration-300">
                <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">मुख्य कार्यालय</h4>
                  <p className="text-white/60 leading-relaxed">
                    निमोद ग्राम सेवा सहकारी समिति मर्यादित,<br />
                    डीडवाना-कुचामन, राजस्थान - 341303
                  </p>
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-premium-emerald/30 transition-all duration-300">
                  <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">ईमेल</h4>
                    <p className="text-white/80 font-medium">info@nimodbank.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-premium-emerald/30 transition-all duration-300">
                  <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">हेल्पलाइन</h4>
                    <p className="text-white/80 font-medium">+91 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <div className="relative reveal delay-200">
            <div className="absolute inset-0 bg-premium-emerald/10 blur-3xl -z-10 rounded-full opacity-20"></div>
            
            <form className="p-8 md:p-10 rounded-3xl bg-premium-charcoal border border-white/10 shadow-2xl">
              <div className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">आपका नाम</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 focus:bg-white/10 transition-all"
                      placeholder="पूरा नाम लिखें"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">मोबाइल नंबर</label>
                    <input 
                      type="tel" 
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 focus:bg-white/10 transition-all"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">विषय</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option className="bg-premium-slate">ऋण जानकारी</option>
                    <option className="bg-premium-slate">खाता खोलना</option>
                    <option className="bg-premium-slate">शिकायत / सुझाव</option>
                    <option className="bg-premium-slate">अन्य</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">संदेश</label>
                  <textarea 
                    className="w-full h-32 p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-emerald/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="अपना संदेश यहाँ लिखें..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full h-14 bg-premium-emerald text-premium-black font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-premium-emerald/20 transition-all duration-300"
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
