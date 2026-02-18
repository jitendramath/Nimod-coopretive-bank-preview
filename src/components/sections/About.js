"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

/* smooth stagger */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};

const item = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function About() {

  const cards = [
    {
      icon: Target,
      title: "दृष्टिकोण",
      text: "ग्रामीण समाज को वित्तीय रूप से सशक्त, सामाजिक रूप से संगठित एवं आत्मनिर्भर बनाना।"
    },
    {
      icon: Users,
      title: "मिशन",
      text: "पारदर्शी, उत्तरदायी एवं सहकारी विकास मॉडल के माध्यम से स्थायी ग्रामीण उन्नति।"
    },
    {
      icon: Lightbulb,
      title: "मूल्य",
      text: "विश्वास, सहभागिता और सामूहिक प्रगति के साथ आधुनिक ग्रामीण अर्थव्यवस्था का निर्माण।"
    }
  ];

  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-[var(--bg-primary)]">

      {/* 🌈 ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-emerald-400/10 blur-[160px] rounded-full"/>
        <div className="absolute bottom-[-100px] right-[-100px] w-[440px] h-[440px] bg-cyan-400/10 blur-[170px] rounded-full"/>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <h4 className="text-[var(--accent-primary)] tracking-widest text-xs mb-3">
            About Society
          </h4>

          <h2 className="text-3xl md:text-5xl text-[var(--text-main)] leading-tight">
            संस्था का <span className="text-[var(--accent-primary)]">परिचय</span>
          </h2>

          <p className="text-[var(--text-muted)] mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद ग्रामीण विकास, वित्तीय सेवाओं और सामाजिक सशक्तिकरण के क्षेत्र में अग्रणी संस्था है।
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{opacity:0,scale:0.96,y:50}}
            whileInView={{opacity:1,scale:1,y:0}}
            viewport={{once:true}}
            transition={{duration:1}}
            className="relative group"
          >
            <div className="
              relative rounded-[2.5rem] overflow-hidden 
              border border-[var(--border-color)]
              shadow-[0_25px_70px_var(--shadow-color)]
              bg-[var(--card-bg)]
            ">

              {/* image wrapper auto ratio */}
              <div className="relative w-full">
                <Image
                  src="/images/nimod-gate.jpg"
                  alt="Nimod"
                  width={1400}
                  height={900}
                  className="
                    w-full h-auto 
                    max-h-[520px] object-contain 
                    md:object-cover md:max-h-[560px]
                    transition duration-[2000ms] group-hover:scale-105
                  "
                  priority={false}
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>

              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,var(--accent-primary),transparent_60%)] transition duration-700"/>

              {/* badge */}
              <div className="
                absolute bottom-5 left-5
                px-5 py-2 rounded-full
                bg-[var(--card-bg)]/90 backdrop-blur-md
                border border-[var(--border-color)]
                text-[var(--text-main)]
                text-[10px] tracking-widest uppercase
                shadow
              ">
                Since 1954
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
            className="space-y-8"
          >

            {/* intro */}
            <motion.p
              variants={item}
              className="text-[var(--text-main)] text-lg md:text-xl leading-relaxed opacity-90"
            >
              <span className="text-[var(--accent-primary)] font-semibold">
                बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद
              </span>{" "}
              ग्रामीण क्षेत्र में वित्तीय सेवाएं, कृषि सहायता, ऊर्जा और सामाजिक विकास को एकीकृत करते हुए एक आधुनिक सहकारी मॉडल प्रस्तुत करती है।
            </motion.p>

            {/* cards */}
            <div className="grid gap-4">

              {cards.map((card,index)=>(
                <motion.div
                  key={index}
                  variants={item}
                  className="
                  group relative
                  p-5 md:p-6
                  rounded-[1.8rem]
                  border border-[var(--border-color)]
                  bg-[var(--card-bg)]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_var(--shadow-color)]
                  "
                >

                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_left,var(--accent-primary),transparent_60%)] transition duration-700 rounded-[1.8rem]"/>

                  <div className="flex gap-4 relative z-10">

                    <div className="
                      w-11 h-11 rounded-xl
                      bg-[var(--accent-primary)]/10
                      flex items-center justify-center
                      text-[var(--accent-primary)]
                    ">
                      <card.icon size={20}/>
                    </div>

                    <div>
                      <h4 className="text-[var(--text-main)] text-[17px] mb-1">
                        {card.title}
                      </h4>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {card.text}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
