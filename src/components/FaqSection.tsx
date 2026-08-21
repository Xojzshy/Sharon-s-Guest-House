import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/guesthouseData';
import { GardenMotifDivider } from './GardenMotifDivider';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_ITEMS.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#fdfbf7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#557c6b] bg-[#e2ece7] px-3.5 py-1 rounded-full border border-[#c6d9d0]">
            Guest Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b3e36] font-medium tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#426355] leading-relaxed">
            Everything you need to know about staying with us, booking our 25-person conference hall, and arranging outside catering in Kabulonga.
          </p>
        </div>

        <GardenMotifDivider />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative">
            <Search className="w-4 h-4 text-[#557c6b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. conference, pool, rooms...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#c6d9d0] text-xs text-[#2b3e36] placeholder-[#7d9b8e] focus:outline-none focus:border-[#557c6b] focus:ring-1 focus:ring-[#557c6b] shadow-xs"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all border ${
                    isOpen 
                      ? 'bg-[#f7f3eb] border-[#557c6b] shadow-xs' 
                      : 'bg-white border-[#e2ece7] hover:border-[#c6d9d0]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-[#2b3e36] flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#c59b27]' : 'text-[#557c6b]'}`} />
                      <span>{faq.question}</span>
                    </span>
                    <div className={`p-1.5 rounded-full transition-transform ${isOpen ? 'rotate-180 bg-[#e2ece7] text-[#2b3e36]' : 'text-[#7d9b8e]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#426355] leading-relaxed border-t border-[#ede5d5] mt-1">
                      <p className="pt-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-[#7d9b8e] bg-white rounded-2xl border border-[#e2ece7]">
              No matching questions found for "{searchTerm}". Please contact our 24/7 front desk at +260 975 219 638.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
