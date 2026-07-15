import EquipmentSpecItem from "./equipment-spec-item";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  equipment: any;
}

export default function EquipmentModalSpecs({ equipment }: Props) {
  return (
    <section
      className="
        border-b

        border-slate-200

        bg-white

        p-8

        lg:p-10
      "
    >
      <div className="max-w-5xl">
        <span
          className="
            text-xs

            font-bold

            uppercase

            tracking-[0.25em]

            text-[#156CFF]
          "
        >
          TECHNICAL SPECIFICATIONS
        </span>

        <h2
          className="
            mt-4

            text-3xl

            font-bold

            text-[#04162E]
          "
        >
          Spesifikasi Teknis
        </h2>

        <p
          className="
            mt-4

            max-w-2xl

            leading-8

            text-slate-600
          "
        >
          Informasi teknis mengenai unit peralatan yang digunakan untuk
          mendukung pekerjaan industri secara aman dan efisien.
        </p>
      </div>

      <div
        className="
          mt-10

          grid

          gap-x-12

          md:grid-cols-2
        "
      >
        <EquipmentSpecItem label="Engine" value={equipment.engine} />

        <EquipmentSpecItem label="Power" value={equipment.power} />

        <EquipmentSpecItem label="Tank Capacity" value={equipment.capacity} />

        <EquipmentSpecItem label="Vacuum Pump" value={equipment.pump} />

        <EquipmentSpecItem label="Drive" value={equipment.drive} />

        <EquipmentSpecItem label="Fuel" value={equipment.fuel} />

        <EquipmentSpecItem
          label="Transmission"
          value={equipment.transmission}
        />

        <EquipmentSpecItem label="Weight" value={equipment.weight} />
      </div>
    </section>
  );
}
