import { RotateCcw } from "lucide-react";

interface Props {
  onReset: () => void;
}

export default function ResetFilter({ onReset }: Props) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-200
        px-4
        py-3
        text-sm
        font-medium
        text-slate-600
        transition

        hover:border-red-500
        hover:text-red-500
      "
    >
      <RotateCcw size={16} />
      Reset
    </button>
  );
}
