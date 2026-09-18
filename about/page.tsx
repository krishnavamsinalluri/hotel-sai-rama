import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, Sparkles, HeartHandshake, Users, Briefcase, User, Compass, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Hotel Sai Rama Vijayawada",
  description: "Learn about Hotel Sai Rama located beside Apsara Theatre in Governorpet, Vijayawada. Our commitment to cleanliness, comfortable AC stay, and helpful service.",
};

const suitableVisitors = [
  {
    icon: Users,
    title: "Families & Group Travelers",
    description: "Spacious multi-guest family rooms, quiet environment, and safe surroundings for family visits.",
  },
  {
    icon: Briefcase,
    title: "Business & Corporate Travelers",
    description: "Fast connectivity, central Governorpet access, and proximity to Vijayawada commercial districts.",
  },
  {
    icon: User,
    title: "Solo & Pilgrimage Travelers",
    description: "Affordable room options, 24/7 reception support, and easy transportation to temples and shrines.",
  },
  {
    icon: Compass,
    title: "Transit & Travel Visitors",
    description: "Convenient access to Vijayawada Railway Junction and Pandit Nehru Bus Station for overnight stays.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* PAGE BANNER */}
      <section className="relative bg-gray-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/reception/hotel-sai-rama-reception.webp"
            alt="Hotel Sai Rama Reception Desk"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 via-black/85 to-red-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded bg-red-900/80 text-red-200 border border-red-700/60">
            Governorpet, Vijayawada
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            About Hotel Sai Rama
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            Your hospitable home and comfortable stay located beside Apsara Theatre in Governorpet.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* INTRODUCTION & LOCATION STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#C71920]">
              Our Location & Hospitality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Welcoming Hospitality in the Commercial Heart of Governorpet
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Hotel Sai Rama</strong> is located strategically <strong>beside Apsara Theatre in Governorpet, Vijayawada</strong>. Our hotel offers well-maintained, comfortable, and affordable air-conditioned accommodations designed to meet the expectations of modern travelers.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We focus on delivering genuine comfort without non-essential fluff: fresh clean rooms, responsive 24/7 reception assistance, daily housekeeping, and direct customer care over phone and WhatsApp.
            </p>

            <div className="p-4 bg-red-50/70 border border-red-100 rounded-xl flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C71920] shrink-0 mt-0.5" />
              <div className="text-xs text-gray-800">
                <span className="font-bold block">Prime Address:</span>
                <span>{siteConfig.address.fullAddress}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="/images/exterior/hotel-sai-rama-[#C71920]-signboard.webp"
                alt="Hotel Sai Rama Signboard"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg border-2 border-white mt-6">
              <Image
                src="/images/reception/hotel-sai-rama-nameboard.webp"
                alt="Hotel Sai Rama Wooden Nameboard"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* MISSION & CORE VALUES */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#C71920]">
              Our Focus
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Cleanliness, Comfort & Helpful Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FFF7F7] border border-red-100 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C71920] text-white flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">High Cleanliness Standards</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Daily cleaning routines, sanitized linen, spotless attached bathrooms, and fresh air quality across all rooms.
              </p>
            </div>

            <div className="p-6 bg-[#FFF7F7] border border-red-100 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C71920] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Relaxing In-Room Comfort</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Air-conditioned climate control, cozy mattresses, television entertainment, and peaceful sleeping environment.
              </p>
            </div>

            <div className="p-6 bg-[#FFF7F7] border border-red-100 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C71920] text-white flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Helpful & Honest Service</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Courteous staff ready 24/7 to assist with room requests, travel directions, luggage support, and booking queries.
              </p>
            </div>
          </div>
        </div>

        {/* SUITABLE VISITOR TYPES */}
        <div className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#C71920]">
              Who Stays With Us
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Ideal Accommodation For Every Traveler
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitableVisitors.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-[#FFF7F7] border border-red-100 space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-[#C71920] mx-auto flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="rounded-3xl bg-gray-900 text-white p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to book your stay at Hotel Sai Rama?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Get instant assistance on WhatsApp or call our reception desk directly for room availability and rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#C71920] hover:bg-[#991B1B] text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception Desk</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                "Hello Hotel Sai Rama, I would like to inquire about booking."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
