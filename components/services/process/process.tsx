import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import ProcessCard from "./process-card";
import ProcessMobile from "./process-mobile";
import { processSteps } from "./process.data";

export default function Process() {
  const t = useTranslations("servicesPage.process");

  return (
    <Section
      className="
        bg-white

        py-20

        lg:py-28
      "
    >
      <Container>
        {/* Header */}

        <div
          className="
            mx-auto

            mb-16

            max-w-[720px]

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

              sm:text-[36px]

              lg:text-[46px]
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              mt-5

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
          <ProcessMobile />
        </div>

        {/* ================= DESKTOP ================= */}

        <div
          className="
            hidden

            grid-cols-5

            gap-6

            lg:grid
          "
        >
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              {...step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
