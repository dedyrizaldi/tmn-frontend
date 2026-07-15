"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode[];
  desktop?: boolean;
}

export default function ProjectsCarousel({ children, desktop = false }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);

  const [canLeft, setCanLeft] = useState(false);

  const [canRight, setCanRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.firstElementChild as HTMLElement;

    if (!card) return;

    const gap = 16;

    slider.scrollBy({
      left:
        direction === "right"
          ? card.clientWidth + gap
          : -(card.clientWidth + gap),

      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const card = slider.firstElementChild as HTMLElement;

      if (!card) return;

      const gap = 20;

      const width = card.clientWidth + gap;

      setActive(Math.round(slider.scrollLeft / width));

      setCanLeft(slider.scrollLeft > 5);

      setCanRight(
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 5,
      );
    };

    slider.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}

      {/* Navigation */}

      <div className="mb-5 flex items-center justify-between">
        {!desktop && (
          <p className="text-xs font-medium text-slate-400">
            {children.length} Projects
          </p>
        )}

        <div className="ml-auto flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/5
                text-white
                transition-all
                hover:bg-[#156CFF]
                disabled:cursor-not-allowed
                disabled:opacity-40
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/5
                text-white
                transition-all
                hover:bg-[#156CFF]
                disabled:cursor-not-allowed
                disabled:opacity-40
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Slider */}

      <div
        ref={sliderRef}
        className="
       flex

        gap-4

        overflow-x-auto

        scroll-smooth

        snap-x

        snap-mandatory

        px-1

        pb-2

        overscroll-x-contain

        touch-pan-x

        [&::-webkit-scrollbar]:hidden

        [-ms-overflow-style:none]

        [scrollbar-width:none]
        "
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`
                shrink-0
                snap-start
                transition-opacity
                duration-300

                ${desktop ? "w-[calc((100%-48px)/4)]" : "w-[calc(100vw-40px)]"}

                ${active === index ? "opacity-100" : "opacity-60"}
            `}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Indicator */}

      <div className="mt-6 flex justify-center gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const slider = sliderRef.current;

              if (!slider) return;

              const card = slider.firstElementChild as HTMLElement;

              if (!card) return;

              slider.scrollTo({
                left: (card.clientWidth + 20) * index,

                behavior: "smooth",
              });
            }}
            className={`
              h-2

              rounded-full

              transition-all

              duration-300

              ${active === index ? "w-8 bg-[#156CFF]" : "w-2 bg-white/30"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
