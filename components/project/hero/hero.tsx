import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

export default function ProjectHero() {
  const t = useTranslations("projectPage.hero");

  return (
    <Section className="relative overflow-hidden py-0">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/project/hero-project.png"
          alt="Industrial Project"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04162E] via-[#04162E]/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div
          className="
            flex
            min-h-[520px]
            items-center
          "
        >
          <div className="max-w-[760px]">
            {/* Breadcrumb */}

            <div
              className="
                mb-8

                flex

                items-center

                gap-2

                text-sm

                text-white/70
              "
            >
              <Link href="/" className="transition hover:text-white">
                {t("home")}
              </Link>

              <span>/</span>

              <span className="text-white">{t("projects")}</span>
            </div>

            {/* Badge */}

            <span
              className="
                inline-flex

                rounded-full

                bg-[#156CFF]/20

                px-4

                py-2

                text-xs

                font-bold

                uppercase

                tracking-[0.25em]

                text-[#7FB3FF]
              "
            >
              {t("badge")}
            </span>

            {/* Title */}

            <h1
              className="
                mt-6

                text-5xl

                font-bold

                leading-tight

                text-white

                lg:text-6xl
              "
            >
              {t("title")}
            </h1>

            {/* Description */}

            <p
              className="
                mt-8

                max-w-[650px]

                text-lg

                leading-8

                text-slate-200
              "
            >
              {t("description")}
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                  rounded-xl

                  bg-[#156CFF]

                  px-7

                  py-4

                  font-semibold

                  text-white

                  transition

                  hover:bg-[#0E5DE8]
                "
              >
                {t("primary")}
              </Link>

              <Link
                href="/services"
                className="
                  rounded-xl

                  border

                  border-white/20

                  bg-white/10

                  px-7

                  py-4

                  font-semibold

                  text-white

                  backdrop-blur

                  transition

                  hover:bg-white/20
                "
              >
                {t("secondary")}
              </Link>
            </div>

            {/* Stats */}

            <div
              className="
                mt-14

                flex

                flex-wrap

                gap-10
              "
            >
              <div>
                <p className="text-4xl font-bold text-white">150+</p>

                <span className="text-sm text-slate-300">
                  {t("stats.projects")}
                </span>
              </div>

              <div>
                <p className="text-4xl font-bold text-white">35+</p>

                <span className="text-sm text-slate-300">
                  {t("stats.clients")}
                </span>
              </div>

              <div>
                <p className="text-4xl font-bold text-white">12+</p>

                <span className="text-sm text-slate-300">
                  {t("stats.years")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
