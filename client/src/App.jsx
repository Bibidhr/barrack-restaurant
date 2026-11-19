import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VistaSection from './components/VistaSection';
import PopularMenuDiagonal from './components/PopularMenuDiagonal';
import LocationHours from './components/LocationHours';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FullMenuModal from './components/FullMenuModal';
import { AmbientBackgroundWaves } from './components/WaveDividers';

export default function App() {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenReserve = (data = {}) => {
    setModalInitialData(data);
    setReserveModalOpen(true);
  };

  const handleOpenMenu = () => {
    setMenuModalOpen(true);
  };

  return (
    <div className="min-h-screen text-brand-pine relative selection:bg-brand-green selection:text-[#FAF5EF]">
      {/* Ambient Flowing Background Waves */}
      <AmbientBackgroundWaves />

      {/* Blending Navbar (Jimbu Thakali Inspired) */}
      <Navbar onOpenReserve={handleOpenReserve} onOpenMenu={handleOpenMenu} />

      {/* Main Stream */}
      <main>
        {/* 1. Hero with picture (Jimbu Thakali Inspired) */}
        <Hero onOpenReserve={handleOpenReserve} onOpenMenu={handleOpenMenu} />

        {/* 2. Clean Rooftop Vista narrative (Typographic, no picture clutter) */}
        <VistaSection onOpenReserve={handleOpenReserve} />

        {/* 3. Popular Menu Items with Diagonal Parallax Gallery on Scroll (Pictures for popular items) */}
        <PopularMenuDiagonal onOpenReserve={handleOpenReserve} onOpenMenu={handleOpenMenu} />

        {/* 4. Clean Location & Hours (Typographic, no picture clutter) */}
        <LocationHours onOpenReserve={handleOpenReserve} />

        {/* 5. Photographic Closing CTA (Picture for CTA) */}
        <CTASection onOpenReserve={handleOpenReserve} />
      </main>

      {/* Footer */}
      <Footer onOpenReserve={handleOpenReserve} onOpenMenu={handleOpenMenu} />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
        initialData={modalInitialData}
      />

      {/* Complete Food & Cocktail Menu Modal */}
      <FullMenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        onOpenReserve={handleOpenReserve}
      />
    </div>
  );
}
