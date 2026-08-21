import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, X, Sparkles, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guesthouseData';

interface FloatingContactWidgetProps {
  onOpenInquiryModal: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenInquiryModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Hello Sharon's Guest House, I would like to inquire about accommodation, conferencing, or outside catering.");
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end print:hidden">
      
      {/* Expanded Speed Dial Menu */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-[#c6d9d0] p-4 w-72 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          <div className="flex items-center justify-between pb-2 border-b border-[#f7f3eb]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b3e36]">
                Kabulonga Front Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] text-[#426355] leading-snug">
            Contact Sharon's Guest House directly on Roan Road:
          </div>

          <div className="space-y-2">
            
            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center justify-between cursor-pointer transition-all shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Fast</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full p-2.5 rounded-xl bg-[#557c6b] hover:bg-[#426355] text-white text-xs font-semibold flex items-center justify-between cursor-pointer transition-all shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </div>
            </a>

            {/* Online Reservation Inquiry */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenInquiryModal();
              }}
              className="w-full p-2.5 rounded-xl bg-[#f7f3eb] hover:bg-[#ede5d5] text-[#2b3e36] text-xs font-semibold flex items-center gap-2.5 border border-[#c6d9d0] cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4 text-[#557c6b]" />
              <span>Submit Booking Inquiry</span>
            </button>

          </div>

          <div className="pt-2 border-t border-[#f7f3eb] flex items-center justify-between text-[10px] text-[#7d9b8e]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>07:00 – 22:00 Daily</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#c86d51]" />
              <span>Roan Rd</span>
            </span>
          </div>

        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-3 rounded-full font-bold text-xs flex items-center gap-2.5 shadow-xl transition-all cursor-pointer ${
          isOpen 
            ? 'bg-[#2b3e36] text-white ring-2 ring-[#c59b27]' 
            : 'bg-[#557c6b] hover:bg-[#426355] text-white ring-2 ring-white hover:scale-105'
        }`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c59b27] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c59b27]"></span>
        </span>
        <Phone className="w-4 h-4 text-[#c59b27]" />
        <span className="hidden sm:inline font-serif tracking-wide">Quick Reservation & Inquiry</span>
        <span className="sm:hidden font-serif">Inquire</span>
      </button>

    </div>
  );
};
