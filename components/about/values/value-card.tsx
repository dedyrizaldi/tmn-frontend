import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  last?: boolean;
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
  last,
}: Props) {
  return (
    <div className="relative flex flex-col items-center px-8 text-center">
      {!last && (
        <div
          className="
            absolute
            right-0
            top-10
            hidden
            h-24
            w-px
            bg-slate-200
            lg:block
          "
        />
      )}

      <div
        className="
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#156CFF]/10
        "
      >
        <Icon size={30} className="text-[#156CFF]" />
      </div>

      <h3
        className="
          text-[20px]
          font-bold
          text-[#0F172A]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-[15px]
          leading-7
          text-slate-500
        "
      >
        {description}
      </p>
    </div>
  );
}
