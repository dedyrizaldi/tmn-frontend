"use client";

import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import CategoryFilter from "./category-filter";
import ResetFilter from "./reset-filter";
import SearchBox from "./search-box";
import StatusFilter from "./status-filter";

interface Props {
  search: string;
}

export default function EquipmentFilters({ search }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [keyword, setKeyword] = useState(search);

  const submitSearch = (value: string) => {
    const params = new URLSearchParams();

    if (value.trim()) {
      params.set("search", value.trim());
    }

    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

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
      <SearchBox
        value={keyword}
        onChange={(value) => {
          setKeyword(value);
          submitSearch(value);
        }}
      />

      <div className="my-8 border-t border-slate-200" />

      <CategoryFilter />

      <div className="my-8 border-t border-slate-200" />

      <StatusFilter />

      <div className="my-8 border-t border-slate-200" />

      <ResetFilter />
    </div>
  );
}
