import React from 'react';
import { Zap, ShieldCheck, Crown } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "100% Electric",
    desc: "Silent, eco-friendly engines allow you to hear the city, not the motor."
  },
  {
    icon: ShieldCheck,
    title: "Private & Safe",
    desc: "Just you and your guests. A personal driver dedicated to your comfort."
  },
  {
    icon: Crown,
    title: "Quiet Luxury",
    desc: "Premium upholstery and a curated aesthetic for discerning travelers."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-brand-light border-y border-black/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center mb-6 group-hover:border-brand-gold transition-colors duration-500">
                <f.icon size={32} className="text-gray-400 group-hover:text-brand-gold transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-black uppercase tracking-wider mb-3">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;