import {
  Droplets,
  Factory,
  FileText,
  Images,
  ShieldCheck,
  Ship,
} from "lucide-react";

import type { Equipment } from "@/types/equipment";

import EquipmentApplicationCard from "./equipment-application-card";

interface Props {
  equipment: Equipment;
}

const cards = [
  {
    title: "Marine Operations",
    icon: Ship,
  },
  {
    title: "Industrial Services",
    icon: Factory,
  },
  {
    title: "Inspection & Survey",
    icon: ShieldCheck,
  },
  {
    title: "Field Operations",
    icon: Droplets,
  },
];

export default function EquipmentModalApplication({ equipment }: Props) {
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
          USAGE INFORMATION
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Informasi Penggunaan
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
          {equipment.description || equipment.excerpt}
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {cards.map(({ title, icon: Icon }) => (
          <EquipmentApplicationCard key={title} icon={Icon} title={title} />
        ))}

        <EquipmentApplicationCard
          icon={FileText}
          title={`Category: ${equipment.category.name}`}
        />

        <EquipmentApplicationCard
          icon={Images}
          title={`${equipment.gallery.length} Gallery Images`}
        />
      </div>
    </section>
  );
}
