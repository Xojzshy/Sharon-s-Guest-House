import React, { useState } from 'react';
import { X, Calendar, Phone, Mail, Send, CheckCircle2, BedDouble, Users, Utensils } from 'lucide-react';
import { BUSINESS_INFO, ROOM_CATEGORIES } from '../data/guesthouseData';
import { InquiryType } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: InquiryType;
  defaultRoomName?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'room',
  defaultRoomName = 'Executive Room'
}) => {
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultType);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(defaultRoomName);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [delegates, setDelegates] = useState('15');
  const [eventType, setEventType] = useState('Meeting / Workshop');
  const [specialNote, setSpecialNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let subject = `Reservation Inquiry: Sharon's Guest House`;
    let body = `Hello Sharon's Guest House Reservations,\n\nI would like to make an inquiry:\n\n`;
    body += `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n`;

    if (inquiryType === 'room') {
      subject = `Room Inquiry (${selectedRoom}) - ${name}`;
      body += `Category: ${selectedRoom}\nCheck-in: ${checkIn || 'Not specified'}\nCheck-out: ${checkOut || 'Not specified'}\n\n`;
    } else if (inquiryType === 'conference') {
      subject = `Conference Venue Inquiry (${delegates} delegates) - ${name}`;
      body += `Event Type: ${eventType}\nDelegates Count: ${delegates}\n\n`;
    } else {
      subject = `Outside Catering Inquiry - ${name}`;
      body += `Event Type: ${eventType}\nGuests Count: ${delegates}\n\n`;
    }

    if (specialNote) body += `Notes: ${specialNote}\n\n`;
    body += `Thank you!`;

    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#fdfbf7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#c6d9d0] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#e2ece7] text-[#2b3e36] flex items-center justify-center hover:bg-[#c6d9d0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b]">
            Sharon's Guest House
          </span>
          <h3 className="font-serif text-2xl font-medium text-[#2b3e36]">
            Inquire or Book Now
          </h3>
          <p className="text-xs text-[#557c6b]">
            Roan Road, Kabulonga, Lusaka • Direct Front Desk Reservation
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#e2ece7] mb-6">
          <button
            onClick={() => setInquiryType('room')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              inquiryType === 'room' ? 'bg-[#557c6b] text-white shadow-xs' : 'text-[#2b3e36]'
            }`}
          >
            <BedDouble className="w-3.5 h-3.5" />
            <span>Rooms</span>
          </button>
          <button
            onClick={() => setInquiryType('conference')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              inquiryType === 'conference' ? 'bg-[#557c6b] text-white shadow-xs' : 'text-[#2b3e36]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Conference</span>
          </button>
          <button
            onClick={() => setInquiryType('catering')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              inquiryType === 'catering' ? 'bg-[#557c6b] text-white shadow-xs' : 'text-[#2b3e36]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Catering</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+260..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Email Address *</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
            />
          </div>

          {inquiryType === 'room' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Room Interest</label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36] focus:outline-none focus:border-[#557c6b]"
                >
                  {ROOM_CATEGORIES.map(r => (
                    <option key={r.id} value={r.name}>{r.name} ({r.category})</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36]"
                  />
                </div>
              </div>
            </div>
          )}

          {inquiryType !== 'room' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Event Type</label>
                <input
                  type="text"
                  placeholder="e.g. Workshop, Wedding"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Delegates/Guests</label>
                <input
                  type="number"
                  min="1"
                  max="25"
                  value={delegates}
                  onChange={(e) => setDelegates(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-[#2b3e36] block mb-1">Notes / Requests</label>
            <textarea
              rows={2}
              placeholder="Any additional details..."
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#557c6b] hover:bg-[#426355] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4 text-[#c59b27]" />
            <span>Send Email Inquiry Directly</span>
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-[#e2ece7] text-center text-[11px] text-[#557c6b]">
          Or call front desk: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold underline">{BUSINESS_INFO.phone}</a>
        </div>
      </div>
    </div>
  );
};
