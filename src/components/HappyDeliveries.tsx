import React, { useState } from 'react';
import { Maximize2, X, Users, CheckCircle2 } from 'lucide-react';
import { deliveryImages } from '../data/dealershipData';

export const HappyDeliveries: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="deliveries" className="py-20 bg-[#070707] border-y border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#19D67A]/10 border border-[#19D67A]/20 text-[#19D67A] text-xs font-black uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Customer Smiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wider uppercase mb-4">
            OUR HAPPY <span className="text-[#FF1F2D]">DELIVERIES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every car we sell comes with a promise of trust, quality, and a big smile. Take a look at some of our recent happy customers driving home their dream cars from SK Car Bazar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {deliveryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#151619] border border-white/10 cursor-pointer group shadow-xl"
            >
              <img
                src={img}
                alt={`Happy Delivery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 opacity-90">
                <CheckCircle2 className="w-4 h-4 text-[#19D67A] shrink-0" />
                <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-wider">
                  Verified Purchase
                </span>
              </div>
              
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-[#070707]/80 text-[#FF1F2D] border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 sm:top-8 right-4 sm:right-8 p-3.5 rounded-full bg-[#151619] text-white border border-white/10 hover:bg-[#FF1F2D] hover:border-[#FF1F2D] transition-colors shadow-2xl z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
            <img
              src={selectedImage}
              alt="Happy Customer Delivery Fullscreen"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl pointer-events-auto"
            />
            <div className="mt-6 text-center pointer-events-auto">
              <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-2">
                Another Happy Customer
              </h3>
              <p className="text-sm text-slate-400">
                Thank you for choosing SK Car Bazar, Gorakhpur.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
