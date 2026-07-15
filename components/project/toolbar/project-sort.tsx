"use client";

import { ArrowUpDown, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProjectSort({ value, onChange }: Props) {
  const t = useTranslations("projectPage.toolbar");

  return (
    <div className="flex items-center gap-3">
      <span
        className="
          hidden

          text-sm

          font-medium

          text-slate-500

          md:block
        "
      >
        {t("sort")}
      </span>

      <div className="relative">
        <ArrowUpDown
          size={16}
          className="
            absolute

            left-4

            top-1/2

            -translate-y-1/2

            text-slate-400
          "
        />

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-11

            min-w-[180px]

            appearance-none

            rounded-xl

            border

            border-slate-200

            bg-white

            pl-10

            pr-10

            text-sm

            font-medium

            text-slate-700

            outline-none

            transition-all

            duration-300

            focus:border-[#156CFF]

            focus:ring-4

            focus:ring-[#156CFF]/10
          "
        >
          <option value="newest">{t("newest")}</option>

          <option value="oldest">{t("oldest")}</option>

          <option value="name-asc">{t("nameAsc")}</option>

          <option value="name-desc">{t("nameDesc")}</option>
        </select>

        <ChevronDown
          size={16}
          className="
            pointer-events-none

            absolute

            right-4

            top-1/2

            -translate-y-1/2

            text-slate-400
          "
        />
      </div>
    </div>
  );
}
