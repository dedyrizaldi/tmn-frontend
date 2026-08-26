"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import DetailServiceCard from "./detail-service-card";
import DetailServicesMobile from "./detail-services-mobile";
import { services } from "./services.data";

interface Props {
  className?: string;
}

export default function DetailServices({ className = "" }: Props) {
  const t = useTranslations("services");

  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  /*
   * Close modal ketika menekan tombol Escape
   */
  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  /*
   * Disable body scroll ketika modal terbuka
   */
  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedService]);

  return (
    <section className={className}>
      {/* Desktop */}
      <div
        className="
        hidden
        justify-center
        gap-5

        lg:flex
      "
      >
        {services.map((service) => (
          <div
            key={service.slug}
            className="
            w-[calc((100%-60px)/3)]
            xl:w-[calc((100%-100px)/6)]
          "
          >
            <DetailServiceCard
              slug={service.slug}
              title={t(`${service.key}.title`)}
              description={t(`${service.key}.shortDescription`)}
              image={service.image}
              icon={service.icon}
              onClick={() => setSelectedService(service)}
            />
          </div>
        ))}
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden">
        <DetailServicesMobile
          onSelectService={(service) => {
            setSelectedService(service);
          }}
        />
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            p-4
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedService(null);
            }
          }}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-2xl
              overflow-y-auto
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
            "
            onMouseDown={(event) => {
              event.stopPropagation();
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label={t("close")}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-sm
                transition-all
                duration-200
                hover:bg-black/70
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-offset-2
                focus:ring-offset-black/20
              "
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={selectedService.image}
                alt={t(`${selectedService.key}.title`)}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-5 left-6 right-16">
                <h3
                  id="service-modal-title"
                  className="text-2xl font-bold text-white"
                >
                  {t(`${selectedService.key}.title`)}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Description */}
              <p className="text-sm leading-7 text-slate-600">
                {t(`${selectedService.key}.description`)}
              </p>

              {/* Features */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-[#04162E]">
                  {t("viewDetail")}
                </h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedService.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-slate-600
                      "
                    >
                      <span
                        className="
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-[#156CFF]
                        "
                      />

                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Close Button */}
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-200
                    hover:border-[#156CFF]
                    hover:bg-[#156CFF]
                    hover:text-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#156CFF]/30
                  "
                >
                  {t("close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
