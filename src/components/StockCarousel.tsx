import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import { Vehicle, FilterState } from '../types';
import { vehiclesData } from '../data/dealershipData';
import { VehicleCard } from './VehicleCard';
import { VehicleFilters } from './VehicleFilters';

interface StockCarouselProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const StockCarousel: React.FC<StockCarouselProps> = ({ onSelectVehicle }) => {
  const [filter, setFilter] = useState<FilterState>({
    category: 'ALL',
    searchQuery: '',
  });
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch Swipe States for Mobile & Desktop Drag
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter vehicles based on search and category
  const activeVehicles = vehiclesData.filter((v) => v.available);

  const filteredVehicles = activeVehicles.filter((v) => {
    // Search Query Matching
    if (filter.searchQuery.trim()) {
      const q = filter.searchQuery.toLowerCase();
      const matchName = v.name.toLowerCase().includes(q);
      const matchVariant = v.variant.toLowerCase().includes(q);
      const matchFuel = v.fuel.toLowerCase().includes(q);
      const matchFeatures = v.features.some((f) => f.toLowerCase().includes(q));
      if (!matchName && !matchVariant && !matchFuel && !matchFeatures) {
        return false;
      }
    }

    // Category Matching
    switch (filter.category) {
      case 'UNDER_7':
        return v.priceValue > 0 && v.priceValue < 7.0;
      case '7_TO_10':
        return v.priceValue >= 7.0 && v.priceValue <= 10.0;
      case 'OVER_10':
        return v.priceValue > 10.0;
      case 'PETROL':
        return v.fuel.toLowerCase().includes('petrol');
      case 'DIESEL':
        return v.fuel.toLowerCase().includes('diesel');
      case 'CNG':
        return v.fuel.toLowerCase().includes('cng');
      case 'AUTOMATIC':
        return v.transmission.toLowerCase() === 'automatic';
      case 'FIRST_OWNER':
        return v.owner.toLowerCase() === 'first owner' || v.owner.toLowerCase() === 'single owner';
      case 'ALL':
      default:
        return true;
    }
  });

  const totalFiltered = filteredVehicles.length;

  // Next and Prev handlers
  const handleNext = useCallback(() => {
    if (totalFiltered === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalFiltered);
  }, [totalFiltered]);

  const handlePrev = useCallback(() => {
    if (totalFiltered === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalFiltered) % totalFiltered);
  }, [totalFiltered]);

  // Autoplay Timer (3.5s interval)
  useEffect(() => {
    if (isPaused || viewMode !== 'carousel' || totalFiltered <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, viewMode, totalFiltered, handleNext]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Swipe Gesture Handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    if ('touches' in e) {
      setTouchStart(e.touches[0].clientX);
    } else {
      setTouchStart(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      setTouchEnd(e.touches[0].clientX);
    } else {
      setTouchEnd(e.clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setIsPaused(false);
  };

  return (
    <section id="stock" className="py-20 bg-[#070707] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF1F2D]/10 border border-[#FF1F2D]/20 text-[#FF1F2D] text-xs font-black uppercase tracking-widest mb-3">
            VERIFIED PRE-OWNED FLEET
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider uppercase">
            CURRENT <span className="text-[#FF1F2D]">STOCK</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Explore our latest available pre-owned cars in Gorakhpur.
          </p>
        </div>

        {/* Filter Bar */}
        <VehicleFilters
          filter={filter}
          onFilterChange={setFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalCount={totalFiltered}
        />

        {/* No Results Fallback */}
        {totalFiltered === 0 ? (
          <div className="text-center py-16 bg-[#151619] rounded-3xl border border-white/10 p-8 max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-[#FF1F2D] mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">No Vehicles Found</h3>
            <p className="text-sm text-slate-400 mb-6">
              No matching cars for your current search criteria. Try clearing search filters or changing price range.
            </p>
            <button
              onClick={() => setFilter({ category: 'ALL', searchQuery: '' })}
              className="px-6 py-2.5 rounded-xl bg-[#FF1F2D] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#B90F1A] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#FF1F2D]/20"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={onSelectVehicle}
              />
            ))}
          </div>
        ) : (
          /* Full-width Premium Carousel Mode */
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="overflow-hidden rounded-2xl touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onTouchStart}
              onMouseMove={onTouchMove}
              onMouseUp={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="w-full shrink-0 px-1 sm:px-3 md:px-4"
                  >
                    <div className="max-w-2xl mx-auto">
                      <VehicleCard
                        vehicle={vehicle}
                        onSelect={onSelectVehicle}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalFiltered > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#151619] text-slate-200 border border-white/10 hover:border-[#FF1F2D] hover:text-[#FF1F2D] flex items-center justify-center shadow-xl transition-all active:scale-90"
                  aria-label="Previous vehicle"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#151619] text-slate-200 border border-white/10 hover:border-[#FF1F2D] hover:text-[#FF1F2D] flex items-center justify-center shadow-xl transition-all active:scale-90"
                  aria-label="Next vehicle"
                >
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {totalFiltered > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {filteredVehicles.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-[#FF1F2D] shadow-md shadow-[#FF1F2D]/50'
                        : 'w-2.5 bg-slate-800 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to vehicle ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
