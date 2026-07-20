"use client";

import { useMemo, useState } from "react";

import EquipmentModal from "./detail-modal/equipment-modal";
import { equipmentData } from "./equipment.data";
import EquipmentFilters from "./filters/equipment-filters";
import EquipmentHero from "./hero/hero";
import EquipmentGrid from "./equipment-grid/equipment-grid";
import EquipmentToolbar from "./toolbar/equipment-toolbar";
import type { Equipment } from "./types/equipment";

const ITEMS_PER_PAGE = 10;

export default function Equipment() {
  /* Search */

  const [search, setSearch] = useState("");

  /* View */

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  /* Pagination */

  const [currentPage, setCurrentPage] = useState(1);

  /* Modal */

  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null,
  );

  /* Search Filter */

  const filteredEquipment = useMemo(() => {
    if (!search.trim()) {
      return equipmentData;
    }

    const keyword = search.toLowerCase();

    return equipmentData.filter((item) => {
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword) ||
        item.application.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  /* Total Page */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEquipment.length / ITEMS_PER_PAGE),
  );

  /* Prevent currentPage melebihi totalPage */

  const safeCurrentPage = Math.min(currentPage, totalPages);

  /* Data per halaman */

  const paginatedEquipment = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

    return filteredEquipment.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEquipment, safeCurrentPage]);

  return (
    <>
      {/* Hero */}

      <EquipmentHero />

      {/* Catalog */}

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
            {/* Sidebar */}

            <aside>
              <EquipmentFilters
                search={search}
                onSearchChange={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              />
            </aside>

            {/* Content */}

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

      {/* Modal */}

      <EquipmentModal
        open={selectedEquipment !== null}
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
      />
    </>
  );
}
