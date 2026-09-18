"use client";

import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    "Hello Hotel Sai Rama, I want to inquire about availability."
  )}`;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col space-y-3">
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${siteConfig.contact.phoneRaw}`}
        className="group relative flex items-center justify-center w-12 h-12 bg-white text-[#C71920] border-2 border-[#C71920] rounded-full shadow-lg hover:bg-[#C71920] hover:text-white transition-all duration-300 transform hover:scale-110"
        aria-label="Call Hotel Sai Rama"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Call {siteConfig.contact.phoneDisplay}
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp with Hotel Sai Rama"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-emerald-900 text-white text-xs font-semibold px-2.5 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          WhatsApp Enquiry
        </span>
      </a>
    </div>
  );
}
