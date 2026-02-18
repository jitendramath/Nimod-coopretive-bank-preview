"use client";

import { Zap, Warehouse, Landmark, Store, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

/* =========================
   Animation system
========================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Projects() {

  const projects = [
    {
      icon: Zap,
      title: "सौर ऊर्जा संयंत्र",
      status: "ACTIVE",
      desc: "15.34 किलोवाट क्षमता का सौर ऊर्जा संयंत्र — ऊर्जा आत्मनिर्भरता एवं ग्रिड निर्यात सक्षम।",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: Warehouse,
      title: "भंडारण गोदाम",
      status: "COMPLETED",
      desc: "2000 मीट्रिक टन क्षमता का आधुनिक भंडारण केंद्र — सुरक्षित कृषि स्टॉक प्रबंधन।",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: Landmark,
      title: "मिनी बैंक शाखा",
      status: "ACTIVE",
      desc: "ग्रामीण डिजिटल बैंकिंग केंद्र — जमा, निकासी और पूर्ण कंप्यूटरीकृत सेवा।",
      img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: Store,
      title: "सुपर मार्केट",
      status: "UPGRADING",
      desc: "उचित मूल्य पर गुणवत्तापूर्ण उपभोक्ता सामग्री उपलब्ध कराने हेतु आधुनिक स्टोर।",
      img: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">

      {/* ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[var(--accent-primary)]/5 blur-[180px] pointer-events-none" />

      <div className="w-[92%] max-w-[1300px] mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-main)] mb-5">
            हमारी <span className="text-[var(--accent-primary)]">परियोजनाएं</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl">
            संस्था की प्रमुख विकास परियोजनाएं जो ग्रामीण अर्थव्यवस्था को सशक्त बनाती हैं।
          </p>
        </motion.div>

        {/* =========================
           MOBILE: HORIZONTAL SCROLL
        ========================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible pb-4 snap-x snap-mandatory scroll-smooth"
        >

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="snap-center min-w-[88%] sm:min-w-[70%] md:min-w-0 group relative h-[420px] md:h-[460px] rounded-[2.5rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[0_10px_40px_var(--shadow-color)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-125 transition-transform duration-[2000ms]"
                style={{ backgroundImage:`url(${project.img})` }}
              />

              {/* DARK GLASS */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              {/* GLASS OVERLAY */}
              <div className="absolute inset-0 backdrop-blur-[2px]" />

              {/* CONTENT */}
              <div className="relative h-full p-6 md:p-10 flex flex-col justify-between text-white">

                {/* STATUS */}
                <div className="flex justify-between items-start">
                  <span className="px-4 py-1 rounded-full text-[10px] tracking-widest font-semibold bg-white/10 border border-white/20 backdrop-blur-md">
                    {project.status}
                  </span>
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm tracking-wide text-white/80 group-hover:text-white transition">
                    Project Detail <ArrowRight size={16} />
                  </span>
                </div>

              </div>

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)] transition duration-700" />

            </motion.div>
          ))}

          {/* FINAL CTA CARD */}
          <Link
            href="/projects"
            className="snap-center min-w-[85%] sm:min-w-[60%] md:min-w-0 group relative h-[420px] md:h-[460px] rounded-[2.5rem] flex items-center justify-center border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl hover:border-[var(--accent-primary)] transition-all"
          >
            <div className="text-center space-y-4">
              <div className="text-lg tracking-widest text-[var(--text-muted)]">
                सभी परियोजनाएं
              </div>
              <div className="text-3xl font-semibold text-[var(--accent-primary)] flex items-center justify-center gap-3">
                View All <ArrowRight />
              </div>
            </div>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
