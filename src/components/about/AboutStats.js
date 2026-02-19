"use client";

import { motion } from "framer-motion";
import { Users, IndianRupee, CalendarDays, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export default function AboutStats() {
  const stats = [
    {
      id: 1,
      icon: CalendarDays,
      value: "1954",
      label: "स्थापना वर्ष",
      trend: "70+ गौरवशाली वर्ष",
      theme: "blue",
      delay: 0
    },
    {
      id: 2,
      icon: Users,
      value: "900+",
      label: "किसान सदस्य",
      trend: "निरंतर विस्तार",
      theme: "emerald",
      delay: 0.1
    },
    {
      id: 3,
      icon: Building2,
      value: "1200+",
      label: "परिवार जुड़े",
      trend: "अटूट विश्वास",
      theme: "violet",
      delay: 0.2
    },
    {
      id: 4,
      icon: IndianRupee,
      value: "3Cr+",
      label: "ऋण वितरण",
      trend: "आर्थिक सशक्तिकरण",
      theme: "amber",
      delay: 0.3
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">

      {/* 🕸️ Background Mesh (Subtle Tech Feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* 💡 Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 shadow-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">Trusted Statistics</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            सफलता के <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">कीर्तिमान</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            आंकड़े झूठ नहीं बोलते। हमारी प्रगति और विश्वसनीयता की कहानी, संख्याओं की जुबानी।
          </motion.p>
        </div>

        {/* --- Stats Widgets Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} data={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* 🎨 Separate Component for Cleaner Code */
function StatCard({ data }) {
  
  // Dynamic Color Mapping
  const colorMap = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20",
    emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20",
    violet: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/20",
    amber: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: data.delay }}
      className="group relative"
    >
      {/* Widget Card */}
      <div className="h-full p-6 rounded-[24px] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        
        {/* Top Row: Icon + Glow */}
        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${colorMap[data.theme]} transition-transform duration-500 group-hover:rotate-6`}>
            <data.icon size={24} strokeWidth={2} />
          </div>
          
          {/* Subtle Trend Indicator */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            <TrendingUp size={12} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{data.trend}</span>
          </div>
        </div>

        {/* Middle: Big Value */}
        <div className="mb-2">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            {data.value}
          </h3>
        </div>

        {/* Bottom: Label */}
        <p className="text-base font-medium text-gray-500 dark:text-gray-400">
          {data.label}
        </p>

        {/* Decorative Bottom Line (Progress Bar Style) */}
        <div className="mt-6 w-full h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full ${
            data.theme === 'blue' ? 'bg-blue-500' :
            data.theme === 'emerald' ? 'bg-emerald-500' :
            data.theme === 'violet' ? 'bg-violet-500' : 'bg-amber-500'
          }`} />
        </div>

      </div>
    </motion.div>
  );
}
