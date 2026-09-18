import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Bed, Check, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Rooms & Suites | Hotel Sai Rama Vijayawada",
  description: "Explore AC guest rooms at Hotel Sai Rama in Governorpet, Vijayawada. Standard Room, Deluxe Room, and Family Room options with complete facilities.",
};

export default function RoomsPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Rooms" }]} />

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
            Accommodations
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Rooms & Categories
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Choose from our clean, comfortable, air-conditioned rooms located in Governorpet, Vijayawada.
          </p>
        </div>

        {/* ROOM LISTINGS */}
        <div className="space-y-12">
          {roomsData.map((room, index) => {
            const whatsappMsg = `Hello Hotel Sai Rama, I would like to inquire about booking the ${room.name}.`;
            const isEven = index % 2 === 0;

            return (
              <div
                key={room.id}
                id={room.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Large Room Photograph */}
                <div
                  className={`relative aspect-4/3 lg:aspect-auto lg:col-span-7 bg-gray-100 min-h-[300px] lg:min-h-[420px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={room.mainImage}
                    alt={`Photo of ${room.name} at Hotel Sai Rama`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#C71920] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {room.capacity}
                  </div>
                </div>

                {/* Room Info Details */}
                <div
                  className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                      {room.size} • Air-Conditioned
                    </span>
                    <h2 className="text-2xl font-extrabold text-gray-900 mt-1 mb-2">
                      {room.name}
                    </h2>
                    <p className="text-xs text-red-700 font-semibold mb-4">{room.tagline}</p>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {room.fullDescription}
                    </p>

                    {/* Guest Capacity & Bed Details */}
                    <div className="grid grid-cols-2 gap-3 p-3 bg-red-50/60 rounded-xl mb-6 border border-red-100 text-xs">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#C71920] shrink-0" />
                        <div>
                          <span className="block text-[10px] text-gray-400 font-medium">Capacity</span>
                          <span className="font-bold text-gray-800">{room.capacity}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[#C71920] shrink-0" />
                        <div>
                          <span className="block text-[10px] text-gray-400 font-medium">Bed Setup</span>
                          <span className="font-bold text-gray-800">{room.bedType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Confirmed Facilities List */}
                    <div className="mb-6">
                      <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Confirmed Amenities:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {room.facilities.map((fac, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                            <Check className="w-3.5 h-3.5 text-[#C71920] shrink-0" />
                            <span>{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Notice & Action Buttons */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="bg-gray-50 text-center py-2 px-3 rounded-lg border border-gray-100">
                      <span className="text-xs font-bold text-gray-800">
                        {room.rateText}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="inline-flex items-center justify-center gap-1 bg-gray-900 hover:bg-black text-white text-xs font-bold py-3 px-3 rounded-xl transition-colors"
                      >
                        <span>Full Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-1.5 bg-[#C71920] hover:bg-[#991B1B] text-white text-xs font-bold py-3 px-3 rounded-xl shadow-xs transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call to Book</span>
                      </a>

                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                          whatsappMsg
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-3 rounded-xl shadow-xs transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
