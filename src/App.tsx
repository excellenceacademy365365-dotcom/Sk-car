import React, { useState } from 'react';
import { Vehicle } from './types';
import { vehiclesData } from './data/dealershipData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AvailableCars } from './components/AvailableCars';
import { StockCarousel } from './components/StockCarousel';
import { VehicleDetailsModal } from './components/VehicleDetailsModal';
import { ReviewCarousel } from './components/ReviewCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FinanceSection } from './components/FinanceSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { HappyDeliveries } from './components/HappyDeliveries';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const activeVehicles = vehiclesData.filter((v) => v.available);

  const handleNextVehicle = () => {
    if (!selectedVehicle) return;
    const currentIndex = activeVehicles.findIndex((v) => v.id === selectedVehicle.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % activeVehicles.length;
      setSelectedVehicle(activeVehicles[nextIndex]);
    }
  };

  const handlePrevVehicle = () => {
    if (!selectedVehicle) return;
    const currentIndex = activeVehicles.findIndex((v) => v.id === selectedVehicle.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + activeVehicles.length) % activeVehicles.length;
      setSelectedVehicle(activeVehicles[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-slate-100 font-sans selection:bg-[#FF1F2D] selection:text-white">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Available Cars */}
      <AvailableCars />

      {/* Current Stock Section (Directly after Hero) */}
      <StockCarousel onSelectVehicle={setSelectedVehicle} />

      {/* Google Reviews */}
      <ReviewCarousel />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Easy Car Finance */}
      <FinanceSection />

      {/* How It Works Process */}
      <HowItWorks />

      {/* About SK Car Bazar - Dealership Photo Section */}
      <AboutSection />

      {/* Happy Deliveries Gallery */}
      <HappyDeliveries />

      {/* Google Maps / Location Section */}
      <LocationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Animated WhatsApp Button */}
      <FloatingWhatsApp
        customMessage={
          selectedVehicle
            ? selectedVehicle.whatsappMessage
            : undefined
        }
      />

      {/* Mobile Fixed Action Bar (Call / WhatsApp / Maps) */}
      <MobileActionBar />

      {/* Vehicle Details Modal Lightbox */}
      <VehicleDetailsModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onNext={handleNextVehicle}
        onPrev={handlePrevVehicle}
      />
    </div>
  );
}
