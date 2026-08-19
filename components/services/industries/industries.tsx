import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import IndustryCard from "./industry-card";
import { industries } from "./industries.data";

export default function Industries() {
  const t = useTranslations("servicesPage.industries");

  return (
    <Section
      className="
        w-full
        overflow-hidden

        bg-white

        py-16

        lg:py-24
      "
    >
      <Container>
        <div
          className="
            grid
            min-w-0

            items-center

            gap-10
            sm:gap-12
            lg:gap-14

            lg:grid-cols-[380px_minmax(0,1fr)]
          "
        >
          {/* ================= LEFT ================= */}

          <div className="min-w-0">
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
                mt-5

                max-w-full

                text-[34px]

                font-bold

                leading-[1.15]

                text-[#04162E]

                sm:text-[40px]

                lg:text-[52px]
              "
            >
              {t.rich("title", {
                blue: (chunks) => (
                  <span className="text-[#156CFF]">{chunks}</span>
                ),
              })}
            </h2>
          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              grid
              min-w-0
              w-full

              grid-cols-1

              gap-3

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {industries.map((item) => (
              <IndustryCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
