"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function DemoPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const servicesList = [
    "External Threat Surveillance",
    "Cyber Deception Services",
    "Governance, Risk & Compliance (GRC)",
    "Security Operations & Management",
    "Incident Response & Management",
    "Patch Management as a Service",
    "Identity & Access Management (IDAM)"
  ];

  const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-neutral-200 flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none" />

      <section className="w-full max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-3 tracking-tight">Schedule a Demo</h1>
            <p className="text-neutral-400">Tell us about your infrastructure and we will tailor the walkthrough.</p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">Work Email</label>
                <input type="email" className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">Phone Number</label>
                <input type="tel" className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">Services Interested In</label>
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={containerStagger} 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {servicesList.map((service, idx) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <motion.div 
                      variants={popIn}
                      key={idx}
                      onClick={() => toggleService(service)}
                      className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                        isSelected 
                          ? "bg-indigo-500/10 border-indigo-500/50" 
                          : "bg-[#050505] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-indigo-500" : "bg-white/10"
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`text-sm ${isSelected ? "text-white" : "text-neutral-400"}`}>
                        {service}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
              {selectedServices.length === 0 && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-3 font-medium">
                  You must select at least one service.
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">Your Message</label>
              <textarea rows={4} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none" placeholder="Provide any specific compliance requirements or current challenges..."></textarea>
            </div>

            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium px-4 py-4 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Submit Request <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
