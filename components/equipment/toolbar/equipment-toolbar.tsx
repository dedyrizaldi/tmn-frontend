import EquipmentCount from "./equipment-count";
import EquipmentSort from "./equipment-sort";
import EquipmentView from "./equipment-view";

interface Props {
  viewMode: "grid" | "list";
  onViewChange: (mode: "grid" | "list") => void;
}

export default function EquipmentToolbar({ viewMode, onViewChange }: Props) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5

        rounded-2xl

        border

        border-slate-200

        bg-white

        p-5

        lg:flex-row

        lg:items-center

        lg:justify-between
      "
    >
      <EquipmentCount />

      <div className="flex items-center gap-4">
        <EquipmentSort />

        <EquipmentView viewMode={viewMode} onChange={onViewChange} />
      </div>
    </div>
  );
}
