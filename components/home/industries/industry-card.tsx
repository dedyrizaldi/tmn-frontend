import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  title: string;
  mobile?: boolean;
}

export default function IndustryCard({
  icon: Icon,
  title,
  mobile = false,
}: Props) {
  return (
    <div
      className={cn(
        `
          group
          flex
          flex-col
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white
          transition-all
          duration-300
          hover:border-[#156CFF]
          hover:shadow-lg
        `,
        mobile
          ? `
              h-[120px]
              p-4
            `
          : `
              h-[102px]
            `,
      )}
    >
      <Icon
        className={cn(
          "text-[#156CFF] transition-transform duration-300 group-hover:scale-110",
          mobile ? "h-9 w-9" : "h-7 w-7",
        )}
        strokeWidth={1.8}
      />

      <span
        className={cn(
          `
            mt-3
            text-center
            font-medium
            leading-tight
            text-slate-800
          `,
          mobile ? "text-[14px]" : "text-[12px]",
        )}
      >
        {title}
      </span>
    </div>
  );
}
