"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {

  const projects = [
    {
      title: "सौर ऊर्जा परियोजना",
      desc: "15.34 KW सौर संयंत्र के माध्यम से स्वच्छ ऊर्जा और अतिरिक्त आय का स्रोत।",
      image: "/images/projects/solar.jpg", // change later
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
    <section className="py-20 md:py-28 relative">

      <div className="w-[92%] max-w-[1200px] mx-auto">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            हमारी प्रमुख परियोजनाएं
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            ऊर्जा, भंडारण, बैंकिंग और सामाजिक विकास के क्षेत्रों में समिति द्वारा
            संचालित परियोजनाएं ग्रामीण क्षेत्र के लिए एक मजबूत विकास मॉडल प्रस्तुत करती हैं।
          </p>
        </div>

        {/* GRID */}
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
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