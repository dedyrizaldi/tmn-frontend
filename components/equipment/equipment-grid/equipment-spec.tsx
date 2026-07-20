interface Props {
  label: string;
  value: string;
}

export default function EquipmentSpec({ label, value }: Props) {
  return (
    <div className="flex items-start justify-between gap-3 text-[9px]">
      <span
        className="
          shrink-0
          text-[9px]
          font-medium
          uppercase
          tracking-wide
          text-slate-400
        "
      >
        {label}
      </span>

      <span
        className="
          text-right
          font-medium
          text-slate-700
          line-clamp-1
        "
      >
        {value}
      </span>
    </div>
  );
}
