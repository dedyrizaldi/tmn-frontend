"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import ServiceModal from "../modal/service-modal";

import DetailServiceCard from "./detail-service-card";
import DetailServicesMobile from "./detail-services-mobile";
import { services } from "./services.data";

export default function DetailServices() {
  const t = useTranslations("servicesPage.detail");

  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <>
      <Section
        className="
          bg-[#F8FAFC]
          py-16
          lg:py-24
        "
      >
        <Container>
          {/* Header */}

          <div
            className="
              mb-14
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#156CFF]
                "
              >
                {t("badge")}
              </p>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-bold
                  text-[#04162E]
                  lg:text-[44px]
                "
              >
                {t("title")}
              </h2>
            </div>

            <Link
              href="/services"
              className="
                inline-flex
                items-center
                rounded-xl
                bg-[#156CFF]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#0E5DE8]
              "
            >
              {t("button")}
            </Link>
          </div>

          {/* Mobile */}

          <div className="lg:hidden">
            <DetailServicesMobile
              onSelectService={(service) => setSelectedService(service)}
            />
          </div>
          {/* Desktop */}

          <div
            className="
              hidden
              grid-cols-6
              gap-[5px]
              lg:grid
            "
          >
            {services.map((service) => (
              <DetailServiceCard
                key={service.slug}
                {...service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Modal */}

      <ServiceModal
        open={selectedService !== null}
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
