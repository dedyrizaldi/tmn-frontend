/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
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

  const [selected, setSelected] = useState(() => gallery[0]);

  useEffect(() => {
    if (gallery.length > 0) {
      setSelected(gallery[0]);
    }
  }, [gallery]);

  if (!selected) {
    return null;
  }

  return (
    <section
      className="
        border-b
        border-slate-200
        bg-[#F8FAFC]
        p-5
        lg:p-8
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
            text-2xl
            font-bold
            text-[#04162E]
            lg:text-3xl
          "
        >
          {equipment.title ?? equipment.name}
        </h2>
      </div>

      {/* Main Image */}

      <div
        className="
          relative
          mt-8
          aspect-[16/9]
          w-full
          overflow-hidden
          rounded-3xl
          bg-slate-100
        "
      >
        <Image
          src={mediaUrl(selected.url)}
          alt={selected.name ?? equipment.title ?? equipment.name ?? ""}
          fill
          unoptimized
          className="
            object-contain
            transition-all
            duration-500
          "
        />
      </div>

      {/* Thumbnail */}

      {gallery.length > 1 && (
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3

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
      )}
    </section>
  );
}
