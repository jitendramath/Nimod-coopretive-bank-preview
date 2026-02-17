"use client";

import { Zap, Warehouse, Landmark, Store } from "lucide-react";
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
  hidden: { opacity: 0, y: 90, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Projects() {
  const projects = [
    {
      icon: Zap,
      title: "सौर ऊर्जा संयंत्र",
      status: "Active",
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-500/10",
      desc: "15.34 किलोवाट क्षमता का सौर ऊर्जा संयंत्र, जिससे संस्था पूर्णतः ऊर्जा आत्मनिर्भर है और अतिरिक्त बिजली ग्रिड को बेचती है।"
    },
    {
      icon: Warehouse,
      title: "भंडारण गोदाम",
      status: "Completed",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10",
      desc: "2000 मीट्रिक टन क्षमता का आधुनिक गोदाम, जहाँ किसानों की उपज और खाद-बीज का सुरक्षित भंडारण किया जाता है।"
    },
    {
      icon: Landmark,
      title: "मिनी बैंक शाखा",
      status: "Active",
      color: "text-premium-accent",
      bg: "bg-premium-accent/10",
      desc: "ग्रामीणों के लिए डिजिटल बैंकिंग, नकद निकासी और जमा की सुविधा। 100% कंप्यूटरीकृत बैंकिंग सिस्टम।"
    },
    {
      icon: Store,
      title: "सुपर मार्केट",
      status: "Upgrading",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
      desc: "गाँव में ही उचित मूल्य पर उच्च गुणवत्ता वाली दैनिक उपयोग की वस्तुएं उपलब्ध कराने हेतु आधुनिक स्टोर।"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-premium-bg relative overflow-hidden transition-colors duration-500">

      {/* 🌌 Dynamic Ambient Glows */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-premium-accent/5 blur-[150px] pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-text mb-6 transition-colors duration-500">
            हमारी <span className="text-premium-accent">परियोजनाएं</span>
          </h2>
          <div className="h-1.5 w-24 bg-premium-accent/40 rounded-full shadow-[0_0_10px_var(--accent-glow)]" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-premium-card border border-premium-border backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-premium-shadow overflow-hidden"
            >
              {/* Internal Accent Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,var(--accent-glow),transparent_70%)] pointer-events-none" />

              {/* Top Row: Icon & Status */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className={`p-5 rounded-[1.2rem] bg-premium-surface shadow-sm ${project.color} group-hover:scale-110 group-hover:bg-premium-accent group-hover:text-white dark:group-hover:text-black transition-all duration-500`}>
                  <project.icon size={30} strokeWidth={2} />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-premium-surface border border-premium-border text-[10px] font-black text-premium-muted uppercase tracking-[0.2em] shadow-sm">
                  {project.status}
                </span>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-premium-text mb-5 group-hover:text-premium-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-premium-muted leading-relaxed text-lg mb-8 transition-colors duration-500 font-medium">
                  {project.desc}
                </p>
              </div>

              {/* Premium Progress/Detail Indicator */}
              <div className="mt-auto pt-6 border-t border-premium-border flex items-center gap-3 text-premium-accent text-sm font-black tracking-widest uppercase group-hover:translate-x-3 transition-transform duration-300">
                Project Detail <span className="text-xl">→</span>
              </div>

              {/* Decorative Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-premium-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
