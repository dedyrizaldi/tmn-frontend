"use client";

import CategoryFilter from "./category-filter";
import ResetFilter from "./reset-filter";
import SearchBox from "./search-box";
import YearFilter from "./year-filter";

interface Props {
  search: string;

  category: string;

  year: string;

  onSearchChange: (value: string) => void;

  onCategoryChange: (value: string) => void;

  onYearChange: (value: string) => void;
}

export default function ProjectFilters({
  search,
  category,
  year,
  onSearchChange,
  onCategoryChange,
  onYearChange,
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

      <CategoryFilter value={category} onChange={onCategoryChange} />

      <div className="my-8 border-t border-slate-200" />

      {/* Year */}

      <YearFilter value={year} onChange={onYearChange} />

      <div className="my-8 border-t border-slate-200" />

      {/* Reset */}

      <ResetFilter
        onReset={() => {
          onSearchChange("");
          onCategoryChange("all");
          onYearChange("all");
        }}
      />
    </div>
  );
}
