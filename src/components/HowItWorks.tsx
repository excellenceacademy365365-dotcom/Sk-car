import React from 'react';
import { howItWorksSteps } from '../data/dealershipData';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D0D0F] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest mb-3">
            SIMPLE & FAST PROCESS
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider uppercase">
            HOW IT <span className="text-[#FF1F2D]">WORKS</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Buying a quality pre-owned car at SK Car Bazar takes just four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-[#151619] border border-white/10 hover:border-[#FF1F2D]/50 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-heading text-[#FF1F2D] tracking-wider">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF1F2D] shadow-md shadow-[#FF1F2D]/50" />
                </div>
                <h3 className="text-lg font-heading text-white mb-2 tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress Line Connector for desktop */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-0.5 bg-[#FF1F2D]/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

