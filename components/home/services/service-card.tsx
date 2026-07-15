"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Link } from "@/i18n/navigation";

import ServiceIcon from "./service-icons";

interface ServiceCardProps {
  icon: "tank" | "wash" | "pump" | "raft" | "waste";
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative

        flex
        flex-col

        rounded-[18px]

        border
        border-[#E8EDF5]

        bg-white

        p-5

        transition-all
        duration-300

        hover:border-[#156CFF]
        hover:shadow-[0_20px_45px_rgba(21,108,255,.10)]

        sm:p-6

        lg:rounded-[22px]
      "
    >
      {/* Icon */}

      <div
        className="
          mb-4

          text-[#156CFF]

          lg:mb-5
        "
      >
        <ServiceIcon icon={icon} />
      </div>

      {/* Title */}

      <h3
        className="
          text-[18px]

          font-bold

          leading-tight

          text-[#111827]

          sm:text-[20px]

          lg:text-[22px]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3

          pr-10

          text-[14px]

          leading-6

          text-slate-500

          line-clamp-3

          lg:text-[15px]
          lg:leading-7
        "
      >
        {description}
      </p>

      {/* Spacer */}

      <div className="h-10" />

      {/* Arrow */}

      <Link
        href={href}
        className="
          absolute

          bottom-5
          right-5

          flex

          h-9
          w-9

          items-center
          justify-center

          rounded-full

          border
          border-[#DCE4F0]

          text-[#156CFF]

          transition-all
          duration-300

          group-hover:bg-[#156CFF]
          group-hover:text-white

          lg:h-10
          lg:w-10
        "
      >
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
