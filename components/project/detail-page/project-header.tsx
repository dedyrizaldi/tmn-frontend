import Image from "next/image";

import { Calendar, MapPin, ChevronRight, Building2 } from "lucide-react";

import Container from "@/components/common/container/container";

import Section from "@/components/common/section/section";

import { Link } from "@/i18n/navigation";

import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  /**
   * =========================================================
   * PROJECT IMAGE
   * =========================================================
   *
   * thumbnail dapat bernilai null.
   * Gunakan placeholder jika thumbnail tidak tersedia.
   */
  const thumbnail =
    project.thumbnail && project.thumbnail.length > 0
      ? project.thumbnail
      : "/images/project/project-placeholder.png";

  /**
   * =========================================================
   * PROJECT DATE
   * =========================================================
   *
   * project_date dapat bernilai null.
   */
  const projectDate = project.project_date
    ? new Date(project.project_date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "-";

  /**
   * =========================================================
   * PROJECT CATEGORY
   * =========================================================
   *
   * category dapat bernilai null.
   */
  const categoryName = project.category?.name ?? "Uncategorized";

  /**
   * =========================================================
   * PROJECT LOCATION
   * =========================================================
   *
   * location dapat bernilai null.
   */
  const location = project.location ?? "-";

  return (
    <Section className="relative overflow-hidden py-0">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src={thumbnail}
          alt={project.title}
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04162E] via-[#04162E]/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[560px] items-center">
          <div className="max-w-4xl">
            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/70">
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

            {/* =================================================
                CATEGORY
            ================================================= */}

            <span className="inline-flex rounded-full bg-[#156CFF]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8FC0FF]">
              {categoryName}
            </span>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              {project.title}
            </h1>

            {/* =================================================
                CLIENT
            ================================================= */}

            <p className="mt-5 text-2xl font-semibold text-[#6FB2FF]">
              {project.client || "-"}
            </p>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            {/* 
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
              {project.excerpt || "-"}
            </p> */}

            {/* =================================================
                META
            ================================================= */}

            <div className="mt-10 flex flex-wrap gap-8 text-white">
              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#156CFF]" />

                {location}
              </div>

              {/* =================================================
                  PROJECT DATE
              ================================================= */}

              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-[#156CFF]" />

                {projectDate}
              </div>

              {/* =================================================
                  CATEGORY
              ================================================= */}

              <div className="flex items-center gap-3">
                <Building2 size={20} className="text-[#156CFF]" />

                {categoryName}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
