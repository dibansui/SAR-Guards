"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Database, 
  ShieldCheck, 
  Fingerprint, 
  Activity,
  Server,
  Cloud,
  Users,
  Box,
  Check,
  ArrowRight
} from "lucide-react";

export default function PlatformPage() {
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

  // FIX: Added explicitly typed Variants for Framer Motion to resolve TS errors
  const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", bounce: 0.4, duration: 0.6 } 
    }
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-neutral-200 overflow-x-hidden">
      
      {/* 1. Interactive Platform Architecture Diagram */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mb-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
            Unified Security Architecture
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A cohesive ecosystem ingesting data from any source to provide defense-in-depth and defense-in-breadth.
          </p>
        </motion.div>

        {/* CSS-Grid Architecture Map with Sequential Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerStagger}
          className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08),transparent_70%)] pointer-events-none" />

          {/* Layer 1: Data Ingestion */}
          <div className="relative z-10 mb-8">
            <motion.div variants={slideUp} className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">
              Ingest Data From Any Source
            </motion.div>
            <motion.div variants={containerStagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Cloud, label: "Cloud & Hybrid" },
                { icon: Server, label: "Network & Legacy" },
                { icon: Users, label: "Human & Identity" },
                { icon: Box, label: "Third-Party APIs" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={popIn} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/3 border border-white/5">
                  <item.icon className="w-5 h-5 text-indigo-400 mb-2" />
                  <span className="text-sm font-medium text-neutral-300">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Layer 2: Core Platform Engine */}
          <motion.div variants={slideUp} className="relative z-10 bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-8 mb-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Data Lake (Pulsing Animation) */}
              <motion.div 
                animate={{ boxShadow: ["0px 0px 0px rgba(34,211,238,0)", "0px 0px 20px rgba(34,211,238,0.2)", "0px 0px 0px rgba(34,211,238,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="shrink-0 flex flex-col items-center justify-center p-6 bg-[#050505] rounded-xl border border-white/10 w-48"
              >
                <Database className="w-10 h-10 text-cyan-400 mb-3" />
                <span className="font-medium text-white text-center">Observability<br/>Data Lake</span>
              </motion.div>
              
              {/* AI Modules */}
              <motion.div variants={containerStagger} className="grow grid grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                {["Visibility", "Response", "Remediation", "Gen AI Analytics", "Prioritization"].map((module, idx) => (
                  <motion.div key={idx} variants={popIn} className="flex items-center justify-center p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-xs font-medium text-indigo-200 text-center">
                    {module}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Layer 3: Product & Service Pillars (Including IDAM) */}
          <div className="relative z-10">
            <motion.div variants={slideUp} className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">
              Modular Security Capabilities
            </motion.div>
            <motion.div variants={containerStagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div variants={slideUp} className="p-5 rounded-xl bg-white/3 border border-white/5 hover:border-indigo-500/50 transition-colors">
                <ShieldCheck className="w-6 h-6 text-indigo-400 mb-3" />
                <h3 className="font-medium text-white mb-1">XDR & NG SIEM</h3>
                <p className="text-xs text-neutral-500">Extended detection and response.</p>
              </motion.div>
              
              <motion.div variants={slideUp} className="p-5 rounded-xl bg-white/3 border border-white/5 hover:border-indigo-500/50 transition-colors ring-1 ring-indigo-500/20">
                <Fingerprint className="w-6 h-6 text-cyan-400 mb-3" />
                <h3 className="font-medium text-white mb-1">IDAM</h3>
                <p className="text-xs text-neutral-500">Identity & Access Management.</p>
              </motion.div>

              <motion.div variants={slideUp} className="p-5 rounded-xl bg-white/3 border border-white/5 hover:border-indigo-500/50 transition-colors">
                <Activity className="w-6 h-6 text-indigo-400 mb-3" />
                <h3 className="font-medium text-white mb-1">GRC Manager</h3>
                <p className="text-xs text-neutral-500">Governance, Risk, and Compliance.</p>
              </motion.div>

              <motion.div variants={slideUp} className="p-5 rounded-xl bg-white/3 border border-white/5 hover:border-indigo-500/50 transition-colors">
                <Database className="w-6 h-6 text-indigo-400 mb-3" />
                <h3 className="font-medium text-white mb-1">Endpoint Defenses</h3>
                <p className="text-xs text-neutral-500">Next-gen EDR and Patching.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. Lead Generation / Service Selection Form */}
      

    </main>
  );
}