import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Check, MapPin } from 'lucide-react';
import { Tour } from './types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-white border border-black/5 rounded-xl overflow-hidden hover:border-brand-gold hover:border-4 transition-all duration-300 flex flex-col h-full shadow-sm">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-all duration-700"></div>

      <div className="p-8 flex-grow flex flex-col relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-display tracking-widest uppercase font-bold flex items-center gap-2">
            <Clock size={12} />
            {tour.duration}
          </div>
          <div className="text-right">
            <span className="block text-2xl font-display font-bold text-brand-black">€{tour.price}</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Per Vehicle</span>
          </div>
        </div>

        <h3 className="text-3xl font-display font-bold text-brand-black mb-4 group-hover:text-brand-gold transition-colors duration-300">
          {tour.title}
        </h3>

        <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 border-l-2 border-brand-gold/30 pl-4">
          {tour.description}
        </p>

        <div className="mt-8 pt-6 border-t border-black/5">
          {tour.bookingUrl ? (
            <a
              href={tour.bookingUrl}
              className="group/btn w-full flex items-center justify-center gap-3 px-6 py-4 bg-brand-gold text-brand-black font-display font-bold uppercase tracking-widest text-sm hover:bg-brand-black hover:text-white transition-all duration-300"
            >
              Book Online
              <Check size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : (
            <a
              href="https://wa.me/34673017472"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-brand-gold text-brand-black font-display font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-all duration-300"
            >
              Contact to Book
              <MapPin size={18} className="text-brand-gold" />
            </a>
          )}
        </div>

        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-sm text-gray-400 hover:text-brand-black transition-colors py-3 border-t border-black/5"
          >
            <span className="uppercase tracking-widest text-xs font-semibold">
              {isExpanded ? 'Hide Route Details' : 'View Route Details'}
            </span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-2 pb-4">
              {tour.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="mt-1 min-w-[12px]">
                    {tour.isCustom ? <MapPin size={12} className="text-brand-gold" /> : <Check size={12} className="text-brand-gold" />}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;