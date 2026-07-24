import type {
  ProjectCategoryResponse,
  ProjectDetailResponse,
  ProjectResponse,
} from "@/types/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface GetProjectsParams {
  page?: number;
  search?: string;
  category?: string;
  featured?: boolean;
  sort_by?: string;
  sort_direction?: "asc" | "desc";
}

function createQuery(params: GetProjectsParams = {}) {
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

  if (params.sort_by?.trim()) {
    query.set("sort_by", params.sort_by);
  }

  if (params.sort_direction) {
    query.set("sort_direction", params.sort_direction);
  }

  return query.toString();
}

export class ProjectRepository {
  static async all(params: GetProjectsParams = {}): Promise<ProjectResponse> {
    const query = createQuery(params);

    const url = `${API_URL}/api/v1/projects${query ? `?${query}` : ""}`;

    // console.log("[Project API]", url);

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

      // console.error("==================================");
      // console.error("Project API Error");
      // console.error("URL    :", url);
      // console.error("Status :", response.status);
      // console.error("Body   :", body);
      // console.error("==================================");

      throw new Error(`Failed to fetch projects. (${response.status})`);
    }

    return response.json();
  }

  static async findBySlug(slug: string): Promise<ProjectDetailResponse> {
    const url = `${API_URL}/api/v1/projects/${slug}`;

    // console.log("[Project Detail API]", url);

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

      // console.error("==================================");
      // console.error("Project Detail API Error");
      // console.error("URL    :", url);
      // console.error("Status :", response.status);
      // console.error("Body   :", body);
      // console.error("==================================");

      throw new Error(`Project not found. (${response.status})`);
    }

    return response.json();
  }

  static async categories(): Promise<ProjectCategoryResponse> {
    const url = `${API_URL}/api/v1/project-categories`;

    // console.log("[Project Category API]", url);

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

      // console.error("==================================");
      // console.error("Project Category API Error");
      // console.error("URL    :", url);
      // console.error("Status :", response.status);
      // console.error("Body   :", body);
      // console.error("==================================");

      throw new Error(
        `Failed to fetch project categories. (${response.status})`,
      );
    }

    return response.json();
  }
}
