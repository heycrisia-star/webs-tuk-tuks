import React from 'react';
import { Camera } from 'lucide-react';

const PhotoGallery: React.FC = () => {
    const photos = [
        { id: 1, src: '/gallery/tuk-tuk-1.jpg', alt: 'Tuk Tuk tours in historic Madrid' },
        { id: 2, src: '/gallery/tuk-tuk-2.jpg', alt: 'Tourists enjoying tuk tuk experience' },
        { id: 3, src: '/gallery/tuk-tuk-3.jpg', alt: 'Tuk tuk tour through Madrid streets' },
        { id: 4, src: '/gallery/tuk-tuk-4.jpg', alt: 'Group tour in electric tuk tuk' },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Camera className="text-brand-gold" size={24} />
                        <span className="text-brand-gold font-display text-sm tracking-widest uppercase">Gallery</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-4 uppercase">
                        Experience the Journey
                    </h2>
                    <p className="text-gray-600 font-light">
                        Discover Madrid from a unique perspective aboard our electric tuk tuks
                    </p>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="group relative aspect-square overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
