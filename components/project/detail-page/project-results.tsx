import { Award, ShieldCheck, TrendingUp } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import type { Project } from "../types/project";

interface Props {
  project: Project;
}

const icons = [ShieldCheck, TrendingUp, Award];

export default function ProjectResults({ project }: Props) {
  return (
    <Section className="bg-[#F8FAFC] py-20">
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
            PROJECT RESULTS
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-[#04162E]
            "
          >
            Project Achievements
          </h2>

          <p
            className="
              mt-5
              leading-8
              text-slate-600
            "
          >
            Every completed project delivers measurable value through
            operational efficiency, safety, and compliance with industrial
            standards.
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
          {project.results.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={item.title}
                className="
                  group

                  rounded-3xl

                  border

                  border-slate-200

                  bg-white

                  p-8

                  transition-all

                  duration-500

                  hover:-translate-y-2

                  hover:border-[#156CFF]

                  hover:shadow-xl
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex

                    h-16

                    w-16

                    items-center

                    justify-center

                    rounded-2xl

                    bg-[#156CFF]/10

                    text-[#156CFF]

                    transition-all

                    duration-300

                    group-hover:bg-[#156CFF]

                    group-hover:text-white
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-8

                    text-2xl

                    font-bold

                    text-[#04162E]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5

                    leading-8

                    text-slate-600
                  "
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Summary */}

        <div
          className="
            mt-16

            rounded-[32px]

            bg-[#04162E]

            p-10

            text-center

            text-white
          "
        >
          <h3
            className="
              text-3xl

              font-bold
            "
          >
            Delivering Reliable Industrial Solutions
          </h3>

          <p
            className="
              mx-auto

              mt-5

              max-w-3xl

              leading-8

              text-slate-300
            "
          >
            Every project reflects our commitment to operational excellence,
            workplace safety, environmental responsibility, and customer
            satisfaction.
          </p>
        </div>
      </Container>
    </Section>
  );
}
