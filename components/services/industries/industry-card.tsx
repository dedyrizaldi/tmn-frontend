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

        inline-flex

        h-16

        items-center

        gap-3

        rounded-full

        border

        border-slate-200

        bg-white

        px-6

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
          text-[#156CFF]

          transition-colors

          duration-300

          group-hover:text-white
        "
      />

      <span
        className="
          whitespace-nowrap

          text-[14px]

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
