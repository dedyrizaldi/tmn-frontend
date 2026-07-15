"use client";

import { RotateCcw } from "lucide-react";

export default function ResetFilter() {
  return (
    <button
      className="
        flex

        w-full

        items-center

        justify-center

        gap-2

        rounded-xl

        bg-[#156CFF]

        py-3

        font-semibold

        text-white

        transition

        hover:bg-[#0E5DE8]
      "
    >
      <RotateCcw size={18} />
      Reset Filter
    </button>
  );
}
