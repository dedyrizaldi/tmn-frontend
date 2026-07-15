import type { Equipment } from "../types/equipment";

import EmptyState from "./empty-state";
import EquipmentCard from "./equipment-card";
import EquipmentPagination from "./equipment-pagination";

interface Props {
  equipments: Equipment[];

  viewMode: "grid" | "list";

  currentPage: number;

  totalPages: number;

  onPageChange: (page: number) => void;

  onSelectEquipment: (equipment: Equipment) => void;
}

export default function EquipmentGrid({
  equipments,
  viewMode,
  currentPage,
  totalPages,
  onPageChange,
  onSelectEquipment,
}: Props) {
  if (equipments.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-10">
      {/* Grid / List */}

      <div
        className={
          viewMode === "grid"
            ? `
                grid
                gap-8

                md:grid-cols-2

                xl:grid-cols-3
              `
            : `
                flex
                flex-col
                gap-6
              `
        }
      >
        {equipments.map((equipment) => (
          <EquipmentCard
            key={equipment.id}
            equipment={equipment}
            viewMode={viewMode}
            onClick={() => onSelectEquipment(equipment)}
          />
        ))}
      </div>

      {/* Pagination */}

      <EquipmentPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
