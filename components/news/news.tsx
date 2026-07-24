"use client";

import Container from "@/components/common/container/container";

import type {
  News as NewsType,
  NewsCategory,
  PaginationMeta,
} from "@/types/news";

import FeaturedNews from "./featured/featured-news";
import NewsFilters from "./filters/news-filters";
import NewsGrid from "./news-grid/news-grid";
import NewsPagination from "./news-grid/news-pagination";

interface Props {
  news: NewsType[];
  meta: PaginationMeta;
  categories: NewsCategory[];
  search: string;
  category: string;
}

export default function News({
  news,
  meta,
  categories,
  search,
  category,
}: Props) {
  const featuredNews = news.find((item) => item.featured) ?? null;

  const latestNews = featuredNews
    ? news.filter((item) => item.id !== featuredNews.id)
    : news;

  return (
    <Container className="py-20">
      {/* Featured News */}

      {featuredNews && <FeaturedNews news={featuredNews} />}

      {/* Filters */}

      <NewsFilters
        categories={categories}
        search={search}
        category={category}
      />

      {/* Toolbar */}

      <div className="my-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#04162E]">Latest Articles</h2>

          <p className="mt-2 text-slate-500">
            Showing{" "}
            <span className="font-semibold text-[#156CFF]">{meta.total}</span>{" "}
            Articles
          </p>
        </div>
      </div>

      {/* Grid */}

      <NewsGrid news={latestNews} />

      {/* Pagination */}

      <NewsPagination meta={meta} />
    </Container>
  );
}
