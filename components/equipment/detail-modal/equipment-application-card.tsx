import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

export default function EquipmentApplicationCard({ icon: Icon, title }: Props) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#156CFF]/10
          text-[#156CFF]
        "
      >
        <Icon size={22} />
      </div>

      <span className="font-semibold text-[#04162E]">{title}</span>
    </div>
  );
}
