"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface Props {
  image: string;
  category: string;
  client: string;
  location: string;
  slug: string;
}

export default function ProjectCard({
  image,
  category,
  client,
  location,
  slug,
}: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.article
        whileHover={{
          y: -4,
          transition: { duration: 0.25 },
        }}
        className="
          overflow-hidden
          rounded-xl
          bg-white
          border
          border-slate-200
          shadow-sm
          transition-all
          duration-300
          hover:shadow-lg
          cursor-pointer
        "
      >
        {/* IMAGE */}

        <div className="relative h-[92px] overflow-hidden">
          <Image
            src={image}
            alt={client}
            fill
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              left-2
              bottom-2
              rounded
              bg-[#156CFF]
              px-2
              py-1
              text-[9px]
              font-semibold
              text-white
            "
          >
            {category}
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-3">
          <h3
            className="
              line-clamp-2
              text-[13px]
              font-semibold
              leading-5
              text-slate-900
            "
          >
            {client}
          </h3>

          <div
            className="
              mt-2
              flex
              items-center
              gap-1
              text-[11px]
              text-slate-500
            "
          >
            <MapPin size={12} className="text-[#156CFF]" />

            {location}
          </div>

          <p
            className="
              mt-2
              text-[11px]
              text-slate-500
            "
          >
            2024
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
