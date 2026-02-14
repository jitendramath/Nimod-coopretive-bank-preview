"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

// Layout & UI Imports
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";
import StatCard from "@/components/ui/StatCard";

// Main Sections Imports
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Impact from "@/components/sections/Impact";
import Governance from "@/components/sections/Governance";
import Compliance from "@/components/sections/Compliance";

export default function Home() {
  // Activate Scroll Animations
  useScrollReveal();

  return (
    <>
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <About />
        <Services />

        {/* ================= TRANSITION STRIP ================= */}
        <section className="border-t border-b border-border-light bg-gradient-to-r from-mint-100 via-white to-mint-100 py-7">
          <div className="w-[92%] max-w-[1180px] mx-auto text-center">
            <p className="text-[0.95rem] text-ui-soft font-medium reveal">
              समिति की सेवाएं केवल योजनाएं नहीं, बल्कि ग्रामीण जीवन में प्रत्यक्ष रूप से लागू विकास मॉडल हैं।
            </p>
          </div>
        </section>

        <Projects />
        <Impact />

        {/* ================= ACHIEVEMENTS SECTION (Inline) ================= */}
        <section id="achievements" className="py-24 bg-brand-main">
          <div className="w-[92%] max-w-[1180px] mx-auto">
            <SectionHeader 
              title="सम्मान एवं" 
              span="विश्वसनीयता" 
              description="समिति के उत्कृष्ट कार्यों को राज्य एवं जिला स्तर पर विभिन्न अवसरों पर सम्मानित किया गया है।"
            />
            <div className="space-y-5 mt-12">
              {[
                "सहकारी गतिविधियों में उत्कृष्ट प्रदर्शन हेतु जिला स्तर पर सम्मान",
                "बहुउद्देश्यीय सहकारी मॉडल के लिए राज्य स्तरीय सराहना",
                "महिला स्वयं सहायता समूहों के सफल संचालन हेतु विशेष प्रशंसा"
              ].map((item, i) => (
                <div key={i} className="relative pl-9 text-[0.95rem] text-ui-soft reveal">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-mint-500 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INSTITUTION DIVIDER ================= */}
        <section className="border-t border-b border-border-light bg-gradient-to-r from-mint-100 via-white to-mint-100 py-7">
          <div className="w-[92%] max-w-[1180px] mx-auto text-center">
            <p className="text-[0.95rem] text-ui-soft font-medium reveal">
              यह केवल एक संस्था नहीं, बल्कि ग्रामीण आत्मनिर्भरता की एक कार्यशील संरचना है।
            </p>
          </div>
        </section>

        {/* ================= FINANCIAL STRENGTH (Inline) ================= */}
        <section className="py-24 bg-brand-white">
          <div className="w-[92%] max-w-[1180px] mx-auto">
            <SectionHeader 
              title="वित्तीय" 
              span="सुदृढ़ता" 
              description="समिति द्वारा अल्पकालीन फसली ऋण के अतिरिक्त कुल 8 प्रकार के ऋण सदस्यों को उपलब्ध करवाए जाते हैं।"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">
              <BentoCard title="मिनी बैंक जमाएं">
                समिति के मिनी बैंक व्यवसाय में सदस्यों की 30 करोड़ रुपये से अधिक की जमा राशि सुरक्षित रूप से संचालित है।
              </BentoCard>
              <BentoCard title="बहु-राज्यीय सहभागिता">
                राष्ट्रीय स्तर पर गठित तीन बहुराज्यीय सहकारी समितियों की सदस्यता ग्रहण कर 7 लाख रुपये का निवेश किया गया है।
              </BentoCard>
              <BentoCard title="शाखा नेटवर्क">
                वर्तमान में समिति की कुल पांच शाखाएं संचालित हैं, जिससे ग्रामीणों को स्थानीय स्तर पर सुविधाएं मिलती हैं।
              </BentoCard>
            </div>
          </div>
        </section>

        {/* ================= SOLAR MEGA POWER (Inline) ================= */}
        <section className="py-24 bg-brand-main">
          <div className="w-[92%] max-w-[1180px] mx-auto">
            <SectionHeader 
              title="ऊर्जा आत्मनिर्भरता एवं" 
              span="राजस्व मॉडल" 
              description="पीएम कुसुम योजना के अंतर्गत समिति द्वारा 2.40 मेगावाट क्षमता का सोलर प्लांट स्थापित किया गया है।"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-12 mb-10">
              <StatCard value="2.40 MW" label="सौर ऊर्जा क्षमता" />
              <StatCard value="₹10 लाख+" label="प्रतिमाह बिजली बिक्री" />
              <StatCard value="0" label="कार्यालय बिजली व्यय" />
            </div>
            <p className="text-[1.05rem] text-ui-soft max-w-[900px] leading-relaxed reveal">
              कार्यालय भवन की छत पर स्थापित सौर संयंत्र से विद्युत व्यय शून्य हो गया है, जबकि अतिरिक्त ऊर्जा विक्रय से समिति को नियमित आय प्राप्त हो रही है।
            </p>
          </div>
        </section>

        {/* ================= OUTREACH & SOCIAL (Inline) ================= */}
        <section id="outreach" className="py-24 bg-brand-white">
          <div className="w-[92%] max-w-[1180px] mx-auto">
            <SectionHeader 
              title="ग्राम स्तर तक" 
              span="पहुंच" 
              description="निमोद ग्राम सेवा सहकारी समिति केवल कार्यालय आधारित संस्था नहीं है, बल्कि सेवाओं को गांव–गांव और ढाणी–ढाणी तक पहुंचाने के लिए सक्रिय रूप से कार्यरत है।"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
              <BentoCard title="मोबाइल वैन सेवा">
                समिति के पास एक मोबाइल वैन उपलब्ध है, जिसके माध्यम से उपभोक्ता उत्पादों एवं सेवाओं की सीधी आपूर्ति की जाती है।
              </BentoCard>
              <BentoCard title="मेडिकल शॉप">
                ग्रामीणों को आवश्यक दवाइयों की समय पर उपलब्धता सुनिश्चित करने हेतु समिति द्वारा मेडिकल शॉप का संचालन किया जा रहा है।
              </BentoCard>
              <BentoCard title="पुस्तकालय">
                दो पुस्तकालयों का संचालन कर छात्रों एवं युवाओं को अध्ययन एवं प्रतियोगी परीक्षाओं की तैयारी हेतु संसाधन उपलब्ध कराए जा रहे हैं।
              </BentoCard>
              <BentoCard title="सुपर मॉल">
                1200 वर्ग फीट क्षेत्र में विकसित सुपर मॉल एवं दो उपभोक्ता वस्तु दुकानों के माध्यम से गुणवत्तापूर्ण सामग्री उपलब्ध कराई जाती है।
              </BentoCard>
            </div>
          </div>
        </section>

        {/* ================= ASSETS & AGRICULTURE (Inline) ================= */}
        <section className="py-24 bg-brand-main">
          <div className="w-[92%] max-w-[1180px] mx-auto">
            <SectionHeader 
              title="परिसंपत्तियां एवं" 
              span="कृषि सहयोग" 
              description="समिति के पास अपनी 1.58 हेक्टेयर भूमि उपलब्ध है, जहां से कृषि आधारित व्यापारिक गतिविधियों का संचालन किया जाता है।"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
              <StatCard value="2500 MT" label="कुल गोदाम क्षमता" />
              <BentoCard title="कस्टम हायरिंग सेंटर">
                समिति द्वारा दो कस्टम हायरिंग सेंटर संचालित हैं, जहां किसानों को आधुनिक कृषि उपकरण किराये पर उपलब्ध कराए जाते हैं।
              </BentoCard>
              <BentoCard title="धर्म कांटा">
                समिति द्वारा संचालित धर्म कांटा किसानों को पारदर्शी तौल सुविधा प्रदान करता है, जिससे व्यापार में विश्वास बढ़ता है।
              </BentoCard>
            </div>
          </div>
        </section>

        {/* ================= FUTURE EXPANSION (Inline) ================= */}
        <section className="py-24 bg-brand-white">
          <div className="w-[92%] max-w-[1180px] mx-auto">
            <SectionHeader title="भविष्य की" span="दिशा" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">
              <BentoCard title="एफपीओ (NCDC)">
                एनसीडीसी द्वारा समिति को एक एफपीओ आवंटित किया जा चुका है, जिसका संचालन शीघ्र प्रारंभ किया जाएगा।
              </BentoCard>
              <BentoCard title="पेट्रोल पंप परियोजना">
                समिति द्वारा पेट्रोल पंप संचालन हेतु आवेदन किया जा चुका है, जिससे भविष्य में अतिरिक्त राजस्व स्रोत विकसित होगा।
              </BentoCard>
              <BentoCard title="मॉडल संस्था">
                निमोद सहकारी समिति राज्य की अन्य सहकारी समितियों के लिए एक अनुकरणीय मॉडल प्रस्तुत कर रही है।
              </BentoCard>
            </div>
          </div>
        </section>

        <Governance />
        <Compliance />

        {/* ================= CLOSING SECTION ================= */}
        <section className="py-[120px] relative overflow-hidden bg-brand-main">
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background: `radial-gradient(1000px 300px at 50% -10%, var(--mint-300), transparent)`
            }}
          ></div>
          <div className="w-[92%] max-w-[980px] mx-auto text-center relative z-10">
            <h2 className="text-[clamp(2.2rem,4vw,2.8rem)] font-bold mb-6 text-ui-main reveal">
              सहकार से <span className="text-mint-700">समृद्धि</span>
            </h2>
            <p className="text-[1.05rem] text-ui-soft reveal delay-100">
              निमोद ग्राम सेवा सहकारी समिति केवल एक संस्था नहीं, बल्कि ग्रामीण आत्मनिर्भरता, नवाचार एवं विश्वास पर आधारित एक सतत विकास मॉडल है।
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
