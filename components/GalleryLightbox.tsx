"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryItem[];
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev as number) - 1));
  }, [selectedIndex, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev as number) + 1));
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <>
      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#C71920] mb-1">
                {item.category}
              </span>
              <h4 className="text-base font-bold text-white group-hover:text-red-200 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-200 line-clamp-1">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 text-white hover:text-red-400 bg-black/50 hover:bg-black/80 p-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C71920]"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-50 text-white hover:text-red-400 bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C71920]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-50 text-white hover:text-red-400 bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C71920]"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white space-y-1">
              <h3 className="text-xl font-bold">{images[selectedIndex].title}</h3>
              <p className="text-sm text-gray-300">{images[selectedIndex].alt}</p>
              <span className="inline-block text-xs text-red-300 font-mono mt-1">
                Image {selectedIndex + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
