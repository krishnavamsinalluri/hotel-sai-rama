"use client";

import { useState } from "react";
import { Calendar, MessageSquare, AlertCircle } from "lucide-react";
import { openWhatsAppEnquiry } from "@/utils/whatsapp";

interface BookingFormProps {
  defaultRoomType?: string;
  className?: string;
}

export default function BookingForm({ defaultRoomType = "Deluxe Room", className = "" }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [roomType, setRoomType] = useState(defaultRoomType);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    setError("");
    openWhatsAppEnquiry({
      checkIn,
      checkOut,
      guests,
      roomType,
      name,
      phone,
    });
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-red-100 ${className}`}>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="p-2.5 bg-red-50 text-[#C71920] rounded-xl">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Check Availability & Book</h3>
          <p className="text-xs text-gray-500">Direct WhatsApp enquiry with instant response</p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Check-In Date */}
          <div>
            <label htmlFor="check-in-date" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Check-In Date *
            </label>
            <div className="relative">
              <input
                type="date"
                id="check-in-date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
              />
            </div>
          </div>

          {/* Check-Out Date */}
          <div>
            <label htmlFor="check-out-date" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Check-Out Date *
            </label>
            <div className="relative">
              <input
                type="date"
                id="check-out-date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Room Type */}
          <div>
            <label htmlFor="room-type-select" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Room Category
            </label>
            <div className="relative">
              <select
                id="room-type-select"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all bg-white"
              >
                <option value="Standard Room">Standard Room</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Family Room">Family Room</option>
              </select>
            </div>
          </div>

          {/* Guests */}
          <div>
            <label htmlFor="guests-select" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Number of Guests
            </label>
            <div className="relative">
              <select
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all bg-white"
              >
                <option value="1 Adult">1 Adult (Solo)</option>
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults (Family)">4 Adults (Family)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Optional Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="guest-name-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              id="guest-name-input"
              placeholder="e.g. Ramesh Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="guest-phone-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Mobile Number (Optional)
            </label>
            <input
              type="tel"
              id="guest-phone-input"
              placeholder="+91 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#C71920] hover:bg-[#991B1B] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Check Availability on WhatsApp</span>
        </button>
      </form>
    </div>
  );
}
