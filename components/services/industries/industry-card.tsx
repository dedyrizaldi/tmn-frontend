import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
}

export default function IndustryCard({ title, icon: Icon }: Props) {
  return (
    <div
      className="
        group

        flex
        w-full
        min-w-0

        h-16

        items-center
        justify-start

        gap-3

        rounded-full

        border
        border-slate-200

        bg-white

        px-5
        sm:px-6

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-[#156CFF]

        hover:bg-[#156CFF]

        hover:text-white

        hover:shadow-lg
      "
    >
      <Icon
        size={22}
        strokeWidth={1.8}
        className="
          h-[22px]
          w-[22px]

          shrink-0

          text-[#156CFF]

          transition-colors
          duration-300

          group-hover:text-white
        "
      />

      <span
        className="
          min-w-0

          overflow-hidden
          text-ellipsis

          text-[13px]
          sm:text-[14px]

          font-semibold

          uppercase

          tracking-wide

          text-[#04162E]

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        {title}
      </span>
    </div>
  );
}
