"use client";

import Container from "@/components/common/container/container";

import FeaturedNews from "./featured/featured-news";
import NewsFilters from "./filters/news-filters";
import { useNews } from "./hooks/use-news";
import NewsGrid from "./news-grid/news-grid";
import NewsPagination from "./news-grid/news-pagination";

export default function News() {
  const {
    featuredNews,
    news,
    totalItems,
    currentPage,
    totalPages,
    setSearch,
    setCategory,
    setCurrentPage,
  } = useNews();

  return (
    <>
      <Container className="py-20">
        {/* Featured */}

        <FeaturedNews news={featuredNews} />

        {/* Filter */}

        <NewsFilters
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />

        {/* Toolbar */}

        <div className="my-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#04162E]">
              Latest Articles
            </h2>

            <p className="mt-2 text-slate-500">
              Showing{" "}
              <span className="font-semibold text-[#156CFF]">{totalItems}</span>{" "}
              Articles
            </p>
          </div>
        </div>

        {/* Grid */}

        <NewsGrid news={news} />

        {/* Pagination */}

        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Container>
    </>
  );
}
