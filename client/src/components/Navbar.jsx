import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ onOpenReserve, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Rooftop Vista', href: '#vista' },
    { label: 'Signature Menu', href: '#menu' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-[#0E1A14]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-white/10 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Centered Masthead: Logo (transforms in middle ONLY after scroll) + Nav Links */}
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* 1. Centered Logo - ONLY appears and transforms in the MIDDLE after scroll */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center ${
                scrolled
                  ? 'max-h-14 opacity-100 translate-y-0 mb-1.5 sm:mb-2 pointer-events-auto'
                  : 'max-h-0 opacity-0 -translate-y-3 mb-0 pointer-events-none'
              }`}
            >
              <a href="#" className="inline-flex items-center justify-center group py-0.5">
                <img
                  src="/images/barrack_logo_light.png"
                  alt="The Barrack Rooftop Lounge"
                  className="h-7 sm:h-8 md:h-8.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = "/images/barrack_logo_crop.png";
                  }}
                />
              </a>
            </div>

            {/* 2. Centered Navigation Links (Stacked directly below logo like Yala Cafe) */}
            <nav className="hidden md:flex items-center justify-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-mono font-medium uppercase tracking-wider text-slate-200 hover:text-red-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1.5px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 after:transition-all drop-shadow-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

          </div>

          {/* Right Action Controls: Pinned on the right side so Center is 100% mathematically centered */}
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <a
              href="tel:+9779810786445"
              className={`hidden xl:flex items-center gap-2 text-xs font-mono text-slate-200 hover:text-white px-3 py-1.5 rounded-lg border transition-all ${
                scrolled
                  ? 'border-white/10 hover:border-white/20 bg-white/5'
                  : 'border-white/20 hover:border-white/40 bg-black/25 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>+977 981-0786445</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenReserve({})}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-950/40 border border-red-500/30 transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Book Table</span>
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-red-400 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Left: Spacer or Quick Call on Mobile */}
          <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <a
              href="tel:+9779810786445"
              className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Call Barrack Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Mobile Drawer Menu - positioned absolute top-full for zero-gap snapping */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 z-30 md:hidden bg-[#0E1A14]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl text-white"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif font-bold text-slate-100 hover:text-red-400 transition-colors py-1.5 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href="tel:+9779810786445"
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 py-2"
                  >
                    <Phone className="w-4 h-4 text-red-400" />
                    <span>Call: +977 981-0786445</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenReserve({});
                    }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-red-950/40 border border-red-500/30"
                  >
                    Reserve a Table
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
