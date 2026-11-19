import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Highlights' },
  { id: 'latin', label: 'Latin & Tapas' },
  { id: 'asian', label: 'Asian & Himalayan' },
  { id: 'pizza', label: 'Pizza & Mains' },
  { id: 'bar', label: 'Cocktails & Bar' },
  { id: 'dessert', label: 'Desserts' },
];

export default function MenuSection({ onOpenReserve }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setDishes(data.data);
        }
      })
      .catch(err => console.warn('Menu API error, using static dishes:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredDishes = activeCategory === 'all'
    ? dishes
    : dishes.filter(d => d.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white/60 border-y border-brand-green/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-terracotta mb-1">
            Gastronomy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal mb-3">
            Curated Menu <em className="italic text-brand-pine">Highlights</em>
          </h2>
          <p className="text-xs sm:text-sm text-brand-secondary font-sans leading-relaxed">
            Authentic Latin American specialties, Nepali Himalayan charcoal favorites, artisan stone-baked pizzas, and tropical cocktail selections.
          </p>
        </div>

        {/* Minimal Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-brand-green text-[#FAF5EF] border-brand-green shadow-sm'
                    : 'bg-white/80 text-brand-secondary hover:text-brand-green hover:bg-white border-brand-green/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Stream & Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Dish List Stream (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
              {filteredDishes.map((dish) => (
                <motion.div
                  key={dish.name}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-brand-green/10 hover:border-brand-green/25 hover:shadow-[0_6px_24px_rgba(22,62,43,0.06)] transition-all flex items-baseline justify-between gap-4 group"
                >
                  <div className="flex-1 pr-2">
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-green group-hover:text-brand-terracotta transition-colors">
                        {dish.name}
                      </h3>
                      {dish.badge && (
                        <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getBadgeClass(dish.badge)}`}>
                          {dish.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-[13px] text-brand-secondary leading-relaxed font-sans">
                      {dish.description}
                    </p>
                  </div>

                  {/* Price Tag in JetBrains Mono */}
                  <span className="font-mono text-sm sm:text-base font-bold text-brand-green whitespace-nowrap">
                    Rs {dish.price}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Spotlight: Real Food & Bar Pictures (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5 sticky top-24">
            
            {/* Signature Dish Card */}
            <div className="bg-white rounded-2xl p-4 border border-brand-green/10 shadow-sm overflow-hidden">
              <div className="h-48 rounded-xl overflow-hidden mb-3 relative">
                <img
                  src="/images/opt/platter.webp"
                  alt="The Grand Latino Platter at The Barrack"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-brand-green text-[#FAF5EF] text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                  Chef's Signature
                </span>
              </div>
              <h4 className="font-serif text-base font-bold text-brand-green mb-1">
                The Grand Latino Platter
              </h4>
              <p className="text-xs text-brand-secondary leading-relaxed mb-3">
                Loaded sharing platter with grilled sausages, taco, nacho, jacket potato and garden greens.
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-brand-green/10">
                <span className="font-mono font-bold text-brand-green">Rs 880</span>
                <button
                  onClick={() => onOpenReserve({ specialRequests: "Ordering Grand Latino Platter" })}
                  className="text-brand-terracotta hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Book for Dinner</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Happy Hour Note */}
            <div className="bg-[#FAF5EF] rounded-2xl p-4 border border-brand-green/15">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-terracotta font-bold block mb-1">
                Sunset Bar Special
              </span>
              <h4 className="font-serif text-base font-bold text-brand-green mb-1">
                Daily 1+1 Happy Hour
              </h4>
              <p className="text-xs text-brand-secondary leading-relaxed mb-3">
                Buy 1 Get 1 on house pours, selected cocktails and beer daily between 4:00 PM and 8:00 PM.
              </p>
              <span className="font-mono text-[11px] text-brand-muted">
                Available on Rooftop Sky Deck & Bar
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function getBadgeClass(badge) {
  if (badge.includes('Signature') || badge.includes('Authentic')) {
    return 'bg-brand-terracotta-dim text-brand-terracotta-dark border-brand-terracotta-border';
  }
  if (badge.includes('Charcoal') || badge.includes('Himalayan')) {
    return 'bg-brand-green-dim text-brand-green border-brand-green-border';
  }
  return 'bg-black/5 text-brand-pine border-brand-green/15';
}
