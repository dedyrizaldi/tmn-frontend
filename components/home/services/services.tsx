"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import DetailServices from "@/components/services/detail-services/detail-services";

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

        <DetailServices />
      </Container>
    </Section>
  );
}
