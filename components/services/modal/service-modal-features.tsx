import { Leaf, ShieldCheck, Users, Wrench } from "lucide-react";

import ServiceModalFeatureCard from "./service-modal-feature-card";

export default function ServiceModalFeatures() {
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
      {/* Heading */}

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
          KEY FEATURES
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Keunggulan Layanan
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          Kami menerapkan standar operasional terbaik dengan dukungan tenaga
          profesional, peralatan modern, dan komitmen tinggi terhadap
          keselamatan serta kualitas pekerjaan.
        </p>
      </div>

      {/* Cards */}

      <div
        className="
          mt-12
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <ServiceModalFeatureCard
          icon={ShieldCheck}
          title="Zero Accident"
          description="Seluruh pekerjaan mengikuti standar keselamatan industri dan prosedur kerja yang ketat."
        />

        <ServiceModalFeatureCard
          icon={Users}
          title="Certified Team"
          description="Didukung tenaga kerja profesional yang berpengalaman dan memiliki sertifikasi."
        />

        <ServiceModalFeatureCard
          icon={Wrench}
          title="Modern Equipment"
          description="Menggunakan peralatan modern untuk memastikan pekerjaan lebih cepat dan efisien."
        />

        <ServiceModalFeatureCard
          icon={Leaf}
          title="Eco Friendly"
          description="Berkomitmen terhadap perlindungan lingkungan melalui metode kerja yang aman."
        />
      </div>
    </section>
  );
}
