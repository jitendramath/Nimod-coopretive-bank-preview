"use client";

import { Users, Gavel, ShieldCheck, FileSignature } from "lucide-react";
import { motion } from "framer-motion";

/* ✨ Smooth reveal */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};

const item = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Governance() {

  const items = [
    {
      icon: Users,
      title: "प्रबंधन समिति",
      text: "समिति के समस्त निर्णय 12 सदस्यीय निर्वाचित प्रबंधन समिति द्वारा सामूहिक रूप से लिए जाते हैं जिससे पारदर्शिता और जवाबदेही सुनिश्चित होती है।"
    },
    {
      icon: Gavel,
      title: "लोकतांत्रिक ढांचा",
      text: "राज्य सहकारिता अधिनियम के तहत प्रत्येक 5 वर्ष में निष्पक्ष चुनाव। सभी सदस्यों को समान मताधिकार और निर्णय प्रक्रिया में सहभागिता।"
    },
    {
      icon: ShieldCheck,
      title: "महिला सहभागिता",
      text: "प्रबंधन एवं संचालन में महिलाओं की सक्रिय भागीदारी और आरक्षित प्रतिनिधित्व। समावेशी विकास हमारा मूल सिद्धांत है।"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-primary)] border-y border-[var(--border-color)]">

      {/* 🌈 luxury ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_20%,var(--accent-primary),transparent_60%)]" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-main)] mb-5">
            प्रबंधन एवं <span className="text-[var(--accent-primary)]">शासन</span>
          </h2>

          <p className="text-[var(--text-muted)] leading-relaxed">
            समिति का संचालन पारदर्शिता, लोकतांत्रिक मूल्यों और वैधानिक नियमों के अनुसार किया जाता है।
          </p>
        </motion.div>

        {/* 💎 GOVERNANCE STRIPS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="space-y-6"
        >
          {items.map((g, i)=>(
            <motion.div
              key={i}
              variants={item}
              className="
              group relative overflow-hidden
              rounded-[2rem]
              border border-[var(--border-color)]
              bg-[var(--card-bg)]
              backdrop-blur-xl
              p-6 md:p-8
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_var(--shadow-color)]
              "
            >

              {/* left accent glow line */}
              <div className="
              absolute left-0 top-0 h-full w-[3px]
              bg-gradient-to-b from-transparent via-[var(--accent-primary)] to-transparent
              opacity-40 group-hover:opacity-100
              transition-all duration-500
              "/>

              {/* subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-700 bg-[radial-gradient(circle_at_left,var(--accent-primary),transparent_60%)]"/>

              <div className="relative flex gap-5">

                {/* icon */}
                <div className="
                w-14 h-14 shrink-0 rounded-xl
                flex items-center justify-center
                bg-[var(--card-bg)]
                border border-[var(--border-color)]
                text-[var(--accent-primary)]
                group-hover:scale-110 transition
                ">
                  <g.icon size={24}/>
                </div>

                {/* text */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-main)] mb-2">
                    {g.title}
                  </h3>

                  <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed mb-4">
                    {g.text}
                  </p>

                  {/* verified badge */}
                  <div className="
                  inline-flex items-center gap-2
                  px-3 py-1.5 rounded-lg
                  bg-[var(--card-bg)]
                  border border-[var(--border-color)]
                  text-[var(--accent-primary)]
                  text-[10px] tracking-widest uppercase
                  ">
                    <FileSignature size={14}/>
                    Verified Governance
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
