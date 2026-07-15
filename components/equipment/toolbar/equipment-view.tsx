"use client";

import { Grid2X2, List } from "lucide-react";

interface Props {
  viewMode: "grid" | "list";
  onChange: (mode: "grid" | "list") => void;
}

export default function EquipmentView({ viewMode, onChange }: Props) {
  return (
    <div
      className="
        flex

        overflow-hidden

        rounded-xl

        border

        border-slate-200

        bg-white
      "
    >
      {/* Grid */}

      <button
        type="button"
        onClick={() => onChange("grid")}
        className={`
          flex

          h-11

          w-11

          items-center

          justify-center

          transition-all

          duration-300

          ${
            viewMode === "grid"
              ? "bg-[#156CFF] text-white"
              : "text-slate-500 hover:bg-slate-100"
          }
        `}
      >
        <Grid2X2 size={18} />
      </button>

      {/* List */}

      <button
        type="button"
        onClick={() => onChange("list")}
        className={`
          flex

          h-11

          w-11

          items-center

          justify-center

          transition-all

          duration-300

          ${
            viewMode === "list"
              ? "bg-[#156CFF] text-white"
              : "text-slate-500 hover:bg-slate-100"
          }
        `}
      >
        <List size={18} />
      </button>
    </div>
  );
}
