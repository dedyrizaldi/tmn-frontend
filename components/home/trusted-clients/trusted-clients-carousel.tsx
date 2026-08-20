"use client";

import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { trustedClients } from "./trusted-clients.data";

import TrustedClientsItem from "./trusted-clients-item";

export default function TrustedClientsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
      {/* Previous */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous clients"
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          transition-colors
          hover:border-blue-600
          sm:h-9
          sm:w-9
          md:h-10
          md:w-10
        "
      >
        <ChevronLeft size={16} className="sm:size-[18px]" />
      </button>

      {/* Carousel */}
      <div ref={emblaRef} className="min-w-0 flex-1 overflow-hidden">
        <div className="flex">
          {trustedClients.map((item) => (
            <div
              key={item.name}
              className="
                flex
                min-w-0
                flex-[0_0_56%]
                justify-center
                px-2
                sm:flex-[0_0_33.333333%]
                sm:px-3
                md:flex-[0_0_25%]
                md:px-4
                lg:flex-[0_0_20%]
              "
            >
              <TrustedClientsItem client={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next clients"
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          transition-colors
          hover:border-blue-600
          sm:h-9
          sm:w-9
          md:h-10
          md:w-10
        "
      >
        <ChevronRight size={16} className="sm:size-[18px]" />
      </button>
    </div>
  );
}
