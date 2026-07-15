"use client";

import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function YearFilter({ value, onChange }: Props) {
  const t = useTranslations("projectPage.filters");

  const years = ["all", "2026", "2025", "2024", "2023", "2022", "2021"];

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
        {t("year")}
      </h3>

      {/* Chips */}

      <div className="flex flex-wrap gap-3">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => onChange(year)}
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
                value === year
                  ? "border-[#156CFF] bg-[#156CFF] text-white shadow-lg shadow-blue-100"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#156CFF] hover:text-[#156CFF]"
              }
            `}
          >
            {year === "all" ? t("years.all") : year}
          </button>
        ))}
      </div>
    </div>
  );
}
