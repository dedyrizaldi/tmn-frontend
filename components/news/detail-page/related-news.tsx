import type { News } from "@/types/news";

import NewsCard from "../news-grid/news-card";

interface Props {
  news: News[];
}

export default function RelatedNews({ news }: Props) {
  if (news.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">
      <div className="mb-10">
        <span
          className="
            inline-flex
            rounded-full
            bg-[#156CFF]/10
            px-4
            py-2
            text-sm
            font-semibold
            text-[#156CFF]
          "
        >
          Keep Reading
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Related Articles
        </h2>

        <p
          className="
            mt-3
            max-w-2xl
            text-slate-600
          "
        >
          Explore more articles, project updates, and industrial insights from
          PT Tirta Mega Nusantara.
        </p>
      </div>

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {news.map((article) => (
          <NewsCard key={article.id} news={article} />
        ))}
      </div>
    </section>
  );
}
