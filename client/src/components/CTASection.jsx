import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { CTATopWave, CTABottomWave } from './WaveDividers';

export default function CTASection({ onOpenReserve }) {
  return (
    <section id="cta" className="relative py-32 sm:py-36 overflow-hidden">
      
      {/* Wave at Top of Picture: Replaces straight horizontal edge with organic curve */}
      <CTATopWave />

      {/* Background Picture (CTA Picture) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/food_dish2.jpg" type="image/jpeg" />
          <img
            src="/images/food_dish2.jpg"
            alt="The Barrack 6th Floor Rooftop Terrace Evening Dining"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A14] via-[#0E1A14]/75 to-[#0E1A14]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        
        {/* Grand Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight mb-5">
          Experience Kathmandu from the <br />
          <em className="italic text-white">
            6th Floor Sky Deck
          </em>
        </h2>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200/90 font-sans leading-relaxed mb-10">
          Join us for golden hour sunset views, wood-fired Himalayan sekuwa, and signature cocktails. Walk-ins are warmly welcomed; reservations recommended for edge tables.
        </p>

        {/* Action Buttons with Red Primary & White Glass Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenReserve({})}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-red-950/40 border border-red-500/30 transition-all flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table Online</span>
          </motion.button>

          <a
            href="tel:+9779810786445"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-400" />
            <span>Call +977 981-0786445</span>
          </a>
        </div>

      </div>

      {/* Wave at Bottom of Picture: Replaces straight horizontal edge with organic curve */}
      <CTABottomWave />

    </section>
  );
}
