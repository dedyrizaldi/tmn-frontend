import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ModalInfoCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-[#F8FAFC]
        p-5
        transition-all
        duration-300
        hover:border-[#156CFF]
        hover:shadow-lg
      "
    >
      <div className="flex gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-[2px]
            bg-[#156CFF]/10
            text-[#156CFF]
          "
        >
          <Icon size={24} />
        </div>

        <div>
          <h4
            className="
              text-[16px]
              font-semibold
              text-[#04162E]
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-2
              text-[14px]
              leading-7
              text-slate-600
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
