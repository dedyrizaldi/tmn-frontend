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

            items-center
        
            gap-14

            lg:grid-cols-[380px_1fr]
          "
        >
          {/* ================= LEFT ================= */}

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
                mt-5

                text-[34px]

                font-bold

                leading-[1.15]

                text-[#04162E]

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

              grid-cols-3

              gap-3

              md:grid-cols-3
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
