import React, { useState } from 'react';
import { Wifi, Tv, Wind, ShieldCheck, CheckCircle2, BedDouble, Calendar } from 'lucide-react';
import { ROOM_CATEGORIES, BUSINESS_INFO } from '../data/guesthouseData';
import { GardenMotifDivider } from './GardenMotifDivider';

interface RoomsSectionProps {
  onSelectRoomForInquiry: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoomForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRooms = selectedCategory === 'all' 
    ? ROOM_CATEGORIES 
    : ROOM_CATEGORIES.filter(r => r.id === selectedCategory);

  return (
    <section id="rooms" className="py-16 md:py-24 bg-[#f7f3eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Accommodation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Comfortable Guest Rooms in Kabulonga
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Sharon's Guest House provides a range of executive, deluxe, and standard rooms designed for a restful stay in a quiet residential setting. Every room comes fully equipped with modern conveniences for your comfort.
          </p>
        </div>

        <GardenMotifDivider />

        {/* In-Room Key Features Banner */}
        <div className="mb-12 bg-[#fdfbf7] border border-[#c6d9d0] rounded-2xl p-6 shadow-xs">
          <h3 className="text-sm font-semibold text-[#2b3e36] uppercase tracking-wider text-center mb-4">
            Standard Features Across All Rooms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-3 rounded-xl bg-[#f2f6f4]">
              <div className="w-10 h-10 rounded-full bg-[#557c6b]/15 flex items-center justify-center text-[#557c6b] mb-2">
                <Tv className="w-5 h-5" />
              </div>
              <div className="font-serif font-semibold text-sm text-[#2b3e36]">DSTV Television</div>
              <div className="text-xs text-[#557c6b]">Satellite TV channels for entertainment</div>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-[#f2f6f4]">
              <div className="w-10 h-10 rounded-full bg-[#557c6b]/15 flex items-center justify-center text-[#557c6b] mb-2">
                <Wifi className="w-5 h-5" />
              </div>
              <div className="font-serif font-semibold text-sm text-[#2b3e36]">High-Speed Wi-Fi</div>
              <div className="text-xs text-[#557c6b]">Complimentary internet access in rooms</div>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-[#f2f6f4]">
              <div className="w-10 h-10 rounded-full bg-[#557c6b]/15 flex items-center justify-center text-[#557c6b] mb-2">
                <Wind className="w-5 h-5" />
              </div>
              <div className="font-serif font-semibold text-sm text-[#2b3e36]">Air-Conditioning</div>
              <div className="text-xs text-[#557c6b]">Climate control for all seasons</div>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#557c6b] text-white shadow-xs'
                : 'bg-[#fdfbf7] text-[#2b3e36] hover:bg-[#e2ece7] border border-[#ede5d5]'
            }`}
          >
            All Categories
          </button>
          {ROOM_CATEGORIES.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedCategory(room.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === room.id
                  ? 'bg-[#557c6b] text-white shadow-xs'
                  : 'bg-[#fdfbf7] text-[#2b3e36] hover:bg-[#e2ece7] border border-[#ede5d5]'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Rooms Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#fdfbf7] rounded-2xl border border-[#c6d9d0] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Room Photo */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#e2ece7]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#2b3e36]/80 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1 rounded-full">
                    {room.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#2b3e36]">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#557c6b] mt-1 font-medium">
                      Ideal for: {room.idealFor}
                    </p>
                  </div>

                  <p className="text-sm text-[#426355] leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities List */}
                  <div className="pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#2b3e36] mb-2.5">
                      Room Amenities
                    </div>
                    <ul className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#365045]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#557c6b] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 mt-4 border-t border-[#f7f3eb]">
                <button
                  onClick={() => onSelectRoomForInquiry(room.name)}
                  className="w-full py-3 rounded-xl text-xs font-semibold text-[#2b3e36] bg-[#e2ece7] hover:bg-[#557c6b] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-[#c59b27] group-hover:text-white transition-colors" />
                  <span>Inquire Availability for {room.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Booking Note Box */}
        <div className="mt-12 text-center bg-[#fdfbf7] border border-[#c6d9d0] rounded-xl p-6 max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#557c6b] font-serif font-semibold text-lg">
            <BedDouble className="w-5 h-5 text-[#c59b27]" />
            <span>Room Availability & Booking Inquiries</span>
          </div>
          <p className="text-sm text-[#426355] leading-relaxed">
            Room reservations are handled directly by our front desk. Contact us via phone or email for current availability and custom corporate/long-stay arrangements.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap text-xs font-semibold text-[#2b3e36]">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#557c6b] hover:underline">
              📞 {BUSINESS_INFO.phone}
            </a>
            <span>•</span>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#557c6b] hover:underline">
              ✉️ {BUSINESS_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
