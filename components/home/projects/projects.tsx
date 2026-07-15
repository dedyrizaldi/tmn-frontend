import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import Commitment from "./commitment";
import ProjectCard from "./project-card";
import { projects } from "./projects.data";
import ProjectsCarousel from "./projects-carousel";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Section
      className="
        bg-[#04162E]
        py-16
        lg:py-20
      "
    >
      <Container
        className="
          px-5
          sm:px-6
          lg:px-0
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* ================= LEFT ================= */}

          <div
            className="
              min-w-0
              lg:col-span-7
            "
          >
            {/* ================= HEADER ================= */}

            <div
              className="
                mb-8
                flex
                flex-col
                gap-5

                lg:mb-5
                lg:flex-row
                lg:items-start
                lg:justify-between
              "
            >
              <div className="max-w-[520px]">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#1F7BFF]

                    sm:text-xs
                  "
                >
                  {t("badge")}
                </p>

                <h2
                  className="
                    mt-2
                    text-[30px]
                    font-bold
                    leading-tight
                    text-white

                    sm:text-[36px]

                    lg:text-[28px]
                  "
                >
                  Delivering <span className="text-[#1F7BFF]">Results</span>{" "}
                  That Matter
                </h2>
              </div>

              <Link
                href="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2

                  text-sm
                  font-semibold

                  text-[#1F7BFF]
                "
              >
                {t("button")}

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* ================= DESKTOP ================= */}

            <div className="relative hidden overflow-hidden lg:block">
              <ProjectsCarousel desktop>
                {projects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    {...project}
                    category={t(project.category)}
                  />
                ))}
              </ProjectsCarousel>
            </div>

            {/* ================= MOBILE ================= */}

            <div className="lg:hidden">
              <ProjectsCarousel>
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    className="
                      w-[calc(100vw-40px)]
                      shrink-0
                      snap-start
                    "
                  >
                    <ProjectCard {...project} category={t(project.category)} />
                  </div>
                ))}
              </ProjectsCarousel>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              border-t
              border-white/10
              pt-10

              lg:col-span-5

              lg:border-t-0
              lg:border-l
              lg:pl-8
              lg:pt-0
            "
          >
            <Commitment />
          </div>
        </div>
      </Container>
    </Section>
  );
}
