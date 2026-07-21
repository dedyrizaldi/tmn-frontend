import type { Metadata } from "next";

import EquipmentClient from "./equipment-client";

import { equipmentService } from "@/services/equipment.service";

export const metadata: Metadata = {
  title: "Equipment | TMN",
  description:
    "Explore our professional marine and industrial equipment for tank cleaning, tank washing, sludge removal, pumping and industrial maintenance.",
};

interface PageProps {
  searchParams?: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}

export default async function EquipmentPage({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {};

  const page = Number(params.page ?? 1);
  const search = params.search ?? "";
  const category = params.category ?? "";

  const result = await equipmentService.getEquipments({
    page,
    search,
    category,
  });

  return (
    <EquipmentClient
      equipments={result.data}
      links={result.links}
      meta={result.meta}
      initialSearch={search}
      initialCategory={category}
    />
  );
}
