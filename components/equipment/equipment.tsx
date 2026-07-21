"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import type {
  Equipment as EquipmentType,
  PaginationLinks,
  PaginationMeta,
} from "@/types/equipment";

import EquipmentModal from "./detail-modal/equipment-modal";
import EquipmentFilters from "./filters/equipment-filters";
import EquipmentGrid from "./equipment-grid/equipment-grid";
import EquipmentHero from "./hero/hero";
import EquipmentToolbar from "./toolbar/equipment-toolbar";

interface Props {
  equipments: EquipmentType[];
  meta: PaginationMeta;
  links: PaginationLinks;
  initialSearch: string;
  initialCategory: string;
}

export default function Equipment({
  equipments,
  meta,
  links,
  initialSearch,
  initialCategory,
}: Props) {
  const router = useRouter();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentType | null>(null);

  const handleSearch = (search: string) => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    if (initialCategory) {
      params.set("category", initialCategory);
    }

    params.set("page", "1");

    router.push(`/equipment?${params.toString()}`);
  };

  return (
    <>
      <EquipmentHero />

      <section
        className="
          bg-[#F8FAFC]
          py-16
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            lg:px-8
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[300px_1fr]
            "
          >
            <aside>
              <EquipmentFilters search={initialSearch} />
            </aside>

            <div className="space-y-8">
              <EquipmentToolbar
                viewMode={viewMode}
                onViewChange={setViewMode}
              />

              <EquipmentGrid
                equipments={equipments}
                meta={meta}
                links={links}
                search={initialSearch}
                category={initialCategory}
                viewMode={viewMode}
                onSelectEquipment={setSelectedEquipment}
              />
            </div>
          </div>
        </div>
      </section>

      <EquipmentModal
        open={selectedEquipment !== null}
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
      />
    </>
  );
}
