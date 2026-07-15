"use client";

import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({ value, onChange }: Props) {
  const t = useTranslations("projectPage.filters");

  const categories = [
    {
      value: "all",
      label: t("categories.all"),
    },
    {
      value: "Tank Cleaning",
      label: t("categories.tankCleaning"),
    },
    {
      value: "Industrial Cleaning",
      label: t("categories.industrialCleaning"),
    },
    {
      value: "Waste Management",
      label: t("categories.wasteManagement"),
    },
    {
      value: "Sludge Removal",
      label: t("categories.sludgeRemoval"),
    },
    {
      value: "Pumping",
      label: t("categories.pumping"),
    },
  ];

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
        {t("category")}
      </h3>

      {/* Pills */}

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => onChange(category.value)}
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
                value === category.value
                  ? "border-[#156CFF] bg-[#156CFF] text-white shadow-lg shadow-blue-100"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
