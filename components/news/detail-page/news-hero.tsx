import Image from "next/image";
import { Calendar, User } from "lucide-react";

import Container from "@/components/common/container/container";

import type { News } from "@/types/news";

interface Props {
  news: News;
}

export default function NewsHero({ news }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[420px] md:h-[520px]">
        <Image
          src={news.thumbnail}
          alt={news.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#04162E]/95 via-[#04162E]/70 to-[#04162E]/20" />

        {/* Content */}

        <Container className="relative z-10 flex h-full items-end pb-16">
          <div className="max-w-4xl text-white">
            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                bg-[#156CFF]
                px-4
                py-2
                text-sm
                font-semibold
              "
            >
              {news.category.name}
            </span>

            {/* Title */}

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight

                md:text-5xl
                lg:text-6xl
              "
            >
              {news.title}
            </h1>

            {/* Excerpt */}

            {news.excerpt && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                {news.excerpt}
              </p>
            )}

            {/* Meta */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-6
                text-sm
                text-blue-100
              "
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />

                {new Date(news.published_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-2">
                <User size={18} />
                {news.author}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
