import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Users, Bed, Check, Phone, MessageSquare, ArrowLeft, Maximize } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingForm from "@/components/BookingForm";
import RoomCard from "@/components/RoomCard";
import { getRoomBySlug, roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return roomsData.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};

  return {
    title: `${room.name} | Hotel Sai Rama Vijayawada`,
    description: `${room.description} Stay in Governorpet beside Apsara Theatre.`,
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const similarRooms = roomsData.filter((r) => r.slug !== room.slug);
  const whatsappMsg = `Hello Hotel Sai Rama, I would like to inquire about booking the ${room.name}.`;

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Rooms", href: "/rooms" },
            { label: room.name },
          ]}
        />

        {/* Back Link */}
        <Link
          href="/rooms"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#C71920] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Rooms</span>
        </Link>

        {/* MAIN ROOM DETAIL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Gallery & Description */}
          <div className="lg:col-span-7 space-y-8">
            {/* Gallery Section */}
            <div className="bg-white rounded-3xl p-4 shadow-md border border-gray-100 space-y-4">
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={room.mainImage}
                  alt={`Main photo of ${room.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#C71920] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {room.capacity}
                </span>
              </div>

              {/* Thumbnails */}
              {room.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {room.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${room.name} gallery image ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 30vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Room Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  {room.size} • Air-Conditioned
                </span>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-1 mb-2">
                  {room.name}
                </h1>
                <p className="text-sm font-semibold text-red-700">{room.tagline}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#FFF7F7] rounded-2xl border border-red-100">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-[#C71920] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium">Capacity</span>
                    <span className="text-xs font-bold text-gray-800">{room.capacity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Bed className="w-5 h-5 text-[#C71920] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium">Bed Info</span>
                    <span className="text-xs font-bold text-gray-800">{room.bedType}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Maximize className="w-5 h-5 text-[#C71920] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium">Room Size</span>
                    <span className="text-xs font-bold text-gray-800">{room.size}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Room Overview</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {room.fullDescription}
                </p>
              </div>

              {/* Confirmed Facilities */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Confirmed Room Facilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.facilities.map((fac, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800"
                    >
                      <Check className="w-4 h-4 text-[#C71920] shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rates Note */}
              <div className="p-4 bg-gray-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-300">Rate Policy:</span>
                  <p className="text-sm font-bold text-white">{room.rateText}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 bg-[#C71920] hover:bg-[#991B1B] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                      whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Enquiry Widget */}
          <div className="lg:col-span-5 space-y-6">
            <BookingForm defaultRoomType={room.name} />

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900">Why Book Directly with Us?</h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C71920]" />
                  <span>Instant availability check on WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C71920]" />
                  <span>No upfront booking hidden platform fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C71920]" />
                  <span>Personal assistance from hotel management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SIMILAR ROOMS */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Similar Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {similarRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
