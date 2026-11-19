import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ZoomIn, Eye } from 'lucide-react';

const galleryPhotos = [
  {
    src: "/images/rooftop.webp",
    title: "Panoramic Sunset from the 6th Floor",
    category: "Rooftop Vista",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "/images/sekuwa_view.webp",
    title: "Smoky Charcoal Sekuwa with City Horizon",
    category: "Wood-Fired Food",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "/images/cocktails.webp",
    title: "Handcrafted Tropical Sunset Cocktails",
    category: "Signature Bar",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "/images/lounge.webp",
    title: "Ambient Plant-Decorated Indoor Lounge",
    category: "Interior Lounge",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "/images/platter.webp",
    title: "Grand Latin Platter & Evening Tapas",
    category: "Food & Sharing",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "/images/neon_bar.jpg",
    title: "Neon Backlit Cocktail Counter",
    category: "Bar Atmosphere",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    src: "/images/terrace_night.jpg",
    title: "Terrace Dining Under Evening Lights",
    category: "Night Skyline",
    span: "col-span-1 md:col-span-1 row-span-1"
  }
];

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-barrack-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Google Photos & Venue Moments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Atmosphere Above Kathmandu
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real snapshots from the rooftop: golden hour skylines, sizzling platters, and vibrant terrace nights. Click any image for a closer look.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-barrack-card border border-white/10 hover:border-amber-400/40 shadow-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2 min-h-[340px] sm:min-h-[440px]' : 'min-h-[220px]'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top tag */}
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                  {photo.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Framer Motion) */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-barrack-card rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-amber-400 border border-white/10 transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-6 bg-barrack-dark border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                    {selectedPhoto.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Barrack Rooftop Lounge • Gairidhara
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
