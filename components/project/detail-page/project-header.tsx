import Image from "next/image";
import { Calendar, Clock3, MapPin, ChevronRight } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <Section className="relative overflow-hidden py-0">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04162E] via-[#04162E]/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div
          className="
            flex
            min-h-[560px]
            items-center
          "
        >
          <div className="max-w-4xl">
            {/* Breadcrumb */}

            <div
              className="
                mb-8

                flex

                flex-wrap

                items-center

                gap-2

                text-sm

                text-white/70
              "
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <ChevronRight size={16} />

              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>

              <ChevronRight size={16} />

              <span className="text-white">{project.title}</span>
            </div>

            {/* Category */}

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

                tracking-[0.2em]

                text-[#8FC0FF]
              "
            >
              {project.category}
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
              {project.title}
            </h1>

            {/* Client */}

            <p
              className="
                mt-5

                text-2xl

                font-semibold

                text-[#6FB2FF]
              "
            >
              {project.client}
            </p>

            {/* Description */}

            <p
              className="
                mt-8

                max-w-3xl

                text-lg

                leading-8

                text-slate-200
              "
            >
              {project.description}
            </p>

            {/* Meta */}

            <div
              className="
                mt-10

                flex

                flex-wrap

                gap-8

                text-white
              "
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#156CFF]" />

                {project.location}
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-[#156CFF]" />

                {project.year}
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={20} className="text-[#156CFF]" />

                {project.duration}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
