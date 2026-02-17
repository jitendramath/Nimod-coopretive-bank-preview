"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "पधारें (Visit Us)",
    line1: "ग्राम सेवा सहकारी समिति भवन,",
    line2: "मुख्य बाजार, निमोद - 341506",
    action: "Get Directions",
    url: "https://maps.google.com/?q=Nimod+Cooperative+Society",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "group-hover:border-rose-400/50"
  },
  {
    icon: Phone,
    title: "कॉल करें (Call Us)",
    line1: "+91 96026 12688",
    line2: "व्यवस्थापक (Manager)",
    action: "Call Now",
    url: "tel:+919602612688",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-400/50"
  },
  {
    icon: Mail,
    title: "ईमेल (Email)",
    line1: "nimodpacs@gmail.com",
    line2: "शिकायत एवं सुझाव हेतु",
    action: "Send Email",
    url: "mailto:nimodpacs@gmail.com",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "group-hover:border-indigo-400/50"
  },
  {
    icon: Clock,
    title: "समय (Timing)",
    line1: "10:00 AM - 05:00 PM",
    line2: "रविवार अवकाश",
    action: "Office Hours",
    url: "#",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "group-hover:border-amber-400/50"
  }
];

export default function ContactInfoGrid() {
  return (
    <section className="relative py-10 z-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.a
              href={card.url}
              target={card.title.includes("Visit") ? "_blank" : "_self"}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 
              backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${card.border}`}
            >
              
              {/* Icon Box */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.bg} ${card.color} transition-transform group-hover:scale-110`}>
                <card.icon size={24} />
              </div>

              {/* Text Content */}
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              
              <div className="space-y-1 mb-6">
                <p className="text-white/60 text-sm">{card.line1}</p>
                <p className="text-white/60 text-sm">{card.line2}</p>
              </div>

              {/* Action Link (Fake Button style) */}
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${card.color}`}>
                {card.action}
                {card.title.includes("Visit") && <ExternalLink size={12} />}
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
