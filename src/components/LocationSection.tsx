import React from 'react';
import { MapPin, Navigation, Compass, Building, ShieldCheck, ExternalLink, Clock, Landmark } from 'lucide-react';
import { BUSINESS_INFO, NEARBY_POINTS_OF_INTEREST } from '../data/guesthouseData';
import { GardenMotifDivider } from './GardenMotifDivider';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-[#f7f3eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Location & Surroundings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Roan Road, Kabulonga, Lusaka
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Conveniently positioned in one of Lusaka's most desirable and peaceful residential neighborhoods.
          </p>
        </div>

        <GardenMotifDivider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info & Highlights */}
          <div className="lg:col-span-7 bg-[#fdfbf7] rounded-3xl p-8 border border-[#c6d9d0] shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c59b27] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Prime Lusaka Neighborhood</span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#2b3e36]">
                Why Kabulonga is the Ideal Choice
              </h3>

              <p className="text-sm text-[#426355] leading-relaxed">
                Kabulonga is prized for its serene, green tree-canopied avenues and safe suburban ambiance. Sharon's Guest House on Roan Road combines this tranquility with easy access to shopping centers, diplomatic embassies, medical centers, and Lusaka's primary commercial hubs.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#f2f6f4] border border-[#e2ece7] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#557c6b] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#2b3e36]">Quiet & Secure</div>
                    <div className="text-[11px] text-[#557c6b]">Peaceful residential atmosphere ideal for restful stays.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f2f6f4] border border-[#e2ece7] flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#557c6b] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#2b3e36]">Near Shopping Malls</div>
                    <div className="text-[11px] text-[#557c6b]">Close to Kabulonga Shopping Centre and Centro Mall.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f2f6f4] border border-[#e2ece7] flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#557c6b] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#2b3e36]">Easy Accessibility</div>
                    <div className="text-[11px] text-[#557c6b]">Well-connected via main arterial roads in Lusaka.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f2f6f4] border border-[#e2ece7] flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#557c6b] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#2b3e36]">Front Desk Support</div>
                    <div className="text-[11px] text-[#557c6b]">{BUSINESS_INFO.operatingHours}</div>
                  </div>
                </div>
              </div>

              {/* Nearby Landmarks Grid */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#2b3e36] mb-3 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#c59b27]" />
                  <span>Nearby Landmarks & Convenience</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {NEARBY_POINTS_OF_INTEREST.map((poi, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#f7f3eb] border border-[#ede5d5]">
                      <div className="text-xs font-bold text-[#2b3e36]">{poi.name}</div>
                      <div className="text-[11px] text-[#557c6b] font-medium mt-0.5">{poi.highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Address Action Bar */}
            <div className="pt-4 border-t border-[#ede5d5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-[#557c6b] font-semibold">Address:</div>
                <div className="text-sm font-bold text-[#2b3e36]">{BUSINESS_INFO.address}</div>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#557c6b] hover:bg-[#426355] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs shrink-0"
              >
                <Navigation className="w-4 h-4 text-[#c59b27]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

          {/* Interactive Visual Map Representation */}
          <div className="lg:col-span-5 bg-[#2b3e36] text-white rounded-3xl p-8 border border-[#365045] flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#365045] pb-4">
                <span className="font-serif text-xl font-medium text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c59b27]" />
                  <span>Kabulonga Location Guide</span>
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#365045] text-[#c6d9d0]">
                  Lusaka, Zambia
                </span>
              </div>

              {/* Map Canvas Visual Placeholder */}
              <div className="relative bg-[#1b2823] rounded-2xl p-6 border border-[#365045] overflow-hidden text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#557c6b]/30 mx-auto flex items-center justify-center text-[#c59b27] border border-[#557c6b]">
                  <Navigation className="w-8 h-8 animate-pulse" />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-medium text-white">Sharon's Guest House</h4>
                  <p className="text-xs text-[#c6d9d0] mt-1">Roan Road, Kabulonga</p>
                </div>

                <div className="text-xs text-[#9cbcae] bg-[#2b3e36] p-3 rounded-xl border border-[#365045] text-left space-y-1.5">
                  <div className="flex justify-between">
                    <span>Suburbs:</span>
                    <span className="font-semibold text-white">Kabulonga</span>
                  </div>
                  <div className="flex justify-between">
                    <span>City:</span>
                    <span className="font-semibold text-white">Lusaka, Zambia</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Street:</span>
                    <span className="font-semibold text-white">Roan Road</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#c6d9d0] leading-relaxed">
                📍 Situated in Lusaka's eastern suburban district. Airport transfer & local taxis easily serve Roan Road.
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 rounded-xl text-xs font-semibold text-[#1b2823] bg-[#c59b27] hover:bg-[#a9831d] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Call Front Desk for Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
