"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function EquipmentPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

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
      {/* Previous */}

      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
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
          transition-all
          duration-200
          hover:border-[#156CFF]
          hover:bg-[#156CFF]
          hover:text-white
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Number */}

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-slate-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
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
              transition-all
              duration-200

              ${
                currentPage === page
                  ? `
                    border-[#156CFF]
                    bg-[#156CFF]
                    text-white
                    shadow-md
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

      {/* Next */}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
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
          transition-all
          duration-200
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
