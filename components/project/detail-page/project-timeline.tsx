import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectTimeline({ project }: Props) {
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
            PROJECT TIMELINE
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-[#04162E]
            "
          >
            Execution Timeline
          </h2>

          <p
            className="
              mt-5
              leading-8
              text-slate-600
            "
          >
            Every project is executed according to a structured work schedule to
            ensure quality, safety, and timely completion.
          </p>
        </div>

        {/* Desktop Timeline */}

        <div
          className="
            relative
            mt-20
            hidden
            lg:block
          "
        >
          {/* Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-8
              h-[3px]
              bg-slate-200
            "
          />

          <div
            className="
              grid
              gap-8
            "
            style={{
              gridTemplateColumns: `repeat(${project.timeline.length},1fr)`,
            }}
          >
            {project.timeline.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Dot */}

                <div
                  className="
                    relative
                    z-10
                    mx-auto

                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-full

                    bg-[#156CFF]

                    text-white

                    shadow-lg
                  "
                >
                  <CheckCircle2 size={28} />
                </div>

                {/* Date */}

                <p
                  className="
                    mt-6

                    text-xs

                    font-bold

                    uppercase

                    tracking-[0.2em]

                    text-[#156CFF]
                  "
                >
                  {item.date}
                </p>

                {/* Title */}

                <h3
                  className="
                    mt-3

                    text-lg

                    font-bold

                    text-[#04162E]
                  "
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}

        <div
          className="
            mt-16
            space-y-8
            lg:hidden
          "
        >
          {project.timeline.map((item, index) => (
            <div
              key={index}
              className="
                flex
                gap-5
              "
            >
              {/* Left */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                "
              >
                <div
                  className="
                    flex

                    h-12

                    w-12

                    items-center

                    justify-center

                    rounded-full

                    bg-[#156CFF]

                    text-white
                  "
                >
                  <CheckCircle2 size={20} />
                </div>

                {index !== project.timeline.length - 1 && (
                  <div
                    className="
                      mt-2

                      h-full

                      w-[2px]

                      bg-slate-200
                    "
                  />
                )}
              </div>

              {/* Content */}

              <div className="pb-8">
                <p
                  className="
                    text-xs

                    font-bold

                    uppercase

                    tracking-[0.15em]

                    text-[#156CFF]
                  "
                >
                  {item.date}
                </p>

                <h3
                  className="
                    mt-2

                    text-lg

                    font-bold

                    text-[#04162E]
                  "
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
