"use client";

import { Zap, Warehouse, Landmark, Store } from "lucide-react";
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
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      desc: "15.34 किलोवाट क्षमता का सौर ऊर्जा संयंत्र, जिससे संस्था पूर्णतः ऊर्जा आत्मनिर्भर है और अतिरिक्त बिजली ग्रिड को बेचती है।"
    },
    {
      icon: Warehouse,
      title: "भंडारण गोदाम",
      status: "Completed",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      desc: "2000 मीट्रिक टन क्षमता का आधुनिक गोदाम, जहाँ किसानों की उपज और खाद-बीज का सुरक्षित भंडारण किया जाता है।"
    },
    {
      icon: Landmark,
      title: "मिनी बैंक शाखा",
      status: "Active",
      color: "text-premium-emerald",
      bg: "bg-premium-emerald/10",
      desc: "ग्रामीणों के लिए डिजिटल बैंकिंग, नकद निकासी और जमा की सुविधा। 100% कंप्यूटरीकृत बैंकिंग सिस्टम।"
    },
    {
      icon: Store,
      title: "सुपर मार्केट",
      status: "Upgrading",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      desc: "गाँव में ही उचित मूल्य पर उच्च गुणवत्ता वाली दैनिक उपयोग की वस्तुएं उपलब्ध कराने हेतु आधुनिक स्टोर।"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-premium-slate relative overflow-hidden">

      <div className="w-[92%] max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:70 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            हमारी <span className="text-premium-emerald">परियोजनाएं</span>
          </h2>
          <div className="h-1 w-20 bg-premium-emerald/40 rounded-full"></div>
        </motion.div>

        {/* 🍎 Apple wave grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, margin:"-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="premium-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top row */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${project.bg} ${project.color} group-hover:scale-110 transition-transform duration-500`}>
                  <project.icon size={28} />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-premium-emerald transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-lg mb-4">
                {project.desc}
              </p>

              {/* bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-premium-emerald/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
