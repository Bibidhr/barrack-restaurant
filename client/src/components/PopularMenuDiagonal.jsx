import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Utensils } from 'lucide-react';
import { MenuToLocationWave } from './WaveDividers';

export default function PopularMenuDiagonal({ onOpenReserve, onOpenMenu }) {
  const containerRef = useRef(null);

  // Scroll parallax progress across this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets: Left cards and right cards drift at different speeds
  const yLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      id="menu"
      className="pt-20 sm:pt-28 pb-0 bg-[#FAF7F2] relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        
        {/* Editorial Headline (Matches "Five days / on the high road") */}
        <div className="mb-16 sm:mb-24">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-brand-green font-normal leading-none tracking-tight">
            Popular dishes
          </h2>
          <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-brand-muted/70 italic font-normal mt-1 sm:mt-2">
            from the wood-fired hearth
          </p>
        </div>

        {/* Diagonal Pair 1: Grand Latino Platter & Himalayan Sekuwa */}
        <div className="relative mb-24 sm:mb-36">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Card 1 (Top Left): The Grand Latino Platter */}
            <motion.div
              style={{ y: yLeft }}
              className="md:col-span-5 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_16px_40px_rgba(22,62,43,0.08)] border border-brand-green/10 group">
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src="/images/platter.webp"
                    alt="The Grand Latino Platter"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Little pinned polaroid / badge at top-left edge (like reference image) */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-green/15 shadow-sm">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-red-600">
                    Chef's Signature
                  </span>
                </div>

                {/* Bottom Card Title & Price (Hidden on mobile to avoid duplication with editorial text directly below) */}
                <div className="absolute bottom-4 left-4 right-4 text-white hidden md:flex items-baseline justify-between">
                  <span className="font-serif text-lg sm:text-xl font-bold">
                    The Grand Latino Platter
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-red-400">
                    Rs 880
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Accompanying Editorial Text (Top Right, like reference "Day three...") */}
            <div className="md:col-span-6 md:col-start-7 pt-4 md:pt-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 block mb-2">
                01 · Signature Sharing Feast
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal mb-3">
                The Grand Latino Platter
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed mb-4 max-w-md">
                Served with seasoned tacos, golden nachos, oven-jacket loaded potatoes, burrito bites, and charcoal grilled garden vegetables. Made for table sharing as the sunset sets over the valley.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-brand-green">
                  Rs 880
                </span>
                <button
                  onClick={() => onOpenReserve({ specialRequests: "Ordering Grand Latino Platter" })}
                  className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline uppercase tracking-wider"
                >
                  Book for this dish →
                </button>
              </div>
            </div>

          </div>

          {/* Card 2 (Offset Diagonally Down & Right: Wood-Fired Mutton Sekuwa) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-12 sm:mt-16">
            
            {/* Story text on the left */}
            <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 pt-4 md:pt-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 block mb-2">
                02 · Himalayan Charcoal Hearth
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal mb-3">
                Wood-Fired Mutton Sekuwa
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed mb-4 max-w-md">
                Tender goat morsels marinated overnight in cold-pressed mustard oil, Sichuan timur, and mountain spices, then roasted over hardwood coals with a 360° city horizon view.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-brand-green">
                  Rs 450
                </span>
                <button
                  onClick={() => onOpenReserve({ specialRequests: "Ordering Wood-Fired Sekuwa" })}
                  className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline uppercase tracking-wider"
                >
                  Reserve a table →
                </button>
              </div>
            </div>

            {/* Card 2 Image (Diagonally down & right, like the arch image in reference) */}
            <motion.div
              style={{ y: yRight }}
              className="md:col-span-5 md:col-start-7 order-1 md:order-2"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_16px_40px_rgba(22,62,43,0.08)] border border-brand-green/10 group">
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src="/images/sekuwa_view.webp"
                    alt="Wood-Fired Mutton Sekuwa with Valley View"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Pinned badge at top-left edge (preventing overlap with bottom price) */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-green/15 shadow-sm">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-red-600">
                    Charcoal Sekuwa
                  </span>
                </div>

                {/* Bottom Card Title & Price (Hidden on mobile) */}
                <div className="absolute bottom-4 left-4 right-4 text-white hidden md:flex items-baseline justify-between">
                  <span className="font-serif text-lg sm:text-xl font-bold">
                    Wood-Fired Sekuwa
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-red-400">
                    Rs 450
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Diagonal Pair 2: The Copacabana Sunset Cocktail & Brazilian Coxinha */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Card 3 (Left): The Copacabana Sunset Cocktail */}
            <motion.div
              style={{ y: yLeft }}
              className="md:col-span-5 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_16px_40px_rgba(22,62,43,0.08)] border border-brand-green/10 group">
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src="/images/cocktails.webp"
                    alt="The Copacabana Sunset Cocktail"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Pinned pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-green/15 shadow-sm">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-brand-green">
                    1+1 Happy Hour (4–8 PM)
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white hidden md:flex items-baseline justify-between">
                  <span className="font-serif text-lg sm:text-xl font-bold">
                    The Copacabana Sunset
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-red-400">
                    Rs 650
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Accompanying Editorial Text */}
            <div className="md:col-span-6 md:col-start-7 pt-4 md:pt-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 block mb-2">
                03 · Sunset Mixology
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal mb-3">
                The Copacabana Sunset
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed mb-4 max-w-md">
                Tropical rum blend infused with passionfruit pulp, freshly squeezed lime, and layered grenadine. Served chilled as the evening lights begin to illuminate the Kathmandu Valley.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-brand-green">
                  Rs 650
                </span>
                <button
                  onClick={() => onOpenReserve({ specialRequests: "Cocktail Bar Seating" })}
                  className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline uppercase tracking-wider"
                >
                  Reserve bar table →
                </button>
              </div>
            </div>

          </div>

          {/* Card 4 (Offset Diagonally Down & Right: Wood-Fired Stone Pizza) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-12 sm:mt-16">
            
            {/* Story text on the left */}
            <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 pt-4 md:pt-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 block mb-2">
                04 · Wood-Fired Hearth Pizza
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal mb-3">
                Copacabana Special Pizza
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed mb-4 max-w-md">
                Hand-stretched artisan pizza baked fresh on the rooftop terrace oven, topped with grilled herb chicken, smoky salami, charred garden bell peppers, and bubbling mozzarella.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-brand-green">
                  Rs 1,120
                </span>
                <button
                  onClick={() => onOpenReserve({ specialRequests: "Ordering Copacabana Special Pizza" })}
                  className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline uppercase tracking-wider"
                >
                  Reserve a table →
                </button>
              </div>
            </div>

            {/* Card 4 Image */}
            <motion.div
              style={{ y: yRight }}
              className="md:col-span-5 md:col-start-7 order-1 md:order-2"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_16px_40px_rgba(22,62,43,0.08)] border border-brand-green/10 group">
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src="/images/food_dish1.jpg"
                    alt="Copacabana Wood-Fired Artisan Pizza"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Pinned badge at top-left edge (clean placement without price collision) */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-green/15 shadow-sm">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-red-600">
                    Wood-Fired Hearth
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white hidden md:flex items-baseline justify-between">
                  <span className="font-serif text-lg sm:text-xl font-bold">
                    Copacabana Special Pizza
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-red-400">
                    Rs 1,120
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Full Menu Explorer Banner */}
        <div className="mt-20 sm:mt-28 p-6 sm:p-10 rounded-3xl bg-white border border-brand-green/15 shadow-[0_8px_30px_rgba(22,62,43,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 block mb-1">
              50+ Kitchen & Bar Selections
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal mb-2">
              Explore Our Complete Food & Drink Menu
            </h3>
            <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed">
              Browse all Asian touched delicacies, charcoal platters, authentic biryani, artisan thin-crust pizzas, and tropical cocktails—or view the official printed menu card.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenMenu}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-950/40 border border-red-500/30 flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4 text-white" />
              <span>Explore Complete Menu</span>
            </button>
            <button
              onClick={() => onOpenReserve({})}
              className="px-5 py-3.5 rounded-xl bg-[#FAF7F2] hover:bg-white border border-brand-green/20 text-brand-pine font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-red-600" />
              <span>Book a Table</span>
            </button>
          </div>
        </div>

      </div>

      {/* Organic Wave Border ending Popular Menu */}
      <MenuToLocationWave />
    </section>
  );
}
