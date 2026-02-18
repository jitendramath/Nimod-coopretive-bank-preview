"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* 🔥 smooth reveal */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutIntro() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[var(--bg-primary)]">

      {/* 🌈 soft ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-emerald-400/10 blur-[140px] rounded-full"/>
        <div className="absolute bottom-[-100px] right-[-100px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full"/>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* 🖼 IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true }}
            className="relative group"
          >
            <div className="
              relative overflow-hidden
              rounded-[2.2rem]
              border border-[var(--border-color)]
              shadow-[0_25px_70px_var(--shadow-color)]
              bg-[var(--card-bg)]
            ">

              {/* IMAGE (landscape safe) */}
              <Image
                src="/images/nimod-gate.jpg"
                alt="Nimod Cooperative"
                width={1400}
                height={900}
                className="
                  w-full 
                  h-[260px] sm:h-[340px] md:h-[420px]
                  object-cover
                  transition duration-[2000ms]
                  group-hover:scale-[1.04]
                "
                priority={false}
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"/>

              {/* badge */}
              <div className="
                absolute bottom-5 left-5
                px-5 py-2 rounded-full
                bg-[var(--card-bg)]/80 backdrop-blur-md
                border border-[var(--border-color)]
                text-[var(--text-main)]
                text-[10px] tracking-[0.2em] uppercase
                shadow
              ">
                Since 1954
              </div>

              {/* soft shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]"/>
            </div>
          </motion.div>

          {/* 🧠 CONTENT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true }}
            className="space-y-7"
          >

            {/* small tag */}
            <div className="text-[11px] tracking-[0.25em] uppercase text-[var(--accent-primary)] font-semibold">
              About Cooperative
            </div>

            {/* heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[var(--text-main)]">
              संस्था का{" "}
              <span className="text-[var(--accent-primary)]">
                परिचय
              </span>
            </h2>

            {/* intro text */}
            <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-[var(--text-muted)] max-w-xl">
              <span className="text-[var(--accent-primary)] font-semibold">
                बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद
              </span>{" "}
              ग्रामीण वित्तीय सेवाओं, कृषि संसाधनों और सामाजिक सशक्तिकरण के क्षेत्र में एक अग्रणी सहकारी संस्था है,
              जो पारदर्शिता और विश्वास के साथ ग्रामीण अर्थव्यवस्था को सुदृढ़ बना रही है।
            </p>

            {/* luxury highlight strips */}
            <div className="space-y-3 pt-2">

              {[
                "70+ वर्षों की विश्वसनीय सहकारी विरासत",
                "1200+ परिवारों का निरंतर विश्वास",
                "ग्रामीण वित्तीय एवं सामाजिक विकास का केंद्र"
              ].map((item, i)=>(
                <div
                  key={i}
                  className="
                  flex items-center gap-3
                  px-5 py-3 rounded-xl
                  bg-[var(--card-bg)]
                  border border-[var(--border-color)]
                  backdrop-blur-xl
                  text-sm md:text-base
                  text-[var(--text-main)]
                  shadow-sm
                  hover:border-[var(--accent-primary)]
                  hover:shadow-[0_10px_30px_var(--shadow-color)]
                  transition-all duration-300
                  "
                >
                  <div className="
                    w-2 h-2 rounded-full
                    bg-[var(--accent-primary)]
                    shadow-[0_0_10px_var(--accent-primary)]
                  "/>
                  {item}
                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
