import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-10
        py-20
        text-center
      "
    >
      <SearchX size={60} className="mx-auto text-slate-400" />

      <h3
        className="
          mt-6
          text-2xl
          font-bold
          text-[#04162E]
        "
      >
        Project Not Found
      </h3>

      <p
        className="
          mt-3
          text-slate-500
        "
      >
        Please try another keyword or filter.
      </p>
    </div>
  );
}
