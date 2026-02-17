"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

/* 🍎 Apple luxury stagger system */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 70, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function About() {
  const cards = [
    {
      icon: Target,
      title: "हमारा दृष्टिकोण",
      text: "ग्रामीण समाज को वित्तीय रूप से सशक्त, सामाजिक रूप से संगठित एवं आर्थिक रूप से आत्मनिर्भर बनाना।"
    },
    {
      icon: Users,
      title: "हमारा मिशन",
      text: "सहकारी सिद्धांतों पर आधारित पारदर्शी, उत्तरदायी एवं दीर्घकालीन विकास मॉडल स्थापित करना।"
    },
    {
      icon: Lightbulb,
      title: "मूल्य एवं सिद्धांत",
      text: "विश्वास, पारदर्शिता, सहभागिता और सामूहिक उन्नति के साथ ग्रामीण विकास को गति देना।"
    }
  ];

  return (
    <section id="about" className="py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🌌 Subtle Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-premium-accent/5 blur-[120px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-text mb-6 tracking-tight transition-colors duration-500">
            संस्था का <span className="text-premium-accent">परिचय</span>
          </h2>
          <div className="h-1.5 w-24 bg-premium-accent/40 rounded-full mb-8 shadow-[0_0_10px_var(--accent-glow)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Section with Reveal Effect */}
          <motion.div
            initial={{ opacity:0, scale:0.96, y:60 }}
            whileInView={{ opacity:1, scale:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:1, ease:[0.22,1,0.36,1] }}
            className="relative rounded-[2.5rem] overflow-hidden border border-premium-border shadow-2xl shadow-premium-shadow group transition-all duration-500"
          >
            <div className="relative w-full">
              <Image 
                src="/images/nimod-gate.jpg"
                alt="Nimod Cooperative Gate"
                width={1200}
                height={800}
                className="w-full h-auto md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width:768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            {/* Premium Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60" />
            
            {/* Since 1954 Badge */}
            <div className="absolute bottom-6 left-6 px-5 py-2 rounded-full bg-premium-card/80 backdrop-blur-md border border-premium-border text-premium-text text-[10px] font-bold tracking-widest uppercase z-20 shadow-lg">
              Since 1954
            </div>
          </motion.div>

          {/* Right Text & Info Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, margin:"-80px" }}
            className="space-y-10"
          >
            <motion.p variants={item} className="text-lg md:text-xl text-premium-text leading-relaxed transition-colors duration-500 font-medium opacity-90">
              <span className="text-premium-accent font-black">
                बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद
              </span>{" "}
              एक अग्रणी प्राथमिक ग्राम सेवा सहकारी संस्था है जो ग्रामीण क्षेत्र में वित्तीय, कृषि, ऊर्जा एवं सामाजिक विकास की आवश्यकताओं को पूरा करती है।
            </motion.p>

            {/* Philosophy Cards Grid */}
            <div className="grid gap-6">
              {cards.map((card, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="group relative p-6 rounded-[2rem] bg-premium-card border border-premium-border flex gap-6 items-start transition-all duration-500 hover:shadow-xl hover:shadow-premium-shadow hover:border-premium-accent/30"
                >
                  {/* Icon Box */}
                  <div className="p-4 rounded-2xl bg-premium-surface text-premium-accent shrink-0 shadow-sm transition-all duration-500 group-hover:bg-premium-accent group-hover:text-white dark:group-hover:text-black">
                    <card.icon size={26} strokeWidth={2} />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-premium-text mb-2 transition-colors duration-500">{card.title}</h4>
                    <p className="text-premium-muted text-sm md:text-base leading-relaxed transition-colors duration-500 font-medium">{card.text}</p>
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
