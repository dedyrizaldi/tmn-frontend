"use client";

import { useState } from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

interface Props {
  title: string;
  slug: string;
  thumbnail: string;
  publishedAt: string;
}

export default function NewsCard({
  title,
  slug,
  thumbnail,
  publishedAt,
}: Props) {
  const [loading, setLoading] = useState(true);

  const image =
    thumbnail && thumbnail.length > 0
      ? thumbnail
      : "/images/news/news-placeholder.png";

  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  return (
    <Link
      href={`/news/${slug}`}
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="relative h-[120px] overflow-hidden">
        {/* Skeleton Shimmer */}
        <div
          className={`
            absolute inset-0
            z-10
            overflow-hidden
            bg-slate-200
            transition-opacity
            duration-300
            ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}
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
          sizes="(max-width:768px)100vw,400px"
          onLoad={() => setLoading(false)}
          className={`
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
            ${loading ? "opacity-0" : "opacity-100"}
          `}
        />
      </div>

      <div className="p-4">
        <p className="text-[11px] text-slate-500">{date}</p>

        <h3 className="mt-2 line-clamp-2 text-[14px] font-semibold leading-5 text-slate-900">
          {title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-[#156CFF]">
          Read More
          <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}
