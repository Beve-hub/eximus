"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./data";
import Logo1 from "../../public/assests/Logo white.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-amber-500/10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 mb-6">
              <Image
                src={Logo1}
                alt="Company Logo"
                className="h-25 w-auto brightness-110 drop-shadow-xl"
                priority
              />
            </Link>

            <p className="text-slate-400 text-[15.5px] leading-relaxed max-w-md">
              Engineering solutions today. Energy tomorrow.
            </p>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-amber-400 uppercase text-xs tracking-[2px] font-semibold mb-6">Company</p>
            <ul className="space-y-3.5 text-sm text-slate-300">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <p className="text-amber-400 uppercase text-xs tracking-[2px] font-semibold mb-6">Services</p>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Downstream</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Energy Transition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HSE & Sustainability</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-amber-400 uppercase text-xs tracking-[2px] font-semibold mb-6">Contact</p>
            
            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-slate-400 text-xs mb-1">HEAD OFFICE</p>
                <p>Abuja, FCT, Nigeria</p>
              </div>
            

              <div>
                <p className="text-slate-400 text-xs mb-1">EMAIL</p>
                <a href="mailto:info@yourcompany.com" className="hover:text-white transition-colors">
                  info@yourcompany.com
                </a>
              </div>

             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-amber-400 font-medium">Your Company Ltd</span>. 
            All Rights Reserved.
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Sustainability Report</a>

            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <span>Operations Running 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;