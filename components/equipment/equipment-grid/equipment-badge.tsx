import { CheckCircle2, Wrench } from "lucide-react";

interface Props {
  status: "available" | "maintenance";
}

export default function EquipmentBadge({ status }: Props) {
  const isAvailable = status === "available";

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

        ${
          isAvailable
            ? "bg-emerald-500/90 text-white"
            : "bg-amber-500/90 text-white"
        }
      `}
    >
      {isAvailable ? (
        <>
          <CheckCircle2 size={12} />
          Ready Stock
        </>
      ) : (
        <>
          <Wrench size={12} />
          Maintenance
        </>
      )}
    </span>
  );
}
