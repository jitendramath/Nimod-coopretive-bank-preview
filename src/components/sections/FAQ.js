"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "निमोद सहकारी समिति का सदस्य कैसे बनें?",
    answer: "समिति का सदस्य बनने के लिए आपको निमोद क्षेत्र का निवासी होना अनिवार्य है। मुख्य कार्यालय में आधार कार्ड, निवास प्रमाण पत्र और फोटो के साथ आवेदन करें। सदस्यता शुल्क जमा करने के बाद प्रबंधन समिति आपके आवेदन की समीक्षा करती है।"
  },
  {
    question: "समिति द्वारा किस प्रकार के ऋण प्रदान किए जाते हैं?",
    answer: "हम फसली ऋण (KCC), कृषि उपकरण ऋण, महिला समूह ऋण और अन्य सहकारी वित्त सेवाएं प्रदान करते हैं। ब्याज दरें सरकारी नियमों के अनुसार पारदर्शी और कम रखी गई हैं।"
  },
  {
    question: "खाद और बीज प्राप्त करने की प्रक्रिया क्या है?",
    answer: "पंजीकृत सदस्य अपने सदस्यता कार्ड के माध्यम से उचित मूल्य पर खाद और बीज प्राप्त कर सकते हैं। स्टॉक उपलब्धता के अनुसार वितरण किया जाता है।"
  },
  {
    question: "क्या मेरा पैसा समिति में सुरक्षित है?",
    answer: "हाँ। समिति राज्य सहकारिता अधिनियम के अंतर्गत पंजीकृत है और नियमित सरकारी ऑडिट होता है। सभी लेन-देन पारदर्शी और सुरक्षित रखे जाते हैं।"
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--border-color)]">

      {/* 🌈 luxury ambient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-400/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_30%,var(--accent-primary),transparent_60%)]" />
      </div>

      <div className="max-w-[850px] mx-auto px-4 relative z-10">

        {/* 🔥 header */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-main)] mb-5">
            अक्सर पूछे जाने वाले <span className="text-[var(--accent-primary)]">सवाल</span>
          </h2>

          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            समिति और सेवाओं से जुड़ी सामान्य जिज्ञासाओं के उत्तर यहाँ मिलेंगे।
          </p>
        </motion.div>

        {/* 💎 luxury faq list */}
        <div className="space-y-4">

          {faqs.map((faq, i)=>(
            <div
              key={i}
              className="
              group relative overflow-hidden
              rounded-2xl
              border border-[var(--border-color)]
              bg-[var(--card-bg)]
              backdrop-blur-xl
              transition-all duration-500
              hover:shadow-[0_20px_60px_var(--shadow-color)]
              "
            >

              {/* subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-700 bg-[radial-gradient(circle_at_left,var(--accent-primary),transparent_60%)]"/>

              {/* question */}
              <button
                onClick={()=>setActive(active===i?null:i)}
                className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left"
              >
                <span className="text-[15px] md:text-lg font-medium text-[var(--text-main)]">
                  {faq.question}
                </span>

                <div className="
                w-10 h-10 shrink-0 rounded-full
                flex items-center justify-center
                border border-[var(--border-color)]
                bg-[var(--card-bg)]
                text-[var(--text-muted)]
                group-hover:text-[var(--accent-primary)]
                transition
                ">
                  {active===i ? <Minus size={18}/> : <Plus size={18}/>}
                </div>
              </button>

              {/* answer */}
              <AnimatePresence initial={false}>
                {active===i && (
                  <motion.div
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:"auto", opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.35 }}
                  >
                    <div className="
                    px-6 md:px-7 pb-7
                    text-[var(--text-muted)]
                    leading-relaxed text-sm md:text-base
                    border-t border-[var(--border-color)]
                    ">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

        {/* 🧠 bottom support box */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="
          mt-14 text-center
          rounded-[2rem]
          border border-[var(--border-color)]
          bg-[var(--card-bg)]
          backdrop-blur-xl
          p-8
          "
        >
          <div className="flex justify-center mb-4">
            <div className="
            w-14 h-14 rounded-full
            flex items-center justify-center
            bg-[var(--accent-primary)]
            text-white
            shadow-lg
            ">
              <MessageCircle size={24}/>
            </div>
          </div>

          <h4 className="text-lg md:text-xl font-semibold text-[var(--text-main)] mb-2">
            अभी भी सवाल है?
          </h4>

          <p className="text-[var(--text-muted)] mb-5">
            हमारी टीम आपकी सहायता के लिए हमेशा तैयार है।
          </p>

          <a
            href="#contact"
            className="
            inline-block px-6 py-3 rounded-xl
            bg-[var(--accent-primary)]
            text-white font-medium
            hover:scale-[1.05]
            transition
            "
          >
            संपर्क करें
          </a>
        </motion.div>

      </div>
    </section>
  );
}
