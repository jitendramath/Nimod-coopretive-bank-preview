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
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]">

      {/* 🌈 luxury ambient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-emerald-400/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full" />
      </div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity:0,y:60 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-main)] mb-6 leading-tight">
              हमसे <span className="text-[var(--accent-primary)]">संपर्क करें</span>
            </h2>

            <p className="text-[var(--text-muted)] max-w-xl mb-10 leading-relaxed">
              किसी भी जानकारी, ऋण सहायता या सदस्यता से जुड़े प्रश्नों के लिए हमसे सीधे संपर्क करें।
            </p>

            {/* CARDS */}
            <div className="space-y-5">

              {/* address */}
              <div className="relative group rounded-2xl p-6 border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-[radial-gradient(circle_at_left,var(--accent-primary),transparent_60%)]"/>

                <div className="flex gap-4 items-start relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                    <MapPin size={22}/>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--text-main)] mb-1">मुख्य कार्यालय</h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      निमोद ग्राम सेवा सहकारी समिति,<br/>
                      डीडवाना-कुचामन राजस्थान - 341303
                    </p>
                  </div>
                </div>
              </div>

              {/* email phone */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div className="relative group rounded-2xl p-6 border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-[radial-gradient(circle_at_left,var(--accent-primary),transparent_60%)]"/>
                  <div className="flex gap-4 items-center relative">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      <Mail size={18}/>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest text-[var(--text-muted)]">EMAIL</p>
                      <p className="text-sm font-medium text-[var(--text-main)]">info@nimodbank.in</p>
                    </div>
                  </div>
                </div>

                <div className="relative group rounded-2xl p-6 border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-[radial-gradient(circle_at_left,var(--accent-primary),transparent_60%)]"/>
                  <div className="flex gap-4 items-center relative">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      <Phone size={18}/>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest text-[var(--text-muted)]">PHONE</p>
                      <p className="text-sm font-medium text-[var(--text-main)]">+91 70233 38509</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity:0,y:60 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8, delay:0.1 }}
          >

            <form
              onSubmit={handleWhatsApp}
              className="relative rounded-[2rem] p-6 sm:p-8 md:p-10 border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-2xl shadow-[0_30px_80px_var(--shadow-color)] overflow-hidden"
            >

              {/* glow */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,var(--accent-primary),transparent_60%)] pointer-events-none"/>

              <div className="space-y-5 relative">

                {/* input style */}
                {[
                  {name:"name", label:"आपका नाम", type:"text", placeholder:"पूरा नाम"},
                  {name:"phone", label:"मोबाइल नंबर", type:"tel", placeholder:"+91..."}
                ].map((f,i)=>(
                  <div key={i} className="space-y-2">
                    <label className="text-xs text-[var(--text-muted)]">{f.label}</label>
                    <input
                      name={f.name}
                      required
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full h-12 px-4 rounded-xl bg-transparent border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                    />
                  </div>
                ))}

                {/* subject */}
                <div className="space-y-2">
                  <label className="text-xs text-[var(--text-muted)]">विषय</label>
                  <select
                    name="subject"
                    className="w-full h-12 px-4 rounded-xl bg-transparent border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                  >
                    <option>ऋण जानकारी</option>
                    <option>खाता खोलना</option>
                    <option>शिकायत / सुझाव</option>
                  </select>
                </div>

                {/* message */}
                <div className="space-y-2">
                  <label className="text-xs text-[var(--text-muted)]">संदेश</label>
                  <textarea
                    name="message"
                    required
                    placeholder="अपना संदेश लिखें..."
                    className="w-full h-32 p-4 rounded-xl bg-transparent border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 resize-none"
                  />
                </div>

                {/* submit */}
                <button
                  type="submit"
                  className="
                  w-full py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-emerald-500 to-teal-400
                  shadow-lg shadow-emerald-500/20
                  hover:scale-[1.02]
                  hover:shadow-[0_20px_40px_rgba(16,185,129,0.35)]
                  transition-all duration-300
                  "
                >
                  WhatsApp पर भेजें →
                </button>

              </div>
            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
