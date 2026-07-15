"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import NewsCard from "./news-card";
import { news } from "./news.data";

export default function NewsGridMobile() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction === "right" ? slider.clientWidth : -slider.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const page = Math.round(slider.scrollLeft / slider.clientWidth);

      setActive(page);

      setCanLeft(slider.scrollLeft > 5);

      setCanRight(
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 5,
      );
    };

    handleScroll();

    slider.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <>
      {/* ================= Navigation ================= */}

      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-medium text-slate-400">
          {news.length} Articles
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
              text-slate-700
              transition-all
              duration-300
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
              duration-300
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
      </div>

      {/* ================= Slider ================= */}

      <div
        ref={sliderRef}
        className="
          flex
          overflow-x-auto
          snap-x
          snap-mandatory
          scroll-smooth

          px-1
          pb-2

          touch-pan-x
          overscroll-x-contain

          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {news.map((item, index) => (
          <div
            key={item.slug + index}
            className={`
              min-w-full
              w-full

              shrink-0

              snap-center

              px-1

              transition-all

              duration-500

              ${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-[0.97] opacity-50"
              }
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

              slider.scrollTo({
                left: slider.clientWidth * index,
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
