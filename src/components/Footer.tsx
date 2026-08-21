import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guesthouseData';

interface FooterProps {
  onOpenInquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiryModal }) => {
  return (
    <>
      <footer className="bg-[#1b2823] text-[#ede5d5] pt-16 pb-24 md:pb-12 border-t border-[#365045]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#365045]">
            
            {/* Brand Intro */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#557c6b] flex items-center justify-center text-white font-serif font-bold text-xl">
                  S
                </div>
                <div>
                  <span className="font-serif text-2xl font-semibold text-white tracking-tight block">
                    Sharon's Guest House
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#c59b27] font-medium block">
                    Kabulonga, Lusaka, Zambia
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#c6d9d0] leading-relaxed max-w-md">
                Affordable accommodation, 25-capacity conference venue, outdoor swimming pool, and outside catering services located on peaceful Roan Road in Kabulonga, Lusaka.
              </p>

              <div className="text-xs text-[#9cbcae] flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Front Desk & Operations: {BUSINESS_INFO.operatingHours}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider text-[#c59b27]">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#c6d9d0]">
                <li><a href="#rooms" className="hover:text-white transition-colors">Executive & Standard Rooms</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Swimming Pool & Garden</a></li>
                <li><a href="#conferences" className="hover:text-white transition-colors">25-Person Conference Hall</a></li>
                <li><a href="#catering" className="hover:text-white transition-colors">Outside Event Catering</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Roan Road Kabulonga Location</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Direct Reservations</a></li>
              </ul>
            </div>

            {/* Contact Direct */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider text-[#c59b27]">
                Direct Contacts
              </h4>
              <div className="space-y-2.5 text-xs text-[#c6d9d0]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>

                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2.5 hover:text-white transition-colors block">
                  <Phone className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span className="font-semibold text-white">{BUSINESS_INFO.phone}</span>
                </a>

                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors block overflow-hidden">
                  <Mail className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span className="truncate">{BUSINESS_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenInquiryModal}
                  className="w-full py-2.5 rounded-xl bg-[#557c6b] hover:bg-[#426355] text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>Book / Inquire Online</span>
                </button>
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9cbcae] gap-4">
            <div>
              © {new Date().getFullYear()} Sharon's Guest House, Kabulonga, Lusaka. All rights reserved.
            </div>
            <div className="text-[11px] text-[#9cbcae]/80">
              Roan Road • Kabulonga • Lusaka, Zambia
            </div>
          </div>

        </div>
      </footer>

      {/* Fixed Sticky Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2b3e36]/95 backdrop-blur-md border-t border-[#365045] p-3 shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="py-2.5 px-3 rounded-xl bg-[#e2ece7] text-[#2b3e36] font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#557c6b]" />
            <span>Call +260 975 219 638</span>
          </a>

          <button
            onClick={onOpenInquiryModal}
            className="py-2.5 px-3 rounded-xl bg-[#557c6b] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Inquire / Book</span>
          </button>
        </div>
      </div>
    </>
  );
};
