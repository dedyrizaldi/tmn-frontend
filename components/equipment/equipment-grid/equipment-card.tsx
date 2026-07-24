"use client";

import { useState } from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { mediaUrl } from "@/lib/media-url";
import type { Equipment } from "@/types/equipment";

import EquipmentBadge from "./equipment-badge";
import EquipmentSpec from "./equipment-spec";

interface Props {
  equipment: Equipment;
  onClick: () => void;
  viewMode: "grid" | "list";
}

export default function EquipmentCard({ equipment, onClick, viewMode }: Props) {
  const [loading, setLoading] = useState(true);

  const isList = viewMode === "list";

  const image = equipment.thumbnail
    ? mediaUrl(equipment.thumbnail)
    : "/images/equipment/equipment-placeholder.png";

  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        ${isList ? "flex flex-col lg:flex-row" : "flex flex-col"}
      `}
    >
      {/* Image */}

      <div
        className={
          isList
            ? `
                relative
                h-[280px]
                lg:h-auto
                lg:w-[340px]
                shrink-0
                overflow-hidden
              `
            : `
                relative
                aspect-square
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
          alt={equipment.title ?? equipment.name ?? ""}
          fill
          unoptimized
          onLoad={() => setLoading(false)}
          className={`
            object-cover
            transition-all
            duration-500
            group-hover:scale-105

            ${loading ? "opacity-0" : "opacity-100"}
          `}
        />

        <div className="absolute left-3 top-3 z-20">
          <EquipmentBadge status={equipment.status} />
        </div>
      </div>

      {/* Content */}

      <div
        className={`
          flex
          flex-1
          flex-col
          justify-between

          ${isList ? "p-8" : "p-5"}
        `}
      >
        <div>
          <h3
            className="
              line-clamp-2
              text-base
              font-semibold
              leading-6
              text-[#04162E]
            "
          >
            {equipment.title ?? equipment.name}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-slate-600
            "
          >
            {equipment.excerpt}
          </p>

          <div className="mt-5 space-y-2">
            <EquipmentSpec label="Category" value={equipment.category.name} />

            <EquipmentSpec label="Status" value={equipment.status} />

            <EquipmentSpec
              label="Gallery"
              value={`${equipment.gallery.length} Photos`}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onClick}
          className="
            mt-6
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-[#156CFF]
            bg-white
            px-1
            py-2
            text-[13px]
            font-semibold
            text-[#156CFF]
            transition-all
            duration-300
            hover:bg-[#156CFF]
            hover:text-white
          "
        >
          View Details
          <ArrowRight
            size={18}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </article>
  );
}
