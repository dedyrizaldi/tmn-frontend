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

  if (params.page && params.page > 0) {
    query.set("page", params.page.toString());
  }

  if (params.search?.trim()) {
    query.set("search", params.search.trim());
  }

  if (params.category?.trim()) {
    query.set("category", params.category.trim());
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

  const url = `${API_URL}/api/v1/equipment${query ? `?${query}` : ""}`;

  console.log("[Equipment API]", url);

  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    let body = "";

    try {
      body = await response.text();
    } catch {
      body = "Unable to read response body.";
    }

    console.error("==================================");
    console.error("Equipment API Error");
    console.error("URL    :", url);
    console.error("Status :", response.status);
    console.error("Body   :", body);
    console.error("==================================");

    throw new Error(`Failed to fetch equipments. (${response.status})`);
  }

  return response.json();
}

export async function fetchEquipment(
  slug: string,
): Promise<EquipmentDetailResponse> {
  const url = `${API_URL}/api/v1/equipment/${slug}`;

  console.log("[Equipment Detail API]", url);

  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    let body = "";

    try {
      body = await response.text();
    } catch {
      body = "Unable to read response body.";
    }

    console.error("==================================");
    console.error("Equipment Detail API Error");
    console.error("URL    :", url);
    console.error("Status :", response.status);
    console.error("Body   :", body);
    console.error("==================================");

    throw new Error(`Equipment not found. (${response.status})`);
  }

  return response.json();
}
