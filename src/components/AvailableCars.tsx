import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { availableCarImages } from '../data/dealershipData';

export const AvailableCars: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = availableCarImages.length;

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered && !isModalOpen && !isDragging) {
      timerRef.current = setInterval(() => {
        nextImage();
      }, 2000); // Change every 2.0 seconds
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, isModalOpen, isDragging, nextImage]);

  // Handle Drag end for Swipe
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 50; // pixels to swipe before changing
    if (info.offset.x < -threshold) {
      nextImage();
    } else if (info.offset.x > threshold) {
      prevImage();
    }
  };

  if (totalImages === 0) return null;

  return (
    <section id="available-cars" className="py-20 bg-[#070707] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase mb-4 text-white">
            AVAILABLE <span className="text-[#FF1F2D]">CARS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium uppercase tracking-widest">
            Explore our latest available vehicles.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#151619] border border-white/10 group aspect-[4/3] md:aspect-[16/9]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
        >
          {/* Draggable Area for Slide Transitions */}
          <div className="absolute inset-0 w-full h-full overflow-hidden cursor-grab active:cursor-grabbing z-10"
               onClick={(e) => {
                 if (!isDragging) setIsModalOpen(true);
               }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={currentIndex}
                src={availableCarImages[currentIndex]}
                alt={`Available Car ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </AnimatePresence>
          </div>
          
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none z-10" />

          {/* Fullscreen Button (Top Right) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-[#070707]/80 text-[#FF1F2D] border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="View Fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#151619]/80 text-white border border-white/10 backdrop-blur-md hover:bg-[#FF1F2D] hover:border-[#FF1F2D] transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100 shadow-xl"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#151619]/80 text-white border border-white/10 backdrop-blur-md hover:bg-[#FF1F2D] hover:border-[#FF1F2D] transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100 shadow-xl"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#070707]/60 backdrop-blur-md border border-white/10">
            {availableCarImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); goToImage(idx); }}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-6 h-2 bg-[#FF1F2D] shadow-[0_0_8px_rgba(255,31,45,0.6)]' 
                    : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
              
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="absolute top-4 sm:top-8 right-4 sm:right-8 p-3.5 rounded-full bg-[#151619] text-white border border-white/10 hover:bg-[#FF1F2D] hover:border-[#FF1F2D] transition-all duration-300 shadow-2xl z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div 
                className="relative w-full max-h-[85vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={availableCarImages[currentIndex]}
                    alt={`Available Car ${currentIndex + 1} Fullscreen`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleDragEnd}
                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl pointer-events-none"
                  />
                </AnimatePresence>
              </div>
              
              {/* Lightbox Arrows (Desktop only) */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-[#151619]/80 text-white border border-white/10 hover:bg-[#FF1F2D] hover:border-[#FF1F2D] transition-all duration-300"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-[#151619]/80 text-white border border-white/10 hover:bg-[#FF1F2D] hover:border-[#FF1F2D] transition-all duration-300"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
