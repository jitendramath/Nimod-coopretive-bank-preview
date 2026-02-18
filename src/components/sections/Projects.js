"use client";

import { Zap, Warehouse, Landmark, Store, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

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
  const [active, setActive] = useState(0);

  /* detect scroll active card */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.firstChild?.offsetWidth + 24;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActive(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  /* dot click scroll */
  const scrollToIndex = (i) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.firstChild.offsetWidth + 24;
    el.scrollTo({
      left: i * cardWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-primary)]">

      {/* background luxury */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <h4 className="text-[var(--accent-primary)] tracking-widest text-xs mb-3">
              Our Initiatives
            </h4>
            <h2 className="text-3xl md:text-5xl text-[var(--text-main)]">
              हमारी <span className="text-[var(--accent-primary)]">परियोजनाएं</span>
            </h2>
          </div>

          <Link href="/projects" className="hidden md:flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)]">
            सभी देखें <ArrowRight size={18}/>
          </Link>
        </div>

        {/* carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >

          {projects.map((project,index)=>(
            <motion.div
              key={index}
              style={{scrollSnapStop:"always"}}
              className="snap-center shrink-0 w-[86vw] sm:w-[420px] md:w-[460px] h-[520px] relative group rounded-[2.8rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[0_20px_80px_var(--shadow-color)]"
            >
              {/* image */}
              <div className="absolute inset-0">
                <img src={project.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-[1800ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"/>
              </div>

              {/* content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">

                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] tracking-widest">
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-emerald-300 mb-3">
                  <project.icon size={18}/>
                  <span className="text-[10px] tracking-widest uppercase">{project.category}</span>
                </div>

                <h3 className="text-2xl md:text-3xl mb-3">{project.title}</h3>
                <p className="text-white/80 text-sm mb-6">{project.desc}</p>

                <div className="flex justify-between border-t border-white/20 pt-5">
                  <span className="text-sm">Details</span>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                    <ExternalLink size={18}/>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* view all */}
          <Link
            href="/projects"
            style={{scrollSnapStop:"always"}}
            className="snap-center shrink-0 w-[86vw] sm:w-[320px] h-[520px] flex flex-col items-center justify-center gap-6 rounded-[2.5rem] border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--card-bg)] flex items-center justify-center border border-[var(--border-color)]">
              <ArrowRight size={30}/>
            </div>
            <span className="text-[var(--text-main)] text-sm tracking-widest uppercase">
              View All Projects
            </span>
          </Link>

        </div>

        {/* 💎 PAGINATION DOTS */}
        <div className="flex justify-center mt-8 gap-3">
          {[...projects, "cta"].map((_,i)=>(
            <button
              key={i}
              onClick={()=>scrollToIndex(i)}
              className={`
              h-2.5 rounded-full transition-all duration-400
              ${active===i 
                ? "w-8 bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-glow)]"
                : "w-2.5 bg-[var(--border-color)]"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
