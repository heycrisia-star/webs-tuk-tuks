import React from 'react';
import { SOCIAL_LINKS, PHONE_NUMBER, FAREHARBOR_GIFT_CARD } from './constants';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

// Custom icons for platforms not in standard Lucide import or to ensure specific look
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const TripAdvisorIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M9.5 9.5a2.5 2.5 0 0 0 -3.6 2.3" />
    <path d="M14.5 9.5a2.5 2.5 0 0 1 3.6 2.3" />
  </svg>
);

interface FooterProps {
  onOpenFaq: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenFaq }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram size={20} />;
      case 'tiktok': return <TikTokIcon size={20} />;
      case 'tripadvisor': return <TripAdvisorIcon size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <footer id="contact" className="bg-brand-light text-brand-black py-16 border-t border-black/5 relative z-30">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">

        {/* Top Link - Text Increased */}
        <button
          id="faq"
          onClick={onOpenFaq}
          className="text-base md:text-lg font-display font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-brand-black transition-colors mb-6 border-b border-transparent hover:border-brand-gold pb-1"
        >
          Read Frequently Asked Questions
        </button>

        <a
          href={FAREHARBOR_GIFT_CARD}
          className="text-sm font-display font-bold uppercase tracking-[0.2em] text-brand-gold hover:text-brand-black transition-colors mb-10 border border-brand-gold px-6 py-2 hover:bg-brand-gold"
        >
          Buy a Gift Card
        </a>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wider mb-8 text-brand-black">
          Contact Us
        </h2>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 text-gray-600">
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-brand-gold transition-colors">
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white">
              <Phone size={16} />
            </div>
            <span className="font-light tracking-wide">{PHONE_NUMBER}</span>
          </a>
          <a href="mailto:experiencetuktuktours@gmail.com" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white">
              <Mail size={16} />
            </div>
            <span className="font-light tracking-wide">experiencetuktuktours@gmail.com</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 text-gray-500 mb-12">
          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
            <MapPin size={16} />
          </div>
          <span className="font-light tracking-wide">Madrid, Spain</span>
        </div>

        {/* Social Icons with Tooltips */}
        <div className="flex gap-4 mb-16">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-xl border border-black/10 bg-white flex items-center justify-center text-gray-500 hover:text-brand-black hover:border-brand-gold transition-all duration-300 shadow-sm"
              aria-label={link.label}
            >
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {link.label}
              </span>

              {getIcon(link.platform)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Experience Tuk Tuk Tours Spain. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;