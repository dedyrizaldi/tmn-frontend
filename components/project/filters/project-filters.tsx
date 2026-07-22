"use client";

import type { ProjectCategory } from "@/types/project";

import CategoryFilter from "./category-filter";
import ResetFilter from "./reset-filter";
import SearchBox from "./search-box";

interface Props {
  search: string;

  category: string;

  categories: ProjectCategory[];

  onSearchChange: (value: string) => void;

  onCategoryChange: (value: string) => void;
}

export default function ProjectFilters({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
}: Props) {
  return (
    <div
      className="
        sticky
        top-24

        rounded-3xl

        border

        border-slate-200

        bg-white

        p-7

        shadow-sm
      "
    >
      {/* Search */}

      <SearchBox value={search} onChange={onSearchChange} />

      <div className="my-8 border-t border-slate-200" />

      {/* Category */}

      <CategoryFilter
        value={category}
        categories={categories}
        onChange={onCategoryChange}
      />

      <div className="my-8 border-t border-slate-200" />

      {/* Reset */}

      <ResetFilter
        onReset={() => {
          onSearchChange("");
          onCategoryChange("all");
        }}
      />
    </div>
  );
}
