import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Car, Compass } from 'lucide-react';

export default function LocationSection({ onOpenReserve }) {
  return (
    <section id="location" className="py-24 relative bg-barrack-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Finding The Barrack</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Visit Us in Gairidhara
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Perched atop the Everest Bank Building on Gairidhara Sadak, offering an oasis of calm high above Kathmandu's main street traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl bg-barrack-card border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Rooftop Details & Hours
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-barrack-green/50 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Location & Floor
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      6th Floor Rooftop, Everest Bank Building
                    </p>
                    <p className="text-xs text-slate-300">
                      Gairidhara Sadak, Kathmandu 44600, Nepal
                    </p>
                    <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Elevator access directly to 6th floor rooftop</span>
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      Monday – Sunday: 12:00 PM – 11:30 PM
                    </p>
                    <p className="text-xs text-amber-300/90 mt-0.5">
                      Sunset Happy Hour: Daily 4:00 PM – 8:00 PM
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Reservations & Inquiries
                    </h4>
                    <a
                      href="tel:+9779810786445"
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors block"
                    >
                      +977 981-0786445
                    </a>
                    <p className="text-xs text-slate-400">
                      Walk-ins warmly welcomed, reservations recommended for edge tables
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Parking & Accessibility
                    </h4>
                    <p className="text-xs text-slate-300">
                      Two-wheeler and four-wheeler parking available at the building premises. High-speed elevator to rooftop.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barrack+Restaurant+%26+Lounge+Everest+Bank+Building+Gairidhara+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-barrack-accent to-amber-600 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Directions</span>
              </a>

              <button
                onClick={onOpenReserve}
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors text-center"
              >
                Book Table
              </button>
            </div>
          </motion.div>

          {/* Interactive Map Visual (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl overflow-hidden bg-barrack-card border border-white/10 relative min-h-[380px] flex flex-col shadow-xl"
          >
            {/* Real Venue Street Background */}
            <div className="relative w-full flex-1 min-h-[300px]">
              <img
                src="/images/rooftop.webp"
                alt="Barrack Restaurant Gairidhara Google Map Reference"
                className="w-full h-full object-cover object-center filter brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-barrack-card via-black/40 to-transparent" />

              {/* Pin Overlay Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 text-center shadow-2xl max-w-xs w-full">
                <div className="w-12 h-12 rounded-full bg-barrack-accent/20 border border-barrack-accent text-barrack-accent flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <MapPin className="w-6 h-6 fill-barrack-accent" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">The Barrack Lounge</h4>
                <p className="text-xs text-slate-300">Everest Bank Building 6th Floor</p>
                <p className="text-[11px] text-amber-400 font-mono mt-1">Gairidhara, Kathmandu</p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Barrack+Restaurant+%26+Lounge+Everest+Bank+Building+Gairidhara+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Quick Map Bar */}
            <div className="p-4 bg-barrack-dark border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Coordinates: 27.7172° N, 85.3240° E</span>
              <span className="text-emerald-400 font-medium">Kathmandu Valley Viewpoint</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
