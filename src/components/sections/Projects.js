"use client";

import Link from "next/link";
import { Zap, Warehouse, Landmark, Store, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Projects() {

  const projects = [
    {
      icon: Zap,
      title: "सौर ऊर्जा संयंत्र",
      status: "Active",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400",
      desc: "15.34 किलोवाट क्षमता का संयंत्र, संस्था ऊर्जा आत्मनिर्भर एवं ग्रिड निर्यात सक्षम।"
    },
    {
      icon: Warehouse,
      title: "भंडारण गोदाम",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400",
      desc: "2000 मीट्रिक टन क्षमता, सुरक्षित भंडारण एवं आधुनिक प्रबंधन।"
    },
    {
      icon: Landmark,
      title: "मिनी बैंक शाखा",
      status: "Active",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400",
      desc: "100% कंप्यूटरीकृत डिजिटल बैंकिंग सुविधा ग्रामीणों के लिए।"
    },
    {
      icon: Store,
      title: "सुपर मार्केट",
      status: "Upgrading",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1400",
      desc: "गाँव में उच्च गुणवत्ता दैनिक उपयोग सामग्री उपलब्ध।"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* Ambient luxury background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-400/20 dark:bg-emerald-500/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-main)] mb-6">
            हमारी <span className="text-[var(--accent-primary)]">परियोजनाएं</span>
          </h2>
          <p className="text-[15px] md:text-lg text-[var(--text-muted)]">
            संस्था की प्रमुख विकास परियोजनाएं जो ग्रामीण अर्थव्यवस्था को सशक्त बनाती हैं।
          </p>
        </motion.div>

        {/* MOBILE SWIPE */}
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 pb-4">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once:true }}
              className="snap-center shrink-0 w-[85%] rounded-[28px] overflow-hidden relative group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />

              {/* Glass content */}
              <div className="relative p-7 h-[380px] flex flex-col justify-between backdrop-blur-sm">

                <div>
                  <span className="px-4 py-1 text-[10px] uppercase tracking-[0.2em] rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {project.status}
                  </span>

                  <h3 className="text-2xl mt-6 font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-sm mt-4 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white text-sm">
                  Project Detail <ArrowRight size={16}/>
                </div>

              </div>
            </motion.div>
          ))}

          {/* CTA CARD */}
          <Link
            href="/projects"
            className="snap-center shrink-0 w-[85%] rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl flex items-center justify-center text-center p-10"
          >
            <div>
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-4">
                सभी परियोजनाएं देखें
              </h3>
              <span className="inline-flex items-center gap-2 text-[var(--accent-primary)]">
                Explore All <ArrowRight size={16}/>
              </span>
            </div>
          </Link>

        </div>

        {/* DESKTOP GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="hidden lg:grid grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative rounded-[32px] overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />

              <div className="relative p-10 h-[420px] flex flex-col justify-between backdrop-blur-sm">

                <div>
                  <span className="px-4 py-1 text-[10px] uppercase tracking-[0.2em] rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {project.status}
                  </span>

                  <h3 className="text-3xl mt-6 font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/80 mt-4 text-base leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform">
                  Project Detail <ArrowRight size={18}/>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Desktop CTA */}
          <Link
            href="/projects"
            className="rounded-[32px] border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl flex items-center justify-center p-14 text-center hover:shadow-[0_20px_60px_var(--shadow-color)] transition-all"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-4">
                सभी परियोजनाएं देखें
              </h3>
              <span className="inline-flex items-center gap-2 text-[var(--accent-primary)]">
                Explore All <ArrowRight size={18}/>
              </span>
            </div>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
