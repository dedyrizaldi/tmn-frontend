"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import { Link } from "@/i18n/navigation";

import ServiceCard from "./service-card";
import { services } from "./services.data";

export default function Services() {
  const t = useTranslations("services");

  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.clientWidth * 0.88;

    sliderRef.current.scrollBy({
      left: direction === "right" ? width : -width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const cardWidth = 330;

      const index = Math.round(slider.scrollLeft / cardWidth);

      setActive(index);
    };

    slider.addEventListener("scroll", handleScroll);

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section
      className="
        bg-[#F8FAFC]
        py-16
        lg:py-24
      "
    >
      <Container
        className="
          px-5
          sm:px-6
          lg:px-0
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[620px]">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#156CFF]

                sm:text-xs
              "
            >
              {t("badge")}
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-extrabold
                leading-tight
                text-slate-900

                sm:text-[16px]

                lg:text-[22px]
              "
            >
              {t("title")}
            </h2>
          </div>

          {/* Desktop Button */}

          <Link
            href="/services"
            className="
              group
              hidden

              lg:flex
              items-center
              gap-3

              font-semibold

              text-[#156CFF]
            "
          >
            {t("button")}

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                transition-all

                group-hover:bg-[#156CFF]
                group-hover:text-white
              "
            >
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        {/* ================= DESKTOP ================= */}

        <div
          className="
            hidden

            xl:grid
            xl:grid-cols-5

            gap-5
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              icon={service.icon}
              title={t(service.title)}
              description={t(service.description)}
              href={service.href}
            />
          ))}
        </div>

        {/* ================= MOBILE / TABLET ================= */}

        <div className="xl:hidden">
          {/* Navigation */}

          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              {services.length} Services
            </p>

            <div className="flex gap-2">
              <button
                type="button"
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

                  transition-all

                  hover:border-[#156CFF]
                  hover:bg-[#156CFF]
                  hover:text-white
                "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
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

                  transition-all

                  hover:border-[#156CFF]
                  hover:bg-[#156CFF]
                  hover:text-white
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

              gap-5

              overflow-x-auto

              scroll-smooth

              snap-x
              snap-mandatory

              pb-2

              [-ms-overflow-style:none]
              [scrollbar-width:none]

              [&::-webkit-scrollbar]:hidden
            "
          >
            {services.map((service, index) => (
              <div
                key={service.href}
                className={`
                  shrink-0

                  snap-start

                  w-[88%]
                  max-w-[340px]

                  transition-all
                  duration-500

                  ${active === index ? "scale-100 opacity-100" : "scale-[.96] opacity-70"}
              `}
              >
                <ServiceCard
                  icon={service.icon}
                  title={t(service.title)}
                  description={t(service.description)}
                  href={service.href}
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  sliderRef.current?.scrollTo({
                    left: index * 330,
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
          {/* View All */}

          <div className="mt-8 flex justify-center">
            <Link
              href="/services"
              className="
                group++

                inline-flex

                items-center

                gap-3

                font-semibold

                text-[#156CFF]
              "
            >
              {t("button")}

              <span
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-slate-200

                  transition-all

                  group-hover:bg-[#156CFF]
                  group-hover:text-white
                "
              >
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
