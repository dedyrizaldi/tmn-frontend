import { PackageSearch } from "lucide-react";

export default function EmptyState() {
  return (
    <div
      className="
        flex

        flex-col

        items-center

        justify-center

        rounded-3xl

        border

        border-dashed

        border-slate-300

        bg-white

        py-24
      "
    >
      <PackageSearch size={64} className="text-slate-300" />

      <h3
        className="
          mt-6

          text-2xl

          font-bold

          text-[#04162E]
        "
      >
        Equipment Not Found
      </h3>

      <p
        className="
          mt-3

          max-w-md

          text-center

          leading-7

          text-slate-500
        "
      >
        Try changing your filter or search keyword.
      </p>
    </div>
  );
}
