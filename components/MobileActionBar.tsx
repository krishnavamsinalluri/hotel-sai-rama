"use client";

import Link from "next/link";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function MobileActionBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    "Hello Hotel Sai Rama, I would like to inquire about booking a room."
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl p-2 px-3">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-gray-100 active:bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C71920] mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 active:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact#booking-form"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#C71920] active:bg-[#991B1B] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
