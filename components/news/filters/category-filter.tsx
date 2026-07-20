interface Props {
  categories: string[];
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
      {categories.map((category) => {
        const active = category === selected;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`
              rounded-full
              border
              px-5
              py-2
              text-sm
              font-medium
              transition-all
              duration-200

              ${
                active
                  ? "border-[#156CFF] bg-[#156CFF] text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
