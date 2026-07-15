"use client";

import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: Props) {
  const t = useTranslations("projectPage.filters");

  return (
    <div>
      {/* Title */}

      <h3
        className="
          mb-4

          text-sm

          font-bold

          uppercase

          tracking-[0.15em]

          text-[#04162E]
        "
      >
        {t("search")}
      </h3>

      {/* Input */}

      <div className="relative">
        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("placeholder")}
          className="
            h-12
            w-full

            rounded-xl

            border

            border-slate-200

            bg-white

            pl-11

            pr-11

            text-sm

            outline-none

            transition-all

            duration-300

            focus:border-[#156CFF]

            focus:ring-4

            focus:ring-[#156CFF]/10
          "
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="
              absolute

              right-3

              top-1/2

              -translate-y-1/2

              rounded-full

              p-1

              text-slate-400

              transition

              hover:bg-slate-100

              hover:text-slate-700
            "
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
