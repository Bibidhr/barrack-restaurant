import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: "Siddhartha Shrestha",
    rating: 5,
    role: "Local Guide • Google Review",
    text: "One of the best rooftop spots in Kathmandu! The 360-degree view from the 6th floor of Everest Bank building is unreal during golden hour. The mutton sekuwa and cocktails were top notch. Service was prompt and polite.",
    date: "2 weeks ago"
  },
  {
    name: "Pragya Thapa",
    rating: 5,
    role: "Verified Diner • Google Review",
    text: "Super chill vibe away from the city street noise. The live acoustic music in the evening creates a lovely atmosphere, and the staff is genuinely welcoming. Great spot for birthdays, date night, or evening drinks.",
    date: "a month ago"
  },
  {
    name: "Aarav Gurung",
    rating: 5,
    role: "Google Reviewer",
    text: "Barrack Rooftop Lounge by Copacabana has unbeatable sunset views across the valley. Try their grand platter and sunset cocktail during happy hour. Highly recommend reserving a table at the edge of the terrace!",
    date: "3 weeks ago"
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative bg-barrack-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Verified Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>Guest Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-2">
              Loved by Valley Diners
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Real testimonials from patrons on Google Reviews.
            </p>
          </div>

          {/* Google Rating Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-barrack-dark border border-white/10 shadow-lg">
            <div className="text-right">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400">Based on 320+ Google Reviews</p>
            </div>
            <div className="pl-4 border-l border-white/10 flex flex-col items-center">
              <span className="font-serif text-3xl font-bold text-white">4.6</span>
              <span className="text-[10px] uppercase font-bold text-emerald-400">Verified</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="p-6 sm:p-8 rounded-2xl bg-barrack-dark border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-emerald-500/30" />
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Source */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] text-slate-400">{rev.role}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Google Map Reviews */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Barrack+Restaurant+%26+Lounge+Everest+Bank+Building+Gairidhara+Kathmandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
          >
            <span>View all reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
