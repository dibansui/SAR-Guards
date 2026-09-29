"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Award,
  Mail,
  Plus
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function CompanyPage() {
  const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", bounce: 0.4, duration: 0.6 } 
    }
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-neutral-200 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/8 text-xs font-medium text-neutral-300 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            Our Mission & Leadership
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
            Trust is not granted. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400">
              It is architected.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            SAR Guards was founded on a singular premise: enterprise security requires more than automated tools. It requires seasoned operators who understand the adversary, the infrastructure, and the stakes.
          </p>
        </motion.div>
      </section>

      {/* The Trust & Experience Pillars */}
      <section className="w-full bg-[#0A0A0A] border-y border-white/5 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={slideUp} className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Adversarial Perspective</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We build defensive architectures informed by offensive realities. Our team has decades of combined experience in red teaming and threat emulation.
              </p>
            </motion.div>

            <motion.div variants={slideUp} className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Compliance & Integrity</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Operating within highly regulated sectors, we ensure our zero-trust frameworks seamlessly map to global governance and risk standards.
              </p>
            </motion.div>

            <motion.div variants={slideUp} className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Transparent Partnership</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We do not operate in a black box. Our dashboards, reporting, and incident response retain 100% visibility for our enterprise clients at all times.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Owners Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-medium text-white tracking-tight mb-4">Executive Leadership</h2>
          <p className="text-neutral-400 max-w-2xl">
            Our firm is led by veterans in systems engineering, AI-driven threat mitigation, and deep-stack web architecture.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerStagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Owner 1: Dinesh Chand Yadav */}
          <motion.div variants={popIn} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors relative group">
            <div className="w-20 h-20 rounded-full bg-indigo-950 border border-indigo-500/30 mb-6 flex items-center justify-center overflow-hidden">
              <span className="text-2xl font-medium text-indigo-400">DY</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-1">Dinesh Chand Yadav</h3>
            <p className="text-indigo-400 text-sm font-medium mb-4">Founder & Security Director</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              A cybersecurity veteran spearheading SAR Guards' strategic direction. With extensive experience navigating complex threat landscapes, Dinesh architects the foundational zero-trust principles and operational security standards that protect our enterprise clients.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <button className="text-neutral-500 hover:text-white transition-colors"><FaLinkedin className="w-4 h-4" /></button>
              <button className="text-neutral-500 hover:text-white transition-colors"><Mail className="w-4 h-4" /></button>
            </div>
          </motion.div>

          {/* Owner 2: Devanshu Yadav */}
          <motion.div variants={popIn} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors relative group">
            <div className="w-20 h-20 rounded-full bg-cyan-950 border border-cyan-500/30 mb-6 flex items-center justify-center overflow-hidden">
              <span className="text-2xl font-medium text-cyan-400">DY</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-1">Devanshu Yadav</h3>
            <p className="text-cyan-400 text-sm font-medium mb-4">Lead Full-Stack Architect</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Driving the platform's technological core. Leveraging experience from engineering roles at Sequretek and Icehut, Devanshu merges Next.js, Python, and complex 3D data visualizations into a seamless, high-performance security dashboard.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <button className="text-neutral-500 hover:text-white transition-colors"><FaLinkedin className="w-4 h-4" /></button>
              <button className="text-neutral-500 hover:text-white transition-colors"><Mail className="w-4 h-4" /></button>
            </div>
          </motion.div>

          {/* User Edit Column / Placeholder */}
          <motion.div variants={popIn} className="p-8 rounded-2xl bg-[#050505] border border-dashed border-white/10 hover:border-indigo-500/30 transition-colors flex flex-col items-center justify-center text-center min-h-100 cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-white/3 border border-white/5 mb-4 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
              <Plus className="w-6 h-6 text-neutral-500 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-neutral-300 mb-2 group-hover:text-white transition-colors">Add Team Member</h3>
            <p className="text-neutral-500 text-sm max-w-50">
              Reserved column for your edits. Insert additional executives, board members, or SOC leads here.
            </p>
          </motion.div>

        </motion.div>
      </section>

    </main>
  );
}