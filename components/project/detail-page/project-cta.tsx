import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

export default function ProjectCTA() {
  const t = useTranslations("projectPage.detail.cta");

  return (
    <Section className="relative overflow-hidden py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/project/cta-background.png"
          alt="Industrial Project"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04162E] via-[#04162E]/70 to-[#04162E]/85" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}

          <span
            className="
              inline-flex

              rounded-full

              bg-[#156CFF]/20

              px-5

              py-2

              text-xs

              font-bold

              uppercase

              tracking-[0.25em]

              text-[#8FC0FF]
            "
          >
            {t("badge")}
          </span>

          {/* Title */}

          <h2
            className="
              mt-8

              text-4xl

              font-bold

              leading-tight

              text-white

              lg:text-6xl
            "
          >
            {t("title")}
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-lg

              leading-9

              text-slate-300
            "
          >
            {t("description")}
          </p>

          {/* Buttons */}

          <div
            className="
              mt-12

              flex

              flex-wrap

              justify-center

              gap-5
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex

                items-center

                gap-3

                rounded-xl

                bg-[#156CFF]

                px-8

                py-4

                font-semibold

                text-white

                transition-all

                duration-300

                hover:-translate-y-1

                hover:bg-[#0E5DE8]

                hover:shadow-xl
              "
            >
              <ArrowRight size={18} />

              {t("primary")}
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex

                items-center

                gap-3

                rounded-xl

                border

                border-white/20

                bg-white/10

                px-8

                py-4

                font-semibold

                text-white

                backdrop-blur

                transition-all

                duration-300

                hover:bg-white/20
              "
            >
              <Phone size={18} />

              {t("secondary")}
            </Link>
          </div>

          {/* Bottom Stats */}

          <div
            className="
              mt-20

              grid

              gap-8

              md:grid-cols-3
            "
          >
            <div>
              <h3
                className="
                  text-5xl

                  font-bold

                  text-white
                "
              >
                150+
              </h3>

              <p className="mt-3 text-slate-300">{t("stats.projects")}</p>
            </div>

            <div>
              <h3
                className="
                  text-5xl

                  font-bold

                  text-white
                "
              >
                35+
              </h3>

              <p className="mt-3 text-slate-300">{t("stats.clients")}</p>
            </div>

            <div>
              <h3
                className="
                  text-5xl

                  font-bold

                  text-white
                "
              >
                100%
              </h3>

              <p className="mt-3 text-slate-300">{t("stats.commitment")}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
