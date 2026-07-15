interface Props {
  label: string;
  value: string;
}

export default function EquipmentSpec({ label, value }: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-b

        border-slate-100

        py-2
      "
    >
      <span
        className="
          text-sm
          text-slate-500
        "
      >
        {label}
      </span>

      <span
        className="
          text-sm
          font-semibold
          text-[#04162E]
        "
      >
        {value}
      </span>
    </div>
  );
}
