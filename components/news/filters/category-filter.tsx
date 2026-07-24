import type { NewsCategory } from "@/types/news";

interface Props {
  categories: NewsCategory[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onSelect("")}
        className={`
          rounded-full
          border
          px-5
          py-2
          text-sm
          font-medium
          transition-all

          ${
            selected === ""
              ? "border-[#156CFF] bg-[#156CFF] text-white shadow-md"
              : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
          }
        `}
      >
        All
      </button>

      {categories.map((category) => {
        const active = category.slug === selected;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.slug)}
            className={`
              rounded-full
              border
              px-5
              py-2
              text-sm
              font-medium
              transition-all

              ${
                active
                  ? "border-[#156CFF] bg-[#156CFF] text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
              }
            `}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
