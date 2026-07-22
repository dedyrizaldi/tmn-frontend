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
  const images = useMemo(() => {
    if (project.gallery.length > 0) {
      return project.gallery.map((item) => item.url);
    }

    return [project.thumbnail];
  }, [project]);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const projectDate = new Date(project.project_date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <Section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Gallery */}

          <div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src={selectedImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>

            {images.length > 1 && (
              <div className="mt-6 grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-video overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImage === image
                        ? "border-[#156CFF]"
                        : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}

          <aside className="h-fit rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-[#04162E]">
              Project Information
            </h3>

            <div className="mt-8 space-y-6">
              <Info label="Client" value={project.client} />

              <Info label="Location" value={project.location} />

              <Info label="Category" value={project.category.name} />

              <Info label="Project Date" value={projectDate} />
            </div>

            <div className="my-8 border-t border-slate-200" />

            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
              Project Summary
            </h4>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.excerpt}
            </p>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-base font-semibold text-[#04162E]">{value}</p>
    </div>
  );
}
