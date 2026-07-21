import {
  FileText,
  FolderOpen,
  Gauge,
  Images,
  ShieldCheck,
  Tag,
} from "lucide-react";

import type { Equipment } from "@/types/equipment";

import EquipmentFeatureCard from "./equipment-feature-card";

interface Props {
  equipment: Equipment;
}

export default function EquipmentModalFeature({ equipment }: Props) {
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
      <div className="text-center">
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
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
            mx-auto
            mt-4
            max-w-3xl
            leading-8
            text-slate-600
          "
        >
          Detail informasi yang tersedia dari sistem Marine Notion.
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        <EquipmentFeatureCard
          icon={Tag}
          title="Category"
          description={equipment.category.name}
        />

        <EquipmentFeatureCard
          icon={ShieldCheck}
          title="Status"
          description={equipment.status}
        />

        <EquipmentFeatureCard
          icon={Images}
          title="Gallery"
          description={`${equipment.gallery.length} Images Available`}
        />

        <EquipmentFeatureCard
          icon={Gauge}
          title="Featured Equipment"
          description={equipment.featured ? "Yes" : "No"}
        />

        <EquipmentFeatureCard
          icon={FolderOpen}
          title="Slug"
          description={equipment.slug}
        />

        <EquipmentFeatureCard
          icon={FileText}
          title="Description"
          description={equipment.excerpt}
        />
      </div>
    </section>
  );
}
