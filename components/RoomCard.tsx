"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Bed, Check, MessageSquare, ArrowRight } from "lucide-react";
import { Room } from "@/data/rooms";
import { openWhatsAppEnquiry } from "@/utils/whatsapp";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      roomType: room.name,
      message: `Hi, I am interested in booking the ${room.name}.`,
    });
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Room Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
        <Image
          src={room.mainImage}
          alt={`Photo of ${room.name} at Hotel Sai Rama`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#C71920] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {room.capacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C71920] transition-colors">
            {room.name}
          </h3>
          <p className="text-xs text-red-700 font-medium mt-0.5">{room.tagline}</p>
        </div>

        <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {room.description}
        </p>

        {/* Capacity & Bed Info */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 py-3 px-3 bg-red-50/50 rounded-xl mb-4 border border-red-100/60">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#C71920] shrink-0" />
            <span className="font-semibold">{room.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#C71920] shrink-0" />
            <span className="font-semibold">{room.bedType}</span>
          </div>
        </div>

        {/* Facilities badges */}
        <div className="mb-6 flex-grow">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            Main Amenities:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {room.facilities.slice(0, 4).map((facility, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
              >
                <Check className="w-3 h-3 text-[#C71920]" />
                {facility}
              </span>
            ))}
          </div>
        </div>

        {/* Price Tag & Action Buttons */}
        <div className="pt-4 border-t border-gray-100 space-y-3">
          <div className="text-center bg-gray-50 py-2 px-3 rounded-lg border border-gray-100">
            <span className="text-xs font-semibold text-gray-700">
              {room.rateText}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/rooms/${room.slug}`}
              className="inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
