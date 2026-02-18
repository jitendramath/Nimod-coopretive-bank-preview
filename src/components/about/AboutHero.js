"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ✨ smooth stagger */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 bg-[var(--bg-primary)]">

      {/* 🌈 luxury ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--accent-primary)]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-300/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* 🧠 LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8 text-center lg:text-left"
          >

            {/* badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md text-[var(--text-muted)]">
                Since 1954 • Cooperative Society
              </span>
            </motion.div>

            {/* heading */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[var(--text-main)]"
            >
              निमोद ग्राम सेवा <br className="hidden md:block"/>
              <span className="text-[var(--accent-primary)]">
                सहकारी समिति
              </span>
            </motion.h1>

            {/* paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-lg md:text-xl leading-relaxed text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0"
            >
              बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद ग्रामीण वित्त, कृषि सेवाओं और सामाजिक विकास को 
              एकीकृत करते हुए एक आधुनिक सहकारी मॉडल प्रस्तुत करती है।
            </motion.p>

            {/* 💎 floating stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2"
            >
              {[
                "1954 से सेवा",
                "900+ किसान सदस्य",
                "1200+ परिवार",
                "डिजिटल बैंकिंग"
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                  px-4 py-2 rounded-full
                  text-[11px] md:text-xs
                  border border-[var(--border-color)]
                  bg-[var(--card-bg)]
                  backdrop-blur-md
                  text-[var(--text-muted)]
                  hover:text-[var(--accent-primary)]
                  hover:border-[var(--accent-primary)]
                  transition-all duration-300
                  "
                >
                  {item}
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* 🖼️ RIGHT IMAGE */}
          <motion.div
            initial={{ opacity:0, scale:0.95, y:40 }}
            animate={{ opacity:1, scale:1, y:0 }}
            transition={{ duration:1 }}
            className="relative"
          >

            {/* glow behind image */}
            <div className="absolute -inset-6 bg-[var(--accent-primary)]/10 blur-[80px] rounded-[3rem]" />

            <div className="
            relative rounded-[2.8rem] overflow-hidden
            border border-[var(--border-color)]
            bg-[var(--card-bg)]
            backdrop-blur-xl
            shadow-[0_40px_120px_var(--shadow-color)]
            group
            ">

              <Image
                src="/images/nimod-gate.jpg"
                alt="Nimod"
                width={1400}
                height={900}
                priority
                className="
                w-full h-auto
                max-h-[500px] md:max-h-[600px]
                object-cover
                group-hover:scale-105
                transition duration-[2000ms]
                "
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* floating badge */}
              <div className="
              absolute bottom-6 left-6
              px-5 py-2 rounded-full
              bg-white/70 dark:bg-black/40
              backdrop-blur-md
              border border-white/40 dark:border-white/10
              text-[11px] tracking-widest
              text-neutral-900 dark:text-white
              ">
                Nimod Cooperative • Rajasthan
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
