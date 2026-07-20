import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type { Equipment } from "../types/equipment";

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
                lg:w-[340px]
                lg:h-auto
                overflow-hidden
                shrink-0
              `
            : `
                relative
                aspect-square
                overflow-hidden
              `
        }
      >
        <Image
          src={equipment.image}
          alt={equipment.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
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
          {/* Title */}

          <h3
            className="
              line-clamp-2
              text-base
              font-semibold
              leading-6
              text-[#04162E]
            "
          >
            {equipment.title}
          </h3>

          {/* Specs */}

          <div className="mt-5 space-y-2">
            <EquipmentSpec label="Category" value={equipment.category} />

            <EquipmentSpec label="Capacity" value={equipment.capacity} />

            <EquipmentSpec label="Application" value={equipment.application} />
          </div>
        </div>

        {/* Button */}

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
            font-semibold
            text-[#156CFF]
            transition-all
            duration-300
            hover:bg-[#156CFF]
            hover:text-white
            text-[13px]
          "
        >
          View Details
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}
