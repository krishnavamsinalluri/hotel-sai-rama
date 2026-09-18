import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#991B1B] text-white pt-12 pb-24 md:pb-12 border-t-4 border-[#C71920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-red-100 text-sm leading-relaxed mt-2">
              Comfortable, clean, and affordable AC accommodations located in the vibrant heart of Governorpet, Vijayawada. Your ideal choice for family, business, and leisure travel.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-red-200">
              <span className="font-semibold uppercase tracking-wider">GSTIN:</span>
              <span className="font-mono bg-red-950/60 px-2 py-0.5 rounded text-white border border-red-800">
                {siteConfig.gstin}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-red-700/60 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-red-100 hover:text-white hover:underline transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-red-100 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-red-100 hover:text-white hover:underline transition-colors">
                  Our Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-red-100 hover:text-white hover:underline transition-colors">
                  Hotel Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-red-100 hover:text-white hover:underline transition-colors">
                  Contact Us & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-red-700/60 pb-2 inline-block">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-red-100">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                <span>{siteConfig.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-300 shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-white hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Hotel Sai Rama, I would like to inquire about booking details."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  {siteConfig.contact.whatsappDisplay} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-300 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white hover:underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-300 shrink-0" />
                <span>{siteConfig.contact.receptionHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Actions & Maps */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-red-700/60 pb-2 inline-block">
              Location & Enquiries
            </h3>
            <p className="text-xs text-red-200 mb-4">
              Situated right beside Apsara Theatre in Governorpet. Easy access from Vijayawada Railway Station and Bus Stand.
            </p>
            <div className="space-y-2.5">
              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-red-800 hover:bg-red-700 text-white text-xs font-semibold py-2.5 px-3 rounded-lg border border-red-600 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                  "Hello Hotel Sai Rama, I want to check available room rates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-red-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-red-200 gap-4">
          <p>© {currentYear} {siteConfig.name}, Vijayawada. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white hover:underline">
              Terms & Conditions
            </Link>
            <a
              href={siteConfig.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline inline-flex items-center gap-1"
            >
              <span>Justdial Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
