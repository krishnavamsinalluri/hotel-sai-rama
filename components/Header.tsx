"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md py-3" : "shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "text-[#C71920] bg-red-50 font-bold border-b-2 border-[#C71920]"
                      : "text-gray-700 hover:text-[#C71920] hover:bg-red-50/50"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#C71920] px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C71920]" />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact#booking-form"
              className="inline-flex items-center gap-2 bg-[#C71920] hover:bg-[#991B1B] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden gap-2">
            <Link
              href="/contact#booking-form"
              className="bg-[#C71920] text-white text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1"
            >
              <span>Book</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-700 hover:text-[#C71920] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C71920]"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-black/50 backdrop-blur-xs transition-opacity">
          <div className="bg-white w-full max-h-[calc(100vh-65px)] overflow-y-auto shadow-xl py-4 px-6 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "text-[#C71920] bg-red-50 font-bold border-l-4 border-[#C71920]"
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#C71920]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-3">
              <Link
                href="/contact#booking-form"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C71920] text-white font-semibold py-3 px-4 rounded-lg shadow text-center"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now / Check Rates</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-medium py-2.5 px-3 rounded-lg text-sm text-center"
                >
                  <Phone className="w-4 h-4 text-[#C71920]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Hotel Sai Rama, I have an inquiry about rooms."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium py-2.5 px-3 rounded-lg text-sm text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
