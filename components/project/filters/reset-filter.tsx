"use client";

import { RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  onReset: () => void;
}

export default function ResetFilter({ onReset }: Props) {
  const t = useTranslations("projectPage.filters");

  return (
    <button
      type="button"
      onClick={onReset}
      className="
        group

        flex

        w-full

        items-center

        justify-center

        gap-3

        rounded-2xl

        border

        border-slate-200

        bg-white

        px-5

        py-4

        text-sm

        font-semibold

        text-slate-700

        transition-all

        duration-300

        hover:border-[#156CFF]

        hover:bg-[#156CFF]

        hover:text-white

        hover:shadow-lg

        hover:shadow-blue-200
      "
    >
      <RotateCcw
        size={18}
        className="
          transition-transform

          duration-500

          group-hover:-rotate-180
        "
      />

      {t("reset")}
    </button>
  );
}
