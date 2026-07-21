"use client";

import type { EquipmentResponse } from "@/types/equipment";

import Equipment from "@/components/equipment/equipment";

interface Props {
  equipments: EquipmentResponse["data"];
  links: EquipmentResponse["links"];
  meta: EquipmentResponse["meta"];
  initialSearch: string;
  initialCategory: string;
}

export default function EquipmentClient({ equipments }: Props) {
  return <Equipment equipments={equipments} />;
}
