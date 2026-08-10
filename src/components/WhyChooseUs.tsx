import React from 'react';
import { CheckCircle2, ShieldCheck, Banknote, Headphones } from 'lucide-react';
import { whyChooseUsList } from '../data/dealershipData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-[#FF1F2D]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#FF1F2D]" />;
      case 'Banknote':
        return <Banknote className="w-7 h-7 text-[#FF1F2D]" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-[#FF1F2D]" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-[#FF1F2D]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#0D0D0F] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest mb-3">
            THE SK CAR BAZAR PROMISE
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider uppercase">
            WHY CHOOSE <span className="text-[#FF1F2D]">SK CAR BAZAR?</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We are dedicated to making your pre-owned car buying experience transparent, premium, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsList.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#151619] border border-white/10 hover:border-[#FF1F2D]/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FF1F2D]/20 transition-all">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-heading text-white group-hover:text-[#FF1F2D] transition-colors mb-2 tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-[#FF1F2D] uppercase tracking-wider">
                <span>Verified Guarantee</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 font-normal">100% Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

