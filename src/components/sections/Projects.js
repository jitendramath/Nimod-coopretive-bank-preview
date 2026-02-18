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
    <section className="relative py-24 bg-black overflow-hidden">
      
      {/* 🌑 Ambient Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 🔥 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-premium-accent font-bold tracking-widest uppercase text-sm mb-3">
              Our Initiatives
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              हमारी <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">परियोजनाएं</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link href="/projects" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
              सभी देखें <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 🚀 PREMIUM CAROUSEL (The Lazy Swipe Magic) */}
        <div 
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory 
            pb-12 pt-4 px-4 -mx-4 scroll-smooth
            [scrollbar-width:none] [-ms-overflow-style:none] 
            [&::-webkit-scrollbar]:hidden
          "
          style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // 👇 This is the MAGIC for "One Card at a Time"
              style={{ scrollSnapStop: 'always' }} 
              className="
                snap-center shrink-0 
                w-[85vw] sm:w-[400px] md:w-[450px] 
                h-[550px] relative group rounded-[2.5rem] overflow-hidden 
                border border-white/10 bg-[#0a0a0a] 
                shadow-2xl shadow-black/50
              "
            >
              {/* 🖼️ Image with Parallax Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              </div>

              {/* 💎 Glass Overlay & Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white tracking-wider uppercase">
                    {project.status}
                  </span>
                </div>

                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-3 mb-3 text-emerald-400">
                    <project.icon size={20} />
                    <span className="text-xs font-bold tracking-widest uppercase">{project.category}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6 group-hover:text-white/80 transition-colors">
                    {project.desc}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-medium text-white">Details</span>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ✨ Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}

          {/* ➤ "View All" Card */}
          <Link
            href="/projects"
            style={{ scrollSnapStop: 'always' }}
            className="
              snap-center shrink-0 
              w-[85vw] sm:w-[300px] h-[550px] 
              flex flex-col items-center justify-center gap-6
              rounded-[2.5rem] border border-dashed border-white/10 
              hover:bg-white/5 transition-all group
            "
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
              <ArrowRight className="text-white" size={32} />
            </div>
            <span className="text-white font-bold tracking-widest uppercase">View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
