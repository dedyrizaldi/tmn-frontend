"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { NewsCategory } from "@/types/news";

import CategoryFilter from "./category-filter";
import ResetFilter from "./reset-filter";
import SearchBox from "./search-box";

interface Props {
  search: string;
  category: string;
  categories: NewsCategory[];
}

export default function NewsFilters({ search, category, categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  function updateQuery(key: string, value: string) {
    const query = new URLSearchParams(params.toString());

    if (value.trim()) {
      query.set(key, value);
    } else {
      query.delete(key);
    }

    // Reset ke halaman pertama saat filter berubah
    query.delete("page");

    const url = query.toString() ? `${pathname}?${query.toString()}` : pathname;

    router.replace(url, {
      scroll: false,
    });
  }

  function handleReset() {
    router.replace(pathname, {
      scroll: false,
    });
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchBox
          value={search}
          onChange={(value) => updateQuery("search", value)}
        />

        <ResetFilter onReset={handleReset} />
      </div>

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={(value) => updateQuery("category", value)}
      />
    </section>
  );
}
