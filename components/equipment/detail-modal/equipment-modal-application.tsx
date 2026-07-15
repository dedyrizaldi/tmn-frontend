import { Droplets, Factory, Truck, Wrench, Recycle, Ship } from "lucide-react";

import EquipmentApplicationCard from "./equipment-application-card";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  equipment: any;
}

const icons = [Droplets, Factory, Truck, Wrench, Recycle, Ship];

export default function EquipmentModalApplication({ equipment }: Props) {
  const applications = equipment.applications ?? [
    "Tank Cleaning",
    "Industrial Cleaning",
    "Sludge Removal",
    "Pumping",
    "Waste Management",
    "Marine",
  ];

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
      <div className="text-center">
        <span
          className="
            text-xs

            font-bold

            uppercase

            tracking-[0.25em]

            text-[#156CFF]
          "
        >
          APPLICATIONS
        </span>

        <h2
          className="
            mt-4

            text-3xl

            font-bold

            text-[#04162E]
          "
        >
          Aplikasi Penggunaan
        </h2>

        <p
          className="
            mx-auto

            mt-4

            max-w-3xl

            leading-8

            text-slate-600
          "
        >
          Peralatan ini dirancang untuk mendukung berbagai pekerjaan industri
          dengan performa tinggi dan standar keselamatan terbaik.
        </p>
      </div>

      <div
        className="
          mt-12

          grid

          gap-5

          md:grid-cols-2

          xl:grid-cols-3
        "
      >
        {applications.map((item: string, index: number) => {
          const Icon = icons[index % icons.length];

          return (
            <EquipmentApplicationCard key={item} icon={Icon} title={item} />
          );
        })}
      </div>
    </section>
  );
}
