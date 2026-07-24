"use client";

import { useState } from "react";

import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

import { Link } from "@/i18n/navigation";

import type { Project } from "@/types/project";

import ProjectBadge from "./project-badge";

interface Props {
  project: Project;
  viewMode: "grid" | "list";
}

export default function ProjectCard({ project, viewMode }: Props) {
  const [loading, setLoading] = useState(true);

  const isList = viewMode === "list";

  const image =
    project.thumbnail && project.thumbnail.length > 0
      ? project.thumbnail
      : "/images/project/project-placeholder.png";

  return (
    <article
      className={`
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
        hover:shadow-[0_25px_60px_rgba(0,0,0,.08)]

        ${isList ? "flex flex-col lg:flex-row" : ""}
      `}
    >
      {/* Image */}

      <div
        className={
          isList
            ? `
                relative
                h-[260px]
                lg:h-auto
                lg:w-[380px]
                shrink-0
                overflow-hidden
              `
            : `
                relative
                h-64
                overflow-hidden
              `
        }
      >
        {/* Skeleton */}

        <div
          className={`
            absolute
            inset-0
            z-10
            overflow-hidden
            bg-slate-200
            transition-opacity
            duration-300

            ${loading ? "opacity-100" : "pointer-events-none opacity-0"}
          `}
        >
          <div
            className="
              absolute
              inset-0
              -translate-x-full
              animate-[shimmer_1.4s_infinite]
              bg-gradient-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />
        </div>

        <Image
          src={image}
          alt={project.title}
          fill
          unoptimized
          sizes={isList ? "380px" : "(max-width:768px)100vw,33vw"}
          onLoad={() => setLoading(false)}
          className={`
            object-cover
            transition-all
            duration-700
            group-hover:scale-110

            ${loading ? "opacity-0" : "opacity-100"}
          `}
        />

        <div className="absolute left-5 top-5 z-20">
          <ProjectBadge category={project.category.name} />
        </div>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#04162E]/70
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div
        className={
          isList
            ? `
                flex
                flex-1
                flex-col
                justify-between
                p-8
              `
            : `
                p-7
              `
        }
      >
        <div>
          <h3
            className="
              text-2xl
              font-bold
              text-[#04162E]
              transition-colors
              group-hover:text-[#156CFF]
            "
          >
            {project.title}
          </h3>

          {project.client && (
            <p
              className="
                mt-2
                text-base
                font-medium
                text-[#156CFF]
              "
            >
              {project.client}
            </p>
          )}

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-slate-600
            "
          >
            {project.excerpt}
          </p>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-6
              text-sm
              text-slate-500
            "
          >
            {project.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {project.location}
              </div>
            )}

            <div className="flex items-center gap-2">
              <Calendar size={16} />

              {new Date(project.project_date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="
            mt-8
            inline-flex
            w-fit
            items-center
            gap-3
            rounded-xl
            bg-[#156CFF]
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-[#0E5DE8]
          "
        >
          View Project
          <ArrowRight
            size={18}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </article>
  );
}
