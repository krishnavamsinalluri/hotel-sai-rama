"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ExternalLink,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";
import { openWhatsAppEnquiry } from "@/utils/whatsapp";

export default function ContactPage() {
  // Form State
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [roomPref, setRoomPref] = useState("Deluxe Room");
  const [messageText, setMessageText] = useState("");
  const [consent, setConsent] = useState(false);

  // Validation State
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!mobileNumber.trim()) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }
    if (!checkIn || !checkOut) {
      setErrorMessage("Please select both check-in and check-out dates.");
      return;
    }
    if (!consent) {
      setErrorMessage("Please check the consent box to proceed with WhatsApp dispatch.");
      return;
    }

    setErrorMessage("");
    setSubmitted(true);

    // Formats and launches WhatsApp with all submitted details
    openWhatsAppEnquiry({
      name: fullName,
      phone: mobileNumber,
      email: emailAddress,
      checkIn,
      checkOut,
      guests,
      roomType: roomPref,
      message: messageText,
    });
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C71920]">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact & Location Details
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Reach out to Hotel Sai Rama for room availability, direction inquiries, or instant booking support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* LEFT COLUMN: HOTEL DETAILS & MAP */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hotel Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C71920]">
                  Official Hotel Address
                </span>
                <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
                  {siteConfig.name}
                </h2>
                <p className="text-xs text-red-700 font-semibold">{siteConfig.tagline}</p>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#C71920] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-0.5">Location:</span>
                    <p className="leading-relaxed">{siteConfig.address.fullAddress}</p>
                    <span className="text-[11px] text-gray-500 font-medium block mt-1">
                      Landmark: Beside Apsara Theatre, Governorpet
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#C71920] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Phone Number (Placeholder):</span>
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="text-[#C71920] font-bold hover:underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">WhatsApp (Placeholder):</span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                        "Hello Hotel Sai Rama, I would like to inquire about rooms."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#C71920] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Email Address (Placeholder):</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-700 hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#C71920] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Reception Desk Hours:</span>
                    <span>{siteConfig.contact.receptionHours}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#C71920] hover:bg-[#991B1B] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Hotel Sai Rama, I want to inquire about availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-black text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Responsive Google Maps Embed */}
            <div className="bg-white rounded-3xl p-3 shadow-md border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C71920]" />
                  Governorpet Google Map Location
                </span>
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#C71920] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mt-2 bg-gray-100">
                <iframe
                  src={siteConfig.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location of Hotel Sai Rama Governorpet Vijayawada"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT & BOOKING FORM */}
          <div className="lg:col-span-7" id="booking-form">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C71920]">
                  WhatsApp Enquiry Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Send Booking & Contact Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill out the form below. Submitting will format and dispatch your enquiry directly to Hotel Sai Rama on WhatsApp.
                </p>
              </div>

              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitted && !errorMessage && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Formatting details and opening WhatsApp... Please send the message on WhatsApp to complete your enquiry!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-fullname" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-fullname"
                      required
                      placeholder="e.g. Krishna Vamsi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="contact-mobile" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-mobile"
                      required
                      placeholder="+91 9876543210"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Email Address */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="name@example.com"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
                    />
                  </div>

                  {/* Check-In */}
                  <div>
                    <label htmlFor="contact-checkin" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      id="contact-checkin"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
                    />
                  </div>

                  {/* Check-Out */}
                  <div>
                    <label htmlFor="contact-checkout" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Check-Out Date *
                    </label>
                    <input
                      type="date"
                      id="contact-checkout"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Room Preference */}
                  <div>
                    <label htmlFor="contact-roompref" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Room Category Preference
                    </label>
                    <select
                      id="contact-roompref"
                      value={roomPref}
                      onChange={(e) => setRoomPref(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all bg-white"
                    >
                      <option value="Standard Room">Standard Room</option>
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Family Room">Family Room</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="contact-guests" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      id="contact-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all bg-white"
                    >
                      <option value="1 Adult">1 Adult (Solo)</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                      <option value="3 Adults">3 Adults</option>
                      <option value="4 Adults (Family)">4 Adults (Family)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Special Notes / Inquiries (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="e.g. Late check-in around 9 PM, requirement for extra pillows..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-[#C71920] focus:border-[#C71920] outline-none transition-all"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-[#C71920] rounded border-gray-300 focus:ring-[#C71920]"
                  />
                  <label htmlFor="contact-consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                    I agree to send this booking enquiry to Hotel Sai Rama via WhatsApp message with the details provided above.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-[#C71920] hover:bg-[#991B1B] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
