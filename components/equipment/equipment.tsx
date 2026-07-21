"use client";

import { useMemo, useState } from "react";

import type { Equipment as EquipmentType } from "@/types/equipment";

import EquipmentModal from "./detail-modal/equipment-modal";
import EquipmentFilters from "./filters/equipment-filters";
import EquipmentHero from "./hero/hero";
import EquipmentGrid from "./equipment-grid/equipment-grid";
import EquipmentToolbar from "./toolbar/equipment-toolbar";

const ITEMS_PER_PAGE = 11;

interface Props {
  equipments: EquipmentType[];
}

export default function Equipment({ equipments }: Props) {
  const [search, setSearch] = useState("");

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentType | null>(null);

  const filteredEquipment = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return equipments;
    }

    return equipments.filter((item) => {
      const title = (item.title ?? item.name ?? "").toLowerCase();
      const category = (item.category?.name ?? "").toLowerCase();
      const excerpt = (item.excerpt ?? "").toLowerCase();
      const description = (item.description ?? "").toLowerCase();

      return (
        title.includes(keyword) ||
        category.includes(keyword) ||
        excerpt.includes(keyword) ||
        description.includes(keyword)
      );
    });
  }, [equipments, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEquipment.length / ITEMS_PER_PAGE),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedEquipment = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

    return filteredEquipment.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEquipment, safeCurrentPage]);

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
              <EquipmentFilters
                search={search}
                onSearchChange={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              />
            </aside>

            <div className="space-y-8">
              <EquipmentToolbar
                viewMode={viewMode}
                onViewChange={setViewMode}
              />

              <EquipmentGrid
                equipments={paginatedEquipment}
                viewMode={viewMode}
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
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
