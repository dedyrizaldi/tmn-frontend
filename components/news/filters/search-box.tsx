"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: Props) {
  return (
    <div className="relative w-full max-w-md">
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search news..."
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          pl-11
          pr-4
          text-sm
          outline-none
          transition

          focus:border-[#156CFF]
          focus:ring-4
          focus:ring-[#156CFF]/15
        "
      />
    </div>
  );
}
