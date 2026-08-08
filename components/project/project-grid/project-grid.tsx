import type { Project } from "@/types/project";

import EmptyState from "./empty-state";
import ProjectCard from "./project-card";
import ProjectPagination from "./project-pagination";
import ProjectTable from "./project-table";

interface Props {
  projects: Project[];

  viewMode: "grid" | "list";

  currentPage: number;

  totalPages: number;

  onPageChange: (page: number) => void;
}

export default function ProjectGrid({
  projects,
  viewMode,
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  /**
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-10">
      {/* =======================================================
          PROJECT CONTENT
      ======================================================= */}

      {viewMode === "list" ? (
        /**
         * =====================================================
         * TABLE VIEW
         * =====================================================
         */

        <ProjectTable projects={projects} />
      ) : (
        /**
         * =====================================================
         * GRID VIEW
         * =====================================================
         */

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} viewMode="grid" />
          ))}
        </div>
      )}

      {/* =======================================================
          PAGINATION
      ======================================================= */}

      <ProjectPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
