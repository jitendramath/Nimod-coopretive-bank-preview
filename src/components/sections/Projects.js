"use client";

import { Zap, Warehouse, Landmark, Store, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    icon: Zap,
    title: "सौर ऊर्जा संयंत्र",
    category: "Renewable Energy",
    status: "Active",
    desc: "15.34 किलोवाट क्षमता का संयंत्र। संस्था अब ऊर्जा में आत्मनिर्भर है और ग्रिड को बिजली निर्यात कर रही है।",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
  },
  {
    icon: Warehouse,
    title: "भंडारण गोदाम",
    category: "Infrastructure",
    status: "Completed",
    desc: "2000 मीट्रिक टन क्षमता। किसानों की फसल को सुरक्षित रखने के लिए आधुनिक वेंटिलेशन सिस्टम।",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop"
  },
  {
    icon: Landmark,
    title: "मिनी बैंक शाखा",
    category: "Banking",
    status: "Live",
    desc: "पूर्णतः कंप्यूटरीकृत बैंकिंग सेवाएं। नकद जमा, निकासी और ऋण सुविधा अब आपके गांव में।",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1920&auto=format&fit=crop"
  },
  {
    icon: Store,
    title: "सुपर मार्केट",
    category: "Retail",
    status: "Upgrading",
    desc: "उचित मूल्य की दुकान। उच्च गुणवत्ता वाला राशन और घरेलू सामान अब बाजार से कम दाम पर।",
    img: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function Projects() {
  const scrollRef = useRef(null);

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">

      {/* 🌈 LUXURY THEME BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* light blob */}
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full" />

        {/* dark blob */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full" />

        {/* gradient mesh */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,var(--accent-primary),transparent_60%)]" />

      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">

        {/* 🔥 HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">

          <motion.div 
            initial={{ opacity:0,y:20 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            className="max-w-2xl"
          >
            <h4 className="text-[var(--accent-primary)] font-semibold tracking-widest uppercase text-xs mb-3">
              Our Initiatives
            </h4>

            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-main)] leading-tight">
              हमारी <span className="text-[var(--accent-primary)]">परियोजनाएं</span>
            </h2>

            <p className="text-[var(--text-muted)] mt-4 max-w-xl">
              संस्था की प्रमुख विकास परियोजनाएं जो ग्रामीण अर्थव्यवस्था को सशक्त बनाती हैं।
            </p>
          </motion.div>

          <Link href="/projects" className="hidden md:flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition">
            सभी देखें <ArrowRight size={18}/>
          </Link>
        </div>

        {/* 🚀 MASTER SWIPE CAROUSEL */}
        <div 
          ref={scrollRef}
          className="
          flex gap-6 overflow-x-auto snap-x snap-mandatory 
          pb-10 pt-4 scroll-smooth
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          "
        >

          {projects.map((project,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,scale:0.92}}
              whileInView={{opacity:1,scale:1}}
              viewport={{once:true}}
              transition={{duration:0.5,delay:index*0.08}}
              style={{scrollSnapStop:"always"}}
              className="
              snap-center shrink-0
              w-[86vw] sm:w-[420px] md:w-[460px]
              h-[520px] relative group
              rounded-[2.8rem] overflow-hidden
              border border-[var(--border-color)]
              bg-[var(--card-bg)]
              backdrop-blur-xl
              shadow-[0_20px_80px_var(--shadow-color)]
              transition-all duration-500
              hover:-translate-y-2
              "
            >

              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.img}
                  className="w-full h-full object-cover transition duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">

                {/* badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] tracking-widest">
                    {project.status}
                  </span>
                </div>

                {/* category */}
                <div className="flex items-center gap-2 text-emerald-300 mb-3">
                  <project.icon size={18}/>
                  <span className="text-[10px] tracking-widest uppercase">{project.category}</span>
                </div>

                {/* title */}
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* desc */}
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* footer */}
                <div className="flex items-center justify-between border-t border-white/20 pt-5 opacity-80 group-hover:opacity-100 transition">
                  <span className="text-sm">Details</span>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition">
                    <ExternalLink size={18}/>
                  </div>
                </div>

              </div>

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_60%)] transition duration-700"/>
            </motion.div>
          ))}

          {/* VIEW ALL */}
          <Link
            href="/projects"
            style={{scrollSnapStop:"always"}}
            className="
            snap-center shrink-0
            w-[86vw] sm:w-[320px] h-[520px]
            flex flex-col items-center justify-center gap-6
            rounded-[2.5rem]
            border border-dashed border-[var(--border-color)]
            bg-[var(--card-bg)]
            backdrop-blur-xl
            hover:border-[var(--accent-primary)]
            transition-all
            "
          >
            <div className="w-20 h-20 rounded-full bg-[var(--card-bg)] flex items-center justify-center border border-[var(--border-color)]">
              <ArrowRight size={30}/>
            </div>
            <span className="text-[var(--text-main)] font-semibold tracking-widest uppercase text-sm">
              View All Projects
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}
