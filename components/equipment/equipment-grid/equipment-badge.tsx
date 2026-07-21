import { CheckCircle2, Circle, Wrench } from "lucide-react";

interface Props {
  status: string;
}

export default function EquipmentBadge({ status }: Props) {
  const value = status.toLowerCase();

  const config = {
    available: {
      label: "Ready Stock",
      icon: <CheckCircle2 size={12} />,
      className: "bg-emerald-500/90 text-white",
    },
    maintenance: {
      label: "Maintenance",
      icon: <Wrench size={12} />,
      className: "bg-amber-500/90 text-white",
    },
    published: {
      label: "Published",
      icon: <CheckCircle2 size={12} />,
      className: "bg-blue-600/90 text-white",
    },
    draft: {
      label: "Draft",
      icon: <Circle size={12} />,
      className: "bg-slate-500/90 text-white",
    },
  } as const;

  const badge = config[value as keyof typeof config] ?? {
    label: status,
    icon: <Circle size={12} />,
    className: "bg-slate-500/90 text-white",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-lg
        px-2.5
        py-1
        text-[11px]
        font-semibold
        shadow-sm
        backdrop-blur-sm
        ${badge.className}
      `}
    >
      {badge.icon}
      {badge.label}
    </span>
  );
}
