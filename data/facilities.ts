/**
 * HOTEL SAI RAMA - FACILITIES DATA FILE
 * 
 * IMPORTANT NOTE FOR HOTEL OWNER / ADMINISTRATOR:
 * The facilities listed below include common amenities provided by city hotels in Vijayawada.
 * Please review and confirm each facility item with the hotel management prior to final publishing.
 * 'confirmed' boolean flag indicates whether the amenity is officially verified by the owner.
 */

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string; // Lucide icon identifier
  confirmed: boolean; // Owner confirmation status flag
  image?: string; // Real photograph reference where available
}

export const facilitiesData: Facility[] = [
  {
    id: "air-conditioning",
    name: "Air Conditioning",
    category: "In-Room Comfort",
    description: "Efficient climate control in rooms to keep you cool and comfortable in Vijayawada's climate.",
    iconName: "Wind",
    confirmed: true,
  },
  {
    id: "reception",
    name: "24/7 Reception Desk",
    category: "Guest Assistance",
    description: "Round-the-clock front desk support for smooth check-ins, check-outs, and guest inquiries.",
    iconName: "Clock",
    confirmed: true,
    image: "/images/reception/hotel-sai-rama-reception.webp",
  },
  {
    id: "television",
    name: "Flat Screen Television",
    category: "Entertainment",
    description: "In-room LED TV with satellite cable channels for news and entertainment.",
    iconName: "Tv",
    confirmed: true,
    image: "/images/facilities/hotel-sai-rama-tv-area.webp",
  },
  {
    id: "corridor-lift",
    name: "Clean Corridors & Lift",
    category: "Accessibility",
    description: "Well-maintained corridors and easy vertical access to upper room floors.",
    iconName: "ArrowUpSquare",
    confirmed: true,
    image: "/images/facilities/hotel-sai-rama-corridor.webp",
  },
  {
    id: "parking",
    name: "Vehicular Parking",
    category: "Convenience",
    description: "Dedicated parking space for guests traveling with private cars or two-wheelers.",
    iconName: "Car",
    confirmed: true,
    image: "/images/exterior/hotel-sai-rama-entrance.webp",
  },
  {
    id: "wifi",
    name: "High-Speed Wi-Fi",
    category: "Connectivity",
    description: "Complimentary wireless internet access in guest rooms and common reception areas.",
    iconName: "Wifi",
    confirmed: true,
  },
  {
    id: "hot-water",
    name: "24/7 Hot Water Supply",
    category: "Bathroom Amenity",
    description: "Continuous hot water availability in attached private bathrooms for comfortable showers.",
    iconName: "Flame",
    confirmed: true,
  },
  {
    id: "room-service",
    name: "Room Service",
    category: "Guest Assistance",
    description: "Prompt in-room service for water, tea, coffee, and daily room needs.",
    iconName: "ConciergeBell",
    confirmed: true,
  },
  {
    id: "housekeeping",
    name: "Daily Housekeeping",
    category: "Cleanliness",
    description: "Regular cleaning, fresh linen changes, and tidy room maintenance.",
    iconName: "Sparkles",
    confirmed: true,
  },
  {
    id: "power-backup",
    name: "Power Backup",
    category: "Infrastructure",
    description: "Generator power backup support to ensure uninterrupted lighting and fans.",
    iconName: "Zap",
    confirmed: true,
  },
];
