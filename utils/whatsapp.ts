import { siteConfig } from "@/data/siteConfig";

export interface BookingEnquiryParams {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function openWhatsAppEnquiry(params: BookingEnquiryParams) {
  const { checkIn, checkOut, guests, roomType, name, phone, email, message } = params;

  let text = `Hello *${siteConfig.name}*,\nI would like to inquire about booking availability.\n\n`;

  if (roomType) text += `*Room Type:* ${roomType}\n`;
  if (checkIn) text += `*Check-in Date:* ${checkIn}\n`;
  if (checkOut) text += `*Check-out Date:* ${checkOut}\n`;
  if (guests) text += `*Number of Guests:* ${guests}\n`;
  if (name) text += `*Name:* ${name}\n`;
  if (phone) text += `*Phone:* ${phone}\n`;
  if (email) text += `*Email:* ${email}\n`;
  if (message) text += `*Message:* ${message}\n`;

  text += `\nPlease provide the best available rate for my stay at your Governorpet location. Thank you!`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodedText}`;

  if (typeof window !== "undefined") {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
}
