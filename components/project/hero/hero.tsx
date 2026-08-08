import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

export default function ProjectHero() {
  const t = useTranslations("projectPage.hero");

  return (
    <Section className="relative overflow-hidden bg-[#04162E]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <Image
          src="/images/project/hero-project-v1.png"
          alt="Industrial Project"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/75" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#04162E]
            via-[#04162E]/80
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <Container className="relative z-10">
        <div
          className="
            flex
            min-h-[230px]
            items-center
            py-6
            lg:min-h-[250px]
            lg:py-7
          "
        >
          <div className="max-w-[650px]">
            {/* ===================================================
                BREADCRUMB
            =================================================== */}

            <div
              className="
                mb-2
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

            {/* ===================================================
                BADGE
            =================================================== */}

            <span
              className="
                inline-flex
                rounded-full
                bg-[#156CFF]/20
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#7FB3FF]
              "
            >
              {t("badge")}
            </span>

            {/* ===================================================
                TITLE
            =================================================== */}

            <h1
              className="
                mt-2
                text-3xl
                font-bold
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              {t("title")}
            </h1>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <p
              className="
                mt-2
                max-w-[560px]
                text-sm
                leading-6
                text-slate-200
                sm:text-base
              "
            >
              {t("description")}
            </p>

            {/* ===================================================
                CTA
            =================================================== */}

            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="
                  rounded-lg
                  bg-[#156CFF]
                  px-5
                  py-2
                  text-sm
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
                  rounded-lg
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-sm
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

            {/* ===================================================
                STATS
            =================================================== */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-x-7
                gap-y-2
              "
            >
              <div>
                <p className="text-xl font-bold text-white sm:text-2xl">150+</p>

                <span className="text-[11px] text-slate-300 sm:text-xs">
                  {t("stats.projects")}
                </span>
              </div>

              <div>
                <p className="text-xl font-bold text-white sm:text-2xl">35+</p>

                <span className="text-[11px] text-slate-300 sm:text-xs">
                  {t("stats.clients")}
                </span>
              </div>

              <div>
                <p className="text-xl font-bold text-white sm:text-2xl">12+</p>

                <span className="text-[11px] text-slate-300 sm:text-xs">
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
