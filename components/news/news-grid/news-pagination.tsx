"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

import type { PaginationMeta } from "@/types/news";

interface Props {
  meta: PaginationMeta;
}

export default function NewsPagination({ meta }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (meta.last_page <= 1) {
    return null;
  }

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: true,
    });
  };

  return (
    <nav className="mt-14 flex items-center justify-center">
      <div className="flex items-center gap-2">
        {/* Previous */}

        <button
          type="button"
          disabled={meta.current_page === 1}
          onClick={() => goToPage(meta.current_page - 1)}
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

        {/* Numbers */}

        {meta.links
          .filter(
            (link) =>
              link.label !== "&laquo; Previous" &&
              link.label !== "Next &raquo;",
          )
          .map((link) => {
            const page = Number(link.label);

            return (
              <button
                key={link.label}
                type="button"
                disabled={!link.url}
                onClick={() => goToPage(page)}
                className={`
                  h-11
                  w-11
                  rounded-xl
                  border
                  text-sm
                  font-semibold
                  transition-all

                  ${
                    link.active
                      ? "border-[#156CFF] bg-[#156CFF] text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#156CFF] hover:text-[#156CFF]"
                  }
                `}
              >
                {link.label}
              </button>
            );
          })}

        {/* Next */}

        <button
          type="button"
          disabled={meta.current_page === meta.last_page}
          onClick={() => goToPage(meta.current_page + 1)}
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
