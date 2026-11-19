import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Flame, Wine, Music2, ArrowUpRight } from 'lucide-react';

const highlights = [
  {
    icon: Mountain,
    title: "360° Valley & Sunset Vista",
    desc: "Perched on the 6th floor rooftop of Everest Bank Building in Gairidhara, relish uninterrupted views of the Kathmandu skyline as the golden hour sets over the valley.",
    image: "/images/rooftop.webp",
    tag: "Open-Air Sky Terrace"
  },
  {
    icon: Flame,
    title: "Smoky Himalayan Sekuwa & Grill",
    desc: "Marinated with traditional mountain herbs, timur peppercorns and cold-pressed mustard oil, char-grilled fresh over glowing hardwood coals.",
    image: "/images/sekuwa_view.webp",
    tag: "Wood-Fired Specialties"
  },
  {
    icon: Wine,
    title: "Sunset Mixology & 1+1 Happy Hour",
    desc: "Sip bespoke cocktails shaken by skilled bartenders. Enjoy our popular 1+1 Happy Hour daily between 4:00 PM and 8:00 PM with chilled craft beers and pours.",
    image: "/images/cocktails.webp",
    tag: "Craft Cocktail Bar"
  },
  {
    icon: Music2,
    title: "Cozy Indoor Lounge & Live Music",
    desc: "A warm, plant-adorned indoor sanctuary featuring comfortable leather seating and live acoustic performances on weekend evenings.",
    image: "/images/lounge.webp",
    tag: "Live Music Sessions"
  }
];

export default function Highlights({ onOpenReserve }) {
  return (
    <section id="experience" className="py-24 relative bg-barrack-dark">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20"
          >
            Atmosphere & Flavor
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4"
          >
            Crafted for Memorable Evenings
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Whether you seek an intimate sunset date, a weekend live acoustic night with friends, or a relaxing drink above the valley, The Barrack offers Kathmandu's most atmospheric rooftop.
          </motion.p>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden bg-barrack-card border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-xl"
              >
                {/* Photo preview */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barrack-card via-barrack-card/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-barrack-green/80 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center text-amber-400 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-8 -mt-6 relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <button
                    onClick={onOpenReserve}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors"
                  >
                    <span>Reserve for this experience</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
