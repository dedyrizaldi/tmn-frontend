"use client";

import { useMemo, useState } from "react";

import { NEWS_DATA } from "../news.data";
import type { News } from "../types/news";

const ITEMS_PER_PAGE = 10;

export type SortOption = "newest" | "oldest";

export function useNews(initialData: News[] = NEWS_DATA) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredNews = useMemo(() => {
    return initialData.find((item) => item.featured);
  }, [initialData]);

  const filteredNews = useMemo(() => {
    let result = [...initialData];

    // Category
    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter((item) => {
        return (
          item.title.toLowerCase().includes(keyword) ||
          item.excerpt.toLowerCase().includes(keyword) ||
          item.tags.some((tag) => tag.toLowerCase().includes(keyword))
        );
      });
    }

    // Sort
    result.sort((a, b) => {
      const first = new Date(a.publishedAt).getTime();
      const second = new Date(b.publishedAt).getTime();

      return sort === "newest" ? second - first : first - second;
    });

    return result;
  }, [initialData, category, search, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredNews.length / ITEMS_PER_PAGE),
  );

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  function changeSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function changeCategory(value: string) {
    setCategory(value);
    setCurrentPage(1);
  }

  function changeSort(value: SortOption) {
    setSort(value);
    setCurrentPage(1);
  }

  function changePage(page: number) {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  }

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSort("newest");
    setCurrentPage(1);
  }

  return {
    featuredNews,

    news: paginatedNews,

    allNews: filteredNews,

    totalItems: filteredNews.length,

    currentPage,

    totalPages,

    search,

    category,

    sort,

    setSearch: changeSearch,

    setCategory: changeCategory,

    setSort: changeSort,

    setCurrentPage: changePage,

    resetFilters,
  };
}
