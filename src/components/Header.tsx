import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Calendar, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guesthouseData';

interface HeaderProps {
  onOpenInquiryModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Conferences', href: '#conferences' },
    { name: 'Catering', href: '#catering' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={`bg-[#2b3e36] text-[#ede5d5] text-xs py-2 px-4 transition-all duration-300 ${isScrolled ? 'hidden md:block' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#c59b27] transition-colors"
              title="Call Sharon's Guest House"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-[#557c6b]">|</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-[#c59b27] transition-colors"
              title="Email Sharon's Guest House"
            >
              <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[#c6d9d0]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
              <span className="truncate">{BUSINESS_INFO.address}</span>
            </div>
            <span className="hidden md:inline text-[#557c6b]">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>07:00 – 22:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fdfbf7]/95 backdrop-blur-md shadow-md py-3 border-b border-[#e2ece7]' 
          : 'bg-[#fdfbf7] py-4 border-b border-[#ede5d5]/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#557c6b] flex items-center justify-center text-[#fdfbf7] font-serif font-bold text-xl shadow-sm group-hover:bg-[#426355] transition-colors">
              S
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-[#2b3e36] tracking-tight block leading-tight">
                Sharon's
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#557c6b] font-medium block">
                Guest House & Conferences
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2b3e36] hover:text-[#557c6b] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c59b27] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#557c6b] bg-[#e2ece7] hover:bg-[#c6d9d0] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenInquiryModal}
              id="header-inquire-btn"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#557c6b] hover:bg-[#426355] shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Inquire / Book</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenInquiryModal}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#557c6b]"
            >
              Inquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#2b3e36] hover:text-[#557c6b] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#fdfbf7] border-b border-[#e2ece7] px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
            <div className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#2b3e36] hover:text-[#557c6b] py-2 border-b border-[#f7f3eb] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#c59b27]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiryModal();
                }}
                className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-[#557c6b] hover:bg-[#426355] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#c59b27]" />
                <span>Submit Booking or Event Inquiry</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-[#2b3e36] bg-[#e2ece7] hover:bg-[#c6d9d0] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#557c6b]" />
                <span>Call +260 975 219 638</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
