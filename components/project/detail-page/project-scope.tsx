import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectScope({ project }: Props) {
  return (
    <Section className="bg-white py-16">
      <Container>
        <div
          className="
            rounded-[32px]

            border

            border-slate-200

            bg-white

            p-10

            shadow-sm
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-sm

                font-bold

                uppercase

                tracking-[0.2em]

                text-[#156CFF]
              "
            >
              PROJECT SCOPE
            </p>

            <h2
              className="
                mt-3

                text-4xl

                font-bold

                text-[#04162E]
              "
            >
              Scope of Work
            </h2>

            <p
              className="
                mt-5

                text-slate-600

                leading-8
              "
            >
              Every project is executed using standardized industrial procedures
              with a strong focus on safety, quality, and environmental
              compliance.
            </p>
          </div>

          <div
            className="
              mt-12

              grid

              gap-5

              md:grid-cols-2
            "
          >
            {project.scope.map((item) => (
              <div
                key={item}
                className="
                  flex

                  items-start

                  gap-4

                  rounded-2xl

                  border

                  border-slate-200

                  p-5

                  transition-all

                  duration-300

                  hover:border-[#156CFF]

                  hover:bg-[#156CFF]/5
                "
              >
                <CheckCircle2
                  size={24}
                  className="
                    mt-1

                    shrink-0

                    text-[#156CFF]
                  "
                />

                <span
                  className="
                    text-[15px]

                    leading-7

                    text-slate-700
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
