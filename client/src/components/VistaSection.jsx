import React from 'react';
import { Sun, Flame, Compass, ArrowRight } from 'lucide-react';
import { VistaToMenuWave } from './WaveDividers';

const spaces = [
  {
    title: "Open-Air Sunset Deck",
    subtitle: "360° Panoramic Valley View",
    desc: "Unobstructed views over Kathmandu Valley and the Himalayan mountain ridge. Arrive at 5:00 PM for the golden hour sunset.",
    icon: Sun
  },
  {
    title: "Wood-Fired Sekuwa Hearth",
    subtitle: "Charcoal Smoke & Spices",
    desc: "Traditional goat and chicken sekuwa roasted over glowing coals, paired with cold Himalayan beer and mountain air.",
    icon: Flame
  },
  {
    title: "Covered Botanical Lounge",
    subtitle: "Acoustic Nights & Foliage",
    desc: "Comfortable leather seating surrounded by lush indoor greenery, protected from evening breezes with gentle live acoustic sets.",
    icon: Compass
  }
];

export default function VistaSection({ onOpenReserve }) {
  return (
    <section id="vista" className="pt-24 pb-0 bg-white/40 relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        
        {/* Editorial Section Header (No over-head indicator badge) */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-green font-normal leading-tight mb-4">
            Three Experiences, <em className="italic text-brand-pine">One Valley Horizon</em>
          </h2>
          <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed">
            Perched atop the Everest Bank Building in Gairidhara, Barrack Restaurant & Lounge is designed to let the Kathmandu sky take center stage—from open sunset terraces to warm wood-fired aromas.
          </p>
        </div>

        {/* 3 Spaces Typographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spaces.map((space) => {
            const Icon = space.icon;
            return (
              <div
                key={space.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-green/10 shadow-[0_4px_24px_rgba(22,62,43,0.04)] flex flex-col justify-between hover:border-brand-green/25 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-green-dim text-brand-green flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-red-600 font-bold block mb-1">
                    {space.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brand-green mb-2.5">
                    {space.title}
                  </h3>
                  <p className="text-xs text-brand-secondary leading-relaxed font-sans">
                    {space.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-green/10">
                  <button
                    onClick={() => onOpenReserve({ seating: space.title })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors"
                  >
                    <span>Reserve this space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Organic Wave Border ending Vista Section */}
      <VistaToMenuWave />
    </section>
  );
}
