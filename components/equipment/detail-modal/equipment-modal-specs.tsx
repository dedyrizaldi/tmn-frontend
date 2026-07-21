import type { Equipment } from "@/types/equipment";

import EquipmentSpecItem from "./equipment-spec-item";

interface Props {
  equipment: Equipment;
}

export default function EquipmentModalSpecs({ equipment }: Props) {
  return (
    <section
      className="
        border-b
        border-slate-200
        bg-white
        p-8
        lg:p-10
      "
    >
      <div className="max-w-5xl">
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#156CFF]
          "
        >
          EQUIPMENT INFORMATION
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Informasi Peralatan
        </h2>

        <p
          className="
            mt-4
            max-w-2xl
            leading-8
            text-slate-600
          "
        >
          Informasi utama mengenai peralatan yang tersedia pada sistem Marine
          Notion.
        </p>
      </div>

      <div
        className="
          mt-10
          grid
          gap-x-12
          md:grid-cols-2
        "
      >
        <EquipmentSpecItem label="Name" value={equipment.name} />

        <EquipmentSpecItem label="Title" value={equipment.title ?? "-"} />

        <EquipmentSpecItem label="Category" value={equipment.category.name} />

        <EquipmentSpecItem label="Status" value={equipment.status} />

        <EquipmentSpecItem
          label="Featured"
          value={equipment.featured ? "Yes" : "No"}
        />

        <EquipmentSpecItem
          label="Gallery"
          value={`${equipment.gallery.length} Images`}
        />

        <EquipmentSpecItem label="Slug" value={equipment.slug} />

        <EquipmentSpecItem
          label="Published"
          value={
            equipment.published_at
              ? new Date(equipment.published_at).toLocaleString()
              : "-"
          }
        />
      </div>
    </section>
  );
}
