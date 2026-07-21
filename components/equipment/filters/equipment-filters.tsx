"use client";

import CategoryFilter from "./category-filter";
import ResetFilter from "./reset-filter";
import SearchBox from "./search-box";
import StatusFilter from "./status-filter";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function EquipmentFilters({ search, onSearchChange }: Props) {
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

      <CategoryFilter />

      <div className="my-8 border-t border-slate-200" />

      {/* Status */}

      <StatusFilter />

      <div className="my-8 border-t border-slate-200" />

      {/* Reset */}

      <ResetFilter />
    </div>
  );
}
