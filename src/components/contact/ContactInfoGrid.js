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
    url: "https://maps.google.com",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "group-hover:border-rose-500/50"
  },
  {
    icon: Phone,
    title: "कॉल करें (Call Us)",
    line1: "+91 96026 12688",
    line2: "व्यवस्थापक (Manager)",
    action: "Call Now",
    url: "tel:+919602612688",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: Mail,
    title: "ईमेल (Email)",
    line1: "nimodpacs@gmail.com",
    line2: "शिकायत एवं सुझाव हेतु",
    action: "Send Email",
    url: "mailto:nimodpacs@gmail.com",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "group-hover:border-indigo-500/50"
  },
  {
    icon: Clock,
    title: "समय (Timing)",
    line1: "10:00 AM - 05:00 PM",
    line2: "रविवार अवकाश",
    action: "Office Hours",
    url: "#",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50"
  }
];

export default function ContactInfoGrid() {
  return (
    <section className="relative py-12 bg-premium-bg transition-colors duration-500 z-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.a
              href={card.url}
              target={card.title.includes("Visit") ? "_blank" : "_self"}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative p-8 rounded-[2.5rem] bg-premium-card border border-premium-border 
              backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-shadow ${card.border}`}
            >
              
              {/* Icon Box */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${card.bg} ${card.color} transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                <card.icon size={28} />
              </div>

              {/* Text Content */}
              <h3 className="text-premium-text font-bold text-lg md:text-xl mb-3 transition-colors duration-500">
                {card.title}
              </h3>
              
              <div className="space-y-1 mb-8">
                <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500 font-medium">
                  {card.line1}
                </p>
                <p className="text-premium-muted text-sm leading-relaxed transition-colors duration-500 font-medium">
                  {card.line2}
                </p>
              </div>

              {/* Action Link */}
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${card.color}`}>
                {card.action}
                {card.title.includes("Visit") && <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
