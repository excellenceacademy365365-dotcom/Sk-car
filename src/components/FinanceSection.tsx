import React, { useState } from 'react';
import { Calculator, Banknote, ShieldAlert } from 'lucide-react';
import { businessInfo } from '../data/dealershipData';

export const FinanceSection: React.FC = () => {
  // Interactive EMI Calculator State
  const [loanAmountLakhs, setLoanAmountLakhs] = useState<number>(5.0); // e.g., 5 Lakhs
  const [downPaymentLakhs, setDownPaymentLakhs] = useState<number>(1.5); // e.g., 1.5 Lakhs
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years (60 months)

  // Calculate Monthly EMI
  const netLoan = Math.max(0, loanAmountLakhs - downPaymentLakhs) * 100000;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const calculateEmi = () => {
    if (netLoan <= 0) return 0;
    if (monthlyRate === 0) return netLoan / totalMonths;
    const emi =
      (netLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const estimatedEmi = calculateEmi();

  const financeWhatsappUrl = `https://wa.me/${businessInfo.whatsappPhone}?text=${encodeURIComponent(
    'Hello SK Car Bazar, I want to know about car finance options and loan eligibility.'
  )}`;

  return (
    <section id="finance" className="py-20 bg-[#070707] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151619] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF1F2D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest">
                <Banknote className="w-3.5 h-3.5" />
                <span>EASY CAR FINANCE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider uppercase leading-none">
                DRIVE YOUR DREAM CAR WITH <br />
                <span className="text-[#FF1F2D]">
                  FLEXIBLE FINANCE OPTIONS
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Finance assistance is available on selected vehicles. Talk to our team to know the available options and eligibility for your preferred pre-owned car.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF1F2D]" />
                  <span>Minimal documentation & quick processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF1F2D]" />
                  <span>Flexible tenure up to 5-7 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF1F2D]" />
                  <span>Low down payment options starting from ₹1.5 Lakh</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={financeWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-[#070707] bg-[#19D67A] hover:bg-[#15b768] shadow-xl shadow-[#19D67A]/20 hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest"
                >
                  <svg className="w-5 h-5 fill-[#070707]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>ENQUIRE FOR FINANCE</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive EMI Calculator Widget */}
            <div className="lg:col-span-6 bg-[#0D0D0F] p-6 rounded-2xl border border-white/10 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#FF1F2D]" />
                  <h3 className="text-base font-heading tracking-wider uppercase text-white">
                    EMI Estimator Calculator
                  </h3>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  Approx. Estimates
                </span>
              </div>

              {/* Slider 1: Total Car Price */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Total Vehicle Price</span>
                  <span className="text-[#FF1F2D] font-black">₹{loanAmountLakhs.toFixed(2)} Lakh</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="20.0"
                  step="0.25"
                  value={loanAmountLakhs}
                  onChange={(e) => setLoanAmountLakhs(parseFloat(e.target.value))}
                  className="w-full accent-[#FF1F2D] bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Slider 2: Down Payment */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Down Payment</span>
                  <span className="text-[#FF1F2D] font-black">₹{downPaymentLakhs.toFixed(2)} Lakh</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max={Math.min(loanAmountLakhs, 10.0)}
                  step="0.25"
                  value={downPaymentLakhs}
                  onChange={(e) => setDownPaymentLakhs(parseFloat(e.target.value))}
                  className="w-full accent-[#FF1F2D] bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Slider 3: Loan Tenure */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Loan Tenure</span>
                  <span className="text-[#FF1F2D] font-black">{tenureYears} Years ({tenureYears * 12} Months)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(parseInt(e.target.value))}
                  className="w-full accent-[#FF1F2D] bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Estimated EMI Result Card */}
              <div className="p-4 rounded-xl bg-[#151619] border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wider">Estimated Monthly EMI</p>
                  <p className="text-3xl font-heading text-[#FF1F2D] mt-0.5 tracking-wider">
                    ₹{estimatedEmi.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-slate-400 font-sans">/ month</span>
                  </p>
                </div>
                <a
                  href={financeWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#FF1F2D] text-white border border-[#FF1F2D] text-xs font-black uppercase tracking-wider hover:bg-[#B90F1A] transition-colors"
                >
                  Apply Now
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Final EMI depends on bank approval, credit score & vehicle model eligibility.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

