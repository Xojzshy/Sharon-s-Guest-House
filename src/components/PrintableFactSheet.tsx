import React, { useState } from 'react';
import { Printer, FileText, Check, Download, X, Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS_INFO, CONFERENCE_INFO, OUTSIDE_CATERING_INFO, ROOM_CATEGORIES } from '../data/guesthouseData';

export const PrintableFactSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e2ece7] hover:bg-[#c6d9d0] text-[#2b3e36] text-xs font-semibold transition-all cursor-pointer border border-[#c6d9d0] print:hidden"
        title="View & Print Official Fact Sheet"
      >
        <Printer className="w-3.5 h-3.5 text-[#557c6b]" />
        <span>Official Fact Sheet & Spec Sheet</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn print:p-0 print:bg-white print:static">
          
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-[#c6d9d0] shadow-2xl relative my-8 print:shadow-none print:border-none print:p-0 print:max-w-none">
            
            {/* Close & Print bar (Hidden during actual print) */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#ede5d5] print:hidden">
              <div className="flex items-center gap-2 text-xs font-bold text-[#557c6b] uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Sharon's Guest House Official Spec Sheet</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-[#557c6b] hover:bg-[#426355] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4 text-[#c59b27]" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Content Frame */}
            <div className="space-y-6 text-[#2b3e36]">
              
              {/* Header Header */}
              <div className="flex items-start justify-between border-b-2 border-[#557c6b] pb-4">
                <div>
                  <h1 className="font-serif text-2xl font-bold text-[#2b3e36]">
                    Sharon's Guest House
                  </h1>
                  <p className="text-xs text-[#557c6b] font-medium">
                    Accommodation • 25-Person Conferencing • Outside Catering
                  </p>
                  <p className="text-xs text-[#426355] mt-1">
                    Roan Road, Kabulonga, Lusaka, Zambia
                  </p>
                </div>
                <div className="text-right text-xs text-[#426355] space-y-1">
                  <div><strong>Tel:</strong> {BUSINESS_INFO.phone}</div>
                  <div><strong>Email:</strong> {BUSINESS_INFO.email}</div>
                  <div><strong>Location:</strong> Kabulonga, Lusaka</div>
                </div>
              </div>

              {/* Property Summary */}
              <div className="bg-[#f7f3eb] p-4 rounded-xl border border-[#ede5d5] text-xs leading-relaxed">
                <strong>Property Overview:</strong> Sharon's Guest House offers affordable, high-quality guest house accommodation set within tranquil garden grounds on Roan Road in Kabulonga, Lusaka. Ideal for corporate delegates, long-stay business guests, and events.
              </div>

              {/* Grid 1: Accommodation */}
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2b3e36] uppercase tracking-wider border-b border-[#e2ece7] pb-1 mb-3">
                  1. Guest Accommodation & Amenities
                </h3>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {ROOM_CATEGORIES.map(room => (
                    <div key={room.id} className="p-3 bg-[#fdfbf7] rounded-xl border border-[#c6d9d0]">
                      <div className="font-bold text-[#2b3e36]">{room.name}</div>
                      <div className="text-[11px] text-[#557c6b] mt-1">DSTV, Wi-Fi, AC & En-suite</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid 2: Conferencing */}
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2b3e36] uppercase tracking-wider border-b border-[#e2ece7] pb-1 mb-3">
                  2. 25-Delegate Conference Package
                </h3>
                <div className="bg-[#f2f6f4] p-3.5 rounded-xl border border-[#c6d9d0] text-xs space-y-2">
                  <div className="font-semibold text-[#2b3e36]">Package Inclusions (Full Day):</div>
                  <ul className="grid grid-cols-2 gap-1.5 list-disc list-inside text-[11px] text-[#426355]">
                    {CONFERENCE_INFO.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Grid 3: Outside Catering */}
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2b3e36] uppercase tracking-wider border-b border-[#e2ece7] pb-1 mb-3">
                  3. Outside Catering & Facility Features
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#fdfbf7] rounded-xl border border-[#ede5d5]">
                    <div className="font-bold text-[#2b3e36]">Catering Cuisines:</div>
                    <div className="text-[#426355] text-[11px] mt-0.5">Authentic Zambian & International Menu Options</div>
                  </div>
                  <div className="p-3 bg-[#fdfbf7] rounded-xl border border-[#ede5d5]">
                    <div className="font-bold text-[#2b3e36]">On-Site Facilities:</div>
                    <div className="text-[#426355] text-[11px] mt-0.5">Outdoor Swimming Pool, Garden, Restaurant/Bar, 24/7 Desk</div>
                  </div>
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="pt-4 border-t border-[#c6d9d0] flex items-center justify-between text-[11px] text-[#7d9b8e]">
                <div>Sharon's Guest House • Roan Road, Kabulonga, Lusaka</div>
                <div>Front Desk Support: 07:00 – 22:00 Daily</div>
              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};
