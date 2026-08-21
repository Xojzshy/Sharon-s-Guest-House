import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { ConferenceEventsSection } from './components/ConferenceEventsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { InquiryType } from './types';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [modalDefaultType, setModalDefaultType] = useState<InquiryType>('room');
  const [modalDefaultRoom, setModalDefaultRoom] = useState<string>('Executive Room');

  const handleOpenModal = (type: InquiryType = 'room', roomName: string = 'Executive Room') => {
    setModalDefaultType(type);
    setModalDefaultRoom(roomName);
    setIsInquiryModalOpen(true);
  };

  const handleSelectRoomForInquiry = (roomName: string) => {
    handleOpenModal('room', roomName);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2b3e36] flex flex-col font-sans selection:bg-[#557c6b] selection:text-white">
      
      {/* Sticky Top Header */}
      <Header onOpenInquiryModal={() => handleOpenModal('room')} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenInquiryModal={() => handleOpenModal('room')} />

        {/* Accommodation / Rooms Section */}
        <RoomsSection onSelectRoomForInquiry={handleSelectRoomForInquiry} />

        {/* The Sharon's Guest House Standard / Experience */}
        <ExperienceSection />

        {/* Amenities Section */}
        <AmenitiesSection />

        {/* Conference Facilities & Outside Catering */}
        <ConferenceEventsSection 
          onOpenInquiryModal={(type) => handleOpenModal(type || 'conference')} 
        />

        {/* Filterable Image Gallery */}
        <GallerySection />

        {/* Guest Guidance & FAQs */}
        <FaqSection />

        {/* Location & Neighborhood Guide */}
        <LocationSection />

        {/* Direct Contact & Online Reservation Form */}
        <ContactSection 
          initialInquiryType={modalDefaultType}
          initialRoomName={modalDefaultRoom}
        />
      </main>

      {/* Footer */}
      <Footer onOpenInquiryModal={() => handleOpenModal('room')} />

      {/* Quick Booking / Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultType={modalDefaultType}
        defaultRoomName={modalDefaultRoom}
      />

      {/* Floating Speed Dial Contact & WhatsApp Widget */}
      <FloatingContactWidget onOpenInquiryModal={() => handleOpenModal('room')} />

    </div>
  );
}

