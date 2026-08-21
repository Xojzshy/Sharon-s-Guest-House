import { RoomOption, Amenity, ConferencePackage, CateringOption } from '../types';

// Images imported/referenced from assets generated
import gardenPoolImg from '../assets/images/sharons_garden_pool_1787296255363.jpg';
import conferenceImg from '../assets/images/sharons_conference_1787296266412.jpg';
import roomImg from '../assets/images/sharons_room_1787296279390.jpg';
import diningImg from '../assets/images/sharons_dining_1787296291744.jpg';

export const BUSINESS_INFO = {
  name: "Sharon's Guest House",
  tagline: "A Peaceful Garden Sanctuary in Kabulonga",
  address: "Roan Road, Kabulonga, Lusaka, Zambia",
  neighborhood: "Kabulonga, Lusaka",
  phone: "+260 975 219 638",
  phoneRaw: "+260975219638",
  email: "sharonsreservations@gmail.com",
  operatingHours: "Approx. 07:00 – 22:00 daily (Front desk & general operations)",
  positioning: "Affordable accommodation with conferencing facilities and outside catering in a serene, leafy residential setting.",
  googleMapsUrl: "https://maps.google.com/?q=Roan+Road+Kabulonga+Lusaka+Zambia"
};

export const GALLERY_IMAGES = [
  {
    id: 'pool',
    title: 'Outdoor Swimming Pool & Garden',
    category: 'Garden & Pool',
    src: gardenPoolImg,
    alt: 'Refreshing swimming pool surrounded by lush green lawns and shade trees in Kabulonga'
  },
  {
    id: 'conference',
    title: '25-Capacity Conference Room',
    category: 'Conferences',
    src: conferenceImg,
    alt: 'Professional conference venue set up with meeting tables and stationery'
  },
  {
    id: 'room',
    title: 'Executive & Standard Bedrooms',
    category: 'Rooms',
    src: roomImg,
    alt: 'Clean, air-conditioned guest room with en-suite features and warm furnishings'
  },
  {
    id: 'dining',
    title: 'On-Site Restaurant & Garden Dining',
    category: 'Dining & Events',
    src: diningImg,
    alt: 'Relaxed garden dining pavilion for guests and catering events'
  }
];

export const ROOM_CATEGORIES: RoomOption[] = [
  {
    id: 'executive',
    name: 'Executive Room',
    category: 'Executive Accommodation',
    description: 'Spacious and refined accommodations designed for business travelers and guests seeking extra comfort with serene garden views.',
    features: ['Air-Conditioning', 'High-Speed Wi-Fi', 'DSTV Television', 'En-suite Bathroom', 'Desk & Work Space', 'Daily Housekeeping'],
    image: roomImg,
    idealFor: 'Business executives, long-stay guests & couples'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    category: 'Deluxe Accommodation',
    description: 'Generously appointed guest rooms offering a harmonious mix of cozy decor, peaceful natural light, and full climate control.',
    features: ['Air-Conditioning', 'High-Speed Wi-Fi', 'DSTV Television', 'En-suite Bathroom', 'Sitting Area'],
    image: roomImg,
    idealFor: 'Leisure guests & visiting professionals'
  },
  {
    id: 'standard',
    name: 'Standard Room',
    category: 'Standard Accommodation',
    description: 'Welcoming and affordable guest rooms equipped with all essential modern comforts for a relaxing stay in Kabulonga.',
    features: ['Air-Conditioning', 'High-Speed Wi-Fi', 'DSTV Television', 'En-suite Bathroom'],
    image: roomImg,
    idealFor: 'Solo travelers, delegates & budget-conscious guests'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'pool',
    title: 'Outdoor Swimming Pool',
    description: 'Take a cooling dip or relax poolside on sun lounges surrounded by lush tropical greenery and calm Kabulonga breeze.',
    iconName: 'Waves',
    highlight: 'Refreshing & Peaceful',
    image: gardenPoolImg
  },
  {
    id: 'restaurant-bar',
    title: 'On-Site Restaurant & Bar',
    description: 'Enjoy delicious meals and refreshing beverages in a relaxed dining setting within the quiet garden grounds.',
    iconName: 'Utensils',
    highlight: 'Convenient On-Site Dining',
    image: diningImg
  },
  {
    id: 'garden-picnic',
    title: 'Lush Garden & Picnic Area',
    description: 'Manicured lawns, shady native trees, and tranquil outdoor seating areas perfect for relaxing, reading, or informal outdoor chats.',
    iconName: 'Trees',
    highlight: 'Leafy Retreat'
  },
  {
    id: 'bbq',
    title: 'Barbecue Facilities',
    description: 'Dedicated outdoor barbecue setup available for guest gatherings, braais, and relaxed outdoor social functions.',
    iconName: 'Flame',
    highlight: 'Outdoor Braai & Social'
  },
  {
    id: 'frontdesk',
    title: '24-Hour Front Desk Support',
    description: 'Friendly, attentive staff available around the clock to handle check-ins, guest inquiries, and local recommendations.',
    iconName: 'Clock',
    highlight: '24/7 Assistance'
  },
  {
    id: 'inroom-tech',
    title: 'In-Room DSTV, Wi-Fi & AC',
    description: 'Every guest room features climate-controlled air conditioning, satellite DSTV channels, and wireless internet connectivity.',
    iconName: 'Wifi',
    highlight: 'Modern In-Room Comforts'
  }
];

