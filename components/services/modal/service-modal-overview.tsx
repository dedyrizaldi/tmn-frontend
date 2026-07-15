import { Building2, Clock3, Cog, Factory } from "lucide-react";

import ModalInfoCard from "./modal-info-card";

interface Props {
  service: any;
}

export default function ModalOverview({ service }: Props) {
  return (
    <section
      className="
        border-b
        border-slate-200
        p-8
        lg:p-10
      "
    >
      <div
        className="
          grid
          gap-10
          lg:grid-cols-[1.2fr_1fr]
        "
      >
        {/* LEFT */}

        <div>
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#156CFF]
            "
          >
            OVERVIEW
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-[#04162E]
            "
          >
            Tentang Layanan
          </h2>

          <p
            className="
              mt-6
              text-[15px]
              leading-8
              text-slate-600
            "
          >
            {service.description}
          </p>

          <div className="mt-8 space-y-4">
            {service.benefits?.map((item: string) => (
              <div key={item} className="flex items-center gap-3">
                <div
                  className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#156CFF]
                    "
                />

                <span
                  className="
                      text-[15px]
                      text-slate-700
                    "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
            grid
            gap-5
          "
        >
          <ModalInfoCard
            icon={Building2}
            title="Industri"
            description="Oil & Gas, Marine, Tank Terminal, Chemical, Manufacturing."
          />

          <ModalInfoCard
            icon={Factory}
            title="Peralatan"
            description="High Pressure Pump, Vacuum Truck, Blower, Lighting Explosion Proof."
          />

          <ModalInfoCard
            icon={Cog}
            title="Metode"
            description="Manual Cleaning, High Pressure Cleaning, Vacuum Truck."
          />

          <ModalInfoCard
            icon={Clock3}
            title="Durasi"
            description="Menyesuaikan kapasitas tangki dan tingkat kontaminasi."
          />
        </div>
      </div>
    </section>
  );
}
