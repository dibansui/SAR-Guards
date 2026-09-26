"use client";

import React, { useRef, useMemo } from "react";
import { 
  Shield, 
  Terminal, 
  Cloud, 
  ArrowRight,
  Fingerprint,
  Search
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full px-8 lg:px-24 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[85vh]">
        <div className="absolute top-0 left-0 w-full h-125 bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.15),transparent_50%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start text-left pt-10 lg:pr-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/8 text-xs font-medium text-neutral-300 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            Platform Update 24.1 is now available
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]"
          >
            Enterprise security, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400">
              architected for scale.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base lg:text-lg text-neutral-400 max-w-xl leading-relaxed"
          >
            Unify your attack surface management, continuous compliance, and threat intelligence into a single, proactive defense platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="flex items-center gap-2 bg-white/3 hover:bg-white/8 text-white border border-white/10 font-medium px-6 py-3 rounded-lg transition-colors group">
              Explore Platform <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center opacity-90"
        >
          <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <DataNodeGlobe />
          </Canvas>
        </motion.div>
      </section>

      {/* Modern Bento Box Feature Grid with Scroll Animations */}
      <section className="w-full px-8 lg:px-24 py-24 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Comprehensive coverage.</h2>
          <p className="text-neutral-400 mt-4 text-base lg:text-lg">
            Move beyond reactive alerts. We engineer secure perimeters by identifying vulnerabilities before they can be exploited.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 p-8 lg:p-10 rounded-2xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-48 h-48 text-indigo-400" />
            </div>
            <div className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center mb-16 lg:mb-24 text-neutral-300">
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-medium text-white mb-3">Attack Surface Management</h3>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-xl">
                Continuous discovery and mapping of your digital footprint. We monitor exposed assets, open ports, and shadowed infrastructure in real-time.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 lg:p-10 rounded-2xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors flex flex-col justify-between"
          >
             <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center mb-16 lg:mb-24 text-neutral-300">
              <Terminal className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-medium text-white mb-3">Offensive Security</h3>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
                Adversary emulation, penetration testing, and zero-day validation tailored to your specific tech stack.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 lg:p-10 rounded-2xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors flex flex-col justify-between"
          >
             <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center mb-16 lg:mb-24 text-neutral-300">
              <Cloud className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-medium text-white mb-3">Cloud Posture</h3>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
                Automated IAM reviews and misconfiguration tracking across AWS, Azure, and Google Cloud environments.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 p-8 lg:p-10 rounded-2xl bg-[#0A0A0A] border border-white/8 hover:border-white/15 transition-colors flex flex-col justify-between"
          >
             <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center mb-16 lg:mb-24 text-neutral-300">
              <Fingerprint className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-medium text-white mb-3">Zero-Trust Architecture</h3>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-xl">
                Implementation of identity-first security perimeters. Every request is verified, authorized, and continuously monitored regardless of origin.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

// Custom 3D Component for the Data Globe
function DataNodeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.2; 
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.1;
      pointsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshBasicMaterial 
          color="#4f46e5" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>
      
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.03} 
          color="#818cf8" 
          transparent 
          opacity={0.6} 
          sizeAttenuation 
        />
      </points>
    </group>
  );
}