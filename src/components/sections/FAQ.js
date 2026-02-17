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
    <section id="faq" className="py-24 relative overflow-hidden bg-premium-bg border-t border-premium-border transition-colors duration-500">

      {/* 🌌 Ambient Dynamic Glows */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[420px] h-[420px] bg-premium-accent/5 dark:bg-emerald-500/8 blur-[180px] pointer-events-none transition-colors duration-500" />
      <div className="absolute left-[-120px] bottom-10 w-[280px] h-[280px] bg-purple-500/5 dark:bg-purple-400/8 blur-[160px] pointer-events-none transition-colors duration-500" />
      
      <div className="w-[92%] max-w-[900px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            अक्सर पूछे जाने वाले <span className="text-premium-accent">सवाल</span>
          </h2>
          <p className="text-premium-muted text-lg max-w-2xl mx-auto transition-colors duration-500 font-medium">
            समिति और हमारी सेवाओं से संबंधित सामान्य जिज्ञासाओं के समाधान यहाँ प्राप्त करें।
          </p>
        </motion.div>

        {/* 🍎 Staggered Accordion List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative rounded-[2rem] bg-premium-card border border-premium-border overflow-hidden transition-all duration-300 hover:border-premium-accent/30 hover:shadow-xl hover:shadow-premium-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-7 md:p-8 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-premium-text pr-8 transition-colors duration-500">
                  {faq.question}
                </span>
                <div className={`p-3 rounded-full transition-all duration-300 shadow-sm ${activeIndex === index ? 'bg-premium-accent text-white dark:text-black' : 'bg-premium-surface text-premium-muted hover:text-premium-accent'}`}>
                  {activeIndex === index ? <Minus size={22} strokeWidth={3} /> : <Plus size={22} strokeWidth={3} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-8 pb-8 text-premium-muted leading-relaxed border-t border-premium-border pt-6 text-[15px] md:text-lg transition-colors duration-500 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9 }}
          className="mt-16 text-center p-10 rounded-[2.5rem] bg-gradient-to-b from-premium-accent/5 to-transparent border border-premium-border shadow-lg transition-all duration-500"
        >
          <p className="text-premium-muted font-medium text-lg">
            क्या आपको अपना जवाब नहीं मिला?{" "}
            <a href="#contact" className="text-premium-accent font-black hover:underline transition-all underline-offset-4">
              हमें सीधे संदेश भेजें →
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
