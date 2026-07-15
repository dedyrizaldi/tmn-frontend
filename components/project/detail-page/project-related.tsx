import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import { projectData } from "../project.data";
import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectRelated({ project }: Props) {
  const relatedProjects = projectData
    .filter(
      (item) =>
        item.slug !== project.slug && item.category === project.category,
    )
    .slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <Section className="bg-white py-20">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#156CFF]
            "
          >
            RELATED PROJECTS
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-[#04162E]
            "
          >
            Explore Similar Projects
          </h2>

          <p
            className="
              mt-5
              leading-8
              text-slate-600
            "
          >
            Discover other industrial projects completed by our experienced team
            across various industries.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-14

            grid

            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {relatedProjects.map((item) => (
            <article
              key={item.id}
              className="
                group

                overflow-hidden

                rounded-3xl

                border

                border-slate-200

                bg-white

                transition-all

                duration-500

                hover:-translate-y-2

                hover:border-[#156CFF]

                hover:shadow-xl
              "
            >
              {/* Image */}

              <div
                className="
                  relative

                  h-60

                  overflow-hidden
                "
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="
                    object-cover

                    transition-transform

                    duration-700

                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-[#04162E]/60

                    via-transparent

                    to-transparent
                  "
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <span
                  className="
                    rounded-full

                    bg-[#156CFF]/10

                    px-3

                    py-1

                    text-xs

                    font-bold

                    uppercase

                    tracking-[0.15em]

                    text-[#156CFF]
                  "
                >
                  {item.category}
                </span>

                <h3
                  className="
                    mt-5

                    text-2xl

                    font-bold

                    text-[#04162E]

                    transition-colors

                    group-hover:text-[#156CFF]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3

                    text-sm

                    leading-7

                    text-slate-600
                  "
                >
                  {item.client}
                </p>

                <Link
                  href={`/projects/${item.slug}`}
                  className="
                    mt-8

                    inline-flex

                    items-center

                    gap-3

                    font-semibold

                    text-[#156CFF]
                  "
                >
                  View Project
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform

                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
