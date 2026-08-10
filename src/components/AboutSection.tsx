import React, { useState } from 'react';
import { ShieldCheck, MapPin, Award, Users, Maximize2, X } from 'lucide-react';
import { showroomImages, businessInfo } from '../data/dealershipData';

export const AboutSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 bg-[#070707] border-y border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest">
              LOCAL TRUSTED DEALERSHIP
            </div>

            <h2 className="text-4xl sm:text-5xl font-heading tracking-wider uppercase">
              ABOUT <span className="text-[#FF1F2D]">SK CAR BAZAR</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Located on Medical College Road in Bhathat, Gorakhpur, <strong>SK Car Bazar</strong> is a premier destination for high-quality, verified pre-owned cars. We bridge the gap between quality and affordability with complete transparency and customer-first service.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Every vehicle on our floor undergoes thorough mechanical checks, document verification, and interior detailing before being handed over. From Tata Harrier SUVs to fuel-efficient Maruti Baleno CNGs, we offer cars for every family and budget with easy finance assistance.
            </p>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-3xl font-heading text-[#FF1F2D] tracking-wider">100%</p>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Verified Cars</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-[#FF1F2D] tracking-wider">Gorakhpur</p>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Bhathat Location</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-[#FF1F2D] tracking-wider">Easy</p>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Car Finance</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Photo Gallery */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              {/* Main Showroom Photo */}
              <div
                onClick={() => setSelectedImage(showroomImages[0])}
                className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#151619] border border-white/10 cursor-pointer group shadow-xl"
              >
                <img
                  src={showroomImages[0]}
                  alt="SK Car Bazar Showroom Exterior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 z-10 text-xs font-black text-white flex items-center gap-1.5 uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-[#FF1F2D]" />
                  <span>Main Showroom • Bhathat Gorakhpur</span>
                </div>
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-[#070707]/80 text-[#FF1F2D] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Delivery Photo */}
              <div
                onClick={() => setSelectedImage(showroomImages[1])}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#151619] border border-white/10 cursor-pointer group shadow-xl"
              >
                <img
                  src={showroomImages[1]}
                  alt="Happy Customer Delivery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 z-10 text-[11px] font-black text-white flex items-center gap-1 uppercase tracking-wide">
                  <Users className="w-3 h-3 text-[#FF1F2D]" />
                  <span>Happy Deliveries</span>
                </div>
              </div>

              {/* Showroom Stock Photo */}
              <div
                onClick={() => setSelectedImage(showroomImages[2])}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#151619] border border-white/10 cursor-pointer group shadow-xl"
              >
                <img
                  src={showroomImages[2]}
                  alt="Luxury Cars Display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 z-10 text-[11px] font-black text-white flex items-center gap-1 uppercase tracking-wide">
                  <Award className="w-3 h-3 text-[#FF1F2D]" />
                  <span>Premium Fleet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#151619] text-white border border-white/10 hover:bg-[#FF1F2D] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="SK Car Bazar Dealership"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

