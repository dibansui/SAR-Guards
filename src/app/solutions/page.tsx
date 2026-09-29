"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Shield, 
  Fingerprint, 
  Database, 
  Terminal, 
  Activity, 
  Lock, 
  Server, 
  Zap, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
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
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/8 text-xs font-medium text-neutral-300 mb-6">
            <Zap className="w-4 h-4 text-indigo-400" />
            Strategic Business Outcomes
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.05]">
            Proactive Defense for the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Modern Enterprise.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Consolidation of offensive testing, continuous visibility, and zero-trust orchestration tailored to critical industries.
          </p>
        </motion.div>
      </section>

      {/* 2. Solutions Bento Box */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerStagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card A: Risk & Compliance */}
          <motion.div variants={popIn} className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8">
              <Shield className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">Risk & Compliance (GRC)</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Implement identity-first perimeters and automate audit-readiness for SOC 2, ISO 27001, and GDPR using consolidated telemetry and access controls.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                Automated evidence collection
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                Continuous IDAM auditing
              </li>
            </ul>
          </motion.div>

          {/* Card B: Critical Infrastructure */}
          <motion.div variants={popIn} className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
              <Server className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">Critical Infrastructure (OT/ICS)</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Air-gapped networks are no longer immune. Deploy passive monitoring and anomaly detection optimized specifically for fragile industrial environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                Zero-impact passive asset discovery
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                SCADA vulnerability mapping
              </li>
            </ul>
          </motion.div>

          {/* Card C: M&A Diligence */}
          <motion.div variants={popIn} className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">M&A Cyber Due Diligence</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Never inherit unknown risks. Execute rapid, offensive attack surface assessments on target companies to secure integrations before the deal closes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                Dark web credential exposure checks
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                Shadow IT infrastructure discovery
              </li>
            </ul>
          </motion.div>

          {/* Card D: Supply Chain */}
          <motion.div variants={popIn} className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-8">
              <Lock className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">Software Supply Chain</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Defend against the next Log4j. Ingest third-party API data and validate code signatures continuously throughout your Software Development Life Cycle.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0"></div>
                Third-party vendor risk scoring
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0"></div>
                SBOM (Software Bill of Materials) tracking
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Strategic Differentiators & Proof Points */}
      <section className="w-full bg-[#0A0A0A] border-y border-white/5 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center md:text-left">
              <Terminal className="w-8 h-8 text-indigo-400 mx-auto md:mx-0 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Adversary Emulation</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">We don't just scan; we replicate sophisticated attack paths to continuously validate your defensive controls.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center md:text-left">
              <Database className="w-8 h-8 text-cyan-400 mx-auto md:mx-0 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Data Lake Consolidation</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">Ingest telemetry from Network, Identity, and Cloud environments into a single, high-fidelity observability layer.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center md:text-left">
              <Fingerprint className="w-8 h-8 text-purple-400 mx-auto md:mx-0 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Consolidated Zero-Trust</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">Unified orchestration where endpoint health states inform identity authentication in real-time, every time.</p>
            </motion.div>
          </div>

          {/* Proof Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/5">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">3.2<span className="text-indigo-500 text-2xl">hr</span></div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Avg MTTR for Zero-Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">100<span className="text-cyan-500 text-2xl">%</span></div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Audit Readiness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">$2<span className="text-purple-500 text-2xl">M</span></div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Avg Tooling Consolidation Savings</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Ready to secure your perimeter?</h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
            Stop reacting to isolated alerts. Start orchestrating a unified defense strategy tailored to your architecture.
          </p>
          <Link href="/demo" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-lg transition-colors group">
            Schedule a Demo Walkthrough 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}