import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { News } from "../types/news";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
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
      {/* Thumbnail */}

      <Link href={`/news/${news.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={news.thumbnail}
            alt={news.title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Category */}

          <div className="absolute left-4 top-4">
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
              {news.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}

      <div className="flex h-[260px] flex-col p-6">
        {/* Date */}

        <div
          className="
            flex
            items-center
            gap-4
            text-sm
            text-slate-500
          "
        >
          <div className="flex items-center gap-2">
            <Calendar size={16} />

            {new Date(news.publishedAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {news.readingTime} min
          </div>
        </div>

        {/* Title */}

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

        {/* Excerpt */}

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

        {/* Footer */}

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
            Read Article
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
