import { projectData } from "@/data/project/project.data";
import type { Project } from "@/types/project";

export class ProjectRepository {
  static all(): Project[] {
    return projectData;
  }

  static findBySlug(slug: string): Project | null {
    return projectData.find((project) => project.slug === slug) ?? null;
  }

  //   static featured(): Project[] {
  //     return projectData.filter((project) => project.featured);
  //   }

  static byCategory(category: string): Project[] {
    return projectData.filter((project) => project.category === category);
  }

  static search(keyword: string): Project[] {
    const query = keyword.toLowerCase();

    return projectData.filter((project) => {
      return (
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query)
      );
    });
  }
}
