import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceModalFeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#156CFF]
        hover:shadow-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#156CFF]/10
          text-[#156CFF]
          transition-all
          duration-300
          group-hover:bg-[#156CFF]
          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      <h3
        className="
          mt-5
          text-lg
          font-bold
          text-[#04162E]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}
