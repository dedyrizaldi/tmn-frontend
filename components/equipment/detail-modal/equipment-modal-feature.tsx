import { Gauge, ShieldCheck, Fuel, Wrench, Zap, Leaf } from "lucide-react";

import EquipmentFeatureCard from "./equipment-feature-card";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  equipment: any;
}

export default function EquipmentModalFeature({ equipment }: Props) {
  const features = equipment.features ?? [];

  return (
    <section
      className="
        border-b
        border-slate-200
        bg-[#F8FAFC]
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
            tracking-[0.3em]
            text-[#156CFF]
          "
        >
          FEATURES & CAPABILITIES
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Keunggulan Peralatan
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
          Dirancang untuk memberikan performa maksimal, keamanan kerja, serta
          efisiensi operasional pada berbagai proyek industri.
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        <EquipmentFeatureCard
          icon={Gauge}
          title={features[0]?.title ?? "High Performance"}
          description={
            features[0]?.description ??
            "Dirancang untuk performa tinggi pada pekerjaan industri."
          }
        />

        <EquipmentFeatureCard
          icon={ShieldCheck}
          title={features[1]?.title ?? "Safety Standard"}
          description={
            features[1]?.description ??
            "Memenuhi standar keselamatan kerja industri."
          }
        />

        <EquipmentFeatureCard
          icon={Fuel}
          title={features[2]?.title ?? "Fuel Efficient"}
          description={
            features[2]?.description ?? "Konsumsi bahan bakar lebih efisien."
          }
        />

        <EquipmentFeatureCard
          icon={Wrench}
          title={features[3]?.title ?? "Easy Maintenance"}
          description={
            features[3]?.description ??
            "Perawatan mudah dan suku cadang tersedia."
          }
        />

        <EquipmentFeatureCard
          icon={Zap}
          title={features[4]?.title ?? "Fast Operation"}
          description={
            features[4]?.description ?? "Meningkatkan produktivitas pekerjaan."
          }
        />

        <EquipmentFeatureCard
          icon={Leaf}
          title={features[5]?.title ?? "Eco Friendly"}
          description={
            features[5]?.description ??
            "Mendukung operasional yang ramah lingkungan."
          }
        />
      </div>
    </section>
  );
}
