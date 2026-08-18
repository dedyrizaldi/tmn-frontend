"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { Project } from "@/types/project";

import ProjectGalleryModal from "./project-gallery-modal";

interface Props {
  projects: Project[];
}

export default function ProjectTable({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [selectedExperienceLetter, setSelectedExperienceLetter] = useState<
    string | null
  >(null);

  /*
   * =========================================================
   * ESCAPE KEY
   * =========================================================
   */

  useEffect(() => {
    if (!selectedExperienceLetter) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperienceLetter(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperienceLetter]);

  /*
   * =========================================================
   * LOCK BODY SCROLL WHEN EXPERIENCE LETTER MODAL IS OPEN
   * =========================================================
   */

  useEffect(() => {
    if (!selectedExperienceLetter) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedExperienceLetter]);

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
                      {project.experience_letter ? (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedExperienceLetter(
                              project.experience_letter ?? null,
                            )
                          }
                          className="
                            group
                            relative
                            mx-auto
                            block
                            h-24
                            w-20
                            overflow-hidden
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-100
                            shadow-sm
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:border-[#156CFF]
                            hover:shadow-md
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[#156CFF]
                            focus:ring-offset-2
                          "
                          aria-label={`Lihat surat pengalaman ${project.title}`}
                        >
                          <Image
                            src={project.experience_letter}
                            alt={`Surat pengalaman ${project.title}`}
                            fill
                            unoptimized
                            sizes="80px"
                            className="
                              object-cover
                              transition-transform
                              duration-300
                              group-hover:scale-105
                            "
                          />

                          {/* Hover Overlay */}

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
                              group-hover:bg-black/30
                            "
                          >
                            <span
                              className="
                                rounded-md
                                bg-white/90
                                px-2
                                py-1
                                text-[10px]
                                font-semibold
                                text-[#04162E]
                                opacity-0
                                shadow-sm
                                transition
                                duration-300
                                group-hover:opacity-100
                              "
                            >
                              Lihat Surat
                            </span>
                          </div>
                        </button>
                      ) : (
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
                      )}
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

      {/* =========================================================
          EXPERIENCE LETTER MODAL
      ========================================================= */}

      {selectedExperienceLetter && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            p-4
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Preview Surat Pengalaman"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedExperienceLetter(null);
            }
          }}
        >
          {/* Modal Container */}

          <div
            className="
              relative
              max-h-[92vh]
              max-w-5xl
              rounded-2xl
              bg-white
              p-2
              shadow-2xl
            "
            onMouseDown={(event) => {
              event.stopPropagation();
            }}
          >
            {/* =====================================================
                CLOSE BUTTON
            ===================================================== */}

            <button
              type="button"
              onClick={() => setSelectedExperienceLetter(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                shadow-lg
                backdrop-blur-sm
                transition-all
                hover:bg-black/80
                focus:outline-none
                focus:ring-2
                focus:ring-white
              "
              aria-label="Tutup surat pengalaman"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* =====================================================
                IMAGE
            ===================================================== */}

            <div className="flex max-h-[88vh] max-w-[90vw] items-center justify-center overflow-auto rounded-xl bg-slate-100">
              <Image
                src={selectedExperienceLetter}
                alt="Surat Pengalaman"
                width={1200}
                height={1600}
                unoptimized
                className="
                  max-h-[88vh]
                  w-auto
                  max-w-[90vw]
                  rounded-xl
                  object-contain
                "
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
