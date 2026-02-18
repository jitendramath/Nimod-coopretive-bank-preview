"use client";

import { Users, Heart, TrendingUp, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

/* cinematic stagger */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Impact() {

  const stats = [
    {
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      desc: "सक्रिय रूप से जुड़े हुए",
      theme: "blue"
    },
    {
      icon: Heart,
      value: "1200+",
      label: "परिवार जुड़े",
      desc: "ग्रामीण परिवार सशक्त",
      theme: "rose"
    },
    {
      icon: TrendingUp,
      value: "108+",
      label: "SHG समूह",
      desc: "महिला विकास पहल",
      theme: "violet"
    },
    {
      icon: IndianRupee,
      value: "₹3 Cr+",
      label: "ऋण वितरण",
      desc: "स्थानीय अर्थव्यवस्था मजबूत",
      theme: "amber"
    }
  ];

  const themeStyles = {
    blue: {
      glow: "rgba(59,130,246,0.35)",
      bg: "from-blue-500/20 via-blue-400/5 to-transparent",
      icon: "text-blue-600 dark:text-blue-400"
    },
    rose: {
      glow: "rgba(244,63,94,0.35)",
      bg: "from-rose-500/20 via-rose-400/5 to-transparent",
      icon: "text-rose-600 dark:text-rose-400"
    },
    violet: {
      glow: "rgba(139,92,246,0.35)",
      bg: "from-violet-500/20 via-violet-400/5 to-transparent",
      icon: "text-violet-600 dark:text-violet-400"
    },
    amber: {
      glow: "rgba(251,191,36,0.35)",
      bg: "from-amber-400/20 via-amber-300/5 to-transparent",
      icon: "text-amber-600 dark:text-amber-400"
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* 🌌 MASTERPIECE BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-500/20 blur-[160px] rounded-full"/>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-400/20 dark:bg-violet-500/20 blur-[160px] rounded-full"/>
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-300/20 dark:bg-emerald-500/20 blur-[180px] rounded-full"/>

      </div>

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="text-center mb-16 md:mb-24 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-main)] mb-6">
            सामाजिक <span className="text-[var(--accent-primary)]">प्रभाव</span>
          </h2>

          <p className="text-[15px] md:text-lg text-[var(--text-muted)] leading-relaxed">
            समिति की पहलों का प्रभाव हजारों ग्रामीण परिवारों की आर्थिक स्थिति और जीवन स्तर पर स्पष्ट रूप से दिखाई देता है।
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {

            const style = themeStyles[stat.theme];

            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative rounded-[28px] p-[1px] transition-all duration-500"
                style={{
                  background: `linear-gradient(130deg, ${style.glow}, transparent 40%)`
                }}
              >
                {/* CARD */}
                <div className="relative h-full rounded-[28px] p-7 md:p-8 backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_var(--shadow-color)]">

                  {/* gradient inner aura */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${style.bg}`} />

                  {/* ICON */}
                  <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-white/40 dark:bg-white/5 border border-white/20 backdrop-blur-md ${style.icon}`}>
                    <stat.icon size={26}/>
                  </div>

                  {/* VALUE */}
                  <div className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[var(--text-main)] mb-2">
                    {stat.value}
                  </div>

                  {/* LABEL */}
                  <div className="text-[15px] font-semibold text-[var(--text-main)] mb-1">
                    {stat.label}
                  </div>

                  {/* DESC */}
                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                    {stat.desc}
                  </p>

                  {/* glow orb */}
                  <div
                    className="absolute -bottom-16 -right-16 w-40 h-40 blur-3xl opacity-40 group-hover:opacity-70 transition"
                    style={{ background: style.glow }}
                  />

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
