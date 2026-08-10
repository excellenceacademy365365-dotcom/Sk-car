import React, { useState, useEffect } from 'react';
import { X, Phone, Calendar, Fuel, Gauge, User, CheckCircle2, ChevronLeft, ChevronRight, Banknote, ShieldCheck, Maximize2 } from 'lucide-react';
import { Vehicle } from '../types';
import { businessInfo } from '../data/dealershipData';

interface VehicleDetailsModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({
  vehicle,
  onClose,
  onNext,
  onPrev,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [vehicle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreenImage) {
          setIsFullscreenImage(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isFullscreenImage]);

  if (!vehicle) return null;

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappPhone}?text=${encodeURIComponent(
    vehicle.whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070707]/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Lightbox / Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#151619] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070707]/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-[#FF1F2D] text-white">
              {vehicle.badge || 'VERIFIED'}
            </span>
            <h2 className="text-xl sm:text-2xl font-heading text-white tracking-wider uppercase">
              {vehicle.name} <span className="text-[#FF1F2D] font-heading">({vehicle.variant})</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="p-2 rounded-xl bg-[#0D0D0F] text-slate-300 hover:text-[#FF1F2D] hover:bg-[#1A1B1F] transition-colors border border-white/10"
                title="Previous Car"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="p-2 rounded-xl bg-[#0D0D0F] text-slate-300 hover:text-[#FF1F2D] hover:bg-[#1A1B1F] transition-colors border border-white/10"
                title="Next Car"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0D0D0F] text-slate-300 hover:bg-[#FF1F2D] hover:text-white transition-colors border border-white/10"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Main Gallery Image View */}
          <div className="relative rounded-2xl overflow-hidden bg-[#070707] aspect-[16/9] group">
            <img
              src={vehicle.images[selectedImageIndex] || vehicle.images[0]}
              alt={vehicle.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent pointer-events-none" />

            {/* Price Badge on Image */}
            <div className="absolute bottom-4 left-4 z-10 bg-[#070707]/90 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                Asking Price
              </p>
              <p className="text-3xl font-heading text-[#FF1F2D] tracking-wider">
                {vehicle.price}
              </p>
            </div>

            {/* Fullscreen Trigger */}
            <button
              onClick={() => setIsFullscreenImage(true)}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#070707]/80 border border-white/10 text-slate-200 hover:text-[#FF1F2D] backdrop-blur-md transition-colors"
              title="View Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnail Gallery Row */}
          {vehicle.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {vehicle.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#FF1F2D] scale-105 shadow-md shadow-[#FF1F2D]/30'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Specifications Grid */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
              Vehicle Overview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#0D0D0F] p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-[#FF1F2D] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Registration</span>
                </div>
                <p className="text-sm font-extrabold text-slate-100">{vehicle.year}</p>
              </div>

              <div className="bg-[#0D0D0F] p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-[#FF1F2D] mb-1">
                  <Fuel className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Fuel Type</span>
                </div>
                <p className="text-sm font-extrabold text-slate-100">{vehicle.fuel}</p>
              </div>

              <div className="bg-[#0D0D0F] p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-[#FF1F2D] mb-1">
                  <Gauge className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Kilometers</span>
                </div>
                <p className="text-sm font-extrabold text-slate-100">{vehicle.kilometers}</p>
              </div>

              <div className="bg-[#0D0D0F] p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-[#FF1F2D] mb-1">
                  <User className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Ownership</span>
                </div>
                <p className="text-sm font-extrabold text-slate-100">{vehicle.owner}</p>
              </div>
            </div>
          </div>

          {/* Finance Facility Box */}
          <div className="p-4 rounded-2xl bg-[#0D0D0F] border border-[#FF1F2D]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#FF1F2D] text-white shrink-0">
                <Banknote className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Easy Finance & Down Payment
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {vehicle.finance} • {vehicle.downPayment ? `Down Payment: ${vehicle.downPayment}` : 'Flexible monthly EMIs available'}
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${businessInfo.whatsappPhone}?text=${encodeURIComponent(
                `Hello SK Car Bazar, I want to inquire about finance for ${vehicle.name} (${vehicle.variant}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#FF1F2D] text-white font-black text-xs uppercase tracking-wider hover:bg-[#B90F1A] transition-colors shrink-0"
            >
              Check Loan Eligibility
            </a>
          </div>

          {/* Complete Features List */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#19D67A]" />
              <span>Features & Specifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicle.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0D0D0F] border border-white/5 text-xs font-bold text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#19D67A] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-[#070707]/90 grid grid-cols-2 gap-3">
          <a
            href={`tel:${businessInfo.phone}`}
            className="py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider bg-[#1A1B1F] hover:bg-[#25272D] text-white flex items-center justify-center gap-2 border border-white/10 hover:border-[#FF1F2D]/50 transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#FF1F2D]" />
            <span>CALL NOW (9935443061)</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider bg-[#19D67A] hover:bg-[#15b768] text-[#070707] flex items-center justify-center gap-2 shadow-lg shadow-[#19D67A]/20 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WHATSAPP ENQUIRY</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Overlay Lightbox */}
      {isFullscreenImage && (
        <div
          onClick={() => setIsFullscreenImage(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={() => setIsFullscreenImage(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#151619] text-white border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={vehicle.images[selectedImageIndex] || vehicle.images[0]}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </div>
  );
};

