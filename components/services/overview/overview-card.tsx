import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";

interface Props {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function OverviewCard({
  slug,
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <Link
      href={`/services/${slug}`}
      className="
        group

        relative

        flex

        h-full

        flex-col

        overflow-hidden

        rounded-3xl

        border

        border-slate-200

        bg-white

        p-7

        transition-all

        duration-500

        hover:-translate-y-2

        hover:border-[#156CFF]

        hover:shadow-[0_20px_50px_rgba(21,108,255,0.12)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute

          -right-12

          -top-12

          h-32

          w-32

          rounded-full

          bg-[#156CFF]/5

          blur-3xl

          opacity-0

          transition-opacity

          duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
          relative

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

          group-hover:scale-110

          group-hover:bg-[#156CFF]

          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3
        className="
          mt-6

          text-sm

          font-bold

          text-[#04162E]

          transition-colors

          duration-300

          group-hover:text-[#156CFF]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3

          flex-1

          text-[13px]

          leading-5

          text-slate-600
        "
      >
        {description}
      </p>

      {/* Learn More */}

      <div
        className="
          mt-5

          inline-flex

          items-center

          gap-2

          text-sm

          font-semibold

          text-[#156CFF]
        "
      >
        Learn More
        <ArrowRight
          size={17}
          className="
            transition-transform

            duration-300

            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
}
