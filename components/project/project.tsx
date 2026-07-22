"use client";

import { useEffect, useState } from "react";

import ProjectHero from "./hero/hero";
import ProjectFilters from "./filters/project-filters";
import ProjectToolbar from "./toolbar/project-toolbar";
import ProjectGrid from "./project-grid/project-grid";
import ProjectCTA from "./detail-page/project-cta";

import { getProjectCategories, getProjects } from "@/services/project.service";

import type {
  PaginationMeta,
  Project as ProjectType,
  ProjectCategory,
} from "@/types/project";

export default function Project() {
  /**
   * ==========================
   * Data
   * ==========================
   */

  const [projects, setProjects] = useState<ProjectType[]>([]);

  const [categories, setCategories] = useState<ProjectCategory[]>([]);

  const [meta, setMeta] = useState<PaginationMeta>();

  const [loading, setLoading] = useState(true);

  /**
   * ==========================
   * Search
   * ==========================
   */

  const [search, setSearch] = useState("");

  /**
   * ==========================
   * Filters
   * ==========================
   */

  const [category, setCategory] = useState("all");

  /**
   * ==========================
   * Sort
   * ==========================
   */

  const [sortBy, setSortBy] = useState("newest");

  /**
   * ==========================
   * View
   * ==========================
   */

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  /**
   * ==========================
   * Pagination
   * ==========================
   */

  const [currentPage, setCurrentPage] = useState(1);

  /**
   * ==========================
   * Load Categories
   * ==========================
   */

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await getProjectCategories();

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCategories();
  }, []);

  /**
   * ==========================
   * Load Projects
   * ==========================
   */

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);

        const response = await getProjects({
          page: currentPage,
          search: search || undefined,
          category: category !== "all" ? category : undefined,
          sort_by:
            sortBy === "name-asc" || sortBy === "name-desc"
              ? "title"
              : "project_date",
          sort_direction:
            sortBy === "oldest" || sortBy === "name-asc" ? "asc" : "desc",
        });
        console.log(response.data[0]);
        console.log(response.data[0].thumbnail);
        setProjects(response.data);
        setMeta(response.meta);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, [currentPage, search, category, sortBy]);

  return (
    <>
      <ProjectHero />

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
            <aside>
              <ProjectFilters
                search={search}
                category={category}
                categories={categories}
                onSearchChange={(value) => {
                  setCurrentPage(1);
                  setSearch(value);
                }}
                onCategoryChange={(value) => {
                  setCurrentPage(1);
                  setCategory(value);
                }}
              />
            </aside>

            <div className="space-y-8">
              <ProjectToolbar
                total={meta?.total ?? 0}
                viewMode={viewMode}
                sortBy={sortBy}
                onSortChange={(value) => {
                  setCurrentPage(1);
                  setSortBy(value);
                }}
                onViewChange={setViewMode}
              />

              {loading ? (
                <div
                  className="
                    flex
                    min-h-[400px]
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      h-12
                      w-12
                      animate-spin
                      rounded-full
                      border-4
                      border-[#156CFF]
                      border-t-transparent
                    "
                  />
                </div>
              ) : (
                <ProjectGrid
                  projects={projects}
                  viewMode={viewMode}
                  currentPage={meta?.current_page ?? 1}
                  totalPages={meta?.last_page ?? 1}
                  onPageChange={(page) => {
                    setCurrentPage(page);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
