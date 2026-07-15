"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function ServicesCarousel({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Mobile Buttons */}

      <div className="mb-5 flex justify-end gap-2 xl:hidden">
        <button
          onClick={() => scroll("left")}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            shadow-sm
            transition
            hover:bg-[#156CFF]
            hover:text-white
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            shadow-sm
            transition
            hover:bg-[#156CFF]
            hover:text-white
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Mobile */}

      <div
        ref={ref}
        className="
          flex
          gap-4
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-2

          xl:hidden

          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {children}
      </div>
    </div>
  );
}
