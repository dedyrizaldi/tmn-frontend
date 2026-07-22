import type {
  Equipment,
  PaginationLinks,
  PaginationMeta,
} from "@/types/equipment";

import EmptyState from "./empty-state";
import EquipmentCard from "./equipment-card";
import EquipmentPagination from "./equipment-pagination";

interface Props {
  equipments: Equipment[];
  viewMode: "grid" | "list";

  meta: PaginationMeta;
  links: PaginationLinks;

  search: string;
  category: string;

  onSelectEquipment: (equipment: Equipment) => void;
}

export default function EquipmentGrid({
  equipments,
  viewMode,
  meta,
  search,
  category,
  onSelectEquipment,
}: Props) {
  if (equipments.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-10">
      <div
        className={
          viewMode === "grid"
            ? `
                grid
                grid-cols-2
                gap-5

                md:grid-cols-3

                lg:grid-cols-4

                xl:grid-cols-5
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

      <EquipmentPagination
        currentPage={meta.current_page}
        totalPages={meta.last_page}
        search={search}
        category={category}
      />
    </div>
  );
}
