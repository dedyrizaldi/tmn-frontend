"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import OverviewCard from "./overview-card";
import { overviewServices } from "./overview.data";

export default function OverviewMobile() {
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

      const gap = 16;

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
    <>
      {/* Navigation */}

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {overviewServices.length} Services
        </p>

        <div className="flex gap-2">
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

              border-slate-200

              bg-white

              transition

              hover:border-[#156CFF]

              hover:bg-[#156CFF]

              hover:text-white

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

              border-slate-200

              bg-white

              transition

              hover:border-[#156CFF]

              hover:bg-[#156CFF]

              hover:text-white

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

          pb-2

          [&::-webkit-scrollbar]:hidden

          [-ms-overflow-style:none]

          [scrollbar-width:none]
        "
      >
        {overviewServices.map((service, index) => (
          <div
            key={service.slug}
            className={`
              w-[calc(100vw-40px)]

              shrink-0

              snap-start

              transition-all

              duration-300

              ${
                active === index
                  ? "opacity-100 scale-100"
                  : "opacity-60 scale-[0.97]"
              }
            `}
          >
            <OverviewCard {...service} />
          </div>
        ))}
      </div>

      {/* Indicator */}

      <div className="mt-6 flex justify-center gap-2">
        {overviewServices.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const slider = sliderRef.current;

              if (!slider) return;

              const card = slider.firstElementChild as HTMLElement;

              if (!card) return;

              slider.scrollTo({
                left: (card.clientWidth + 16) * index,
                behavior: "smooth",
              });
            }}
            className={`
              h-2

              rounded-full

              transition-all

              duration-300

              ${active === index ? "w-8 bg-[#156CFF]" : "w-2 bg-slate-300"}
            `}
          />
        ))}
      </div>
    </>
  );
}
