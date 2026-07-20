import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

import Container from "@/components/common/container/container";

import type { News } from "../types/news";

interface Props {
  news: News;
}

export default function NewsHero({ news }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}

      <div className="relative h-[420px] md:h-[520px]">
        <Image
          src={news.banner || news.thumbnail}
          alt={news.title}
          fill
          priority
          className="object-cover"
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
              {news.category}
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

                {new Date(news.publishedAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} />
                {news.readingTime} min read
              </div>

              <div className="flex items-center gap-2">
                <User size={18} />

                {news.author.name}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
