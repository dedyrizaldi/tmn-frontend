"use client";

import Image from "next/image";

import { useMemo, useState } from "react";

import Container from "@/components/common/container/container";

import Section from "@/components/common/section/section";

import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  /**
   * =========================================================
   * GALLERY IMAGES
   * =========================================================
   *
   * Gallery digunakan jika tersedia.
   * Jika tidak ada gallery, gunakan thumbnail.
   * Jika thumbnail juga null/kosong, gunakan placeholder.
   */
  const images = useMemo<string[]>(() => {
    if (project.gallery.length > 0) {
      return project.gallery
        .map((item) => item.url)
        .filter((url): url is string => Boolean(url));
    }

    if (project.thumbnail) {
      return [project.thumbnail];
    }

    return ["/images/project/project-placeholder.png"];
  }, [project.gallery, project.thumbnail]);

  const [selectedImage, setSelectedImage] = useState(images[0]);

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
   * PROJECT INFORMATION
   * =========================================================
   */

  const location = project.location ?? "-";

  const category = project.category?.name ?? "Uncategorized";

  return (
    <Section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* =================================================
              GALLERY
          ================================================= */}

          <div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src={selectedImage}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>

            {/* =================================================
                THUMBNAILS
            ================================================= */}

            {images.length > 1 && (
              <div className="mt-6 grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`
                      relative
                      aspect-video
                      overflow-hidden
                      rounded-xl
                      border-2
                      transition-all
                      ${
                        selectedImage === image
                          ? "border-[#156CFF]"
                          : "border-transparent hover:border-slate-300"
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="25vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside
            className="
              h-fit
              rounded-3xl
              border
              border-slate-200
              bg-[#F8FAFC]
              p-8
              lg:sticky
              lg:top-24
            "
          >
            <h3 className="text-xl font-bold text-[#04162E]">
              Project Information
            </h3>

            <div className="mt-8 space-y-6">
              {/* Client */}

              <Info label="Client" value={project.client || "-"} />

              {/* Location */}

              <Info label="Location" value={location} />

              {/* Category */}

              <Info label="Category" value={category} />

              {/* Project Date */}

              <Info label="Project Date" value={projectDate} />
            </div>

            <div className="my-8 border-t border-slate-200" />

            <h4
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-slate-500
              "
            >
              Project Summary
            </h4>

            {/* <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.excerpt || "-"}
            </p> */}
          </aside>
        </div>
      </Container>
    </Section>
  );
}

/**
 * ===========================================================
 * INFO COMPONENT
 * ===========================================================
 */

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.15em]
          text-slate-400
        "
      >
        {label}
      </p>

      <p className="mt-2 text-base font-semibold text-[#04162E]">{value}</p>
    </div>
  );
}
