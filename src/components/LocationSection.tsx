import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/dealershipData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#070707] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest mb-3">
            STORE LOCATION & DIRECTIONS
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider uppercase">
            VISIT <span className="text-[#FF1F2D]">SK CAR BAZAR</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Visit our physical showroom in Bhathat, Gorakhpur to inspect and test drive your preferred pre-owned car.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Details & Info Card */}
          <div className="lg:col-span-5 bg-[#151619] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#FF1F2D] text-white shrink-0 shadow-lg shadow-[#FF1F2D]/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white uppercase tracking-wider">
                    SK CAR BAZAR
                  </h3>
                  <p className="text-xs font-black text-[#FF1F2D] uppercase tracking-wide mt-1">
                    Medical College Road, Bhathat, Gorakhpur
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    NH24, Medical College Road, Bhathat, Chakkhan Mohammad, Uttar Pradesh 273306
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5 space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-black tracking-wider">Contact Phone</span>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="font-black text-white hover:text-[#FF1F2D] transition-colors"
                    >
                      +91 9935443061
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#FF1F2D] shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-black tracking-wider">Showroom Timings</span>
                    <span className="font-semibold text-slate-200">{businessInfo.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-6">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest bg-[#FF1F2D] text-white hover:bg-[#B90F1A] flex items-center justify-center gap-2.5 shadow-xl shadow-[#FF1F2D]/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <a 
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-7 bg-[#151619] border border-white/10 rounded-3xl overflow-hidden shadow-xl min-h-[350px] relative block group cursor-pointer"
          >
            {/* Invisible overlay to capture clicks and redirect */}
            <div className="absolute inset-0 z-10" />
            
            <iframe
              title="SK Car Bazar Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d83.37!3d26.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzM2LjAiTiA4M8KwMjInMTI4LjAiRQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0 filter grayscale invert contrast-125 opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute top-4 right-4 bg-[#070707]/90 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold text-slate-200 flex items-center gap-1.5 z-20 pointer-events-none group-hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[#19D67A] animate-pulse" />
              <span>Showroom Open Today</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

