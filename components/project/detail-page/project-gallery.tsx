"use client";

import Image from "next/image";
import { useState } from "react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState(
    project.gallery.length > 0 ? project.gallery[0].image : project.heroImage,
  );

  return (
    <Section className="bg-white py-16 lg:py-24">
      <Container>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1fr_360px]
          "
        >
          {/* Gallery */}

          <div>
            {/* Main Image */}

            <div
              className="
                relative

                aspect-[16/9]

                overflow-hidden

                rounded-3xl
              "
            >
              <Image
                src={selectedImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail */}

            {project.gallery.length > 1 && (
              <div
                className="
                  mt-6

                  grid

                  grid-cols-4

                  gap-4
                "
              >
                {project.gallery.map((item) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
                    className={`
                      relative

                      aspect-video

                      overflow-hidden

                      rounded-xl

                      border-2

                      transition-all

                      ${
                        selectedImage === item.image
                          ? "border-[#156CFF]"
                          : "border-transparent hover:border-slate-300"
                      }
                    `}
                  >
                    <Image
                      src={item.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}

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
            <h3
              className="
                text-xl

                font-bold

                text-[#04162E]
              "
            >
              Project Information
            </h3>

            <div className="mt-8 space-y-6">
              <Info label="Client" value={project.client} />

              <Info label="Location" value={project.location} />

              <Info label="Year" value={String(project.year)} />

              <Info label="Duration" value={project.duration} />

              <Info label="Category" value={project.category} />
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
              Services
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="
                    rounded-full

                    bg-[#156CFF]/10

                    px-3

                    py-2

                    text-xs

                    font-semibold

                    text-[#156CFF]
                  "
                >
                  {service}
                </span>
              ))}
            </div>

            <button
              className="
                mt-10

                w-full

                rounded-xl

                bg-[#156CFF]

                py-4

                font-semibold

                text-white

                transition

                hover:bg-[#0E5DE8]
              "
            >
              Contact Us
            </button>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

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

      <p
        className="
          mt-2

          text-base

          font-semibold

          text-[#04162E]
        "
      >
        {value}
      </p>
    </div>
  );
}
