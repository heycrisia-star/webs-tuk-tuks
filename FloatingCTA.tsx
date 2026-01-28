import React from 'react';
import { MessageCircle, Star, Map } from 'lucide-react';
import { WHATSAPP_LINK, GOOGLE_REVIEW_LINK, FAREHARBOR_MAIN_FLOW } from './constants';

const FloatingCTA: React.FC = () => {
  const commonClasses = "flex items-center justify-center gap-3 px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 w-64 pointer-events-auto";
  const labelClasses = "font-display font-bold text-sm tracking-widest uppercase";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">

      {/* 1. Book Now (Gold) - TOP */}
      <a
        href={FAREHARBOR_MAIN_FLOW}
        className={`${commonClasses} bg-brand-gold text-brand-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]`}
      >
        <MessageCircle size={20} strokeWidth={2.5} />
        <span className={labelClasses}>Book Now</span>
      </a>

      {/* 2. Rate Experience (White) - MIDDLE */}
      <a
        href={GOOGLE_REVIEW_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} bg-white text-brand-black border border-gray-200 hover:border-brand-gold/50`}
      >
        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
          <Star size={14} className="fill-brand-gold text-brand-gold" />
        </div>
        <span className={labelClasses}>Rate Experience</span>
      </a>

      {/* 3. Visiting Barcelona (Navy/Blue) - BOTTOM */}
      <a
        href="https://wa.me/34635096002"
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} bg-[#1e3a8a] text-white border border-brand-gold/30 hover:bg-[#172554]`}
      >
        <Map size={16} />
        <span className={labelClasses}>
          Visiting Barcelona?
        </span>
      </a>

    </div>
  );
};

export default FloatingCTA;