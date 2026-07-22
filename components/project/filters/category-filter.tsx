"use client";

interface CategoryOption {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  value: string;

  categories: CategoryOption[];

  onChange: (value: string) => void;
}

export default function CategoryFilter({ value, categories, onChange }: Props) {
  return (
    <div>
      {/* Title */}

      <h3
        className="
          mb-5
          text-sm
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#04162E]
        "
      >
        Category
      </h3>

      {/* Pills */}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange("all")}
          className={`
            rounded-full
            border
            px-4
            py-2
            text-sm
            font-medium
            transition-all
            duration-300

            ${
              value === "all"
                ? "border-[#156CFF] bg-[#156CFF] text-white shadow-lg shadow-blue-100"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
            }
          `}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onChange(category.slug)}
            className={`
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                value === category.slug
                  ? "border-[#156CFF] bg-[#156CFF] text-white shadow-lg shadow-blue-100"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
