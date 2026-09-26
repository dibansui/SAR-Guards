import Link from "next/link";
import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="w-full px-8 lg:px-24 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Shield className="w-5 h-5 text-indigo-400" />
          <Link href="/" className="font-semibold text-sm tracking-wide text-white">SAR Guards</Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/platform" className="hover:text-white transition-colors">Platform</Link>
          <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="/company" className="hover:text-white transition-colors">Company</Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/login" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Sign in
          </Link>
          {/* Changed button to a Link pointing to /demo */}
          <Link href="/demo" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors">
            Book Demo
          </Link>
        </div>
      </div>
    </header>
  );
}