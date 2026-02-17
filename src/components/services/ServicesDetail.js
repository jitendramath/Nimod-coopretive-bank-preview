"use client";

import { motion } from "framer-motion";

const details = [
  {
    title: "कृषि एवं किसान सहायता",
    text: "समिति किसानों को समय पर ऋण, बीज, उर्वरक और आवश्यक कृषि संसाधन उपलब्ध कराकर उत्पादन बढ़ाने में सहायता करती है। आधुनिक कृषि तकनीकों को अपनाने हेतु मार्गदर्शन भी प्रदान किया जाता है।",
    color: "from-emerald-400 to-green-600",
  },
  {
    title: "ग्रामीण वित्तीय सेवाएं",
    text: "ग्रामीण नागरिकों को सुरक्षित बैंकिंग, जमा एवं निकासी, डिजिटल भुगतान और वित्तीय मार्गदर्शन प्रदान कर वित्तीय समावेशन को बढ़ावा दिया जाता है।",
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "भंडारण एवं गोदाम",
    text: "आधुनिक गोदाम सुविधा किसानों को अपनी उपज सुरक्षित रखने और सही समय पर बेहतर बाजार मूल्य प्राप्त करने का अवसर प्रदान करती है।",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "ऊर्जा एवं विकास परियोजनाएं",
    text: "सौर ऊर्जा और अन्य ग्रामीण विकास परियोजनाओं के माध्यम से समिति आत्मनिर्भर और सतत विकास की दिशा में कार्यरत है।",
    color: "from-amber-400 to-yellow-500",
  },
  {
    title: "महिला एवं युवा सशक्तिकरण",
    text: "महिला स्वयं सहायता समूहों और युवाओं को स्वरोजगार एवं प्रशिक्षण के माध्यम से आर्थिक रूप से सशक्त बनाने की दिशा में निरंतर प्रयास।",
    color: "from-pink-400 to-rose-500",
  },
];

export default function ServicesDetail() {
  return (
    <section className="relative py-20 md:py-28 bg-[#050507] overflow-hidden">

      {/* glow */}
      <div className="absolute top-[-200px] right-[-120px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-[1100px] mx-auto relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem] font-bold mb-6">
            सेवाओं की  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-rose-400 to-sky-400">
              विस्तृत जानकारी
            </span>
          </h2>

          <p className="text-white/60 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            हमारी सेवाएं केवल वित्तीय सहायता तक सीमित नहीं हैं, बल्कि ग्रामीण समाज के 
            समग्र विकास और आत्मनिर्भरता की दिशा में कार्य करती हैं।
          </p>
        </motion.div>

        {/* timeline style */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-14">

            {details.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-rose-500 shadow-lg" />

                {/* card */}
                <div className="w-full md:w-[48%] ml-12 md:ml-0">
                  <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition duration-500 backdrop-blur-xl">

                    <div className={`inline-block px-4 py-1 rounded-full text-xs mb-4 bg-gradient-to-r ${item.color} text-black font-semibold`}>
                      सेवा
                    </div>

                    <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-sm md:text-[15px] leading-relaxed">
                      {item.text}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}