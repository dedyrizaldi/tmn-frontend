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
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold

        ${
          isAvailable
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }
      `}
    >
      {isAvailable ? "AVAILABLE" : "MAINTENANCE"}
    </span>
  );
}
