"use client";

import { motion } from "framer-motion";
import { Send, User, Phone, MessageSquare, ChevronDown } from "lucide-react";

export default function ContactForm() {
  
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const text = `*नई पूछताछ - निमोद पैक्स पोर्टल*\n\n*नाम:* ${name}\n*मोबाइल:* ${phone}\n*विषय:* ${subject}\n*संदेश:* ${message}`;
    const whatsappUrl = `https://wa.me/919602612688?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-20 bg-[#050507]">
      <div className="w-[92%] max-w-[800px] mx-auto relative">
        
        {/* ✨ Form Glow Accent */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-8 md:p-12 backdrop-blur-2xl shadow-2xl"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">अपनी जिज्ञासा साझा करें</h2>
            <p className="text-white/40">नीचे दिया गया फॉर्म भरें, हम आपसे जल्द संपर्क करेंगे।</p>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-white/40 uppercase ml-2 tracking-widest group-focus-within:text-indigo-400 transition-colors">पूरा नाम</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-indigo-400 transition-colors" size={18} />
                  <input 
                    name="name"
                    required
                    type="text"
                    placeholder="जी, अपना शुभ नाम लिखें..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-white/40 uppercase ml-2 tracking-widest group-focus-within:text-amber-400 transition-colors">मोबाइल नंबर</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-amber-400 transition-colors" size={18} />
                  <input 
                    name="phone"
                    required
                    type="tel"
                    placeholder="आपका 10 अंकों का नंबर..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-white/40 uppercase ml-2 tracking-widest group-focus-within:text-emerald-400 transition-colors">विषय (Subject)</label>
              <div className="relative">
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={18} />
                <select 
                  name="subject"
                  className="w-full appearance-none bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all cursor-pointer"
                >
                  <option className="bg-neutral-900">कृषि ऋण (KCC) जानकारी</option>
                  <option className="bg-neutral-900">खाता खुलवाना / बैंकिंग</option>
                  <option className="bg-neutral-900">खाद / बीज की उपलब्धता</option>
                  <option className="bg-neutral-900">शिकायत या सुझाव</option>
                  <option className="bg-neutral-900">अन्य</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-white/40 uppercase ml-2 tracking-widest group-focus-within:text-indigo-400 transition-colors">आपका संदेश</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-5 text-white/20 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <textarea 
                  name="message"
                  required
                  rows="4"
                  placeholder="आप विस्तार से अपनी बात यहाँ लिख सकते हैं..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-black text-lg py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
            >
              WhatsApp पर भेजें <Send size={20} />
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
