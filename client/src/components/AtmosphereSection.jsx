import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const gallery = [
  {
    src: "/images/opt/rooftop.webp",
    caption: "Kathmandu Valley Sunset from the 6th Floor Deck",
    tag: "360° Panorama"
  },
  {
    src: "/images/opt/sekuwa_view.webp",
    caption: "Himalayan Charcoal Sekuwa Overlooking City Hills",
    tag: "Wood-Fired Grill"
  },
  {
    src: "/images/opt/cocktails.webp",
    caption: "The Copacabana Sunset Cocktail & Craft Pours",
    tag: "Tropical Mixology"
  },
  {
    src: "/images/opt/lounge.webp",
    caption: "Covered Botanical Lounge with Leather Seating",
    tag: "Indoor Atmosphere"
  }
];

export default function AtmosphereSection() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="atmosphere" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-terracotta mb-1">
              Visual Archive
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
              Rooftop <em className="italic text-brand-pine">Atmosphere</em>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-secondary font-sans max-w-sm">
            Genuine moments captured from the 6th-floor terrace: golden hours, wood-fired skewers, and terrace evenings.
          </p>
        </div>

        {/* Minimal Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, idx) => (
            <div
              key={item.caption}
              onClick={() => setActivePhoto(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-brand-green/10 shadow-[0_4px_20px_rgba(22,62,43,0.04)] relative"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <span className="absolute top-3 left-3 bg-white/90 text-brand-green text-[10px] font-mono uppercase px-2 py-0.5 rounded backdrop-blur-sm">
                  {item.tag}
                </span>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-serif font-bold leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
              <div className="p-4 bg-[#FBF6F0] flex items-center justify-between text-xs text-brand-pine">
                <span className="font-serif font-bold text-sm text-brand-green">{activePhoto.caption}</span>
                <span className="font-mono text-[10px] text-brand-muted uppercase">{activePhoto.tag}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
