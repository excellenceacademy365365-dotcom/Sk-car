import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car, ChevronRight } from 'lucide-react';
import { businessInfo } from '../data/dealershipData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Available Cars', href: '#available-cars' },
    { name: 'Current Stock', href: '#stock' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Deliveries', href: '#deliveries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070707]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-[#070707]/95 via-[#070707]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FF1F2D] p-0.5 shadow-lg shadow-[#FF1F2D]/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#070707] rounded-[10px] flex items-center justify-center">
                <Car className="w-5 h-5 text-[#FF1F2D]" />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading tracking-wider text-white flex items-center gap-1.5">
                SK CAR <span className="text-[#FF1F2D]">BAZAR</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#151619]/90 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-[#FF1F2D] rounded-full transition-all duration-200 hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-[#FF1F2D] hover:bg-[#B90F1A] text-white shadow-lg shadow-[#FF1F2D]/25 hover:shadow-[#FF1F2D]/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${businessInfo.phone}`}
              className="p-2.5 rounded-xl bg-[#FF1F2D]/10 text-[#FF1F2D] border border-[#FF1F2D]/30 text-xs font-bold flex items-center gap-1 active:scale-95"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#151619] text-slate-200 border border-white/10 hover:text-[#FF1F2D] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#070707]/98 backdrop-blur-xl border-b border-white/10 px-4 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-200 hover:bg-[#151619] hover:text-[#FF1F2D] transition-colors border border-transparent hover:border-white/10"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className="w-full py-3.5 px-4 rounded-xl font-black uppercase tracking-wider bg-[#FF1F2D] text-white text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FF1F2D]/25"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>CALL NOW (9935443061)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

