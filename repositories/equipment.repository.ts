import { EquipmentDetailResponse, EquipmentResponse } from "@/types/equipment";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface EquipmentQuery {
  page?: number;
  search?: string;
  category?: string;
  featured?: boolean;
}

function createQuery(params: EquipmentQuery = {}) {
  const query = new URLSearchParams();

  if (params.page) {
    query.set("page", params.page.toString());
  }

  if (params.search) {
    query.set("search", params.search);
  }

  if (params.category) {
    query.set("category", params.category);
  }

  if (params.featured) {
    query.set("featured", "1");
  }

  return query.toString();
}

export async function fetchEquipments(
  params: EquipmentQuery = {},
): Promise<EquipmentResponse> {
  const query = createQuery(params);

  const response = await fetch(
    `${API_URL}/api/v1/equipment${query ? `?${query}` : ""}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch equipments.");
  }

  return response.json();
}

export async function fetchEquipment(
  slug: string,
): Promise<EquipmentDetailResponse> {
  const response = await fetch(`${API_URL}/api/v1/equipment/${slug}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Equipment not found.");
  }

  return response.json();
}
