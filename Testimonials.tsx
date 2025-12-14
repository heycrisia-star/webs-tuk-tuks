import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { REVIEWS, GOOGLE_MAPS_LINK } from './constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-gold font-display text-sm tracking-widest uppercase mb-2 block">Social Proof</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black">Trusted by Travelers</h2>
          </div>

          {/* Desktop Button - GREEN */}
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-[#14532d] transition-all duration-300 shadow-md hover:shadow-lg mt-6 md:mt-0 transform hover:-translate-y-1"
          >
            Read on Google Maps <MapPin size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white border border-black/5 p-8 rounded-xl relative shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex justify-between items-end border-t border-black/5 pt-4">
                <span className="text-brand-black font-display font-bold uppercase tracking-wide">{review.author}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button - GREEN */}
        <div className="mt-12 text-center md:hidden">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-[#14532d] transition-all duration-300 shadow-md"
          >
            Read on Google Maps <MapPin size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;