"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import DetailServiceCard from "./detail-service-card";
import { services } from "./services.data";

interface Props {
  onSelectService: (service: (typeof services)[number]) => void;
}

export default function DetailServicesMobile({ onSelectService }: Props) {
  const locale = useLocale();
  const t = useTranslations("services");

  const sliderRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateSliderState = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const card = slider.firstElementChild as HTMLElement | null;

    if (!card) {
      return;
    }

    const gap = 16;
    const cardWidth = card.offsetWidth + gap;

    const currentIndex = Math.round(slider.scrollLeft / cardWidth);

    setActive(Math.max(0, Math.min(currentIndex, services.length - 1)));

    setCanLeft(slider.scrollLeft > 5);

    setCanRight(
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 5,
    );
  };

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const card = slider.firstElementChild as HTMLElement | null;

    if (!card) {
      return;
    }

    const gap = 16;
    const distance = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const card = slider.firstElementChild as HTMLElement | null;

    if (!card) {
      return;
    }

    const gap = 16;
    const distance = card.offsetWidth + gap;

    slider.scrollTo({
      left: distance * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    updateSliderState();

    const handleScroll = () => {
      updateSliderState();
    };

    const handleResize = () => {
      updateSliderState();
    };

    slider.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      slider.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {services.length} {locale === "id" ? "Layanan" : "Services"}
        </p>

        <div className="flex gap-2">
          {/* Previous */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canLeft}
            aria-label={
              locale === "id" ? "Layanan sebelumnya" : "Previous service"
            }
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
              disabled:hover:border-slate-200
              disabled:hover:bg-white
              disabled:hover:text-slate-700
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canRight}
            aria-label={locale === "id" ? "Layanan berikutnya" : "Next service"}
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
              disabled:hover:border-slate-200
              disabled:hover:bg-white
              disabled:hover:text-slate-700
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
          snap-x
          snap-mandatory
          scroll-smooth
          pb-2
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {services.map((service, index) => (
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
                  ? "scale-100 opacity-100"
                  : "scale-[0.97] opacity-60"
              }
            `}
          >
            <DetailServiceCard
              slug={service.slug}
              title={t(`${service.key}.title`)}
              description={t(`${service.key}.shortDescription`)}
              image={service.image}
              icon={service.icon}
              onClick={() => onSelectService(service)}
            />
          </div>
        ))}
      </div>

      {/* Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {services.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={
              locale === "id"
                ? `Buka layanan ${index + 1}`
                : `Go to service ${index + 1}`
            }
            aria-current={active === index ? "true" : undefined}
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
    </div>
  );
}
