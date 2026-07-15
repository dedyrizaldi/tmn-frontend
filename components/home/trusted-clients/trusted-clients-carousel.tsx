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
    <div className="flex items-center gap-6">
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          hover:border-blue-600
        "
      >
        <ChevronLeft size={18} />
      </button>

      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex">
          {trustedClients.map((item) => (
            <div key={item.name} className="min-w-[180px] flex justify-center">
              <TrustedClientsItem client={item} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          hover:border-blue-600
        "
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
