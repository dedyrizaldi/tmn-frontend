interface Props {
  label: string;
  value?: string;
}

export default function EquipmentSpecItem({ label, value }: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-b

        border-slate-100

        py-4
      "
    >
      <span
        className="
          text-sm

          font-medium

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
        {value ?? "-"}{" "}
      </span>
    </div>
  );
}
