import { ProjectRepository } from "@/repositories/project.repository";
import type { Project } from "@/types/project";

/**
 * Get all projects
 */
export async function getProjects(): Promise<Project[]> {
  return ProjectRepository.all();
}

/**
 * Get featured projects
 */
// export async function getFeaturedProjects(): Promise<Project[]> {
//   return ProjectRepository.featured();
// }

/**
 * Get project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return ProjectRepository.findBySlug(slug);
}

/**
 * Search projects
 */
export async function searchProjects(keyword: string): Promise<Project[]> {
  return ProjectRepository.search(keyword);
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(
  category: string,
): Promise<Project[]> {
  return ProjectRepository.byCategory(category);
}

/**
 * Get related projects
 */
export async function getRelatedProjects(
  slug: string,
  category: string,
  limit = 3,
): Promise<Project[]> {
  const projects = ProjectRepository.byCategory(category);

  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
