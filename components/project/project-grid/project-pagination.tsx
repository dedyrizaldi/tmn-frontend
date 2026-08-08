interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  const pages: number[] = [];

  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="
          rounded-xl
          border
          border-slate-200
          px-4
          py-2
          text-sm
          transition
          hover:bg-slate-100
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Previous
      </button>

      {/* First */}
      {start > 1 && (
        <>
          <button
            type="button"
            onClick={() => handlePageChange(1)}
            className="
              h-10
              w-10
              rounded-xl
              border
              border-slate-200
              transition
              hover:bg-slate-100
            "
          >
            1
          </button>

          {start > 2 && <span className="px-1 text-slate-400">...</span>}
        </>
      )}

      {/* Middle */}
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => handlePageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`
            h-10
            w-10
            rounded-xl
            border
            transition

            ${
              page === currentPage
                ? "border-[#009688] bg-[#009688] text-white"
                : "border-slate-200 hover:bg-slate-100"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Last */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-1 text-slate-400">...</span>
          )}

          <button
            type="button"
            onClick={() => handlePageChange(totalPages)}
            className="
              h-10
              w-10
              rounded-xl
              border
              border-slate-200
              transition
              hover:bg-slate-100
            "
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="
          rounded-xl
          border
          border-slate-200
          px-4
          py-2
          text-sm
          transition
          hover:bg-slate-100
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Next
      </button>
    </div>
  );
}