export const CONFERENCE_INFO: ConferencePackage = {
  capacity: 25,
  inclusions: [
    'Delicious freshly prepared full lunch',
    'Morning tea break with hot beverages & snacks',
    'Afternoon tea break with hot beverages & biscuits',
    '1 Soft drink per delegate with lunch',
    '2 Bottles of mineral water per delegate',
    'Stationery package (writing pads & pens)'
  ],
  idealFor: [
    'Executive Board Meetings',
    'Corporate Workshops & Seminars',
    'Strategy Sessions & Training',
    'NGO & Diplomatic Group Discussions'
  ]
};

export const OUTSIDE_CATERING_INFO: CateringOption = {
  title: 'Outside Catering & Event Services',
  cuisines: ['Authentic Zambian Specialties', 'Popular International Cuisine'],
  eventTypes: [
    'Cocktail Parties',
    'End-of-Year Corporate Parties',
    'Business Seminars & Workshops',
    'Weddings & Reception Celebrations',
    'Kitchen Parties',
    'Private Celebrations & Receptions'
  ],
  description: 'Sharon\'s Guest House brings delicious, professionally prepared culinary experiences to your designated venue or within our garden grounds.'
};

export const FAQ_ITEMS = [
  {
    question: "How do I make a room reservation or check availability?",
    answer: "You can send an inquiry directly through our website booking form, send an email to sharonsreservations@gmail.com, or call our front desk directly at +260 975 219 638. Our staff will immediately assist you with room availability and booking confirmation."
  },
  {
    question: "What is included in the 25-person conference package?",
    answer: "Our conference package includes full access to the air-conditioned 25-delegate conference hall, full freshly prepared lunch with 1 soft drink per delegate, morning and afternoon tea breaks with hot beverages and snacks/biscuits, 2 bottles of mineral water per delegate, and stationery (writing pads and pens)."
  },
  {
    question: "What amenities are provided in the guest rooms?",
    answer: "All guest rooms at Sharon's Guest House feature climate-controlled air conditioning, satellite television with DSTV channels, high-speed Wi-Fi internet access, en-suite bathrooms, and daily housekeeping."
  },
  {
    question: "What types of events do you handle for outside catering?",
    answer: "We cater for a wide variety of gatherings including corporate end-of-year parties, business seminars, cocktail parties, weddings, kitchen parties, and private family celebrations. We offer both authentic Zambian specialties and popular international cuisine menus."
  },
  {
    question: "Are the outdoor swimming pool and gardens available for staying guests?",
    answer: "Yes, staying guests enjoy full access to our sparkling outdoor swimming pool, sun lounges, manicured green lawns, barbecue braai facilities, and garden dining pavilions."
  },
  {
    question: "Where is Sharon's Guest House located in Lusaka?",
    answer: "We are situated on Roan Road in Kabulonga, Lusaka, Zambia — a serene, leafy residential suburb close to major shopping centers, corporate hubs, and diplomatic embassies."
  }
];

export const NEARBY_POINTS_OF_INTEREST = [
  { name: 'Kabulonga Shopping Centre', category: 'Shopping & Dining', highlight: 'Restaurants, supermarkets, and banking' },
  { name: 'Centro Mall Kabulonga', category: 'Retail & Convenience', highlight: 'Cafes, pharmacy, and boutique retail' },
  { name: 'Lusaka Central Business District (CBD)', category: 'Commercial Hub', highlight: 'Government offices & main corporate centers' },
  { name: 'Kenneth Kaunda International Airport', category: 'Transit Hub', highlight: 'Accessible via major Lusaka connecting arterial roads' }
];

