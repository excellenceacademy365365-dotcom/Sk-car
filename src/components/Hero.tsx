import React, { useState } from 'react';
import { Phone, CheckCircle2, ShieldCheck, ArrowRight, Star, MapPin, Maximize2, X, Navigation } from 'lucide-react';
import { businessInfo, showroomImages } from '../data/dealershipData';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#stock');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#070707]">
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={showroomImages[0]}
          alt="SK Car Bazar Luxury Showroom"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125 transition-all duration-700"
        />
        {/* Layered dark overlays for flawless contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-[#070707]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/90" />
      </div>

      {/* Decorative ambient glowing red circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF1F2D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B90F1A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Trust Badges & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151619]/90 border border-white/10 backdrop-blur-md shadow-xl">
              <div className="flex text-[#FF1F2D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF1F2D] text-[#FF1F2D]" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                GORAKHPUR'S #1 RATED PRE-OWNED CAR DEALERSHIP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading text-white tracking-wider leading-[0.95] uppercase">
              FIND YOUR PERFECT <br />
              <span className="text-[#FF1F2D] font-heading tracking-wider">
                PRE-OWNED CAR
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
              Quality Used Cars. Transparent Deals. Easy Finance. Visit our physical showroom in Bhathat, Gorakhpur.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#stock"
                onClick={handleExploreClick}
                className="px-8 py-4 rounded-xl font-black text-white bg-[#FF1F2D] hover:bg-[#B90F1A] shadow-xl shadow-[#FF1F2D]/25 hover:shadow-[#FF1F2D]/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-xs tracking-widest uppercase"
              >
                <span>EXPLORE CURRENT STOCK</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={`tel:${businessInfo.phone}`}
                className="px-8 py-4 rounded-xl font-black text-white bg-[#151619] hover:bg-[#1A1B1F] border border-white/10 hover:border-[#FF1F2D]/50 backdrop-blur-md shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-xs tracking-widest uppercase"
              >
                <Phone className="w-5 h-5 text-[#FF1F2D]" />
                <span>CALL 9935443061</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                <span>Quality Checked</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                <span>Easy Finance</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                <span>Transparent Price</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#19D67A] shrink-0" />
                <span>Verified Store</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Featured Shop Image Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#151619]/95 border border-white/15 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl relative group">
              
              {/* Header Label inside Card */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#FF1F2D]/10 text-[#FF1F2D]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-wider">
                    OUR SHOWROOM & SHOP
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#19D67A]/10 border border-[#19D67A]/20 text-[#19D67A] text-[10px] font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#19D67A] animate-pulse" />
                  <span>OPEN TODAY</span>
                </div>
              </div>

              {/* Main Active Shop Image Container */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#070707] border border-white/10 cursor-pointer group/img shadow-xl"
              >
                <img
                  src={showroomImages[0]}
                  alt="SK Car Bazar Shop Showroom Bhathat Gorakhpur"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                
                {/* Image Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/30" />

                {/* Location Badge on Image */}
                <div className="absolute bottom-3 left-3 right-12 z-10">
                  <p className="text-xs font-black text-white uppercase tracking-wider drop-shadow-md">
                    SK CAR BAZAR
                  </p>
                  <p className="text-[11px] font-medium text-slate-300 drop-shadow">
                    Medical College Road, Bhathat, Gorakhpur
                  </p>
                </div>

                {/* Zoom Icon Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-[#070707]/80 text-[#FF1F2D] border border-white/10 backdrop-blur-md opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all shadow-lg"
                  title="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Quick Directions Link */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-400 font-medium text-[11px]">
                  📍 Near Medical College Road, Bhathat
                </span>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FF1F2D] hover:text-[#B90F1A] font-black text-[11px] uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 fill-current" />
                  <span>DIRECTIONS</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Shop Image Modal Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-5xl w-full bg-[#151619] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#070707]">
              <div>
                <h3 className="text-xl font-heading text-white uppercase tracking-wider">
                  SK CAR BAZAR SHOWROOM
                </h3>
                <p className="text-xs text-slate-400">
                  Medical College Road, Bhathat, Gorakhpur
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2.5 rounded-full bg-[#151619] text-white border border-white/10 hover:bg-[#FF1F2D] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={showroomImages[0]}
                alt="SK Car Bazar Showroom View"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#070707] flex flex-col sm:flex-row items-center justify-end gap-4">

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#FF1F2D] hover:bg-[#B90F1A] text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#FF1F2D]/20 transition-all"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};


