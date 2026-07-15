import {
  ArrowRight,
  Droplets,
  Truck,
  Wrench,
  Factory,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import type { Project } from "../types/project";

interface Props {
  project: Project;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const equipmentIcons: Record<string, any> = {
  "Vacuum Truck": Truck,
  "Water Jet": Droplets,
  "Pump Unit": Wrench,
  "Industrial Vacuum": Factory,
  "Waste Container": ShieldCheck,
};

const equipmentDescriptions: Record<string, string> = {
  "Vacuum Truck":
    "High-capacity vacuum truck for sludge and liquid waste removal.",

  "Water Jet": "Ultra high-pressure water jet cleaning equipment.",

  "Pump Unit": "Industrial pumping system for liquid transfer.",

  "Industrial Vacuum": "Heavy-duty industrial vacuum system.",

  "Waste Container": "Temporary storage for hazardous and industrial waste.",
};

export default function ProjectEquipment({ project }: Props) {
  return (
    <Section className="bg-[#F8FAFC] py-20">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <p
            className="
              text-sm

              font-bold

              uppercase

              tracking-[0.2em]

              text-[#156CFF]
            "
          >
            PROJECT EQUIPMENT
          </p>

          <h2
            className="
              mt-3

              text-4xl

              font-bold

              text-[#04162E]
            "
          >
            Equipment Used
          </h2>

          <p
            className="
              mt-5

              leading-8

              text-slate-600
            "
          >
            Professional industrial equipment utilized during project execution
            to ensure efficiency, safety, and quality.
          </p>
        </div>

        {/* Equipment Grid */}

        <div
          className="
            mt-14

            grid

            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {project.equipment.map((item) => {
            const Icon = equipmentIcons[item] ?? Wrench;

            return (
              <article
                key={item}
                className="
                  group

                  rounded-3xl

                  border

                  border-slate-200

                  bg-white

                  p-8

                  transition-all

                  duration-500

                  hover:-translate-y-2

                  hover:border-[#156CFF]

                  hover:shadow-xl
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex

                    h-16

                    w-16

                    items-center

                    justify-center

                    rounded-2xl

                    bg-[#156CFF]/10

                    text-[#156CFF]

                    transition-all

                    duration-300

                    group-hover:bg-[#156CFF]

                    group-hover:text-white
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Name */}

                <h3
                  className="
                    mt-7

                    text-2xl

                    font-bold

                    text-[#04162E]
                  "
                >
                  {item}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4

                    min-h-[90px]

                    text-sm

                    leading-7

                    text-slate-600
                  "
                >
                  {equipmentDescriptions[item] ??
                    "Professional industrial equipment used during project execution."}
                </p>

                {/* Link */}

                <Link
                  href="/equipment"
                  className="
                    mt-8

                    inline-flex

                    items-center

                    gap-3

                    font-semibold

                    text-[#156CFF]
                  "
                >
                  View Equipment
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform

                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
