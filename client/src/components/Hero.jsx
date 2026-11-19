import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Utensils } from 'lucide-react';
import { HeroBottomWave } from './WaveDividers';

export default function Hero({ onOpenReserve, onOpenMenu }) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-24 sm:pb-32 overflow-hidden">
      
      {/* Background Picture (Hero Picture) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source srcSet="/images/hero_bg.webp" type="image/webp" />
          <img
            src="/images/hero_bg.jpg"
            alt="The Barrack Rooftop Terrace Kathmandu Sunset Skyline"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = "/images/rooftop.webp";
            }}
          />
        </picture>
        {/* Subtle Scrim Overlay so the rooftop picture is vibrant and text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-[#0E1A14]/90 pointer-events-none" />
      </div>

      {/* Main Centered Content (No over-head or under-head UI indicator badges) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Grand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.08] tracking-tight mb-6 max-w-4xl drop-shadow-lg"
        >
          Savor Himalayan Grill & <br />
          <em className="italic font-normal text-red-400">
            Valley Sunsets
          </em>
        </motion.h1>

        {/* Lead Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-100 font-sans leading-relaxed mb-10 drop-shadow-md"
        >
          Latin American kitchen, tropical cocktail bar, and artisan Himalayan wood-fired sekuwa on Kathmandu's panoramic 6th-floor rooftop terrace atop Everest Bank Building.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onOpenReserve({})}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-red-950/50 border border-red-500/30 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
          </button>

          <button
            onClick={onOpenMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/40 hover:bg-black/60 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md border border-white/25 transition-all flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-red-400" />
            <span>Signature Menu</span>
          </button>
        </motion.div>

      </div>

      {/* Organic Wave Transition into Vista Section */}
      <HeroBottomWave />

    </section>
  );
}
