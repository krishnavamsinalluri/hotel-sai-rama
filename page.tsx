import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Clock,
  ArrowRight,
  Wifi,
  Wind,
  Tv,
  Car,
  ConciergeBell,
  ArrowUpSquare,
} from "lucide-react";

import BookingForm from "@/components/BookingForm";
import RoomCard from "@/components/RoomCard";
import GalleryLightbox, { GalleryItem } from "@/components/GalleryLightbox";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

const galleryImages: GalleryItem[] = [
  {
    id: "ext-1",
    src: "/images/exterior/hotel-sai-rama-building.webp",
    alt: "Hotel Sai Rama Aditya Towers Building Exterior in Governorpet Vijayawada",
    title: "Building Exterior",
    category: "Exterior",
  },
  {
    id: "ext-2",
    src: "/images/exterior/hotel-sai-rama-entrance.webp",
    alt: "Hotel Sai Rama Glass Entrance and Canopy",
    title: "Main Entrance & Parking",
    category: "Entrance",
  },
  {
    id: "rec-1",
    src: "/images/reception/hotel-sai-rama-reception.webp",
    alt: "Hotel Sai Rama Reception Desk with floral decorations",
    title: "Reception Counter",
    category: "Reception",
  },
  {
    id: "room-1",
    src: "/images/rooms/hotel-sai-rama-room-one.webp",
    alt: "Hotel Sai Rama Deluxe Bedded AC Room",
    title: "Deluxe AC Room",
    category: "Rooms",
  },
  {
    id: "fac-1",
    src: "/images/facilities/hotel-sai-rama-corridor.webp",
    alt: "Hotel Sai Rama Clean Air-Conditioned Corridor",
    title: "Clean Room Corridors",
    category: "Facilities",
  },
  {
    id: "fac-2",
    src: "/images/facilities/hotel-sai-rama-tv-area.webp",
    alt: "Hotel Sai Rama Modern Television Setup",
    title: "In-Room TV Setup",
    category: "Facilities",
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Convenient Governorpet Location",
    description:
      "Situated beside Apsara Theatre, close to Vijayawada Railway Station, Pandit Nehru Bus Station, and key commercial hubs.",
  },
  {
    icon: Sparkles,
    title: "Comfortable AC Rooms",
    description:
      "Clean, well-maintained air-conditioned rooms featuring cozy bedding, modern decor, and quiet surroundings.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Environment",
    description:
      "Strict daily housekeeping, spotless bathrooms, and high standards of hygiene maintained across all hotel floors.",
  },
  {
    icon: HeartHandshake,
    title: "Helpful Service",
    description:
      "Warm South-Indian hospitality with attentive staff ready to assist you round-the-clock during your Vijayawada stay.",
  },
  {
    icon: Calendar,
    title: "Easy Booking Assistance",
    description:
      "Direct room reservations via WhatsApp and phone without complicated forms or hidden fees.",
  },
  {
    icon: MessageSquare,
    title: "Call & WhatsApp Support",
    description:
      "Instant response to rate queries, location guidance, and room bookings over phone call and WhatsApp message.",
  },
];

