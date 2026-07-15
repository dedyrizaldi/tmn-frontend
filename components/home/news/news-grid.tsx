"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { news } from "./news.data";
import NewsCard from "./news-card";

export default function NewsGrid() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);

  const [canLeft, setCanLeft] = useState(false);

  const [canRight, setCanRight] = useState(true);

  const gap = 16;

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.firstElementChild as HTMLElement;

    if (!card) return;

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
      {/* ================= Navigation ================= */}

      <div className="mb-6 flex items-center justify-end gap-2">
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
            text-slate-700
            transition-all
            hover:border-[#156CFF]
            hover:bg-[#156CFF]
            hover:text-white
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
            border-slate-200
            bg-white
            text-slate-700
            transition-all
            hover:border-[#156CFF]
            hover:bg-[#156CFF]
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ================= Slider ================= */}

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
        {news.map((item, index) => (
          <div
            key={item.slug + index}
            className={`
              shrink-0
              snap-start
              transition-all
              duration-300

              basis-full

              md:basis-[calc(50%-8px)]

              xl:basis-[calc((100%-32px)/3)]

              ${active === index ? "opacity-100" : "opacity-60"}
            `}
          >
            <NewsCard {...item} />
          </div>
        ))}
      </div>

      {/* ================= Indicator ================= */}

      <div className="mt-6 flex justify-center gap-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const slider = sliderRef.current;

              if (!slider) return;

              const card = slider.firstElementChild as HTMLElement;

              if (!card) return;

              slider.scrollTo({
                left: (card.clientWidth + gap) * index,
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
