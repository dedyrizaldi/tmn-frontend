"use client";

import type {
  Equipment,
  PaginationLinks,
  PaginationMeta,
} from "@/types/equipment";

import EquipmentPage from "@/components/equipment/equipment";

interface Props {
  equipments: Equipment[];
  links: PaginationLinks;
  meta: PaginationMeta;
  initialSearch: string;
  initialCategory: string;
}

export default function EquipmentClient({
  equipments,
  links,
  meta,
  initialSearch,
  initialCategory,
}: Props) {
  return (
    <EquipmentPage
      equipments={equipments}
      links={links}
      meta={meta}
      initialSearch={initialSearch}
      initialCategory={initialCategory}
    />
  );
}
