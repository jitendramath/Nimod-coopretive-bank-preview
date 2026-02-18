"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const text = `नया Enquiry - Nimod Cooperative

नाम: ${name}
मोबाइल: ${phone}
विषय: ${subject}
संदेश: ${message}`;

    const url = `https://wa.me/917023338509?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] transition-colors duration-500"
    >

      {/* 🌌 Ambient luxury gradients */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[15%] w-[520px] h-[520px] bg-[var(--accent-primary)]/10 blur-[160px] pointer-events-none"></div>
      <div className="absolute right-[-120px] bottom-10 w-[320px] h-[320px] bg-cyan-400/10 dark:bg-cyan-300/10 blur-[140px] pointer-events-none"></div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6 leading-tight">
              हमसे <span className="text-[var(--accent-primary)]">संपर्क करें</span>
            </h2>

            <p className="text-[15px] sm:text-lg text-[var(--text-muted)] max-w-xl mb-10 leading-relaxed">
              समिति से संबंधित किसी भी जानकारी या सहायता के लिए आप हमसे सीधे संपर्क कर सकते हैं।
              हमारी टीम आपकी सेवा के लिए तत्पर है।
            </p>

            {/* Contact Cards */}
            <div className="space-y-5">

              {/* Address */}
              <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shrink-0">
                  <MapPin size={22}/>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-main)] mb-1">
                    मुख्य कार्यालय
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    निमोद ग्राम सेवा सहकारी समिति मर्यादित,<br/>
                    डीडवाना-कुचामन, राजस्थान - 341303
                  </p>
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shrink-0">
                    <Mail size={20}/>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1 font-bold">
                      ईमेल
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-main)]">
                      info@nimodbank.in
                    </p>
                  </div>
                </div>

                <div className="premium-card rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shrink-0">
                    <Phone size={20}/>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1 font-bold">
                      हेल्पलाइन
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-main)]">
                      +91 70233 38509
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.9, delay:0.1, ease:[0.22,1,0.36,1] }}
          >

            <form
              onSubmit={handleWhatsApp}
              className="premium-card rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_var(--shadow-color)]"
            >

              <div className="space-y-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[var(--text-muted)]">
                      आपका नाम
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="पूरा नाम"
                      className="w-full h-12 px-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[var(--text-muted)]">
                      मोबाइल नंबर
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91..."
                      className="w-full h-12 px-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-all"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[var(--text-muted)]">
                    विषय
                  </label>
                  <select
                    name="subject"
                    className="w-full h-12 px-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-primary)] transition-all"
                  >
                    <option>ऋण जानकारी</option>
                    <option>खाता खोलना</option>
                    <option>शिकायत / सुझाव</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[var(--text-muted)]">
                    संदेश
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="अपना संदेश यहाँ लिखें..."
                    className="w-full h-32 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] resize-none transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-base tracking-wide bg-[var(--accent-primary)] text-white hover:scale-[1.02] hover:shadow-[0_10px_30px_var(--accent-glow)] transition-all duration-300"
                >
                  Submit
                </button>

              </div>
            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
