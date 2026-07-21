"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
  search: string;
  category: string;
}

export default function EquipmentPagination({
  currentPage,
  totalPages,
  search,
  category,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  if (totalPages <= 1) {
    return null;
  }

  const buildUrl = (page: number) => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    if (category) {
      params.set("category", category);
    }

    params.set("page", page.toString());

    return `${pathname}?${params.toString()}`;
  };

  const goToPage = (page: number) => {
    router.push(buildUrl(page));
  };

  const pages: (number | "...")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <nav className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-slate-200
          bg-white
          text-slate-600
          transition
          hover:border-[#156CFF]
          hover:bg-[#156CFF]
          hover:text-white
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-slate-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => goToPage(page)}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              text-sm
              font-semibold
              transition

              ${
                currentPage === page
                  ? `
                    border-[#156CFF]
                    bg-[#156CFF]
                    text-white
                  `
                  : `
                    border-slate-200
                    bg-white
                    text-slate-700
                    hover:border-[#156CFF]
                    hover:bg-[#156CFF]
                    hover:text-white
                  `
              }
            `}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-slate-200
          bg-white
          text-slate-600
          transition
          hover:border-[#156CFF]
          hover:bg-[#156CFF]
          hover:text-white
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
