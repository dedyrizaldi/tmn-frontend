import { ProjectRepository } from "@/repositories/project.repository";

import type {
  Project,
  ProjectResponse,
  ProjectDetailResponse,
  ProjectCategoryResponse,
} from "@/types/project";

import type { GetProjectsParams } from "@/repositories/project.repository";

/**
 * Get all projects
 */
export async function getProjects(
  params: GetProjectsParams = {},
): Promise<ProjectResponse> {
  return ProjectRepository.all(params);
}

/**
 * Get project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project> {
  const response: ProjectDetailResponse =
    await ProjectRepository.findBySlug(slug);

  return response.data;
}

/**
 * Get project categories
 */
export async function getProjectCategories(): Promise<ProjectCategoryResponse> {
  return ProjectRepository.categories();
}

/**
 * Search projects
 */
export async function searchProjects(
  keyword: string,
): Promise<ProjectResponse> {
  return ProjectRepository.all({
    search: keyword,
  });
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(
  category: string,
): Promise<ProjectResponse> {
  return ProjectRepository.all({
    category,
  });
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(): Promise<ProjectResponse> {
  return ProjectRepository.all({
    featured: true,
  });
}
