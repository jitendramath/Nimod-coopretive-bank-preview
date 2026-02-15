import { Zap, Warehouse, Landmark, Store } from "lucide-react";

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
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0b0f14] border-t border-white/5">

  {/* solar yellow glow */}
  <div className="absolute left-[-120px] top-20 w-[300px] h-[300px] bg-yellow-400/10 blur-[140px] pointer-events-none"></div>

  {/* blue fintech glow */}
  <div className="absolute right-[-140px] bottom-20 w-[320px] h-[320px] bg-blue-400/10 blur-[140px] pointer-events-none"></div>

  {/* center subtle emerald */}
  <div className="absolute left-1/2 -translate-x-1/2 top-[40%] w-[400px] h-[400px] bg-emerald-500/8 blur-[160px] pointer-events-none"></div>

  {/* bottom blend */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none"></div>
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            हमारी <span className="text-premium-emerald">परियोजनाएं</span>
          </h2>
          <div className="h-1 w-20 bg-premium-emerald/40 rounded-full"></div>
        </div>

        {/* Projects Grid: GPU-Optimized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="premium-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
                >
              {/* Top Row: Icon & Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${project.bg} ${project.color} shadow-[0_0_35px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                  <project.icon size={28} />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-premium-emerald drop-shadow-[0_0_15px_rgba(58,244,183,0.3)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-lg mb-4">
                {project.desc}
              </p>

              {/* Decorative Bottom Line: CSS-only, No heavy effects */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-premium-emerald/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
