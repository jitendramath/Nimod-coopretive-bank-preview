"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* 🍎 Apple stagger system */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 70, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const faqs = [
  {
    question: "निमोद सहकारी समिति का सदस्य कैसे बनें?",
    answer: "समिति का सदस्य बनने के लिए आपको निमोद क्षेत्र का निवासी होना अनिवार्य है। आप हमारे मुख्य कार्यालय में आधार कार्ड, निवास प्रमाण पत्र और फोटो के साथ आवेदन कर सकते हैं। सदस्यता शुल्क जमा करने के बाद प्रबंधन समिति आपके आवेदन की समीक्षा करती है।"
  },
  {
    question: "समिति द्वारा किस प्रकार के ऋण (Loans) प्रदान किए जाते हैं?",
    answer: "हम मुख्य रूप से अल्पकालीन फसली ऋण (KCC), कृषि उपकरण ऋण, और महिला स्वयं सहायता समूहों के लिए सूक्ष्म ऋण प्रदान करते हैं। ऋण की ब्याज दरें सरकारी नियमों के अनुसार बहुत ही कम और पारदर्शी रखी गई हैं।"
  },
  {
    question: "खाद और बीज प्राप्त करने की क्या प्रक्रिया है?",
    answer: "समिति के पंजीकृत सदस्य अपने सदस्यता कार्ड के माध्यम से उचित मूल्य पर उच्च गुणवत्ता वाले खाद और बीज प्राप्त कर सकते हैं। स्टॉक की उपलब्धता के आधार पर वितरण 'पहले आओ, पहले पाओ' के आधार पर किया जाता है।"
  },
  {
    question: "क्या मेरा पैसा समिति में सुरक्षित है?",
    answer: "हाँ, बिल्कुल। निमोद सहकारी समिति राज्य सहकारिता अधिनियम के अंतर्गत पंजीकृत है और इसका नियमित रूप से सरकारी ऑडिट किया जाता है। हम पारदर्शिता और सुरक्षा के उच्चतम मानकों का पालन करते हैं।"
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#07080c] border-t border-white/5">

      {/* glow backgrounds */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[420px] h-[420px] bg-emerald-500/8 blur-[180px] pointer-events-none"></div>
      <div className="absolute left-[-120px] bottom-10 w-[280px] h-[280px] bg-purple-400/8 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>

      <div className="w-[92%] max-w-[900px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            अक्सर पूछे जाने वाले <span className="text-premium-emerald">सवाल</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            समिति और हमारी सेवाओं से संबंधित सामान्य जिज्ञासाओं के समाधान यहाँ प्राप्त करें।
          </p>
        </motion.div>

        {/* 🍎 stagger list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="premium-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-400/20 hover:shadow-[0_15px_50px_rgba(0,0,0,0.7)]"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-white/80 pr-8">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-premium-emerald text-premium-black' : 'bg-white/5 text-white/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom box */}
        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9 }}
          className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-b from-premium-emerald/10 to-transparent border border-premium-emerald/20 shadow-[0_0_40px_rgba(58,244,183,0.15)]"
        >
          <p className="text-white/70">
            क्या आपको अपना जवाब नहीं मिला?{" "}
            <a href="#contact" className="text-premium-emerald font-bold hover:underline">
              हमें सीधे संदेश भेजें →
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
