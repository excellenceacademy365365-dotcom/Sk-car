import React from 'react';
import { Car, Phone, MapPin, ChevronRight, Clock } from 'lucide-react';
import { businessInfo } from '../data/dealershipData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Current Stock', href: '#stock' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070707] text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF1F2D] p-0.5 shadow-md shadow-[#FF1F2D]/30">
                <div className="w-full h-full bg-[#070707] rounded-[10px] flex items-center justify-center">
                  <Car className="w-5 h-5 text-[#FF1F2D]" />
                </div>
              </div>
              <span className="text-3xl font-heading tracking-wider text-white">
                SK CAR <span className="text-[#FF1F2D]">BAZAR</span>
              </span>
            </a>

            <p className="text-[#FF1F2D] font-black text-xs uppercase tracking-widest">
              Quality Pre-Owned Cars in Gorakhpur
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted local destination for verified pre-owned cars, transparent pricing, easy finance assistance, and customer satisfaction in Bhathat, Gorakhpur.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-[11px] font-black uppercase tracking-wider">
                ✓ Quality Checked Vehicles
              </span>
              <span className="px-3 py-1 rounded-full bg-[#19D67A]/10 border border-[#19D67A]/20 text-[#19D67A] text-[11px] font-black uppercase tracking-wider">
                ✓ Easy Finance
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-200">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FF1F2D] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FF1F2D]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-200">
              Dealership Info
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF1F2D] shrink-0 mt-0.5" />
                <span>
                  NH24, Medical College Road, Bhathat, Gorakhpur, Uttar Pradesh 273306
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="font-bold text-white hover:text-[#FF1F2D] transition-colors"
                >
                  +91 9935443061
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                <span>{businessInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/5 text-center text-xs text-slate-500 font-medium flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SK Car Bazar. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-600 uppercase tracking-wider">
            Medical College Road, Bhathat, Gorakhpur • Pre-Owned Cars Dealership
          </p>
        </div>
      </div>
    </footer>
  );
};

