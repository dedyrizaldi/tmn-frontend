/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { Project } from "@/types/project";

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectGalleryModal({ project, open, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Reset ke gambar pertama setiap kali
   * project/modal dibuka.
   */
  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open, project]);

  /**
   * Keyboard navigation
   *
   * ESC   = close
   * ←     = previous
   * →     = next
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (!project?.gallery?.length) {
        return;
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((current) =>
          current === 0 ? project.gallery.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((current) =>
          current === project.gallery.length - 1 ? 0 : current + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, project]);

  /**
   * Modal tidak ditampilkan jika belum dibuka.
   */
  if (!open || !project) {
    return null;
  }

  const gallery = project.gallery ?? [];

  /**
   * Jika tidak ada gallery.
   */
  if (gallery.length === 0) {
    return (
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
        onClick={onClose}
      >
        <div
          className="
            relative
            w-full
            max-w-md
            rounded-2xl
            bg-white
            p-8
            text-center
            shadow-2xl
          "
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
            "
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          <h3 className="pr-8 text-lg font-bold text-[#04162E]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            Belum ada foto gallery untuk project ini.
          </p>
        </div>
      </div>
    );
  }

  const currentImage = gallery[currentIndex];

  /**
   * Previous image
   */
  const goPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  };

  /**
   * Next image
   */
  const goNext = () => {
    setCurrentIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-black/80
        p-3
        backdrop-blur-sm
        sm:p-5
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          flex
          max-h-[calc(100vh-24px)]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-[#04162E]
          shadow-2xl
          sm:max-h-[calc(100vh-40px)]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/10
            px-4
            py-3
            sm:px-6
            sm:py-4
          "
        >
          <div className="min-w-0">
            <h3
              className="
                truncate
                pr-4
                text-base
                font-bold
                text-white
                sm:text-lg
              "
            >
              {project.title}
            </h3>

            {project.client && (
              <p
                className="
                  mt-0.5
                  truncate
                  text-xs
                  text-white/60
                  sm:text-sm
                "
              >
                {project.client}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              ml-4
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              hover:bg-white/20
            "
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>
        </div>

        {/* =========================================================
            MAIN IMAGE
        ========================================================= */}

        <div
          className="
            relative
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            p-3
            sm:p-6
          "
        >
          <div
            className="
              relative
              h-[45vh]
              min-h-[240px]
              max-h-[600px]
              w-full
              sm:h-[55vh]
            "
          >
            <Image
              src={currentImage.url}
              alt={project.title}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-contain"
              priority
            />
          </div>

          {/* Previous */}

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={goPrevious}
              className="
                absolute
                left-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-sm
                transition
                hover:bg-[#156CFF]
                sm:left-5
                sm:h-11
                sm:w-11
              "
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next */}

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              className="
                absolute
                right-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-sm
                transition
                hover:bg-[#156CFF]
                sm:right-5
                sm:h-11
                sm:w-11
              "
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* =========================================================
            FOOTER / THUMBNAILS
        ========================================================= */}

        <div
          className="
            shrink-0
            border-t
            border-white/10
            bg-black/20
            px-3
            py-3
            sm:px-5
            sm:py-4
          "
        >
          {/* Counter */}

          <div className="mb-2 text-center">
            <span
              className="
                text-xs
                font-medium
                text-white/60
                sm:text-sm
              "
            >
              {currentIndex + 1} / {gallery.length}
            </span>
          </div>

          {/* Thumbnails */}

          <div
            className="
              flex
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-thin
            "
          >
            {gallery.map((image, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    group
                    relative
                    h-14
                    w-20
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    border-2
                    transition
                    sm:h-16
                    sm:w-24

                    ${
                      isActive
                        ? "border-[#156CFF]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }
                  `}
                  aria-label={`Lihat foto ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Image
                    src={image.url}
                    alt={`Foto ${index + 1}`}
                    fill
                    unoptimized
                    sizes="96px"
                    className="
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  {/* Active indicator */}

                  {isActive && (
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-md
                        border-2
                        border-[#156CFF]
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
