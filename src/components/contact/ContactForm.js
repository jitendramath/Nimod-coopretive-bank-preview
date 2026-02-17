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
    <section className="relative py-20 bg-premium-bg transition-colors duration-500">
      <div className="w-[92%] max-w-[800px] mx-auto relative">
        
        {/* ✨ Form Glow Accent (Dynamic) */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-full bg-premium-accent/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-premium-card border border-premium-border p-8 md:p-14 backdrop-blur-2xl shadow-2xl shadow-premium-shadow transition-all duration-500"
        >
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-premium-text mb-4 transition-colors duration-500">
              अपनी जिज्ञासा साझा करें
            </h2>
            <p className="text-premium-muted font-medium transition-colors duration-500">
              नीचे दिया गया फॉर्म भरें, हम आपसे जल्द संपर्क करेंगे।
            </p>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-3 group">
                <label className="text-[10px] font-bold text-premium-muted/60 uppercase ml-4 tracking-[0.2em] group-focus-within:text-premium-accent transition-colors">
                  पूरा नाम
                </label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-premium-muted/40 group-focus-within:text-premium-accent transition-colors" size={20} />
                  <input 
                    name="name"
                    required
                    type="text"
                    placeholder="जी, अपना शुभ नाम लिखें..."
                    className="w-full bg-premium-surface border border-premium-border rounded-2xl py-4.5 pl-14 pr-6 text-premium-text placeholder-premium-muted/30 focus:outline-none focus:border-premium-accent/50 focus:bg-premium-card transition-all"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-3 group">
                <label className="text-[10px] font-bold text-premium-muted/60 uppercase ml-4 tracking-[0.2em] group-focus-within:text-amber-500 transition-colors">
                  मोबाइल नंबर
                </label>
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-premium-muted/40 group-focus-within:text-amber-500 transition-colors" size={20} />
                  <input 
                    name="phone"
                    required
                    type="tel"
                    placeholder="आपका 10 अंकों का नंबर..."
                    className="w-full bg-premium-surface border border-premium-border rounded-2xl py-4.5 pl-14 pr-6 text-premium-text placeholder-premium-muted/30 focus:outline-none focus:border-amber-500/50 focus:bg-premium-card transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-3 group">
              <label className="text-[10px] font-bold text-premium-muted/60 uppercase ml-4 tracking-[0.2em] group-focus-within:text-emerald-500 transition-colors">
                विषय (Subject)
              </label>
              <div className="relative">
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-premium-muted/40 pointer-events-none" size={20} />
                <select 
                  name="subject"
                  className="w-full appearance-none bg-premium-surface border border-premium-border rounded-2xl py-4.5 px-6 text-premium-text focus:outline-none focus:border-emerald-500/50 focus:bg-premium-card transition-all cursor-pointer"
                >
                  <option className="bg-premium-bg">कृषि ऋण (KCC) जानकारी</option>
                  <option className="bg-premium-bg">खाता खुलवाना / बैंकिंग</option>
                  <option className="bg-premium-bg">खाद / बीज की उपलब्धता</option>
                  <option className="bg-premium-bg">शिकायत या सुझाव</option>
                  <option className="bg-premium-bg">अन्य</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3 group">
              <label className="text-[10px] font-bold text-premium-muted/60 uppercase ml-4 tracking-[0.2em] group-focus-within:text-premium-accent transition-colors">
                आपका संदेश
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-5 top-6 text-premium-muted/40 group-focus-within:text-premium-accent transition-colors" size={20} />
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder="आप विस्तार से अपनी बात यहाँ लिख सकते हैं..."
                  className="w-full bg-premium-surface border border-premium-border rounded-2xl py-5 pl-14 pr-6 text-premium-text placeholder-premium-muted/30 focus:outline-none focus:border-premium-accent/50 focus:bg-premium-card transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full mt-6 bg-premium-accent text-white dark:text-black font-black text-lg py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-premium-shadow hover:shadow-premium-accent/20"
            >
              WhatsApp पर भेजें <Send size={22} />
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
