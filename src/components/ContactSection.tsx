import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Copy, Check, Calendar, BedDouble, Users, Utensils } from 'lucide-react';
import { BUSINESS_INFO, ROOM_CATEGORIES } from '../data/guesthouseData';
import { ReservationFormData, InquiryType } from '../types';
import { GardenMotifDivider } from './GardenMotifDivider';

interface ContactSectionProps {
  initialInquiryType?: InquiryType;
  initialRoomName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialInquiryType = 'room',
  initialRoomName = ''
}) => {
  const [inquiryType, setInquiryType] = useState<InquiryType>(initialInquiryType);
  const [formData, setFormData] = useState<ReservationFormData>({
    inquiryType: initialInquiryType,
    fullName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: initialRoomName || 'Executive Room',
    guestsCount: 1,
    eventDate: '',
    delegateCount: 15,
    eventType: 'Corporate Meeting / Workshop',
    cuisinePreference: 'Zambian & International Selection',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTabChange = (type: InquiryType) => {
    setInquiryType(type);
    setFormData(prev => ({ ...prev, inquiryType: type }));
  };

  const formatEmailSubject = () => {
    switch (inquiryType) {
      case 'room':
        return `Room Inquiry: ${formData.roomType} - ${formData.fullName || 'Guest'}`;
      case 'conference':
        return `Conference Hall Inquiry: ${formData.eventType} (${formData.delegateCount} delegates)`;
      case 'catering':
        return `Outside Catering Inquiry: ${formData.eventType} (${formData.delegateCount} guests)`;
      default:
        return `Reservation Inquiry - Sharon's Guest House`;
    }
  };

  const formatEmailBody = () => {
    let body = `Dear Sharon's Guest House Reservations,\n\nI would like to submit the following inquiry:\n\n`;
    body += `GUEST DETAILS:\n`;
    body += `Name: ${formData.fullName}\n`;
    body += `Phone: ${formData.phone}\n`;
    body += `Email: ${formData.email}\n\n`;

    if (inquiryType === 'room') {
      body += `ACCOMMODATION REQUEST:\n`;
      body += `Room Category: ${formData.roomType}\n`;
      body += `Check-in Date: ${formData.checkInDate || 'To be specified'}\n`;
      body += `Check-out Date: ${formData.checkOutDate || 'To be specified'}\n`;
      body += `Number of Guests: ${formData.guestsCount}\n\n`;
    } else if (inquiryType === 'conference') {
      body += `CONFERENCE HALL REQUEST:\n`;
      body += `Event Purpose: ${formData.eventType}\n`;
      body += `Proposed Event Date: ${formData.eventDate || 'To be specified'}\n`;
      body += `Expected Delegates: ${formData.delegateCount} (Max 25 cap)\n`;
      body += `Conference Package: Lunch, 2 Teas, Soft Drink, 2 Waters, Stationery\n\n`;
    } else if (inquiryType === 'catering') {
      body += `OUTSIDE CATERING REQUEST:\n`;
      body += `Event Type: ${formData.eventType}\n`;
      body += `Proposed Event Date: ${formData.eventDate || 'To be specified'}\n`;
      body += `Estimated Guests: ${formData.delegateCount}\n`;
      body += `Cuisine Preference: ${formData.cuisinePreference}\n\n`;
    }

    if (formData.specialRequests) {
      body += `ADDITIONAL NOTES & REQUESTS:\n${formData.specialRequests}\n\n`;
    }

    body += `Please reply with availability and booking confirmation. Thank you!`;
    return body;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formatEmailSubject());
    const body = encodeURIComponent(formatEmailBody());
    
    // Trigger direct mailto
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formatEmailBody());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Contact & Reservations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Get in Touch with Sharon's Guest House
          </h2>
          <p className="text-base text-[#426355] leading-relaxed">
            Contact our front desk directly for room availability, conference hall bookings, and outside catering requests.
          </p>
        </div>

        <GardenMotifDivider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#2b3e36] text-[#ede5d5] rounded-3xl p-8 border border-[#365045] space-y-6 shadow-md">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
                  Direct Contact Information
                </span>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Sharon's Guest House
                </h3>
                <p className="text-xs text-[#c6d9d0] leading-relaxed">
                  We welcome all inquiries via phone call, WhatsApp, or direct email.
                </p>
              </div>

              <div className="space-y-5 pt-2 border-t border-[#365045]">
                
                {/* Phone */}
                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-[#365045]/60 hover:bg-[#365045] transition-colors border border-[#557c6b]/50 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#c6d9d0]">Phone / Mobile:</div>
                    <div className="text-base font-bold text-white group-hover:text-[#c59b27] transition-colors">
                      {BUSINESS_INFO.phone}
                    </div>
                    <div className="text-[11px] text-[#9cbcae]">Tap to call directly</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-[#365045]/60 hover:bg-[#365045] transition-colors border border-[#557c6b]/50 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold text-[#c6d9d0]">Email Address:</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#c59b27] transition-colors truncate">
                      {BUSINESS_INFO.email}
                    </div>
                    <div className="text-[11px] text-[#9cbcae]">Direct email reservations</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#365045]/60 border border-[#557c6b]/50">
                  <div className="w-10 h-10 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#c6d9d0]">Physical Address:</div>
                    <div className="text-sm font-bold text-white">
                      {BUSINESS_INFO.address}
                    </div>
                    <div className="text-[11px] text-[#9cbcae]">Kabulonga, Lusaka, Zambia</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#365045]/60 border border-[#557c6b]/50">
                  <div className="w-10 h-10 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#c6d9d0]">Operating Hours:</div>
                    <div className="text-xs font-semibold text-white">
                      {BUSINESS_INFO.operatingHours}
                    </div>
                    <div className="text-[11px] text-[#9cbcae]">Approximate operational hours</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Quick Action */}
            <div className="p-6 rounded-2xl bg-[#e2ece7] border border-[#c6d9d0] space-y-3">
              <h4 className="font-serif font-semibold text-[#2b3e36]">Prefer Urgent Bookings?</h4>
              <p className="text-xs text-[#426355] leading-relaxed">
                For immediate same-day room reservations or urgent conference hall queries, please call our telephone directly.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#557c6b] hover:bg-[#426355] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>Call +260 975 219 638 Now</span>
              </a>
            </div>

          </div>

          {/* Interactive Reservation Form */}
          <div className="lg:col-span-7 bg-[#f7f3eb] rounded-3xl p-6 sm:p-8 border border-[#ede5d5] shadow-xs space-y-6">
            
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#2b3e36]">
                Submit an Online Inquiry
              </h3>
              <p className="text-xs text-[#557c6b] mt-1">
                Select your inquiry type below to complete the details.
              </p>
            </div>

            {/* Inquiry Category Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#e2ece7] border border-[#c6d9d0]">
              <button
                type="button"
                onClick={() => handleTabChange('room')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  inquiryType === 'room'
                    ? 'bg-[#557c6b] text-white shadow-xs'
                    : 'text-[#2b3e36] hover:bg-[#c6d9d0]/50'
                }`}
              >
                <BedDouble className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Room Stay</span>
                <span className="sm:hidden">Room</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('conference')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  inquiryType === 'conference'
                    ? 'bg-[#557c6b] text-white shadow-xs'
                    : 'text-[#2b3e36] hover:bg-[#c6d9d0]/50'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Conference</span>
                <span className="sm:hidden">Venue</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('catering')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  inquiryType === 'catering'
                    ? 'bg-[#557c6b] text-white shadow-xs'
                    : 'text-[#2b3e36] hover:bg-[#c6d9d0]/50'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Catering</span>
                <span className="sm:hidden">Events</span>
              </button>
            </div>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#2b3e36]">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Chanda Mwape"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#2b3e36]">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +260 971 000 000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#2b3e36]">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                />
              </div>

              {/* Dynamic Form Fields Based on Tab */}
              {inquiryType === 'room' && (
                <div className="p-4 rounded-2xl bg-[#e2ece7]/50 border border-[#c6d9d0] space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#2b3e36]">Preferred Room Category</label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                    >
                      {ROOM_CATEGORIES.map(r => (
                        <option key={r.id} value={r.name}>{r.name} ({r.category})</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2b3e36]">Proposed Check-in Date</label>
                      <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2b3e36]">Proposed Check-out Date</label>
                      <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {inquiryType === 'conference' && (
                <div className="p-4 rounded-2xl bg-[#e2ece7]/50 border border-[#c6d9d0] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2b3e36]">Event / Meeting Type</label>
                      <input
                        type="text"
                        name="eventType"
                        placeholder="e.g. NGO Workshop, Board Meeting"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2b3e36]">Proposed Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#2b3e36]">Expected Number of Delegates (Max 25)</label>
                    <input
                      type="number"
                      name="delegateCount"
                      min="1"
                      max="25"
                      value={formData.delegateCount}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                    />
                  </div>
                </div>
              )}

              {inquiryType === 'catering' && (
                <div className="p-4 rounded-2xl bg-[#e2ece7]/50 border border-[#c6d9d0] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2b3e36]">Event Type</label>
                      <input
                        type="text"
                        name="eventType"
                        placeholder="e.g. Wedding, Kitchen Party, End-of-year"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2b3e36]">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#2b3e36]">Cuisine Preference</label>
                    <select
                      name="cuisinePreference"
                      value={formData.cuisinePreference}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                    >
                      <option value="Zambian & International Selection">Zambian & International Selection</option>
                      <option value="Authentic Zambian Cuisine">Authentic Zambian Cuisine</option>
                      <option value="International Dishes Menu">International Dishes Menu</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#2b3e36]">Additional Notes or Special Requests</label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  placeholder="Mention any specific diet, arrival time, or equipment needs..."
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-[#fdfbf7] border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                ></textarea>
              </div>

              {/* Form Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#e2ece7] hover:bg-[#c6d9d0] text-xs font-semibold text-[#2b3e36] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-[#557c6b]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSummary ? 'Copied Request' : 'Copy Request Text'}</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#557c6b] hover:bg-[#426355] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#c59b27]" />
                  <span>Send Reservation Request via Email</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#e2ece7] border border-[#557c6b] text-xs text-[#2b3e36] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#557c6b] shrink-0" />
                  <div>
                    <div className="font-bold">Email Client Triggered</div>
                    <div>Your request details have been formatted into an email to sharonsreservations@gmail.com. Our front desk will get back to you shortly.</div>
                  </div>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
