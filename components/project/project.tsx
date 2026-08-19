"use client";

import { useEffect, useRef, useState } from "react";

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
   * =========================================================
   * DATA
   * =========================================================
   */

  const [projects, setProjects] = useState<ProjectType[]>([]);

  const [categories, setCategories] = useState<ProjectCategory[]>([]);

  const [meta, setMeta] = useState<PaginationMeta | undefined>();

  const [loading, setLoading] = useState(true);

  /**
   * =========================================================
   * SEARCH
   * =========================================================
   */

  const [search, setSearch] = useState("");

  /**
   * =========================================================
   * FILTER
   * =========================================================
   */

  const [category, setCategory] = useState("all");

  /**
   * =========================================================
   * SORT
   * =========================================================
   */

  const [sortBy, setSortBy] = useState("newest");

  /**
   * =========================================================
   * VIEW
   * =========================================================
   */

  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  /**
   * =========================================================
   * PAGINATION
   * =========================================================
   */

  const [currentPage, setCurrentPage] = useState(1);

  /**
   * =========================================================
   * SCROLL POSITION
   * =========================================================
   *
   * Menyimpan posisi scroll sebelum pagination berubah.
   */

  const scrollPositionRef = useRef<number | null>(null);

  /**
   * =========================================================
   * LOAD CATEGORIES
   * =========================================================
   */

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await getProjectCategories();

        setCategories(response.data);
      } catch (error) {
        console.error("Failed to load project categories:", error);
      }
    }

    loadCategories();
  }, []);

  /**
   * =========================================================
   * LOAD PROJECTS
   * =========================================================
   */

  useEffect(() => {
    let cancelled = false;

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

        if (cancelled) {
          return;
        }

        setProjects(response.data);

        setMeta(response.meta);
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load projects:", error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      cancelled = true;
    };
  }, [currentPage, search, category, sortBy]);

  /**
   * =========================================================
   * RESTORE SCROLL POSITION
   * =========================================================
   */

  useEffect(() => {
    if (loading) {
      return;
    }

    if (scrollPositionRef.current === null) {
      return;
    }

    const savedPosition = scrollPositionRef.current;

    scrollPositionRef.current = null;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: savedPosition,
        left: 0,
        behavior: "instant",
      });
    });
  }, [loading]);

  /**
   * =========================================================
   * PAGE CHANGE
   * =========================================================
   */

  const handlePageChange = (page: number) => {
    scrollPositionRef.current = window.scrollY;

    setCurrentPage(page);
  };

  /**
   * =========================================================
   * SEARCH CHANGE
   * =========================================================
   */

  const handleSearchChange = (value: string) => {
    setCurrentPage(1);

    setSearch(value);
  };

  /**
   * =========================================================
   * CATEGORY CHANGE
   * =========================================================
   */

  const handleCategoryChange = (value: string) => {
    setCurrentPage(1);

    setCategory(value);
  };

  /**
   * =========================================================
   * SORT CHANGE
   * =========================================================
   */

  const handleSortChange = (value: string) => {
    setCurrentPage(1);

    setSortBy(value);
  };

  return (
    <>
      {/* =====================================================
          PROJECT SECTION
      ===================================================== */}

      <section
        className="
          w-full
          overflow-hidden
          bg-[#F8FAFC]
          py-16
          lg:py-24
        "
        style={{
          overflowAnchor: "none",
        }}
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            lg:px-8
          "
        >
          {/* =================================================
              MAIN GRID
          ================================================= */}

          <div
            className="
              grid
              min-w-0
              gap-8
              lg:grid-cols-[300px_minmax(0,1fr)]
            "
          >
            {/* =================================================
                FILTER
            ================================================= */}

            <aside className="min-w-0">
              <ProjectFilters
                search={search}
                category={category}
                categories={categories}
                onSearchChange={handleSearchChange}
                onCategoryChange={handleCategoryChange}
              />
            </aside>

            {/* =================================================
                PROJECT CONTENT
            ================================================= */}

            <div className="min-w-0 space-y-8">
              {/* =================================================
                  TOOLBAR
              ================================================= */}

              <ProjectToolbar
                total={meta?.total ?? 0}
                viewMode={viewMode}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                onViewChange={setViewMode}
              />

              {/* =================================================
                  PROJECT GRID / TABLE
              ================================================= */}

              <div
                className="
                  relative
                  min-w-0
                  min-h-[400px]
                "
              >
                {/* =================================================
                    EXISTING PROJECT CONTENT
                ================================================= */}

                <div className="min-w-0 max-w-full">
                  <ProjectGrid
                    projects={projects}
                    viewMode={viewMode}
                    currentPage={meta?.current_page ?? 1}
                    totalPages={meta?.last_page ?? 1}
                    onPageChange={handlePageChange}
                  />
                </div>

                {/* =================================================
                    LOADING OVERLAY
                ================================================= */}

                {loading && (
                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      flex
                      items-start
                      justify-center
                      rounded-2xl
                      bg-[#F8FAFC]/70
                      pt-20
                      backdrop-blur-[1px]
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-3
                        shadow-sm
                      "
                    >
                      <div
                        className="
                          h-5
                          w-5
                          animate-spin
                          rounded-full
                          border-2
                          border-[#156CFF]
                          border-t-transparent
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          text-slate-600
                        "
                      >
                        Loading projects...
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          CTA
      ======================================================= */}

      <ProjectCTA />
    </>
  );
}
