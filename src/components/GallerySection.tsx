import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/guesthouseData';
import { GardenMotifDivider } from './GardenMotifDivider';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; alt: string } | null>(null);

  const categories = ['All', 'Garden & Pool', 'Conferences', 'Rooms', 'Dining & Events'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Photo Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Explore Sharon's Guest House
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Take a visual tour of our lush Kabulonga gardens, swimming pool, executive conference hall, and guest rooms.
          </p>
        </div>

        <GardenMotifDivider />

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#557c6b] text-white shadow-xs'
                  : 'bg-[#f7f3eb] text-[#2b3e36] hover:bg-[#e2ece7] border border-[#ede5d5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage({ src: img.src, title: img.title, alt: img.alt })}
              className="group relative rounded-2xl overflow-hidden bg-[#e2ece7] border border-[#c6d9d0] cursor-pointer shadow-xs hover:shadow-md transition-all aspect-4/3"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#c59b27] font-semibold">
                  {img.category}
                </span>
                <h3 className="font-serif text-base font-medium text-white flex items-center justify-between">
                  <span>{img.title}</span>
                  <Maximize2 className="w-4 h-4 text-white shrink-0 ml-2" />
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#2b3e36] rounded-2xl overflow-hidden p-2 border border-[#557c6b]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full max-h-[75vh] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-center">
              <h4 className="font-serif text-lg font-medium text-white">{lightboxImage.title}</h4>
              <p className="text-xs text-[#c6d9d0] mt-1">{lightboxImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
