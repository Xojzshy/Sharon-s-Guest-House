import React from 'react';
import { Phone, Mail, MapPin, Waves, Users, Wifi, Utensils, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guesthouseData';
import { PrintableFactSheet } from './PrintableFactSheet';
import gardenPoolImg from '../assets/images/sharons_garden_pool_1787296255363.jpg';

interface HeroProps {
  onOpenInquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiryModal }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#fdfbf7]">
      {/* Garden leaf subtle background pattern */}
      <div className="absolute inset-0 bg-leaf-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e2ece7] border border-[#c6d9d0] text-[#365045] text-xs font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Roan Road, Kabulonga, Lusaka</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2b3e36] font-medium leading-[1.15] tracking-tight">
                Sharon's <span className="italic font-normal text-[#557c6b]">Guest House</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#365045] font-serif italic">
                Affordable accommodation, conference facilities & outside catering in Kabulonga
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-[#426355] leading-relaxed max-w-2xl">
              Nestled on quiet Roan Road in the leafy residential suburb of Kabulonga, Sharon's Guest House provides a calm, garden-retreat atmosphere for business travelers, conference delegates, and visiting guests. Enjoy relaxing outdoor amenities, full in-room comfort, and tailored event catering services.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#f7f3eb] border border-[#ede5d5] flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#557c6b]/10 text-[#557c6b]">
                  <Waves className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2b3e36]">Outdoor Pool</div>
                  <div className="text-[11px] text-[#557c6b]">Shaded Garden</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#f7f3eb] border border-[#ede5d5] flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#557c6b]/10 text-[#557c6b]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2b3e36]">Conferencing</div>
                  <div className="text-[11px] text-[#557c6b]">25 Delegates</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#f7f3eb] border border-[#ede5d5] flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#557c6b]/10 text-[#557c6b]">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2b3e36]">WiFi & DSTV</div>
                  <div className="text-[11px] text-[#557c6b]">Air Conditioned</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#f7f3eb] border border-[#ede5d5] flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#557c6b]/10 text-[#557c6b]">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2b3e36]">Catering</div>
                  <div className="text-[11px] text-[#557c6b]">Events & Parties</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiryModal}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#557c6b] hover:bg-[#426355] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#c59b27]" />
                <span>Inquire & Reserve Now</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[#2b3e36] bg-[#e2ece7] hover:bg-[#c6d9d0] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#557c6b]" />
                <span>Call +260 975 219 638</span>
              </a>

              <PrintableFactSheet />
            </div>

            {/* Hours note */}
            <div className="text-xs text-[#557c6b] flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#c59b27] animate-pulse"></span>
              <span>Front Desk Operations: {BUSINESS_INFO.operatingHours}</span>
            </div>

          </div>

          {/* Right Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Garden Pool Card */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={gardenPoolImg}
                    alt="Sharon's Guest House Swimming Pool & Garden"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#557c6b]/90 backdrop-blur-xs text-[11px] font-medium tracking-wide uppercase text-white mb-1">
                      Kabulonga Retreat
                    </span>
                    <h3 className="font-serif text-lg font-medium text-white">
                      Tranquil Swimming Pool & Garden
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Leaf Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#fdfbf7] border border-[#c6d9d0] rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c59b27]/15 flex items-center justify-center text-[#c59b27]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b3e36]">Prime Location</div>
                  <div className="text-[11px] text-[#557c6b]">Roan Road, Lusaka</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
