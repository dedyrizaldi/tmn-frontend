import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { useTranslations } from "next-intl";

import OverviewCard from "./overview-card";
import OverviewMobile from "./overview-mobile";
import { overviewServices } from "./overview.data";

export default function Overview() {
  const t = useTranslations("servicesOverview");

  return (
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
            mx-auto

            mb-14

            max-w-[700px]

            text-center
          "
        >
          <span
            className="
              inline-flex

              rounded-full

              bg-[#156CFF]/10

              px-4

              py-2

              text-[11px]

              font-bold

              uppercase

              tracking-[0.25em]

              text-[#156CFF]
            "
          >
            {t("badge")}
          </span>

          <h2
            className="
              mt-5

              text-[30px]

              font-bold

              leading-tight

              text-[#04162E]

              sm:text-[15px]

              lg:text-[30px]
            "
          >
            {t.rich("title", {
              blue: (chunks) => (
                <span className="text-[#156CFF]">{chunks}</span>
              ),
            })}
          </h2>

          <p
            className="
              mt-2

              text-[16px]

              leading-8

              text-slate-600
            "
          >
            {t("description")}
          </p>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="lg:hidden">
          <OverviewMobile />
        </div>

        {/* ================= DESKTOP ================= */}

        <div
          className="
            hidden

            grid-cols-6

            gap-7

            lg:grid
          "
        >
          {overviewServices.map((service) => (
            <OverviewCard key={service.slug} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
