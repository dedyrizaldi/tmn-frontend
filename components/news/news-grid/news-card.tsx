"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { News } from "@/types/news";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  const [loading, setLoading] = useState(true);

  const image =
    news.thumbnail && news.thumbnail.length > 0
      ? news.thumbnail
      : "/images/news/news-placeholder.png";

  const readingTime = Math.max(
    1,
    Math.ceil(
      news.content
        .replace(/<[^>]+>/g, "")
        .trim()
        .split(/\s+/).length / 200,
    ),
  );

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <Link href={`/news/${news.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
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
            alt={news.title}
            fill
            unoptimized
            sizes="(max-width:640px)100vw,(max-width:1280px)50vw,33vw"
            onLoad={() => setLoading(false)}
            className={`
              object-cover
              transition-all
              duration-500
              group-hover:scale-105

              ${loading ? "opacity-0" : "opacity-100"}
            `}
          />

          <div className="absolute left-4 top-4 z-20">
            <span
              className="
                rounded-full
                bg-[#156CFF]
                px-3
                py-1
                text-xs
                font-semibold
                text-white
              "
            >
              {news.category.name}
            </span>
          </div>
        </div>
      </Link>

      <div className="flex h-[260px] flex-col p-6">
        <div className="flex items-center gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar size={15} />

            {new Date(news.published_at).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={15} />
            {readingTime} menit
          </div>
        </div>

        <Link href={`/news/${news.slug}`}>
          <h3
            className="
              mt-4
              line-clamp-2
              text-xl
              font-bold
              leading-8
              text-[#04162E]
              transition
              group-hover:text-[#156CFF]
            "
          >
            {news.title}
          </h3>
        </Link>

        <p
          className="
            mt-4
            line-clamp-3
            text-sm
            leading-7
            text-slate-600
          "
        >
          {news.excerpt}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={`/news/${news.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#156CFF]
              transition
              hover:gap-3
            "
          >
            Baca Selengkapnya
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
