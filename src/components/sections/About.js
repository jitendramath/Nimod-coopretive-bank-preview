"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

/* 🍎 Apple luxury stagger */
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
    <section id="about" className="py-24 bg-premium-slate relative overflow-hidden">

      <div className="w-[92%] max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            संस्था का <span className="text-premium-emerald">परिचय</span>
          </h2>
          <div className="h-1.5 w-24 bg-premium-emerald rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image reveal */}
          <motion.div
            initial={{ opacity:0, scale:0.96, y:60 }}
            whileInView={{ opacity:1, scale:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:1, ease:[0.22,1,0.36,1] }}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div className="relative w-full">
              <Image 
                src="/images/nimod-gate.jpg"
                alt="Nimod Cooperative Gate"
                width={1200}
                height={800}
                className="w-full h-auto md:h-[500px] object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-premium-charcoal via-transparent to-transparent z-10 opacity-60"></div>
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, margin:"-80px" }}
            className="space-y-8"
          >
            <motion.p variants={item} className="text-lg text-white/80 leading-relaxed">
              <span className="text-premium-emerald font-bold">
                बहुद्देशीय ग्राम सेवा सहकारी समिति निमोद
              </span>{" "}
              एक बहुउद्देश्यीय प्राथमिक ग्राम सेवा सहकारी संस्था है जो ग्रामीण क्षेत्र में वित्तीय, कृषि, ऊर्जा एवं सामाजिक विकास की आवश्यकताओं को पूरा करती है।
            </motion.p>

            {/* Cards */}
            <div className="grid gap-5">
              {cards.map((card, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="premium-card p-6 rounded-2xl flex gap-5 items-start"
                >
                  <div className="p-3 rounded-full bg-premium-emerald/10 text-premium-emerald shrink-0">
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{card.text}</p>
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
