import React from 'react';
import { Search, LayoutGrid, SlidersHorizontal, Layers } from 'lucide-react';
import { FilterState } from '../types';

interface VehicleFiltersProps {
  filter: FilterState;
  onFilterChange: (newFilter: FilterState) => void;
  viewMode: 'carousel' | 'grid';
  onViewModeChange: (mode: 'carousel' | 'grid') => void;
  totalCount: number;
}

export const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  filter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  totalCount
}) => {
  const filterCategories = [
    { id: 'ALL', label: 'ALL CARS' },
    { id: 'UNDER_7', label: 'UNDER ₹7 LAKH' },
    { id: '7_TO_10', label: '₹7–10 LAKH' },
    { id: 'OVER_10', label: '₹10 LAKH+' },
    { id: 'PETROL', label: 'PETROL' },
    { id: 'DIESEL', label: 'DIESEL' },
    { id: 'CNG', label: 'CNG' },
    { id: 'AUTOMATIC', label: 'AUTOMATIC' },
    { id: 'FIRST_OWNER', label: 'FIRST OWNER' },
  ] as const;

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar & View Mode Toggle */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by car name, variant, feature..."
            value={filter.searchQuery}
            onChange={(e) =>
              onFilterChange({ ...filter, searchQuery: e.target.value })
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#101113] border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF1F2D] focus:ring-1 focus:ring-[#FF1F2D] transition-colors"
          />
          {filter.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filter, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs font-semibold text-slate-400">
            Showing <strong className="text-[#FF1F2D] font-bold">{totalCount}</strong> Vehicles
          </span>

          <div className="flex items-center bg-[#101113] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => onViewModeChange('carousel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                viewMode === 'carousel'
                  ? 'bg-[#FF1F2D] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Carousel</span>
            </button>
            <button
              onClick={() => onViewModeChange('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#FF1F2D] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Category Chips Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
        <div className="flex items-center gap-2 shrink-0 pr-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF1F2D]" />
          <span>Filters:</span>
        </div>
        {filterCategories.map((cat) => {
          const isActive = filter.category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() =>
                onFilterChange({ ...filter, category: cat.id as FilterState['category'] })
              }
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider transition-all duration-200 border whitespace-nowrap uppercase ${
                isActive
                  ? 'bg-[#FF1F2D] text-white border-[#FF1F2D] shadow-md shadow-[#FF1F2D]/20 scale-105'
                  : 'bg-[#101113] text-slate-300 border-white/10 hover:border-white/20 hover:text-[#FF1F2D]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

