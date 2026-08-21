import React from 'react';
import { ShieldCheck, MapPin, Trees, Users, Utensils, Headset, Sparkles, CheckCircle } from 'lucide-react';
import { GardenMotifDivider } from './GardenMotifDivider';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: MapPin,
      title: "Peaceful Residential Location",
      subtitle: "Roan Road, Kabulonga",
      description: "Situated on a quiet, tree-lined residential street in Kabulonga, providing an undisturbed night's sleep away from busy city noise while remaining minutes from Centro Mall and corporate hubs."
    },
    {
      icon: Users,
      title: "25-Delegate Conference Center",
      subtitle: "Complete Business Package",
      description: "Air-conditioned meeting hall outfitted with high-speed Wi-Fi, writing stationery, bottled mineral water, and complete hot meal catering (lunch and twice-daily teas)."
    },
    {
      icon: Trees,
      title: "Tranquil Garden & Swimming Pool",
      subtitle: "Relaxing Outdoor Spaces",
      description: "A sparkling outdoor swimming pool surrounded by manicured green lawns, shaded dining pavilions, and braai barbecue facilities ideal for post-meeting relaxation."
    },
    {
      icon: Utensils,
      title: "Customized Event Catering",
      subtitle: "Zambian & International Menus",
      description: "Full outside and on-site catering solutions for corporate end-of-year events, kitchen parties, weddings, and cocktail parties tailored to your guest preferences."
    },
    {
      icon: ShieldCheck,
      title: "Full In-Room Comfort",
      subtitle: "Climate Control & Connectivity",
      description: "Every room features individual climate control air conditioning, satellite television with DSTV channels, en-suite bathrooms, and complimentary high-speed Wi-Fi."
    },
    {
      icon: Headset,
      title: "Attentive Guest Hospitality",
      subtitle: "Daily Front Desk Support",
      description: "Dedicated on-site staff operating from 07:00 to 22:00 daily to assist with reservations, airport transit coordination, conference setup, and dining inquiries."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            The Sharon's Guest House Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Why Guests & Event Organizers Choose Us
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Combining quiet residential comfort in Kabulonga with professional conference and event catering facilities.
          </p>
        </div>

        <GardenMotifDivider />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-[#f7f3eb] p-6 rounded-2xl border border-[#ede5d5] hover:border-[#557c6b] transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#557c6b]/10 text-[#557c6b] group-hover:bg-[#557c6b] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7d9b8e] bg-white px-2.5 py-1 rounded-full border border-[#ede5d5]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#2b3e36] group-hover:text-[#557c6b] transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#c59b27] mt-0.5">
                      {pillar.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-[#426355] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#ede5d5] flex items-center gap-1.5 text-[11px] font-semibold text-[#557c6b]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>Kabulonga Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
