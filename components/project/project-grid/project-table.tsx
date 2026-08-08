"use client";

import { useState } from "react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { Project } from "@/types/project";

import ProjectGalleryModal from "./project-gallery-modal";

interface Props {
  projects: Project[];
}

export default function ProjectTable({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* =========================================================
          TABLE
      ========================================================= */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >
        <div className="overflow-x-auto">
          <table
            className="
              w-full
              min-w-[1100px]
              border-collapse
            "
          >
            {/* ===================================================
                HEADER
            =================================================== */}

            <thead>
              <tr className="border-b border-slate-200 bg-[#04162E]">
                {/* Perusahaan */}

                <th
                  className="
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Perusahaan
                </th>

                {/* Foto */}

                <th
                  className="
                    w-[150px]
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Foto
                </th>

                {/* Kapal */}

                <th
                  className="
                    min-w-[180px]
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Kapal
                </th>

                {/* Lingkup Kerja */}

                <th
                  className="
                    min-w-[280px]
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Lingkup Kerja
                </th>

                {/* Tahun */}

                <th
                  className="
                    w-[100px]
                    px-6
                    py-5
                    text-center
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Tahun
                </th>

                {/* Surat Pengalaman */}

                <th
                  className="
                    w-[180px]
                    px-6
                    py-5
                    text-center
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Surat Pengalaman
                </th>
              </tr>
            </thead>

            {/* ===================================================
                BODY
            =================================================== */}

            <tbody>
              {projects.map((project) => {
                const image =
                  project.thumbnail && project.thumbnail.length > 0
                    ? project.thumbnail
                    : "/images/project/project-placeholder.png";

                const year = project.project_date
                  ? new Date(project.project_date).getFullYear()
                  : "—";

                return (
                  <tr
                    key={project.id}
                    className="
                      border-b
                      border-slate-100
                      transition-colors
                      last:border-b-0
                      hover:bg-slate-50
                    "
                  >
                    {/* =================================================
                        PERUSAHAAN
                    ================================================= */}

                    <td className="px-6 py-5 align-middle">
                      <div className="max-w-[220px]">
                        <p
                          className="
                            font-semibold
                            leading-6
                            text-[#04162E]
                          "
                        >
                          {project.client || "—"}
                        </p>

                        {project.location && (
                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-slate-500
                            "
                          >
                            {project.location}
                          </p>
                        )}
                      </div>
                    </td>

                    {/* =================================================
                        FOTO
                    ================================================= */}

                    <td className="px-6 py-5 align-middle">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="
                          group
                          relative
                          block
                          h-20
                          w-28
                          overflow-hidden
                          rounded-xl
                          bg-slate-100
                          text-left
                          focus:outline-none
                          focus:ring-2
                          focus:ring-[#156CFF]
                          focus:ring-offset-2
                        "
                        aria-label={`Lihat gallery ${project.title}`}
                      >
                        {/* Image */}

                        <Image
                          src={image}
                          alt={project.title}
                          fill
                          unoptimized
                          sizes="112px"
                          className="
                            object-cover
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />

                        {/* Overlay */}

                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-black/0
                            transition
                            duration-300
                            group-hover:bg-black/40
                          "
                        >
                          <span
                            className="
                              rounded-lg
                              bg-white/90
                              px-3
                              py-1.5
                              text-xs
                              font-semibold
                              text-[#04162E]
                              opacity-0
                              shadow-sm
                              transition
                              duration-300
                              group-hover:opacity-100
                            "
                          >
                            Lihat Foto
                          </span>
                        </div>
                      </button>
                    </td>

                    {/* =================================================
                        KAPAL
                    ================================================= */}

                    <td className="px-6 py-5 align-middle">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="
                          group/link
                          inline-flex
                          max-w-[200px]
                          font-semibold
                          leading-6
                          text-[#04162E]
                          transition-colors
                          hover:text-[#156CFF]
                        "
                      >
                        <span className="line-clamp-2">{project.title}</span>
                      </Link>
                    </td>

                    {/* =================================================
                        LINGKUP KERJA
                    ================================================= */}

                    <td className="px-6 py-5 align-middle">
                      <p
                        className="
                          max-w-[320px]
                          line-clamp-3
                          text-sm
                          leading-6
                          text-slate-600
                        "
                      >
                        {project.excerpt || "—"}
                      </p>
                    </td>

                    {/* =================================================
                        TAHUN
                    ================================================= */}

                    <td className="px-6 py-5 text-center align-middle">
                      <span
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-lg
                          bg-slate-100
                          px-3
                          py-2
                          text-sm
                          font-semibold
                          text-[#04162E]
                        "
                      >
                        {year}
                      </span>
                    </td>

                    {/* =================================================
                        SURAT PENGALAMAN
                    ================================================= */}

                    <td className="px-6 py-5 text-center align-middle">
                      <span
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-lg
                          bg-slate-100
                          px-4
                          py-2
                          text-xs
                          font-medium
                          text-slate-400
                        "
                      >
                        Belum tersedia
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================================
          GALLERY MODAL
      ========================================================= */}

      <ProjectGalleryModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
