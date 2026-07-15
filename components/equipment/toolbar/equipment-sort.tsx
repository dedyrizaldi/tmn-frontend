"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
}

export default function EquipmentSort({ value = "newest", onChange }: Props) {
  const t = useTranslations("equipmentPage.toolbar");

  return (
    <div className="flex items-center gap-3">
      <span
        className="
          hidden
          text-sm
          font-medium
          text-slate-500
          lg:block
        "
      >
        {t("sortBy")}
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="
            h-11
            min-w-[170px]

            appearance-none

            rounded-xl

            border

            border-slate-200

            bg-white

            px-4

            pr-10

            text-sm

            font-medium

            text-[#04162E]

            outline-none

            transition-all

            duration-200

            hover:border-[#156CFF]

            focus:border-[#156CFF]

            focus:ring-2

            focus:ring-[#156CFF]/20
          "
        >
          <option value="newest">{t("newest")}</option>

          <option value="oldest">{t("oldest")}</option>

          <option value="name-asc">{t("nameAsc")}</option>

          <option value="name-desc">{t("nameDesc")}</option>

          <option value="capacity">{t("capacity")}</option>

          <option value="status">{t("status")}</option>
        </select>

        <ChevronDown
          size={18}
          className="
            pointer-events-none

            absolute

            right-3

            top-1/2

            -translate-y-1/2

            text-slate-400
          "
        />
      </div>
    </div>
  );
}
