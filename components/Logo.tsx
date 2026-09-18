"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showSubtitle?: boolean;
  className?: string;
}

export default function Logo({ variant = "light", showSubtitle = true, className = "" }: LogoProps) {
  const titleColor = variant === "light" ? "text-gray-900" : "text-white";
  const subtitleColor = variant === "light" ? "text-red-700" : "text-red-200";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Hotel Sai Rama Homepage">
      {/* Official HS Logo Image */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-md overflow-hidden bg-[#C71920] shadow-sm flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200">
        <Image
          src="/images/logo/hotel-sai-rama-logo.png"
          alt="Hotel Sai Rama Official Logo"
          width={44}
          height={44}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className={`font-bold text-lg md:text-xl tracking-tight leading-none ${titleColor}`}>
          HOTEL <span className="text-[#C71920] font-black">SAI RAMA</span>
        </span>
        {showSubtitle && (
          <span className={`text-[10px] md:text-xs font-semibold tracking-wider uppercase mt-1 ${subtitleColor}`}>
            Governorpet, Vijayawada
          </span>
        )}
      </div>
    </Link>
  );
}
