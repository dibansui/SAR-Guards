"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="w-full max-w-sm relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
            <Shield className="w-6 h-6 text-indigo-400" />
          </div>
        </div>
        
        <h1 className="text-2xl font-medium text-white text-center tracking-tight mb-2">
          Welcome back
        </h1>
        <p className="text-neutral-400 text-sm text-center mb-8">
          Enter your credentials to access the console.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">
              Work Email
            </label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-neutral-600"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide">
                Password
              </label>
              <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                Forgot?
              </Link>
            </div>
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-2.5 pr-10 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-neutral-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium px-4 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors mt-6">
            Sign In <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-neutral-500 mt-8">
          Protected by Cerebra Zero-Trust Architecture.
        </p>
      </div>
    </div>
  );
}