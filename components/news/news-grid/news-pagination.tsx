"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function NewsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="mt-14 flex items-center justify-center">
      <div className="flex items-center gap-2">
        {/* Previous */}

        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-600
            transition

            hover:border-[#156CFF]
            hover:text-[#156CFF]

            disabled:pointer-events-none
            disabled:opacity-40
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}

        {pages.map((page) => {
          const active = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`
                h-11
                w-11
                rounded-xl
                border
                text-sm
                font-semibold
                transition-all

                ${
                  active
                    ? "border-[#156CFF] bg-[#156CFF] text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#156CFF] hover:text-[#156CFF]"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-600
            transition

            hover:border-[#156CFF]
            hover:text-[#156CFF]

            disabled:pointer-events-none
            disabled:opacity-40
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
}
