import React from 'react';
import { Waves, Utensils, Trees, Flame, Clock, Wifi, ShieldCheck, Sun, Compass } from 'lucide-react';
import { AMENITIES } from '../data/guesthouseData';
import { GardenMotifDivider } from './GardenMotifDivider';

export const AmenitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-6 h-6" />;
      case 'Utensils': return <Utensils className="w-6 h-6" />;
      case 'Trees': return <Trees className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'Wifi': return <Wifi className="w-6 h-6" />;
      default: return <Sun className="w-6 h-6" />;
    }
  };

  return (
    <section id="amenities" className="py-16 md:py-24 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Guest Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Garden Retreat Amenities
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Designed to foster relaxation and ease, Sharon's Guest House offers a charming outdoor pool, peaceful gardens, barbecue facilities, and an on-site restaurant and bar.
          </p>
        </div>

        <GardenMotifDivider />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-[#f7f3eb] rounded-2xl border border-[#ede5d5] p-6 hover:border-[#c6d9d0] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#557c6b] text-[#fdfbf7] flex items-center justify-center shadow-xs group-hover:bg-[#426355] transition-colors">
                    {getIcon(amenity.iconName)}
                  </div>
                  {amenity.highlight && (
                    <span className="text-[11px] font-semibold text-[#c59b27] bg-[#fdfbf7] px-2.5 py-1 rounded-full border border-[#c59b27]/30">
                      {amenity.highlight}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-medium text-[#2b3e36]">
                    {amenity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#426355] mt-2 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>

              {amenity.image && (
                <div className="mt-5 pt-4 border-t border-[#ede5d5]/80 overflow-hidden rounded-xl">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-36 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Peaceful Ambience Highlight */}
        <div className="mt-16 bg-[#e2ece7] rounded-2xl p-8 border border-[#c6d9d0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-2xl font-medium text-[#2b3e36]">
              A Quiet Oasis in Kabulonga
            </h3>
            <p className="text-sm text-[#365045] leading-relaxed">
              Kabulonga is renowned for its tree-lined streets and serene residential character. Enjoy picnic areas, shaded garden pavilions, and peaceful surroundings away from busy city traffic.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-4 py-2 bg-[#fdfbf7] rounded-xl text-xs font-semibold text-[#2b3e36] border border-[#c6d9d0] shadow-2xs">
              🌿 Lush Green Lawns
            </span>
            <span className="px-4 py-2 bg-[#fdfbf7] rounded-xl text-xs font-semibold text-[#2b3e36] border border-[#c6d9d0] shadow-2xs">
              🏊 Outdoor Swimming Pool
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
