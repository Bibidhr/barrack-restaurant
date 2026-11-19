import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { LocationToCTAWave } from './WaveDividers';

export default function LocationHours({ onOpenReserve }) {
  return (
    <section id="location" className="pt-20 pb-0 bg-transparent relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-green/10 shadow-[0_12px_40px_rgba(22,62,43,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Header & Description (No over-head indicator badge) */}
            <div className="md:col-span-5 space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
                Visit Us in <em className="italic text-brand-pine">Gairidhara</em>
              </h2>
              <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed">
                A quiet rooftop haven above the central valley. High-speed elevator takes you directly up to the 6th floor terrace.
              </p>
            </div>

            {/* Address & Hours Columns */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Box */}
              <div className="p-5 rounded-2xl bg-[#FBF6F0] border border-brand-green/10">
                <div className="flex items-center gap-2 text-red-600 text-xs font-mono font-bold uppercase mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-serif font-bold text-brand-green mb-0.5">
                  Everest Bank Building, 6th Floor
                </p>
                <p className="text-xs text-brand-secondary font-sans leading-relaxed">
                  Gairidhara Sadak, Kathmandu 44600
                </p>
                <span className="inline-block mt-2 font-mono text-[10px] text-brand-muted">
                  • Free guest parking on-site
                </span>
              </div>

              {/* Hours Box */}
              <div className="p-5 rounded-2xl bg-[#FBF6F0] border border-brand-green/10">
                <div className="flex items-center gap-2 text-brand-green text-xs font-mono font-bold uppercase mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Timings</span>
                </div>
                <p className="text-sm font-serif font-bold text-brand-green mb-0.5">
                  Daily: 12:00 PM – 11:30 PM
                </p>
                <p className="text-xs text-red-600 font-bold">
                  Happy Hour: 4:00 PM – 8:00 PM (1+1)
                </p>
                <span className="inline-block mt-2 font-mono text-[10px] text-brand-muted">
                  • Kitchen closes at 10:45 PM
                </span>
              </div>

            </div>

          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-brand-green/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barrack+Restaurant+%26+Lounge+Everest+Bank+Building+Gairidhara+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-brand-green hover:bg-brand-green-light text-[#FAF5EF] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps Directions</span>
              </a>

              <a
                href="tel:+9779810786445"
                className="px-4 py-2.5 rounded-lg bg-[#FBF6F0] hover:bg-white border border-brand-green/15 text-brand-pine text-xs font-mono font-semibold flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>+977 981-0786445</span>
              </a>
            </div>

            <button
              onClick={() => onOpenReserve({})}
              className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline uppercase tracking-wider"
            >
              Book a Rooftop Table →
            </button>
          </div>

        </div>

      </div>

      {/* Organic Wave Transition into Dark Evening CTA */}
      <LocationToCTAWave />
    </section>
  );
}
