import ProjectSort from "./project-sort";
import ProjectView from "./project-view";

interface Props {
  viewMode: "grid" | "list";

  sortBy: string;

  total: number;

  onSortChange: (value: string) => void;

  onViewChange: (value: "grid" | "list") => void;
}

export default function ProjectToolbar({
  viewMode,
  sortBy,
  total,
  onSortChange,
  onViewChange,
}: Props) {
  return (
    <div
      className="
        flex

        flex-col

        gap-5

        rounded-2xl

        border

        border-slate-200

        bg-white

        p-5

        lg:flex-row

        lg:items-center

        lg:justify-between
      "
    >
      {/* Left */}

      <div>
        <h2
          className="
            text-xl

            font-bold

            text-[#04162E]
          "
        >
          Showing {total} Projects
        </h2>

        <p
          className="
            mt-1

            text-sm

            text-slate-500
          "
        >
          Browse our completed industrial projects.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        <ProjectSort value={sortBy} onChange={onSortChange} />

        <ProjectView viewMode={viewMode} onChange={onViewChange} />
      </div>
    </div>
  );
}
