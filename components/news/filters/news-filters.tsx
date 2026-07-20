"use client";

import { useMemo, useState } from "react";

import CategoryFilter from "./category-filter";
import ResetFilter from "./reset-filter";
import SearchBox from "./search-box";

interface Props {
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function NewsFilters({
  onSearchChange,
  onCategoryChange,
}: Props) {
  const categories = useMemo(
    () => ["All", "Company", "Project", "Equipment", "Technology", "CSR"],
    [],
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function handleSearch(value: string) {
    setSearch(value);
    onSearchChange(value);
  }

  function handleCategory(value: string) {
    setCategory(value);
    onCategoryChange(value);
  }

  function handleReset() {
    setSearch("");
    setCategory("All");

    onSearchChange("");
    onCategoryChange("All");
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchBox value={search} onChange={handleSearch} />

        <ResetFilter onReset={handleReset} />
      </div>

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={handleCategory}
      />
    </section>
  );
}
