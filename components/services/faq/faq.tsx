import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import FaqItem from "./faq-item";
import { faqs } from "./faq.data";

export default function FAQ() {
  const t = useTranslations("servicesPage.faq");

  return (
    <Section
      className="
        bg-[#F8FAFC]
        py-20
        lg:py-28
      "
    >
      <Container>
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[380px_1fr]
          "
        >
          {/* Left */}

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
                mt-4
                text-[34px]
                font-bold
                leading-tight
                text-[#04162E]
                lg:text-[44px]
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

            <Link
              href="/contact"
              className="
                mt-8
                inline-flex
                rounded-xl
                bg-[#156CFF]
                px-6
                py-4
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#0E5DE8]
              "
            >
              {t("button")}
            </Link>
          </div>

          {/* Right */}

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
