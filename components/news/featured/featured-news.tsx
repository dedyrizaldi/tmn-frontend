import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { News } from "@/types/news";

interface Props {
  news?: News;
}

export default function FeaturedNews({ news }: Props) {
  if (!news) {
    return null;
  }

  // Estimate reading time (200 words/minute)
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
    <section className="mb-16">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300

          hover:shadow-xl
        "
      >
        <div className="grid lg:grid-cols-2">
          {/* Image */}

          <Link
            href={`/news/${news.slug}`}
            className="
              group
              relative
              aspect-[16/10]
              overflow-hidden

              lg:aspect-auto
              lg:h-full
            "
          >
            <Image
              src={news.thumbnail}
              alt={news.title}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="
                object-cover
                transition-transform
                duration-700

                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute left-6 top-6 flex gap-3">
              <span
                className="
                  rounded-full
                  bg-[#156CFF]
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Featured
              </span>

              <span
                className="
                  rounded-full
                  bg-white/90
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#156CFF]
                  backdrop-blur
                "
              >
                {news.category.name}
              </span>
            </div>
          </Link>

          {/* Content */}

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Calendar size={16} />

                {new Date(news.published_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={16} />
                {readingTime} menit baca
              </span>
            </div>

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                leading-tight
                text-[#04162E]

                lg:text-4xl
              "
            >
              {news.title}
            </h2>

            <p
              className="
                mt-6
                line-clamp-4
                text-base
                leading-8
                text-slate-600
              "
            >
              {news.excerpt}
            </p>

            <div className="mt-10">
              <Link
                href={`/news/${news.slug}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#156CFF]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all

                  hover:gap-3
                  hover:bg-[#0E5AE6]
                "
              >
                Baca Selengkapnya
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
