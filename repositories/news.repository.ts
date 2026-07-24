import type {
  NewsDetailResponse,
  NewsResponse,
  NewsCategoryResponse,
} from "@/types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface GetNewsParams {
  page?: number;
  search?: string;
  category?: string;
  featured?: boolean;
}

function createQuery(params: GetNewsParams = {}) {
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

export class NewsRepository {
  static async all(params: GetNewsParams = {}): Promise<NewsResponse> {
    const query = createQuery(params);

    const url = `${API_URL}/api/v1/news${query ? `?${query}` : ""}`;

    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news. (${response.status})`);
    }

    return response.json();
  }

  static async findBySlug(slug: string): Promise<NewsDetailResponse> {
    const url = `${API_URL}/api/v1/news/${slug}`;

    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`News not found. (${response.status})`);
    }

    return response.json();
  }

  static async categories(): Promise<NewsCategoryResponse> {
    const response = await fetch(`${API_URL}/api/v1/news-categories`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news categories. (${response.status})`);
    }

    return response.json();
  }
}
