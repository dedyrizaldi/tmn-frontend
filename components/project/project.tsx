"use client";

import { useMemo, useState } from "react";

import ProjectHero from "./hero/hero";
import ProjectFilters from "./filters/project-filters";
import ProjectToolbar from "./toolbar/project-toolbar";
import ProjectGrid from "./project-grid/project-grid";

import ProjectCTA from "./detail-page/project-cta";

import { projectData } from "./project.data";
import type { Project } from "./types/project";

const ITEMS_PER_PAGE = 6;

export default function Project() {
  /* Search */

  const [search, setSearch] = useState("");

  /* Filters */

  const [category, setCategory] = useState("all");

  const [year, setYear] = useState("all");

  /* Sort */

  const [sortBy, setSortBy] = useState("newest");

  /* View */

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  /* Pagination */

  const [currentPage, setCurrentPage] = useState(1);

  /* Filtering */

  const filteredProjects = useMemo(() => {
    let data = [...projectData];

    /* Search */

    if (search.trim()) {
      const keyword = search.toLowerCase();

      data = data.filter((project) => {
        return (
          project.title.toLowerCase().includes(keyword) ||
          project.client.toLowerCase().includes(keyword) ||
          project.location.toLowerCase().includes(keyword) ||
          project.category.toLowerCase().includes(keyword)
        );
      });
    }

    /* Category */

    if (category !== "all") {
      data = data.filter((project) => project.category === category);
    }

    /* Year */

    if (year !== "all") {
      data = data.filter((project) => project.year === Number(year));
    }

    /* Sort */

    switch (sortBy) {
      case "oldest":
        data.sort((a, b) => a.year - b.year);
        break;

      case "name-asc":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "name-desc":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        data.sort((a, b) => b.year - a.year);
    }

    return data;
  }, [search, category, year, sortBy]);

  /* Pagination */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProjects = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, safeCurrentPage]);

  return (
    <>
      {/* Hero */}

      <ProjectHero />

      {/* Content */}

      <section
        className="
          bg-[#F8FAFC]
          py-16
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            lg:px-8
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[300px_1fr]
            "
          >
            {/* Sidebar */}

            <aside>
              <ProjectFilters
                search={search}
                category={category}
                year={year}
                onSearchChange={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
                onCategoryChange={(value) => {
                  setCategory(value);
                  setCurrentPage(1);
                }}
                onYearChange={(value) => {
                  setYear(value);
                  setCurrentPage(1);
                }}
              />
            </aside>

            {/* Content */}

            <div className="space-y-8">
              <ProjectToolbar
                total={filteredProjects.length}
                viewMode={viewMode}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onViewChange={setViewMode}
              />

              <ProjectGrid
                projects={paginatedProjects}
                viewMode={viewMode}
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <ProjectCTA />
    </>
  );
}
