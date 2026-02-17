"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {

  const projects = [
    {
      title: "सौर ऊर्जा परियोजना",
      desc: "15.34 KW सौर संयंत्र के माध्यम से स्वच्छ ऊर्जा और अतिरिक्त आय का स्रोत।",
      image: "/images/projects/solar.jpg",
      tag: "Energy",
      href: "#solar",
    },
    {
      title: "आधुनिक भंडारण गोदाम",
      desc: "2000 MT क्षमता का सुरक्षित वेयरहाउस किसानों की उपज के लिए।",
      image: "/images/projects/warehouse.jpg",
      tag: "Storage",
      href: "#warehouse",
    },
    {
      title: "डिजिटल मिनी बैंकिंग",
      desc: "गांव में ही डिजिटल बैंकिंग, जमा और निकासी सुविधा।",
      image: "/images/projects/banking.jpg",
      tag: "Banking",
      href: "#banking",
    },
    {
      title: "उपभोक्ता सुपर स्टोर",
      desc: "ग्रामीण क्षेत्र के लिए आवश्यक वस्तुएं उचित मूल्य पर उपलब्ध।",
      image: "/images/projects/store.jpg",
      tag: "Retail",
      href: "#store",
    },
    {
      title: "महिला SHG परियोजना",
      desc: "महिलाओं के आर्थिक सशक्तिकरण और स्वरोजगार को बढ़ावा।",
      image: "/images/projects/shg.jpg",
      tag: "Social",
      href: "#shg",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-premium-bg overflow-hidden transition-colors duration-500">

      {/* 🌌 Dynamic Ambient Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-premium-accent/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-premium-text mb-6 tracking-tight transition-colors duration-500"
          >
            हमारी प्रमुख <span className="text-premium-accent">परियोजनाएं</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-premium-muted max-w-2xl mx-auto leading-relaxed text-sm md:text-lg transition-colors duration-500"
          >
            ऊर्जा, भंडारण, बैंकिंग और सामाजिक विकास के क्षेत्रों में समिति द्वारा
            संचालित परियोजनाएं ग्रामीण क्षेत्र के लिए एक मजबूत विकास मॉडल प्रस्तुत करती हैं।
          </motion.p>
        </div>

        {/* Project Grid with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
