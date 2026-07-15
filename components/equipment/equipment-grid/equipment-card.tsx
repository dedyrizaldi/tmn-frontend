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
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:shadow-xl

        ${isList ? "flex flex-col lg:flex-row" : "hover:-translate-y-2"}
      `}
    >
      {/* Image */}

      <div
        className={
          isList
            ? `
                relative
                h-[260px]
                lg:h-auto
                lg:w-[360px]
                shrink-0
                overflow-hidden
              `
            : `
                relative
                h-60
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
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute left-5 top-5">
          <EquipmentBadge status={equipment.status} />
        </div>
      </div>

      {/* Content */}

      <div
        className={
          isList
            ? `
                flex
                flex-1
                flex-col
                justify-between
                p-8
              `
            : `
                p-6
              `
        }
      >
        <div>
          <h3
            className="
              text-2xl
              font-bold
              text-[#04162E]
            "
          >
            {equipment.title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-slate-600
            "
          >
            {equipment.description}
          </p>

          <div className="mt-6 space-y-2">
            <EquipmentSpec label="Category" value={equipment.category} />

            <EquipmentSpec label="Capacity" value={equipment.capacity} />

            <EquipmentSpec label="Application" value={equipment.application} />
          </div>
        </div>

        <button
          type="button"
          onClick={onClick}
          className={`
            mt-8

            inline-flex

            items-center

            justify-center

            gap-2

            rounded-xl

            bg-[#156CFF]

            px-6

            py-3

            font-semibold

            text-white

            transition

            hover:bg-[#0E5DE8]

            ${isList ? "w-fit" : "w-full"}
          `}
        >
          View Detail
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
