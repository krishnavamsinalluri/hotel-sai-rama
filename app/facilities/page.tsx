import type { Metadata } from "next";
import Image from "next/image";
import {
  Wind,
  Clock,
  Tv,
  ArrowUpSquare,
  Car,
  Wifi,
  Flame,
  ConciergeBell,
  Sparkles,
  Zap,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageSquare,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { facilitiesData, Facility } from "@/data/facilities";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Facilities & Amenities | Hotel Sai Rama Vijayawada",
  description: "View available facilities at Hotel Sai Rama in Governorpet, Vijayawada including AC, 24/7 reception, TV, lift access, clean corridors, and parking.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Clock,
  Tv,
  ArrowUpSquare,
  Car,
  Wifi,
  Flame,
  ConciergeBell,
  Sparkles,
  Zap,
};

export default function FacilitiesPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Facilities" }]} />

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
            Guest Comfort
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Hotel Facilities & Amenities
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            We provide essential facilities to make your stay comfortable, restful, and convenient in Governorpet, Vijayawada.
          </p>
        </div>

        {/* OWNER VERIFICATION NOTICE BANNER */}
        {/*
          IMPORTANT CODE COMMENT FOR HOTEL OWNER / ADMINISTRATOR:
          Facilities below are structured as editable placeholders.
          Please verify every facility with the hotel owner before claiming full availability.
        */}
        <div className="mb-12 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-amber-800 text-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-amber-900 mb-0.5">Facility Confirmation Notice:</span>
            <span>
              All listed facilities represent standard hotel amenities provided for guest comfort. Please confirm specific service availability (e.g. lift hours, parking capacity) with our reception desk during check-in.
            </span>
          </div>
        </div>

        {/* FACILITIES GRID WITH REUSABLE ICON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilitiesData.map((facility: Facility) => {
            const IconComp = iconMap[facility.iconName] || Sparkles;

            return (
              <div
                key={facility.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Real Photograph where available */}
                {facility.image ? (
                  <div className="relative aspect-16/9 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={`Photograph showing ${facility.name} at Hotel Sai Rama`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#C71920]">
                        <IconComp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-bold">{facility.name}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-red-50 text-[#C71920] group-hover:bg-[#C71920] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-red-700 tracking-wider">
                        {facility.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C71920] transition-colors">
                        {facility.name}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  {facility.image && (
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C71920] transition-colors">
                      {facility.name}
                    </h3>
                  )}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      In-House Amenity
                    </span>
                    <span className="text-gray-400">{facility.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* REAL PHOTOGRAPHS HIGHLIGHT SHOWCASE */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
              Real Hotel Views
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Verified In-House Photographs
            </h2>
            <p className="text-xs text-gray-600">
              Check authentic photos of our reception, clean corridors, television setups, and entrance canopy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow">
              <Image
                src="/images/reception/hotel-sai-rama-reception.webp"
                alt="Reception Desk"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                Reception Area
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow">
              <Image
                src="/images/facilities/hotel-sai-rama-corridor.webp"
                alt="Clean Corridors"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                Corridors & Rooms
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow">
              <Image
                src="/images/facilities/hotel-sai-rama-tv-area.webp"
                alt="Room Television"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                TV & Entertainment
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow">
              <Image
                src="/images/exterior/hotel-sai-rama-entrance.webp"
                alt="Entrance and Parking"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                Entrance & Parking
              </div>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="bg-[#991B1B] text-white rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Have specific facility questions?</h2>
          <p className="text-red-100 text-sm max-w-xl mx-auto">
            Contact our 24/7 reception desk for any inquiries about room amenities, parking spot reservation, or check-in assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold py-3 px-6 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C71920]" />
              <span>Call Reception</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                "Hello Hotel Sai Rama, I have a query about your hotel facilities."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
