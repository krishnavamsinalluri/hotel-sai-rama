export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  capacity: string;
  maxGuests: number;
  bedType: string;
  size: string;
  mainImage: string;
  gallery: string[];
  facilities: string[];
  rateText: string;
  featured: boolean;
}

export const roomsData: Room[] = [
  {
    id: "standard-room",
    slug: "standard-room",
    name: "Standard Room",
    tagline: "Cozy & Affordable AC Stay in Governorpet",
    description: "Ideal for solo travelers or couples looking for a clean, air-conditioned, and peaceful stay in central Vijayawada.",
    fullDescription: "Our Standard Room offers essential comfort and quiet relaxation right in Governorpet. Equipped with efficient air conditioning, comfortable queen bed, plush linen, private attached bathroom, flat-screen television, and 24/7 hot water supply. Perfectly suited for solo visitors and business travelers seeking affordable convenience.",
    capacity: "2 Adults",
    maxGuests: 2,
    bedType: "1 Queen Bed",
    size: "180 sq.ft",
    mainImage: "/images/rooms/hotel-sai-rama-room-two.webp",
    gallery: [
      "/images/rooms/hotel-sai-rama-room-two.webp",
      "/images/facilities/hotel-sai-rama-tv-area.webp",
      "/images/facilities/hotel-sai-rama-corridor.webp",
    ],
    facilities: [
      "Air Conditioning",
      "Flat Screen Television",
      "24/7 Hot Water",
      "Attached Private Bathroom",
      "Housekeeping Service",
      "Free Wi-Fi Access",
      "Desk & Chair Setup"
    ],
    rateText: "Contact us for the best available rate.",
    featured: true,
  },
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Spacious Comfort with Premium Interior Accents",
    description: "Features elegant wooden paneling, plush king bedding, air conditioning, and enhanced room space for extra comfort.",
    fullDescription: "Experience elevated comfort in our Deluxe Room at Hotel Sai Rama. Designed with premium dark-wood accent paneling, a plush king-sized bed with rich red cushions, split air conditioner, modern wardrobe, intercom facility, and dedicated TV unit. Ideal for couples, business professionals, and guests wanting higher space and ambiance.",
    capacity: "2 Adults + 1 Child",
    maxGuests: 3,
    bedType: "1 King Bed",
    size: "240 sq.ft",
    mainImage: "/images/rooms/hotel-sai-rama-room-one.webp",
    gallery: [
      "/images/rooms/hotel-sai-rama-room-one.webp",
      "/images/facilities/hotel-sai-rama-tv-area.webp",
      "/images/reception/hotel-sai-rama-nameboard.webp",
    ],
    facilities: [
      "Split Air Conditioning",
      "King Size Bed",
      "Flat Screen TV",
      "Spacious Wooden Wardrobe",
      "Telephone & Intercom",
      "24/7 Hot Water",
      "Free Wi-Fi Access",
      "Daily Room Service"
    ],
    rateText: "Contact us for the best available rate.",
    featured: true,
  },
  {
    id: "family-room",
    slug: "family-room",
    name: "Family Room",
    tagline: "Generous Space for Families & Small Groups",
    description: "Designed for families traveling together, offering multiple seating options, extra space, and full AC climate control.",
    fullDescription: "The Family Room provides ample space and flexible sleeping options for families visiting Vijayawada. Located conveniently close to major transit hubs and shopping areas in Governorpet. Features twin seating armchairs, wide closet storage, high-speed cooling, flat TV, and round-the-clock reception assistance.",
    capacity: "4 Adults / Family",
    maxGuests: 4,
    bedType: "2 Queen Beds / King Bed + Extra Bed",
    size: "320 sq.ft",
    mainImage: "/images/rooms/hotel-sai-rama-room-two.webp",
    gallery: [
      "/images/rooms/hotel-sai-rama-room-two.webp",
      "/images/rooms/hotel-sai-rama-room-one.webp",
      "/images/facilities/hotel-sai-rama-corridor.webp",
    ],
    facilities: [
      "Air Conditioning",
      "Multiple Bed Setup",
      "Seating Armchairs",
      "Flat Screen TV",
      "Large Storage Closet",
      "24/7 Hot Water",
      "Room Service Assistance",
      "Power Backup"
    ],
    rateText: "Contact us for the best available rate.",
    featured: true,
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return roomsData.find((room) => room.slug === slug);
}