const previewFacilities = [
  { icon: Wind, name: "Air Conditioning" },
  { icon: Clock, name: "24/7 Reception" },
  { icon: Tv, name: "Flat Screen TV" },
  { icon: Wifi, name: "Free High-Speed Wi-Fi" },
  { icon: Car, name: "Vehicular Parking" },
  { icon: ConciergeBell, name: "Room Service" },
  { icon: ArrowUpSquare, name: "Lift Access" },
  { icon: CheckCircle2, name: "24/7 Hot Water" },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white min-h-[85vh] flex items-center overflow-hidden">
        {/* Full-Building Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/exterior/hotel-sai-rama-building.webp"
            alt="Hotel Sai Rama Vijayawada Building Exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Red and Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-red-950/80 to-black/75" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/70 border border-red-700/60 text-red-100 text-xs font-semibold backdrop-blur-xs">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Beside Apsara Theatre, Governorpet, Vijayawada</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Comfortable Stay in the <br />
                <span className="text-red-500 font-black">Heart of Vijayawada</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
                Welcome to <strong className="text-white">Hotel Sai Rama</strong>, offering affordable, modern, clean, and air-conditioned guest rooms. Experience welcoming hospitality, convenient transportation links, and peaceful surroundings in Governorpet.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 bg-[#C71920] hover:bg-[#991B1B] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>View Rooms</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#booking-enquiry"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold px-5 py-3 rounded-xl shadow transition-all duration-200"
                >
                  <Calendar className="w-4 h-4 text-[#C71920]" />
                  <span>Book Your Stay</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-red-950/80 hover:bg-red-900 text-white text-sm font-semibold px-4 py-3 rounded-xl border border-red-700/50 backdrop-blur-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Hotel Sai Rama, I would like to check room availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-3 rounded-xl shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Booking Widget */}
            <div className="lg:col-span-5" id="booking-enquiry">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Column */}
            <div className="relative">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/reception/hotel-sai-rama-reception.webp"
                  alt="Hotel Sai Rama Reception Desk in Vijayawada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#C71920] text-white p-5 rounded-2xl shadow-xl max-w-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-red-200">Central Location</p>
                <p className="text-sm font-extrabold mt-1">Beside Apsara Theatre, Governorpet, Vijayawada</p>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-red-50 text-[#C71920] text-xs font-bold uppercase tracking-wider">
                Welcome to Hotel Sai Rama
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Your Preferred Affordable City Hotel in <span className="text-[#C71920]">Vijayawada</span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Located conveniently <strong>beside Apsara Theatre in Governorpet, Vijayawada</strong>, Hotel Sai Rama provides cozy, clean, and air-conditioned rooms for travelers visiting for business, family functions, pilgrimage, or transit stay.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you are arriving at Vijayawada Railway Station or Pandit Nehru Bus Stand, our strategic location offers unmatched accessibility to prime commercial shopping streets, hospitals, movie theaters, and dining outlets.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FFF7F7] rounded-xl border border-red-100">
                  <span className="block text-xl font-black text-[#C71920]">24/7</span>
                  <span className="text-xs font-semibold text-gray-700">Reception & Room Service</span>
                </div>

                <div className="p-4 bg-[#FFF7F7] rounded-xl border border-red-100">
                  <span className="block text-xl font-black text-[#C71920]">100%</span>
                  <span className="text-xs font-semibold text-gray-700">Clean & Air-Conditioned</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#C71920] hover:text-[#991B1B] hover:underline"
                >
                  <span>Learn More About Hotel Sai Rama</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-16 md:py-24 bg-[#FFF7F7] border-y border-red-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
              Accommodations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Featured Rooms & Categories
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our well-appointed, air-conditioned rooms designed to provide optimal rest and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-[#C71920] hover:bg-[#991B1B] text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>View All Room Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
              Guest Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose Hotel Sai Rama?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We focus on delivering genuine comfort, essential amenities, and hospitable support for a hassle-free stay in Vijayawada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C71920] flex items-center justify-center group-hover:bg-[#C71920] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C71920] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="py-16 md:py-20 bg-[#FFF7F7] border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
                Guest Amenities
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
                Hotel Facilities Preview
              </h2>
              <p className="text-xs text-gray-600 mt-2 max-w-xl">
                Enjoy essential facilities planned for your comfort. (Note: Facilities subject to hotel confirmation).
              </p>
            </div>

            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold py-2.5 px-5 rounded-xl shadow-xs transition-colors shrink-0"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-4 h-4 text-[#C71920]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {previewFacilities.map((fac, idx) => {
              const IconComp = fac.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-xl border border-red-100/80 shadow-xs flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="p-2.5 rounded-lg bg-red-50 text-[#C71920] shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">{fac.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW WITH LIGHTBOX */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
              Visual Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Hotel Sai Rama Photo Gallery
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Take a look at real photographs of our exterior building, reception counter, guest rooms, and clean corridors. Click any image to open the lightbox viewer.
            </p>
          </div>

          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#991B1B] via-[#C71920] to-[#991B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Planning a stay in Vijayawada?
          </h2>
          <p className="text-red-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Stay beside Apsara Theatre in Governorpet. Contact us directly on WhatsApp or call for quick room availability and best available rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4 text-[#C71920]" />
              <span>Call Now: {siteConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                "Hello Hotel Sai Rama, I want to book a room."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-red-950/70 hover:bg-red-950 text-white font-semibold py-3.5 px-6 rounded-xl border border-red-400/30 transition-colors text-sm"
            >
              <span>View Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
