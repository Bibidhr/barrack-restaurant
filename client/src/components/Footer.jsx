import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenReserve, onOpenMenu }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white text-slate-800 pt-8 pb-14 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* 1. Logo in the Middle (Dark text + Red tent for white background) */}
        <a href="#" className="inline-block group mb-6 transition-transform duration-300 hover:scale-105">
          <img
            src="/images/barrack_logo_trans.png"
            alt="The Barrack Rooftop Lounge"
            className="h-10 sm:h-12 w-auto object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.src = "/images/barrack_logo_crop.png";
            }}
          />
        </a>

        {/* 2. Centered Location & Hours Description */}
        <p className="text-xs sm:text-sm font-sans text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
          6th Floor Rooftop, Everest Bank Building, Gairidhara, Kathmandu.
          <span className="block mt-1 font-mono text-[11px] text-slate-500">Open Daily 12:00 PM – 11:30 PM</span>
        </p>

        {/* 3. Centered Navigation Links with Red Accent on Book Table */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-wider mb-8">
          <a href="#vista" className="text-slate-700 hover:text-red-600 transition-colors">
            Rooftop Vista
          </a>
          <button
            onClick={onOpenMenu}
            className="text-slate-700 hover:text-red-600 transition-colors uppercase"
          >
            Signature Menu
          </button>
          <a href="#location" className="text-slate-700 hover:text-red-600 transition-colors">
            Location & Hours
          </a>
          <button
            onClick={() => onOpenReserve({})}
            className="text-red-600 hover:text-red-700 font-bold tracking-wider hover:underline transition-colors flex items-center gap-1"
          >
            <span>Book a Table</span>
            <span>→</span>
          </button>
        </div>

        {/* 4. Divider */}
        <div className="w-full max-w-xs h-[1px] bg-slate-200 mb-8" />

        {/* 5. Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-700 hover:text-slate-900 border border-slate-200 transition-all mb-6 group shadow-sm"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-red-600 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* 6. Copyrights in the Middle */}
        <p className="text-[11px] text-slate-500 font-mono tracking-wide">
          © {new Date().getFullYear()} The Barrack Restaurant & Rooftop Lounge. Gairidhara, Kathmandu. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
