import React, { useState } from 'react';
import { Phone, Navigation, Send, Car, User, MessageSquare } from 'lucide-react';
import { businessInfo, vehiclesData } from '../data/dealershipData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    selectedCar: vehiclesData[0]?.name || 'Tata Harrier',
    message: 'I am interested in buying a pre-owned car. Please call me back.',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello SK Car Bazar, my name is ${formData.name} (${formData.phone}). Interested in ${formData.selectedCar}. Note: ${formData.message}`;
    const url = `https://wa.me/${businessInfo.whatsappPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const mainWhatsappUrl = `https://wa.me/${businessInfo.whatsappPhone}?text=${encodeURIComponent(
    'Hello SK Car Bazar, I would like to inquire about available pre-owned cars.'
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#070707] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151619] border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest">
                GET IN TOUCH
              </div>

              <h2 className="text-4xl sm:text-5xl font-heading tracking-wider uppercase leading-none">
                READY TO FIND YOUR <br />
                <span className="text-[#FF1F2D]">NEXT CAR?</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore our latest stock or contact SK Car Bazar today. Our team is ready to assist you with live vehicle viewings, document checks, and finance assistance.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 bg-[#0D0D0F] p-4 rounded-2xl border border-white/10">
                  <div className="p-3 rounded-xl bg-[#FF1F2D] text-white">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                      Call Us Directly
                    </span>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-lg font-black text-white hover:text-[#FF1F2D] transition-colors"
                    >
                      9935443061
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#0D0D0F] p-4 rounded-2xl border border-white/10">
                  <div className="p-3 rounded-xl bg-[#FF1F2D] text-white">
                    <Navigation className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                      Showroom Address
                    </span>
                    <p className="text-sm font-bold text-slate-200">
                      Medical College Road, Bhathat, Gorakhpur
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-[#1A1B1F] hover:bg-[#25272D] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 border border-white/10 hover:border-[#FF1F2D]/50 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4 text-[#FF1F2D]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#19D67A] hover:bg-[#15b768] text-[#070707] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#19D67A]/20 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WHATSAPP US</span>
                </a>

                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#0D0D0F] hover:bg-[#1A1B1F] text-slate-200 font-black text-xs uppercase tracking-wider flex items-center gap-2 border border-white/10 transition-transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-[#FF1F2D]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6 bg-[#0D0D0F] p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-heading text-white mb-2 uppercase tracking-wider">
                Send Quick Enquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out your details below to start a direct inquiry on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#151619] border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF1F2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#151619] border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF1F2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-1">
                    Preferred Car Model
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                      value={formData.selectedCar}
                      onChange={(e) => setFormData({ ...formData, selectedCar: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#151619] border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF1F2D] appearance-none"
                    >
                      {vehiclesData
                        .filter((v) => v.available)
                        .map((v) => (
                          <option key={v.id} value={`${v.name} (${v.variant})`}>
                            {v.name} - {v.variant} ({v.price})
                          </option>
                        ))}
                      <option value="General Car Enquiry">Other / General Requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#151619] border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF1F2D]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF1F2D] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#FF1F2D]/20 hover:bg-[#B90F1A] hover:scale-[1.01] active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

