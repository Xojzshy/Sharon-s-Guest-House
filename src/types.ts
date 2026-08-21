export type InquiryType = 'room' | 'conference' | 'catering';

export interface RoomOption {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  idealFor: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
  image?: string;
}

export interface ConferencePackage {
  capacity: number;
  inclusions: string[];
  idealFor: string[];
}

export interface CateringOption {
  title: string;
  cuisines: string[];
  eventTypes: string[];
  description: string;
}

export interface ReservationFormData {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  phone: string;
  checkInDate?: string;
  checkOutDate?: string;
  roomType?: string;
  guestsCount?: number;
  eventDate?: string;
  delegateCount?: number;
  eventType?: string;
  cuisinePreference?: string;
  specialRequests: string;
}
