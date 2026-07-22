import type { Project } from "@/types/project";

import EmptyState from "./empty-state";
import ProjectCard from "./project-card";
import ProjectPagination from "./project-pagination";

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
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-10">
      <div
        className={
          viewMode === "grid"
            ? `
                grid
                gap-8

                md:grid-cols-2

                xl:grid-cols-3
              `
            : `
                flex
                flex-col
                gap-8
              `
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} viewMode={viewMode} />
        ))}
      </div>

      <ProjectPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
