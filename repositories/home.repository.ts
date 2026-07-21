import { api } from "@/lib/api";
import type { HomeResponse } from "@/types/home";

class HomeRepository {
  /**
   * Get homepage data.
   */
  async getHome(): Promise<HomeResponse> {
    return api.get<HomeResponse>("/home", {
      next: {
        revalidate: 300, // 5 minutes
      },
    });
  }
}

export const homeRepository = new HomeRepository();
