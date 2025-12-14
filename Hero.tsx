import React from 'react';
import { WHATSAPP_LINK } from './constants';
import { ArrowRight, Star } from 'lucide-react';
import GradientBlinds from './GradientBlinds';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-light">
        <div className="absolute inset-0 opacity-40">
          <GradientBlinds
            gradientColors={['#F2F2EF', '#D4AF37', '#F2F2EF']}
            angle={45}
            noise={0.3}
            blindCount={8}
            blindMinWidth={50}
            spotlightRadius={0.6}
            spotlightSoftness={0.8}
            spotlightOpacity={0.8}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="normal"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm mb-8 animate-fade-in-up">
          <Star size={14} className="text-brand-gold fill-brand-gold" />
          <span className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">Madrid's Premier Private Tour</span>
        </div>

        {/* Logo */}
        <div className="mb-8 animate-fade-in-up [animation-delay:100ms]">
          <img
            src="/logo.png"
            alt="Tuk Tuk Tours Experience Logo"
            className="w-48 md:w-64 mx-auto"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-brand-black uppercase tracking-tight leading-none mb-6 animate-fade-in-up [animation-delay:200ms]">
          Experience <br />
          <span className="text-brand-gold">Tuk Tuk</span> Tours
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 font-light text-lg md:text-xl mb-12 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Discover the soul of Madrid in silence and style. <br className="hidden md:block" />
          100% Electric. Private. Exclusive.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up [animation-delay:600ms]">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-brand-gold text-brand-black font-display font-bold text-lg uppercase tracking-widest rounded-none hover:bg-brand-black hover:text-white transition-all duration-300 flex items-center gap-3"
          >
            Book Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;