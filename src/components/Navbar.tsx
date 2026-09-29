"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="w-full px-6 lg:px-24 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Shield className="w-5 h-5 text-indigo-400" />
          <Link href="/" onClick={closeMenu} className="font-semibold text-sm tracking-wide text-white">
            SAR Guards
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/platform" className="hover:text-white transition-colors">Platform</Link>
          <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="/company" className="hover:text-white transition-colors">Company</Link>
        </nav>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/login" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/demo" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors">
            Book Demo
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="md:hidden text-neutral-400 hover:text-white transition-colors p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-[#050505] border-b border-white/10 shadow-2xl md:hidden flex flex-col z-40"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <Link href="/platform" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">
                Platform
              </Link>
              <Link href="/solutions" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">
                Solutions
              </Link>
              <Link href="/company" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">
                Company
              </Link>
              
              <div className="h-px w-full bg-white/10 my-2"></div>
              
              <Link href="/login" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">
                Sign in
              </Link>
              <Link href="/demo" onClick={closeMenu} className="w-full text-center text-sm font-medium bg-white text-black px-4 py-3 rounded-md hover:bg-neutral-200 transition-colors">
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}