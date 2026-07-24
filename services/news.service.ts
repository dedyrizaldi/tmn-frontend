import { NewsRepository } from "@/repositories/news.repository";

import type {
  News,
  NewsDetailResponse,
  NewsResponse,
  NewsCategory,
} from "@/types/news";

import type { GetNewsParams } from "@/repositories/news.repository";

/**
 * Get all news
 */
export async function getNews(
  params: GetNewsParams = {},
): Promise<NewsResponse> {
  return NewsRepository.all(params);
}

/**
 * Get news by slug
 */
export async function getNewsBySlug(slug: string): Promise<News> {
  const response: NewsDetailResponse = await NewsRepository.findBySlug(slug);

  return response.data;
}

/**
 * Search news
 */
export async function searchNews(keyword: string): Promise<NewsResponse> {
  return NewsRepository.all({
    search: keyword,
  });
}

/**
 * Get featured news
 */
export async function getFeaturedNews(): Promise<NewsResponse> {
  return NewsRepository.all({
    featured: true,
  });
}

/**
 * Get news by category
 */
export async function getNewsByCategory(
  category: string,
): Promise<NewsResponse> {
  return NewsRepository.all({
    category,
  });
}

export async function getNewsCategories(): Promise<NewsCategory[]> {
  const response = await NewsRepository.categories();

  return response.data;
}
