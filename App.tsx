import React, { useState } from 'react';
import Hero from './Hero';
import Features from './Features';
import PhotoGallery from './PhotoGallery';
import TourCard from './TourCard';
import Testimonials from './Testimonials';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import { MAIN_TOURS, FAST_TOUR, GOOGLE_MAPS_LINK, FAQ_ITEMS } from './constants';
import { Menu, Zap, X, ChevronDown, ChevronUp } from 'lucide-react';

// Collapsible FAQ Item Component
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left group hover:bg-gray-50/50 transition-colors px-2 rounded-lg"
      >
        <span className="font-semibold text-brand-black pr-4 text-sm md:text-base font-display tracking-wide uppercase">{question}</span>
        {isOpen ?
          <ChevronUp size={18} className="text-brand-gold shrink-0" /> :
          <ChevronDown size={18} className="text-gray-400 group-hover:text-brand-gold shrink-0 transition-colors" />
        }
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 font-light leading-relaxed text-sm px-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <div className="min-h-screen bg-brand-light text-brand-black font-sans selection:bg-brand-gold selection:text-white">


      {/* Minimal Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-brand-light/90 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-6 h-20 flex justify-end items-center">

          <button className="p-2 text-brand-black hover:text-brand-gold transition-colors md:hidden">
            <Menu size={24} />
          </button>
          <div className="hidden md:flex gap-8 text-sm font-display uppercase tracking-widest font-medium text-gray-500 items-center">
            <a href="#tours" className="hover:text-brand-black transition-colors">Tours</a>
            <a href="#reviews" className="hover:text-brand-black transition-colors">Reviews</a>
            <button onClick={() => setShowFaq(true)} className="hover:text-brand-black transition-colors uppercase tracking-widest">FAQ</button>
            <a href="#contact" className="hover:text-brand-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        <div id="about" className="scroll-mt-24">
          <Features />
        </div>

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* Tours Section - Added scroll-mt-24 for fixed header offset */}
        <section id="tours" className="py-16 container mx-auto px-6 scroll-mt-24">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-brand-gold font-display text-sm tracking-widest uppercase mb-4 block">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 uppercase">Curated Routes</h2>
            <p className="text-gray-600 font-light">Select your perfect journey through Madrid. From comprehensive deep-dives to quick express options.</p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {MAIN_TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Fast Tour - Express Option - UPDATED HOVER STYLE */}
          <div className="relative rounded-xl overflow-hidden border border-black/5 bg-white shadow-sm hover:border-brand-gold hover:border-4 transition-all duration-300">
            <div className="p-8 md:flex items-center justify-between gap-8">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-brand-gold text-brand-black p-1 rounded">
                    <Zap size={16} fill="currentColor" />
                  </div>
                  <span className="text-brand-gold font-display font-bold uppercase tracking-widest text-sm">Express Option</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-black mb-2">{FAST_TOUR.title}</h3>
                <p className="text-gray-500 font-light text-sm max-w-lg">{FAST_TOUR.description}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 border-t md:border-t-0 md:border-l border-black/5 pt-6 md:pt-0 md:pl-8">
                <div className="flex gap-8">
                  <div>
                    <span className="block text-sm text-gray-400 uppercase tracking-wider">Duration</span>
                    <span className="text-brand-black font-display font-bold">{FAST_TOUR.duration}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 uppercase tracking-wider">Price</span>
                    <span className="text-xl text-brand-gold font-display font-bold">€{FAST_TOUR.price}</span>
                  </div>
                </div>
                {FAST_TOUR.bookingUrl && (
                  <a
                    href={FAST_TOUR.bookingUrl}
                    className="w-full md:w-auto px-8 py-3 bg-brand-gold text-brand-black font-display font-bold uppercase tracking-widest text-xs hover:bg-brand-black hover:text-white transition-all duration-300 text-center"
                  >
                    Book Online
                  </a>
                )}
              </div>
            </div>
          </div>

        </section>

        {/* Reviews Section - Added scroll-mt-24 */}
        <div id="reviews" className="scroll-mt-24">
          <Testimonials />
        </div>
      </main>

      <Footer onOpenFaq={() => setShowFaq(true)} />
      <FloatingCTA />

      {/* FAQ Modal */}
      {showFaq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-light/90 backdrop-blur-md" onClick={() => setShowFaq(false)}></div>
          <div className="relative bg-white border border-black/5 rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center mb-6 shrink-0">
              <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-brand-gold">
                Frequently Asked Questions
              </h3>
              <button
                onClick={() => setShowFaq(false)}
                className="text-gray-400 hover:text-brand-black transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto pr-2 space-y-1 custom-scrollbar">
              {FAQ_ITEMS.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 text-center shrink-0">
              <button
                onClick={() => setShowFaq(false)}
                className="text-xs text-gray-400 hover:text-brand-black uppercase tracking-[0.2em] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;