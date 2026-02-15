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
    <section id="projects" className="py-24 bg-premium-slate relative overflow-hidden">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        <div className="mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            हमारी <span className="text-premium-emerald">परियोजनाएं</span>
          </h2>
          <div className="h-1 w-20 bg-white/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-premium-charcoal border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Row: Icon & Status */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${project.bg} ${project.color}`}>
                  <project.icon size={28} />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 uppercase tracking-wider">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-premium-emerald transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-lg">
                {project.desc}
              </p>

              {/* Decorative Gradient Line at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-premium-emerald/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
