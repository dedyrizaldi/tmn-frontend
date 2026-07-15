import Image from "next/image";
import { ArrowRight } from "lucide-react";

import EquipmentBadge from "../equipment-grid/equipment-badge";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  equipment: any;
}

export default function EquipmentModalHeader({ equipment }: Props) {
  return (
    <section>
      {/* Hero Image */}

      <div
        className="
          relative
          h-[340px]
          overflow-hidden
          lg:h-[460px]
        "
      >
        <Image
          src={equipment.image}
          alt={equipment.title}
          fill
          priority
          className="object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#04162E]
            via-[#04162E]/30
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-8
            left-8
            right-8
            text-white
          "
        >
          <EquipmentBadge status={equipment.status} />

          <h1
            className="
              mt-5
              text-4xl
              font-bold
              lg:text-5xl
            "
          >
            {equipment.title}
          </h1>

          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              leading-8
              text-slate-200
            "
          >
            {equipment.description}
          </p>

          <button
            className="
              mt-8

              inline-flex

              items-center

              gap-2

              rounded-xl

              bg-[#156CFF]

              px-7

              py-4

              font-semibold

              text-white

              transition

              hover:bg-[#0F5BE7]
            "
          >
            Request Equipment
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Summary */}

      <div
        className="
          grid
          gap-6

          border-b

          border-slate-200

          bg-white

          p-8

          md:grid-cols-2

          lg:grid-cols-4
        "
      >
        <SummaryItem label="Category" value={equipment.category} />

        <SummaryItem label="Capacity" value={equipment.capacity} />

        <SummaryItem label="Application" value={equipment.application} />

        <SummaryItem label="Status" value={equipment.status} />
      </div>
    </section>
  );
}

interface SummaryProps {
  label: string;
  value: string;
}

function SummaryItem({ label, value }: SummaryProps) {
  return (
    <div>
      <p
        className="
          text-xs

          font-semibold

          uppercase

          tracking-[0.2em]

          text-slate-400
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2

          text-lg

          font-bold

          text-[#04162E]
        "
      >
        {value}
      </p>
    </div>
  );
}
