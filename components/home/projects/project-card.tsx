"use client";

import { useState } from "react";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

import { Link } from "@/i18n/navigation";

interface Props {
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  location: string;
  projectDate: string;
}

export default function ProjectCard({
  title,
  slug,
  thumbnail,
  category,
  location,
  projectDate,
}: Props) {
  const [loading, setLoading] = useState(true);

  const image =
    thumbnail && thumbnail.length > 0
      ? thumbnail
      : "/images/project/project-placeholder.png";

  const year = projectDate ? new Date(projectDate).getFullYear() : "-";

  return (
    <Link href={`/projects/${slug}`}>
      <motion.article
        whileHover={{
          y: -4,
          transition: {
            duration: 0.25,
          },
        }}
        className="
          group
          cursor-pointer
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:shadow-lg
        "
      >
        <div className="relative h-[92px] overflow-hidden">
          {/* Skeleton */}
          <div
            className={`
              absolute
              inset-0
              z-10
              overflow-hidden
              bg-slate-200
              transition-opacity
              duration-300
              ${loading ? "opacity-100" : "pointer-events-none opacity-0"}
            `}
          >
            <div
              className="
                absolute
                inset-0
                -translate-x-full
                animate-[shimmer_1.4s_infinite]
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
              "
            />
          </div>

          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            sizes="(max-width:1024px)100vw,320px"
            onLoad={() => setLoading(false)}
            className={`
              object-cover
              transition-all
              duration-500
              group-hover:scale-105
              ${loading ? "opacity-0" : "opacity-100"}
            `}
          />

          <div
            className="
              absolute
              bottom-2
              left-2
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
            {title}
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
            {year}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
