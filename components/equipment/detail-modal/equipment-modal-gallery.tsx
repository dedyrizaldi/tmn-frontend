"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import type { Equipment } from "@/types/equipment";
import { mediaUrl } from "@/lib/media-url";

import EquipmentGalleryThumb from "./equipment-gallery-thumb";

interface Props {
  equipment: Equipment;
}

export default function EquipmentModalGallery({ equipment }: Props) {
  const gallery = useMemo(() => {
    if (equipment.gallery.length > 0) {
      return equipment.gallery;
    }

    return [
      {
        id: equipment.id,
        name: equipment.title ?? equipment.name,
        url: equipment.thumbnail,
      },
    ];
  }, [equipment]);

  const [selected, setSelected] = useState(gallery[0]);

  return (
    <section
      className="
        border-b
        border-slate-200
        bg-[#F8FAFC]
        p-8
        lg:p-10
      "
    >
      {/* Heading */}

      <div className="text-center">
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#156CFF]
          "
        >
          GALLERY
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Dokumentasi Peralatan
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            leading-8
            text-slate-600
          "
        >
          Dokumentasi unit peralatan yang tersedia pada sistem Marine Notion.
        </p>
      </div>

      {/* Main Image */}

      <div
        className="
          relative
          mt-12
          h-[520px]
          overflow-hidden
          rounded-3xl
        "
      >
        <Image
          src={mediaUrl(selected.url)}
          alt={selected.name ?? equipment.title ?? equipment.name ?? ""}
          fill
          className="
            object-cover
            transition-all
            duration-500
          "
        />
      </div>

      {/* Thumbnail */}

      <div
        className="
          mt-6
          grid
          grid-cols-2
          gap-4
          md:grid-cols-4
          lg:grid-cols-5
        "
      >
        {gallery.map((image) => (
          <EquipmentGalleryThumb
            key={image.id}
            image={mediaUrl(image.url)}
            active={selected.id === image.id}
            onClick={() => setSelected(image)}
          />
        ))}
      </div>
    </section>
  );
}
