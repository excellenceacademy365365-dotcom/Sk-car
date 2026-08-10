import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { googleReviews, businessInfo } from '../data/dealershipData';

export const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = googleReviews.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Autoplay review carousel every 4s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section id="reviews" className="py-20 bg-[#070707] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest mb-3">
            VERIFIED CUSTOMER TESTIMONIALS
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider uppercase">
            WHAT OUR <span className="text-[#FF1F2D]">CUSTOMERS SAY</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Real experiences from our customers on Google Reviews.
          </p>
        </div>

        {/* Review Carousel Container */}
        <div
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)`,
              }}
            >
              {googleReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="h-full p-6 rounded-2xl bg-[#151619] border border-white/10 hover:border-[#FF1F2D]/40 shadow-xl flex flex-col justify-between transition-all duration-300">
                    <div>
                      {/* Top Header: Customer Avatar & Google Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#FF1F2D] text-white font-black flex items-center justify-center text-sm shadow-md shadow-[#FF1F2D]/20">
                            {rev.customer.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-white text-sm uppercase tracking-wide">
                              {rev.customer}
                            </h3>
                            <div className="flex text-[#FF1F2D] mt-0.5">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3.5 h-3.5 fill-[#FF1F2D] text-[#FF1F2D]"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Google Review Badge */}
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-[#070707] px-2.5 py-1 rounded-full border border-white/10">
                          <svg className="w-3 h-3" viewBox="0 0 24 24">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                          </svg>
                          <span>Google</span>
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                        "{rev.reviewText}"
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Verified Buyer Review
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#151619] border border-white/10 text-white hover:text-[#FF1F2D] hover:border-[#FF1F2D] flex items-center justify-center shadow-lg transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#151619] border border-white/10 text-white hover:text-[#FF1F2D] hover:border-[#FF1F2D] flex items-center justify-center shadow-lg transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Google Reviews CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={businessInfo.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#151619] hover:bg-[#1A1B1F] border border-[#FF1F2D]/30 text-white hover:text-[#FF1F2D] font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105"
          >
            <span>VIEW ALL GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4 text-[#FF1F2D]" />
          </a>
        </div>
      </div>
    </section>
  );
};

