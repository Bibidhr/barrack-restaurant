import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, FileText, Utensils, Sparkles, Calendar } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Curated Items' },
  { id: 'latin', label: 'Latin & Tapas' },
  { id: 'asian', label: 'Asian & Charcoal' },
  { id: 'pizza', label: 'Wood-Fired Pizza' },
  { id: 'bar', label: 'Cocktails & Bar' },
  { id: 'dessert', label: 'Desserts' },
];

export default function FullMenuModal({ isOpen, onClose, onOpenReserve }) {
  const [activeTab, setActiveTab] = useState('curated'); // 'curated' | 'original'
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setDishes(data.data);
        }
      })
      .catch(err => {
        console.warn('Using fallback dishes:', err);
      })
      .finally(() => setLoading(false));
  }, [isOpen]);

  const filteredDishes = dishes.filter(dish => {
    const matchesCat = activeCategory === 'all' || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (dish.description && dish.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#0E1A14]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF6F0] rounded-3xl shadow-2xl border border-brand-green/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-7 border-b border-brand-green/10 flex items-center justify-between bg-white/70 backdrop-blur-sm">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-red-600 font-bold block mb-1">
                  The Barrack & Copacabana
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal">
                  Food & Cocktail Menu
                </h2>
              </div>

              <div className="flex items-center gap-2">
                {/* Mode toggle: Curated list vs Physical Scanned Menu */}
                <div className="hidden sm:flex bg-[#FBF6F0] p-1 rounded-xl border border-brand-green/15 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('curated')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'curated'
                        ? 'bg-red-600 text-white font-bold shadow-sm'
                        : 'text-brand-secondary hover:text-brand-pine'
                    }`}
                  >
                    Curated Explorer
                  </button>
                  <button
                    onClick={() => setActiveTab('original')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      activeTab === 'original'
                        ? 'bg-red-600 text-white font-bold shadow-sm'
                        : 'text-brand-secondary hover:text-brand-pine'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Physical Menu Card</span>
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-brand-secondary hover:text-brand-green hover:bg-black/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="sm:hidden flex border-b border-brand-green/10 bg-white/50 text-xs font-mono">
              <button
                onClick={() => setActiveTab('curated')}
                className={`flex-1 py-2.5 text-center font-bold ${
                  activeTab === 'curated'
                    ? 'border-b-2 border-brand-green text-brand-green bg-white'
                    : 'text-brand-muted'
                }`}
              >
                Curated Dishes
              </button>
              <button
                onClick={() => setActiveTab('original')}
                className={`flex-1 py-2.5 text-center font-bold flex items-center justify-center gap-1.5 ${
                  activeTab === 'original'
                    ? 'border-b-2 border-brand-green text-brand-green bg-white'
                    : 'text-brand-muted'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Original Menu</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7">
              {activeTab === 'curated' ? (
                <>
                  {/* Search and Category Filter */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search dishes (e.g. Sekuwa, Pizza, Nachos)..."
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-brand-green/15 text-xs text-brand-pine placeholder:text-brand-muted focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold whitespace-nowrap transition-all ${
                            activeCategory === cat.id
                              ? 'bg-red-600 text-white shadow-sm'
                              : 'bg-white border border-brand-green/15 text-brand-secondary hover:text-brand-green'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dishes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredDishes.map((dish) => (
                      <div
                        key={dish.name}
                        className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-green/10 shadow-sm flex flex-col justify-between hover:border-brand-green/25 transition-all group"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-1.5">
                            <h4 className="font-serif text-lg font-bold text-brand-green group-hover:text-red-600 transition-colors">
                              {dish.name}
                            </h4>
                            <span className="font-mono text-xs sm:text-sm font-bold text-brand-green whitespace-nowrap">
                              Rs {dish.price}
                            </span>
                          </div>

                          {dish.badge && (
                            <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-200 font-mono text-[9px] font-bold uppercase mb-2">
                              {dish.badge}
                            </span>
                          )}

                          <p className="text-xs text-brand-secondary font-sans leading-relaxed line-clamp-2">
                            {dish.description}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-brand-green/10 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase text-brand-muted">
                            {dish.category}
                          </span>
                          <button
                            onClick={() => {
                              onClose();
                              onOpenReserve({ specialRequests: `Interested in: ${dish.name}` });
                            }}
                            className="text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline uppercase tracking-wider flex items-center gap-1"
                          >
                            <span>Book Table</span>
                            <span>→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredDishes.length === 0 && (
                    <div className="text-center py-12 text-brand-muted">
                      <Utensils className="w-8 h-8 mx-auto mb-2 opacity-40" />
                      <p className="text-sm font-serif">No dishes found matching "{searchQuery}"</p>
                    </div>
                  )}
                </>
              ) : (
                /* Physical Menu Card High-Res Scan */
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 sm:p-4 rounded-2xl border border-brand-green/15 shadow-md w-full max-w-2xl">
                    <p className="text-xs font-mono text-center text-brand-secondary mb-3">
                      Official Printed Food & Beverage Menu (Copacabana Kathmandu, 6th Floor Rooftop)
                    </p>
                    <img
                      src="/images/rooftop_sunset.jpg"
                      alt="The Barrack Copacabana Complete Printed Menu"
                      className="w-full h-auto rounded-lg object-contain shadow-inner"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-brand-green/10 bg-white/70 backdrop-blur-sm flex items-center justify-between text-xs font-mono">
              <span className="text-brand-muted hidden sm:inline">
                Open Daily 12:00 PM – 11:30 PM • 6th Floor Everest Bank Building
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenReserve({});
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase tracking-wider shadow-lg shadow-red-950/40 border border-red-500/30 transition-all flex items-center gap-2 ml-auto"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Rooftop Table</span>
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
