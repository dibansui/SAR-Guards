import Link from "next/link";
import { 
  Shield, 
  Cloud, 
  Fingerprint, 
  Activity,
  Headset,
  PhoneCall,
  LayoutDashboard,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 pt-16 pb-8 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: SAR Guards Logo & Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <Shield className="w-6 h-6 text-indigo-500" />
              <span className="font-semibold text-lg tracking-wide text-white">SAR Guards</span>
            </div>
            <div className="space-y-3 text-sm text-neutral-400">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-indigo-500/70" />
                <span>Sanpla Bhawan, Jagatpura<br />Jaipur, Rajasthan 302017</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-indigo-500/70" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-indigo-500/70" />
                <span>secure@sarguards.com</span>
              </p>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-medium mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="group flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                  <Activity className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400" />
                  Attack Surface
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                  <Cloud className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400" />
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                  <Fingerprint className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400" />
                  Zero-Trust Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-medium mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="group flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                  <Headset className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400" />
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                  <PhoneCall className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400" />
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/login" className="group flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                  <LayoutDashboard className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400" />
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div>
            <h4 className="text-white font-medium mb-6">Newsletter</h4>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-l-md px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 placeholder:text-neutral-600"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <FaFacebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>Copyright © {new Date().getFullYear()} SAR Guards, LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}