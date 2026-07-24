import { api } from "@/lib/api";

import type { HomeData, HomeResponse } from "@/types/home";

export async function fetchHome(): Promise<HomeData> {
  const response = await api.get<HomeResponse>("/api/v1/home", {
    next: {
      revalidate: 30,
    },
  });

  return response.data;
}
