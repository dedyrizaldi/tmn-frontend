"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import { heroSlides } from "./hero-slides.data";

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="relative h-full w-full">
      {/* Slider */}
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="
                relative
                h-full
                min-w-0
                flex-[0_0_100%]
              "
            >
              {/* Background */}
              <HeroBackground image={slide.image} alt={slide.alt} />

              {/* Content */}
              <div
                className="
                  relative
                  z-20
                  mx-auto
                  flex
                  h-full
                  w-full
                  max-w-[1280px]
                  items-center
                  px-4
                  sm:px-6
                  lg:px-8
                  xl:px-10
                "
              >
                <HeroContent
                  badge={slide.badge}
                  title={slide.title}
                  description={slide.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous slide"
        className="
          absolute
          left-4
          top-1/2
          z-30
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/20
          text-white
          backdrop-blur-sm
          transition-all
          hover:border-white/40
          hover:bg-black/40
          sm:left-6
          sm:h-10
          sm:w-10
          lg:left-8
        "
      >
        <ChevronLeft size={18} className="sm:size-[20px]" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next slide"
        className="
          absolute
          right-4
          top-1/2
          z-30
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/20
          text-white
          backdrop-blur-sm
          transition-all
          hover:border-white/40
          hover:bg-black/40
          sm:right-6
          sm:h-10
          sm:w-10
          lg:right-8
        "
      >
        <ChevronRight size={18} className="sm:size-[20px]" />
      </button>

      {/* Slide Dots */}
      <div
        className="
    absolute
    bottom-16
    left-1/2
    z-30
    flex
    -translate-x-1/2
    items-center
    gap-2
  "
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  isActive
                    ? "w-10 bg-white"
                    : "w-6 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
