import React from 'react';
import { Phone, Calendar, Fuel, Gauge, User, Check, Eye, Banknote } from 'lucide-react';
import { Vehicle } from '../types';
import { businessInfo } from '../data/dealershipData';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappPhone}?text=${encodeURIComponent(
    vehicle.whatsappMessage
  )}`;

  return (
    <div className="group relative bg-[#151619] rounded-2xl border border-white/10 hover:border-[#FF1F2D]/50 shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF1F2D]/15">
      {/* Vehicle Image Container */}
      <div
        onClick={() => onSelect(vehicle)}
        className="relative aspect-[16/10] overflow-hidden bg-[#070707] cursor-pointer group/img"
      >
        <img
          src={vehicle.images[0]}
          alt={vehicle.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151619] via-transparent to-black/40" />

        {/* Badge Overlay */}
        {vehicle.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-[#FF1F2D] text-white shadow-lg shadow-[#FF1F2D]/30">
              {vehicle.badge}
            </span>
          </div>
        )}

        {/* Fuel & Transmission Badge Top Right */}
        <div className="absolute top-3 right-3 z-10 flex gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#070707]/80 text-[#FF1F2D] border border-white/10 backdrop-blur-md">
            {vehicle.fuel}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#070707]/80 text-slate-200 border border-white/10 backdrop-blur-md">
            {vehicle.transmission}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
          <span className="px-5 py-2.5 rounded-xl bg-[#FF1F2D] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-2xl shadow-[#FF1F2D]/40">
            <Eye className="w-4 h-4" />
            <span>VIEW FULL DETAILS</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title & Variant */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-heading text-white tracking-wider group-hover:text-[#FF1F2D] transition-colors uppercase">
                {vehicle.name}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                {vehicle.variant}
              </p>
            </div>
            {/* Price */}
            <div className="text-right shrink-0">
              <span className="text-2xl font-heading text-[#FF1F2D] tracking-wider">
                {vehicle.price}
              </span>
            </div>
          </div>

          {/* Down Payment Info if available */}
          {vehicle.downPayment && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-bold mb-3">
              <Banknote className="w-3.5 h-3.5 text-[#FF1F2D]" />
              <span>Down Payment: {vehicle.downPayment}</span>
            </div>
          )}

          {/* Specifications Grid Pills */}
          <div className="grid grid-cols-2 gap-2 my-3 bg-[#0D0D0F] p-2.5 rounded-xl border border-white/5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#FF1F2D] shrink-0" />
              <span className="truncate">{vehicle.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-[#FF1F2D] shrink-0" />
              <span className="truncate">{vehicle.kilometers}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#FF1F2D] shrink-0" />
              <span className="truncate">{vehicle.owner}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-[#FF1F2D] shrink-0" />
              <span className="truncate">{vehicle.fuel}</span>
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div className="space-y-1.5 mb-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Key Highlights
            </p>
            <div className="grid grid-cols-1 gap-1">
              {vehicle.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#19D67A] shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
          <a
            href={`tel:${businessInfo.phone}`}
            className="py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider bg-[#1A1B1F] hover:bg-[#25272D] text-white flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#FF1F2D]/50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF1F2D]" />
            <span>CALL NOW</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider bg-[#19D67A] hover:bg-[#15b768] text-[#070707] flex items-center justify-center gap-1.5 shadow-md shadow-[#19D67A]/20 transition-colors"
          >
            {/* WhatsApp Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
};

