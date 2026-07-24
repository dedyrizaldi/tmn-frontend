import type { News } from "@/types/news";

import NewsCard from "./news-card";

interface Props {
  news: News[];
}

export default function NewsGrid({ news }: Props) {
  if (!news.length) {
    return (
      <section className="py-16">
        <div
          className="
            flex
            min-h-[320px]
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-8
            text-center
          "
        >
          <h3 className="text-2xl font-bold text-[#04162E]">
            Belum Ada Artikel
          </h3>

          <p className="mt-3 max-w-md text-slate-500">
            Saat ini belum tersedia artikel yang dapat ditampilkan.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4">
      <div
        className="
          grid
          gap-8

          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </section>
  );
}
