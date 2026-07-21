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
  const isList = viewMode === "list";

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
        <Image
          src={mediaUrl(equipment.thumbnail)}
          alt={equipment.title ?? equipment.name ?? ""}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3">
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
