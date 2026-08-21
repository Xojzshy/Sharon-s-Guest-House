import React, { useState } from 'react';
import { Users, Coffee, Utensils, FileText, CheckCircle2, Sparkles, Send, Copy, Check, Calendar, Wine, Gift, HeartHandshake, MessageSquare } from 'lucide-react';
import { CONFERENCE_INFO, OUTSIDE_CATERING_INFO, BUSINESS_INFO } from '../data/guesthouseData';
import { GardenMotifDivider } from './GardenMotifDivider';
import conferenceImg from '../assets/images/sharons_conference_1787296266412.jpg';
import diningImg from '../assets/images/sharons_dining_1787296291744.jpg';

interface ConferenceProps {
  onOpenInquiryModal: (type?: 'conference' | 'catering') => void;
}

export const ConferenceEventsSection: React.FC<ConferenceProps> = ({ onOpenInquiryModal }) => {
  // Calculator / Package Customizer State
  const [delegatesCount, setDelegatesCount] = useState<number>(15);
  const [selectedEventType, setSelectedEventType] = useState<string>('Corporate Workshop / Meeting');
  const [cateringStyle, setCateringStyle] = useState<string>('Zambian & International Buffet');
  const [needsConferenceRoom, setNeedsConferenceRoom] = useState<boolean>(true);
  const [needsOutsideCatering, setNeedsOutsideCatering] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const eventTypeOptions = [
    'Corporate Workshop / Meeting',
    'Seminar & Training',
    'Executive Board Session',
    'Wedding Reception / Kitchen Party',
    'End-of-Year Corporate Celebration',
    'Cocktail Party & Reception'
  ];

  const cuisineOptions = [
    'Zambian & International Buffet',
    'Authentic Zambian Specialties',
    'International Cuisine Selection',
    'Custom Menu Setup'
  ];

  const generateInquiryText = () => {
    let text = `Hello Sharon's Guest House Reservations,\n\nI would like to inquire about hosting an event/conference:\n`;
    text += `- Event Type: ${selectedEventType}\n`;
    text += `- Estimated Delegates/Guests: ${delegatesCount}\n`;
    if (needsConferenceRoom) {
      text += `- Conference Hall Needed: Yes (25-person capacity venue)\n`;
      text += `- Package Inclusions: Lunch, 2 Teas, Soft Drink, 2 Water Bottles, Stationery\n`;
    }
    if (needsOutsideCatering) {
      text += `- Outside Catering Needed: Yes (${cateringStyle})\n`;
    }
    text += `\nPlease provide availability and details for our booking. Thank you!`;
    return text;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(generateInquiryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Event Inquiry: ${selectedEventType} (${delegatesCount} guests)`);
    const body = encodeURIComponent(generateInquiryText());
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(generateInquiryText());
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="conferences" className="py-16 md:py-24 bg-[#f7f3eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Conferencing & Events
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            25-Capacity Conference Hall & Outside Catering
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Host professional workshops, board meetings, and private celebrations in Kabulonga. Our complete conference package and outside catering services ensure your delegates and guests are expertly cared for.
          </p>
        </div>

        <GardenMotifDivider />

        {/* Conference Room & Package Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Photo Frame */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
            <div className="relative aspect-16/10">
              <img
                src={conferenceImg}
                alt="Sharon's Guest House 25-person Conference Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 rounded-md bg-[#557c6b] text-xs font-bold text-white uppercase tracking-wider mb-1 inline-block">
                  Capacity: Up to 25 Delegates
                </span>
                <h3 className="font-serif text-xl font-medium">Focused & Quiet Meeting Environment</h3>
              </div>
            </div>
          </div>

          {/* Package Inclusions Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c59b27] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Full Conference Day Package</span>
              </div>
              <h3 className="font-serif text-3xl font-medium text-[#2b3e36]">
                Everything Included for Your Delegates
              </h3>
              <p className="text-sm text-[#426355] mt-2 leading-relaxed">
                Our conference package is thoughtfully structured so organizers can focus entirely on their meeting agenda while we take care of refreshments and venue comfort.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONFERENCE_INFO.inclusions.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557c6b] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#2b3e36]">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#e2ece7] border border-[#c6d9d0]">
              <div className="text-xs font-bold text-[#2b3e36] uppercase tracking-wider mb-2">
                Ideal For:
              </div>
              <div className="flex flex-wrap gap-2">
                {CONFERENCE_INFO.idealFor.map((useCase, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#fdfbf7] text-xs text-[#365045] font-medium border border-[#ede5d5]">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiryModal('conference')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#557c6b] hover:bg-[#426355] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Users className="w-4 h-4 text-[#c59b27]" />
                <span>Request Conference Room Booking</span>
              </button>
            </div>

          </div>

        </div>

        {/* Outside Catering Section */}
        <div id="catering" className="bg-[#fdfbf7] rounded-3xl border border-[#c6d9d0] p-8 md:p-12 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6e8e3] text-[#b05a40] text-xs font-semibold">
                <Utensils className="w-3.5 h-3.5" />
                <span>Outside Catering Services</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium">
                Zambian & International Event Catering
              </h3>

              <p className="text-sm text-[#426355] leading-relaxed">
                Sharon's Guest House offers professional outside catering tailored for celebrations, corporate functions, and private gatherings. Our culinary team prepares both authentic Zambian delicacies and popular international dishes.
              </p>

              {/* Supported Events Grid */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#2b3e36] mb-3">
                  Events We Cater For:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {OUTSIDE_CATERING_INFO.eventTypes.map((event, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#f7f3eb] border border-[#ede5d5] flex items-center gap-2">
                      <Gift className="w-3.5 h-3.5 text-[#c86d51] shrink-0" />
                      <span className="text-xs font-medium text-[#2b3e36]">{event}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiryModal('catering')}
                  className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#c86d51] hover:bg-[#b05a40] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Utensils className="w-4 h-4 text-[#ede5d5]" />
                  <span>Inquire About Outside Catering</span>
                </button>
              </div>

            </div>

            {/* Photo preview of dining/catering */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                <div className="relative aspect-4/3">
                  <img
                    src={diningImg}
                    alt="Garden Dining Pavilion & Outside Catering"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic">
                    Freshly prepared Zambian & International cuisine for your guests
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Conference & Event Package Customizer */}
        <div className="bg-[#2b3e36] text-[#ede5d5] rounded-3xl p-6 sm:p-10 shadow-xl border border-[#365045]">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="text-center space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b27] bg-[#365045] px-3 py-1 rounded-full">
                Interactive Planning Tool
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Build Your Event or Conference Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#c6d9d0]">
                Configure your event requirements below to generate an instant inquiry template to send to our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#365045]/60 p-6 rounded-2xl border border-[#557c6b]">
              
              {/* Event Type Select */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#c6d9d0]">Event Type</label>
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#2b3e36] border border-[#557c6b] text-white text-xs focus:outline-none focus:border-[#c59b27]"
                >
                  {eventTypeOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Delegate Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-semibold text-[#c6d9d0]">Delegates / Guests</label>
                  <span className="font-bold text-[#c59b27] bg-[#2b3e36] px-2 py-0.5 rounded-md">
                    {delegatesCount} Guests (Max 25 venue cap)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  value={delegatesCount}
                  onChange={(e) => setDelegatesCount(parseInt(e.target.value))}
                  className="w-full accent-[#c59b27] cursor-pointer"
                />
              </div>

              {/* Checkboxes for Services Needed */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-[#c6d9d0]">Services Required</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needsConferenceRoom}
                      onChange={(e) => setNeedsConferenceRoom(e.target.checked)}
                      className="accent-[#c59b27] w-4 h-4"
                    />
                    <span>25-Cap Conference Room & Stationery</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needsOutsideCatering}
                      onChange={(e) => setNeedsOutsideCatering(e.target.checked)}
                      className="accent-[#c59b27] w-4 h-4"
                    />
                    <span>Outside Catering Services</span>
                  </label>
                </div>
              </div>

              {/* Cuisine Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#c6d9d0]">Cuisine Style</label>
                <select
                  value={cateringStyle}
                  onChange={(e) => setCateringStyle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#2b3e36] border border-[#557c6b] text-white text-xs focus:outline-none focus:border-[#c59b27]"
                >
                  {cuisineOptions.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Output Summary Preview */}
            <div className="bg-[#1b2823] p-4 rounded-xl border border-[#365045] font-mono text-xs text-[#c6d9d0] space-y-2">
              <div className="text-[10px] text-[#c59b27] uppercase tracking-wider font-sans font-bold">
                Generated Inquiry Summary:
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs text-[#e2ece7]">
                {generateInquiryText()}
              </pre>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={handleCopyInquiry}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#365045] hover:bg-[#557c6b] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#c59b27]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>

              <button
                onClick={handleEmailInquiry}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#c59b27] hover:bg-[#a9831d] text-xs font-semibold text-[#1b2823] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
